<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="eventForm.event_name"
            :rules="[() => !!eventForm.event_name || 'This field is required']"
            :error-messages="errorMessages"
            label="Event Title"
            placeholder="Give a short distinct name"
          ></v-text-field>
          <v-text-field
            ref="address1"
            :rules="[
									() => !!eventForm.address.line_address1 || 'This field is required',
									() => !!eventForm.address.line_address1 && eventForm.address.line_address1.length <= 25 || 'Address must be less than 25 characters',
									addressCheck
								]"
            v-model="eventForm.address.line_address1"
            label="Address Line 1"
            counter="25"
          ></v-text-field>
          <v-text-field
            ref="address2"
            v-model="eventForm.address.line_address2"
            label="Address Line 2"
            counter="25"
          ></v-text-field>
          <v-text-field ref="city" v-model="eventForm.address.city" label="City"></v-text-field>
          <v-text-field
            ref="state"
            v-model="eventForm.address.state"
            label="State / Province / Region"
          ></v-text-field>
          <v-text-field ref="country" v-model="eventForm.address.country" label="Country"></v-text-field>
          <v-text-field ref="zip" v-model="eventForm.address.zip_code" label="ZIP / Postal Code"></v-text-field>
          <v-textarea
            name="input-7-1"
            box
            label="Description"
            v-model="eventForm.address.description"
          ></v-textarea>
          <v-layout align-center justify-space-between row fill-height>
            <v-flex xs12>
              <label>Start Date</label>
              <br>
              <input type="date" v-model="picker">
            </v-flex>
          </v-layout>
          <label>Choose a Picture</label>
          <v-text-field
            prepend-icon="attach_file"
            single-line
            v-model="eventForm.event_image"
            label="Select Image"
            :required="required"
            :disabled="disabled"
            @click.native="onFocus"
            ref="fileTextField"
          ></v-text-field>
          <input
            type="file"
            :accept="accept"
            :multiple="false"
            :disabled="disabled"
            ref="fileInput"
            @change="onFileChange"
          >
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" left>
              <v-btn slot="activator" icon class="my-0" @click="resetForm">
                <v-icon>refresh</v-icon>
              </v-btn>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="submit_data()">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<style lang="stylus">
</style>

<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      api_url:
        "https://ox8usqk4cd.execute-api.us-east-2.amazonaws.com/hackathon/events",
      eventForm: {
        event_name: "",
        address: {
          line_address1: "",
          line_address2: "",
          city: "",
          state: "",
          country: "",
          zip_code: "",
          description: ""
        },
        venue_name: "default",
        capacity: 69,
        description: "default",
        location: {
          latitude: 69,
          longitude: 69
        },
        date: {
          day: "default",
          formated_date: "default",
          month: "default",
          time: "default",
          time_zone: "default",
          year: "default"
        },
        status: "default",
        pictures: ["asd"],
        event_image: "",
        event_attire: "asd",
        event_type: "asd",
        revenue_generation: "asd"
      }
    };
  },
  methods: {
    submit_data() {
      console.log(this.eventForm);
      this.$axios.post(this.api_url, this.eventForm).then(res => {
        console.log(res);
      });
    },
    getFormData(files) {
      const data = new FormData();
      return data;
    },
    onFocus() {
      if (!this.disabled) {
        debugger;
        this.$refs.fileInput.click();
      }
    },
    onFileChange($event) {
      const files = $event.target.files || $event.dataTransfer.files;
	  const form = this.getFormData(files);
	  this.getBase64([...files][0]);
      /* if (files) {
        if (files.length > 0) {
          console.log(this.getBase64([...files][0]));
          this.eventForm.event_image = [...files]
            .map(file => file.name)
            .join(", ");
        } else {
          this.eventForm.event_image = null;
        }
      } else {
        this.eventForm.event_image = $event.target.value.split("\\").pop();
      } */
      this.$emit("input", this.eventForm.event_image);
      this.$emit("formData", form);
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => this.eventForm.event_image = reader.result;
        reader.onerror = error => reject(error);
      });
    }
  }
};
</script>
