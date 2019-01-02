<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to the {{this.$store.state.myname}}</v-card-title>
        <textarea v-model="name" placeholder="add multiple lines"></textarea>
        <v-btn @click="change_name()"> change name</v-btn>
        <v-btn @click="get_data_api()"> get data</v-btn>
        <v-btn @click="post_data_api()"> POST data</v-btn>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data(){
      return{
          name:'', // this.$store.state.myname
          api_link: 'https://ox8usqk4cd.execute-api.us-east-2.amazonaws.com/hackathon/items',
          items:{
              // id : ' ',
              item_description : 'Coca cola tomada por el papa',
              item_image: 'https://cdn.nautal.com/media/boats/621/x/621822.jpg',
              item_name: 'Yate Maria',
              status: 'active'
            }
      }
    },
  methods: {
    change_name(){
      this.$store.commit('set_name', this.name)
    },
    get_data_api(){
      this.$store.commit('get_data', this.api_link)
      // this.$axios.$post(this.api_link,{this.items}).then((res)=>{console.log(res.data)})
      // this.axios.get(this.api_link).then((data)=>{
      //   console.log(data)
      // }) 

    },
    post_data_api(){
      this.$axios.post(this.api_link,{  
              item_description : 'Coca cola tomada por el papa',
              item_image: 'https://cdn.nautal.com/media/boats/621/x/621822.jpg',
              item_name: 'Yate Maria',
              status: 'active'}).then((res)=>{console.log(res.data)})
      // debugger
      // this.$store.commit('post_data', {api: this.api_link, data: this.items})
    }
  },
  components: {
    Logo,
    VuetifyLogo,
  }
}
</script>
