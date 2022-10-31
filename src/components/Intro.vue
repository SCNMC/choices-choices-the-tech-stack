<script>
  export default {
        props: {
            introduction: Object,
            introTitle: String,
        }
    }

</script>

<template>
    <section class="intro">
	<div class="intro-info">
		<h3>{{introTitle}}</h3>
		<prismic-rich-text :field="introduction" />
	</div>
	<img src="../assets/cmd-laptop.png" alt="laptop" />
</section>
</template>


<style>
	.intro {
		display: flex;
		flex-direction: column;
		align-items: start;
		margin: 0.4em 2.5em;
		padding-top: 1em;
		padding-bottom: 2em;
		gap: 2em;
		border-bottom: 4px solid #000;
	}
	h3 {
		font-size: 2.5em;
	}
	p {
		margin-top: 2em;
	}

	@media (min-width: 60em) {
		.intro {
			flex-direction: row;
			align-items: center;
			border-bottom: 4px solid #000;
			margin: 0.4em 4em;
		}

		img {
			height: 15em;
		}

	}
</style>