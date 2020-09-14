<template>
	<div class="todo">
		<input type="checkbox" class="check-done" v-model="isDone" @click="statusHandler">
		<span :class="{ done: isDone }">
			{{todo.body}}
		</span>
		<div class="delete" @click="deleteHandler">
			<span>delete</span>
		</div>
	</div>
</template>

<script>
import vuex from 'vuex'
import { mapActions } from 'vuex'

export default {
	name: 'Todo',
	props: ['todo'],
	data() {
		return {
			isDone: this.todo.completed
		}
	},
	methods: {
		...mapActions(['updateTodo', 'deleteTodo']),
		statusHandler() {
			this.isDone = !this.isDone
			this.todo.completed = this.isDone
			this.updateTodo(this.todo)
		},
		deleteHandler() {
			this.deleteTodo(this.todo)
		}
	}
}
</script>

<style lang="scss" scoped>
.todo {
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	background: #e8f7f0;
	border-radius: 5px;
}
.done {
	text-decoration: line-through;
}

.check-done {
	margin: 0 .5rem;
	line-height: 1.3rem;
}

.delete {
	display: grid;
	place-items: center;
	height: 1.5rem;
	background: rgb(226, 67, 77);
	border-radius: 5px;
	padding: 0 .3rem;
	margin: 0 .5rem;
	cursor: pointer;
	user-select: none;

	span {
		color: rgb(238, 238, 238);
	}
}
</style>