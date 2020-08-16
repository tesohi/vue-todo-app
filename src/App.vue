<template>
	<div id="app">
		<div class="container">
			<h1>to-do app</h1>
			<router-view />
		</div>
	</div>
</template>

<style lang="scss">
body {
	background: #e8f7f0;
	color: #2c3e50;
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

h1 {
	text-transform: uppercase;
	background: #000;
	color: rgb(233, 233, 233);
	text-align: center;
	margin: 1rem 0;
	padding: .2rem;
}

h2 {
	text-align: center;
}

a {
	text-decoration: none;
	color: inherit;
}

.container {
	max-width: 1100px;
	margin: auto;
	overflow: auto;
	padding: 0 2rem;
}
</style>
