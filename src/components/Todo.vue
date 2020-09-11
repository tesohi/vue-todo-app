<template>
	<div class="todo">
		<input type="checkbox" v-model="isDone" @click="statusHandler">
		<span :class="{ done: isDone }">{{todo.body}}</span>
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
		...mapActions(['updateTodo']),
		statusHandler() {
			this.isDone = !this.isDone
			this.todo.completed = this.isDone
			this.updateTodo(this.todo)
		}
	}
}
</script>

<style lang="scss" scoped>
.todo {
	display: flex;
	align-items: center;
}
.done {
	text-decoration: line-through;
}

span {
	margin: 0 .5rem;
}
</style>