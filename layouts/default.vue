<template>
	<div>
		<v-toolbar>
		<v-icon>home</v-icon>
		<v-toolbar-side-icon></v-toolbar-side-icon>
		<v-spacer></v-spacer>
		<v-icon>face</v-icon>
	</v-toolbar>
	</div>
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
