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
					{ id: 100, body: 'create the todo application', completed: false, noteId: 1 },
					{ id: 101, body: 'get a good job', completed: false, noteId: 1 },
					{ id: 102, body: 'be cool', completed: false, noteId: 1 }
				]
			},
			{
				id: 2,
				title: 'side activities',
				todos: [
					{ id: 200, body: 'do one', completed: false, noteId: 2 },
					{ id: 201, body: 'do two', completed: false, noteId: 2 },
					{ id: 202, body: 'do three', completed: false, noteId: 2 }
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
		addTodo({ commit }, todo) {

			commit('newTodo', todo)
		}
	},

	mutations: {
		newTodo: (state, todo) => {
			state.notes.find(note => note.id === todo.noteId).todos.unshift(todo)
		}
	},

	modules: {
		
	}
})

