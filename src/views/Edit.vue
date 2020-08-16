<template>
	<div class="wrapper">
		<router-link to="/" class="back-btn">
			<span>back</span>
		</router-link>
		<h2>{{note.title}}</h2>
		<div class="todos">
			<Todo v-for="todo in note.todos" :key="todo.id" v-bind:todo="todo" />
		</div>
	</div>
</template>

<script>
import Todo from '../components/Todo'

export default {
	name: 'Edit',
	components: {
		Todo
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

	span {
		padding: .5rem;
		background: rgb(119, 212, 75);
		border-radius: 5px;
	}
}
</style>
