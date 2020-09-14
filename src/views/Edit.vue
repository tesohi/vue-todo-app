<template>
	<div class="wrapper">
		<h2>{{note.title}}</h2>

		<AddTodo v-bind:noteId="note.id"/>

		<div class="actions">
			<router-link to="/" class="back-btn btn">
				<span>back</span>
			</router-link>
		</div>

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
			return this.$store.getters.noteById(this.id)
		}
	}
}
</script>

<style lang="scss" scoped>
.wrapper {
	position: relative;
}

.todo {
	background: #d4f1e3;
}

.actions {
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 3rem;
	padding: .3rem .5rem;
}

.control-btn {

	span {
		background: rgb(75, 173, 212);
	}
}
</style>
