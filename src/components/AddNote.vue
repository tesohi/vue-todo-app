<template>
	<div class="wrapper">
		<form @submit.prevent="onSubmit">
			<input type="text" v-model="noteTitle">
			<input type="submit" value="Add Note" >
		</form>
	</div>
</template>

<script>
import vuex from 'vuex'
import { mapActions } from 'vuex'

export default {
	name: 'AddNote',
	data() {
		return {
			noteTitle: ''
		}
	},
	methods: {
		...mapActions(['addNote']),
		onSubmit() {
			if (this.noteTitle === '') {
				return
			}

			const note = {
				id: Date.now(),
				title: this.noteTitle,
				todos: []
			};
			
			this.addNote(note)

			this.noteTitle = ''
		}
	}
}
</script>

<style lang="scss" scoped>
.wrapper {
	max-width: 100%;
	padding: 1rem;
}

form {
	display: flex;
}

input[type="text"] {
	flex: 10;
	padding: 10px;
	border: 1px solid #678;
	outline: none;
	min-width: 100px;
}

input[type="submit"] {
	flex: 2;
	background: rgb(119, 212, 75);
	border: 1px solid rgb(119, 212, 75);
	cursor: pointer;
	outline: none;
	padding: 5px;
}
</style>