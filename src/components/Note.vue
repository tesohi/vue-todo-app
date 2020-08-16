<template>
	<div class="note">
		<div class="title">{{note.title}}</div>
		<Todo v-for="todo in note.todos.slice(0, 2)" :key="todo.id" v-bind:todo="todo"/>
		<router-link 
			:to="{ name: 'Edit', params: { id: note.id } }"
			class="edit-btn"
		>
			<span>edit</span>
		</router-link>
	</div>
</template>

<script>
import vuex from 'vuex'
import Todo from './Todo'

export default {
	name: 'Note',
	components: {
		Todo
	},	
	props: ['note']
}
</script>

<style lang="scss" scoped>
.edit-btn {
	display: inline-block;
	margin-top: 1rem;

	span {
		padding: .5rem;
		background: rgb(119, 212, 75);
		border-radius: 5px;
	}
}
</style>