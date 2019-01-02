const mutations = {
    get_data(state,api){
        // debugger
        this.$axios.$get(api, { progress: false }).then((res)=>{return res})
    },
    post_data(state,post){
        debugger
        this.$axios.$post(post.api, { progress:false, data:post.data }).then((res)=>{console.log(res +' success')})
    },
	set_name(state, value) {
		state.myname = value
    },
}
	
export default mutations
