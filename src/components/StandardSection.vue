<template>
<section class="standard-section">
	<div>
		<slot />
	</div>
</section>
</template>

<style>
	.standard-section {
		background-color: white;
	}
	.standard-section > div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 0em 2.5em;
	}

	@media (min-width: 60rem) {
		.standard-section section >div {
			flex-direction: row;
			margin: 2em 4em 0em;
			gap: 2em;
		}
	}

	@media (min-width: 75rem) {
		.standard-section > div {
		}
	}
</style>