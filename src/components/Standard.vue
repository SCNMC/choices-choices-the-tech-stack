<script>
export default {
	props: {
		standardTitle: String,
		standardUID: String,
	},
};
</script>

<template>
<section class="standard">
	<a href={{standardUID}}>{{standardTitle}}</a>
	<slot/>
</section>
</template>

<style scoped >
	.standard{
		display: flex;
		flex-direction: column;
		padding-bottom: 2.5em;
	}

	.standard a {
		font-size: 1.2rem;
		font-weight: bold;
		transition: 0.1s ease-in-out;
		padding-top: 1.5em;
		padding-bottom: 0.5em;
		border-bottom: 4px solid #fff021;
	}

	.standard a:hover {
	}

	@media (min-width: 60rem) {
		.standard {
			width: 100%;
		}
	}
</style>