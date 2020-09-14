<template>
	<div class="notes">
		<h2>notes</h2>
		<addNote/>
		<Note v-for="note in allNotes" :key="note.id" v-bind:note="note"/>
	</div>
</template>

<script>
import Note from '../components/Note'
import addNote from '../components/AddNote'
import { mapGetters } from 'vuex'

export default {
	name: 'Notes',
	components: {
		Note,
		addNote
	},
	computed: {
		...mapGetters(['allNotes'])
	},
	methods: {

	}
}
</script>

<style lang="scss">
.note {
	padding: 1rem;
	margin: 1rem;
}

.todo {
	padding: .5rem;
	margin: .5rem;
}
</style>