<template>
	<v-app>
		<v-toolbar>
		<v-btn icon to="/"><v-icon>home</v-icon></v-btn>
		<v-toolbar-side-icon></v-toolbar-side-icon>
		<v-spacer></v-spacer>
		<v-icon>face</v-icon>
	</v-toolbar>
	<nuxt/>
	</v-app>
</template>

<script>
	export default {
		data() {
			return {
				items: ['Foo', 'Bar', 'Fizz', 'Buzz']
			}
		}
	}
</script>
