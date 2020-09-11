import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		notes: JSON.parse(localStorage.getItem('notes') || '[]')
	},

	getters: {
		allNotes: state => {
			return state.notes
		},
		noteById: state => id => {
			return state.notes.find(note => note.id === parseInt(id))
		}
	},

	actions: {
		addNote({ commit }, note) {
			commit('newNote', note)
		},
		addTodo({ commit }, todo) {
			commit('newTodo', todo)
		},
		updateTodo({ commit }, todo) {
			commit('updateTodo', todo)
		}
	},

	mutations: {
		newNote: (state, note) => {
			state.notes.unshift(note)
			
			localStorage.setItem('notes', JSON.stringify(state.notes))
		},
		newTodo: (state, todo) => {
			state.notes.find(note => note.id === todo.noteId).todos.unshift(todo)
			
			localStorage.setItem('notes', JSON.stringify(state.notes))
		},
		updateTodo: (state, todo) => {
			const todosByNoteId = state.notes.find(note => note.id === todo.noteId).todos
			let todoById = todosByNoteId.find(t => t.id === todo.id)
			todoById = todo

			localStorage.setItem('notes', JSON.stringify(state.notes))
		}
	},

	modules: {
		
	}
})

