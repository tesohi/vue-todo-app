<template>
	<div class="home">
		<h2>notes</h2>
		<Note v-for="note in allNotes" :key="note.id" v-bind:note="note"/>
	</div>
</template>

<script>
import Note from '../components/Note'
import { mapGetters } from 'vuex'

export default {
	name: 'Home',
	components: {
		Note
	},
	computed: {
		...mapGetters(['allNotes'])
	},
	methods: {

	}
}
</script>

<style lang="scss">
html {
	box-sizing: border-box;
}
*, *::before, *::after {
	box-sizing: inherit;
	margin: 0;
	padding: 0;
}

.note {
	padding: 1rem;
	margin: 1rem;
	border: 1px solid #000;
}

.todo {
	padding: .5rem;
	margin: .5rem;
	border: 1px dashed #000;
}

.btn {
	
	span {
		padding: .5rem;
		background: rgb(119, 212, 75);
		border-radius: 5px;
	}
}
</style>