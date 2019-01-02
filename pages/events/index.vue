import components from '../../.nuxt/components/nuxt-link';
<template>
    <v-layout  column>
        <v-flex xs12>
            <v-img :src="img_link"
            aspect-ratio="1"
            width="100%"
            height="300px"
            >
            </v-img>
        </v-flex>
        <v-flex xs12>
            <grid :config="grid_props"/>
        </v-flex>
        <v-flex>
            <v-layout align-center justify-center row>
                <v-flex xs3> <v-container><v-btn block round color="info" @click="log_data()"> create</v-btn></v-container></v-flex>                
                <v-flex xs3> <v-container><v-btn block round color="success"> management</v-btn></v-container></v-flex>                
                <v-flex xs3> <v-container><v-btn block round color="error"> delete</v-btn></v-container></v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>
<script>
import grid from '~/components/grid.vue'
export default {
    data(){
        return { 
            img_link:'https://images.unsplash.com/photo-1503293050619-6048ffad0dc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80',
            api_url: 'https://ox8usqk4cd.execute-api.us-east-2.amazonaws.com/hackathon/events',
            data: {},
            grid_props:{
                headers:[
                    {text: 'Event Name', value:'name' },
                    {text: 'Place', value:'place' },
                    {text: 'Location', value:'location' },
                    {text: 'Time event', value:'time_event' }
                ],
                items: [
                    {
                        name: 'Event 1',
                        place: 'Stadium one',
                        location: 'one street',
                        time_event: '17:00hr',
                        address:{
                            city:''
                        }
                    },
                ]
            }
        
        }
    },
    components: {
        grid
    },
    mounted(){
        this.$axios.$get(this.api_url, { progress: false }).then((res)=>{this.grid_props.items = res})
    },
    methods:{
        log_data(){
            console.log(this.grid_props.items)
        }
    }
}

</script>