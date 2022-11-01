<script setup>
import Mainhero from "../components/Mainhero.vue";
import Intro from "../components/Intro.vue";
import Maincontent from "../components/Maincontent.vue";
import Footer from "../components/Footer.vue";
import Standard from "../components/Standard.vue";
import Standardchapter from "../components/Standardchapter.vue";
import StandardSection from "../components/StandardSection.vue";
import {	usePrismicDocumentByUID,	useSinglePrismicDocument,} from "@prismicio/vue";
const { data: document } = useSinglePrismicDocument("midterm", "document");
</script>

<template>
	<main>
		<Mainhero />
		<intro
			introTitle="Midterm"
			:introduction="document ? document.data.introduction : {}"
		/>
  <Maincontent/>
		<!-- <StandardSection v-if="standard">
			<Standard
				v-for="standard in standards"
				:key="standard.uid"
				:standardUID="`/${standard.title}`"
				:standardTitle="`${standard.standardnumber}.0 ${standard.title}`"
			>
				<Standardchapter
					v-for="(chapter, i) in standard.chapters"
					:key="i"
					:chapterTitle="`${standard.standardnumber}.${i + 1} ${chapter.data.title
					}`"
				/>
			</Standard>
		</StandardSection> -->
		<Footer />
	</main>
</template>
