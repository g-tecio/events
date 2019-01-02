<template>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
            <v-text-field
                ref="name"
                v-model="name"
                :rules="[() => !!name || 'This field is required']"
                :error-messages="errorMessages"
                label="Event Title"
                placeholder="Give a short distinct name"
                required
            ></v-text-field>
            <v-text-field
                ref="address1"
                :rules="[
                () => !!address1 || 'This field is required',
                () => !!address1 && address1.length <= 25 || 'Address must be less than 25 characters',
                addressCheck
                ]"
                v-model="address1"
                label="Address Line 1"
                counter="25"
                required
            ></v-text-field>
            <v-text-field
                ref="address2"
                :rules="[
                () => !!address2 || 'This field is required',
                () => !!address2 && address2.length <= 25 || 'Address must be less than 25 characters',
                addressCheck
                ]"
                v-model="address2"
                label="Address Line 2"
                counter="25"
                required
            ></v-text-field>
            <v-text-field
                ref="city"
                :rules="[() => !!city || 'This field is required', addressCheck]"
                v-model="city"
                label="City"
                required
            ></v-text-field>
            <v-text-field
                ref="state"
                v-model="state"
                :rules="[() => !!state || 'This field is required']"
                label="State / Province / Region"
                required
            ></v-text-field>
            <v-text-field
                ref="country"
                v-model="country"
                :rules="[() => !!country || 'This field is required']"
                label="Country"
                required
            ></v-text-field>
            <v-text-field
                ref="zip"
                :rules="[() => !!zip || 'This field is required']"
                v-model="zip_code"
                label="ZIP / Postal Code"
                required
            ></v-text-field>
            <v-textarea
                name="input-7-1"
                box
                label="Description"
                auto-grow
                v-model="description"
            ></v-textarea>
            <v-layout align-center justify-space-between row fill-height>
                <v-flex xs12>
                    <label>Start Date</label>
                    <br>
                    <input type="date" v-model="picker">
                </v-flex>
                <v-flex xs12 class="hidden-xs-only">
                    <label>End Date</label>
                    <br>
                    <input type="date" v-model="picker2">
                </v-flex>
            </v-layout>


        

            
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat>Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <v-btn
                slot="activator"
                icon
                class="my-0"
                @click="resetForm"
              >
                <v-icon>refresh</v-icon>
              </v-btn>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="submit">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<style lang="stylus">

</style>

<script>
  export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        picker2: new Date().toISOString().substr(0, 10)
      }
    }
  }
</script>