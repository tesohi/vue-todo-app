import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		notes: [
			{
				id: 1,
				title: 'main activities',
				todos: [
					{
						id: 100,
						body: 'do the todo application',
						completed: false
					},
					{
						id: 101,
						body: 'get a good job',
						completed: false
					},
					{
						id: 102,
						body: 'be cool',
						completed: false
					}
				]
			},
			{
				id: 2,
				title: 'side activities',
				todos: [
					{
						id: 200,
						body: 'do one',
						completed: false
					},
					{
						id: 201,
						body: 'do two',
						completed: false
					},
					{
						id: 202,
						body: 'do three',
						completed: false
					}
				]
			},
		],
	},
	getters: {
		allNotes: state => {
			return state.notes
		},
		getNoteById: state => id => {
			return state.notes.find(note => note.id === parseInt(id))
		}
	},
	actions: {
		
	},
	mutations: {
		
	},
	modules: {
		
	}
})

