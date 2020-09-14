<template>
	<div class="note">
		<div class="title">{{note.title}}</div>
		<Todo v-for="todo in note.todos.slice(0, 2)" :key="todo.id" v-bind:todo="todo"/>
		<router-link 
			:to="{ name: 'Edit', params: { id: note.id } }"
			class="btn"
		>
			<span>edit</span>
		</router-link>
		<div class="btn delete-btn" @click="deleteHandler">
			<span>delete</span>
		</div>
	</div>
</template>

<script>
import vuex from 'vuex'
import { mapActions } from 'vuex'
import Todo from './Todo'

export default {
	name: 'Note',
	components: {
		Todo
	},	
	props: ['note'],
	methods: {
		...mapActions(['deleteNote']),
		deleteHandler() {
			this.deleteNote(this.note)
		}
	}
}
</script>

<style lang="scss" scoped>
.note {
	background: #d4f1e3;
	border-radius: 5px;
}

.btn {
	display: inline-block;
	margin-top: 1rem;
}

.delete-btn {
	margin: 0 .7rem;
	
	span {
		background: rgb(237, 94, 104);
		color: rgb(238, 238, 238);
	}
}

.title {
	font-size: 1.2rem;
}
</style>