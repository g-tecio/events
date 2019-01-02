<template>
	<v-layout justify-center>
		<v-flex xs12 sm10 md8 lg6>
			<v-card ref="form">
				<v-card-text>
						<v-text-field
								ref="name"
								v-model="formitem.name"
								label="Event Title"
								placeholder="Give a short distinct name"
						></v-text-field>
						<v-text-field
								ref="address1"
								
								v-model="formitem.address.line_address1"
								label="Address Line 1"
								counter="25"
						></v-text-field>
						<v-text-field
								ref="address2"
								
								v-model="formitem.address.line_address2"
								label="Address Line 2"
								counter="25"
						></v-text-field>
						<v-text-field
								ref="city"
								v-model="formitem.address.city"
								label="City"
						></v-text-field>
						<v-text-field
								ref="state"
								v-model="formitem.address.state"
								label="State / Province / Region"
						></v-text-field>
						<v-text-field
								ref="country"
								v-model="formitem.address.country"
								label="Country"
						></v-text-field>
						<v-text-field
								ref="zip"
								v-model="formitem.address.zip_code"
								label="ZIP / Postal Code"
						></v-text-field>
						<v-textarea
								name="input-7-1"
								box
								label="Description"
								v-model="formitem.address.description"
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
		data () {
			return {
				picker: new Date().toISOString().substr(0, 10),
				picker2: new Date().toISOString().substr(0, 10),
				api_url: 'https://ox8usqk4cd.execute-api.us-east-2.amazonaws.com/hackathon/events',
				formitem:{
					name:'',
					address:{
						line_address1:'',
						line_address2:'',
						city: '',
						state: '',
						country: '',
						zip_code: '',
						description: '',
						venue: 'default',
					},
					capacity: 69,
					description: 'default',
					end_date : {
							day: 'default',
							formated_date: 'default',
							month: 'default',
							time: 'default',
							time_zone: 'default',
							year: 'default'
						},
					location : {
							latitude: 69,
							longitude: 69
						},
					start_date : {
							day: 'default',
							formated_date: 'default',
							month: 'default',
							time: 'default',
							time_zone: 'default',
							year: 'default'
						},
					status : 'default',
					time_zone : 'default',
					pictures : ['default']

				}
			}
		},
		methods:{
			submit_data(){
				debugger
				this.$axios.post(this.api_url,this.formitem).then((res)=>{console.log(res)})
			}
		}
	}
</script>