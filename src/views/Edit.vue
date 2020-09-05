<template>
	<div class="wrapper">
		<router-link to="/" class="back-btn btn">
			<span>back</span>
		</router-link>
		<h2>{{note.title}}</h2>

		<AddTodo v-bind:noteId="note.id"/>

		<div class="todos">
			<Todo v-for="todo in note.todos" :key="todo.id" v-bind:todo="todo" />
		</div>
	</div>
</template>

<script>
import Todo from '../components/Todo'
import AddTodo from '../components/AddTodo'

export default {
	name: 'Edit',
	components: {
		Todo,
		AddTodo
	},	
	props: [
		'id'
	],
	computed: {
		note() {
			return this.$store.getters.getNoteById(this.id)
		}
	}
}
</script>

<style lang="scss" scoped>
.wrapper {
	position: relative;
}

.back-btn {
	position: absolute;
	top: .3rem;
	left: .3rem;
}
</style>
