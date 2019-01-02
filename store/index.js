import Vuex from 'vuex'

import mutations from './mutations'
// import actions from './actions'

const createStore = () => {
	return new Vuex.Store({
		state: {
			myname: 'Mike'
		},
        mutations,
        // actions
	})
}

export default createStore
