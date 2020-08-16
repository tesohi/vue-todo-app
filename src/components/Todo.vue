<template>
	<div class="todo">
		{{todo.body}}
	</div>
</template>

<script>

export default {
	name: 'Todo',
	props: ['todo']
}
</script>