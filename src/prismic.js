import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
	endpoint: "cmda-mid-term",
	clientConfig: {
		defaultParams: {
			routes: [
				{
					type: "standard",
					path: ":uid",
				},
				{
					type: "chapter",
					path: ":uid",
				},
			],
		},
	},
});
export default prismic;


let standards = await Promise.all(
	document._value.data.standards.map(async (s) => {
		const standard = await usePrismicDocumentByUID("standard", s.standard.uid);
		const chapters = await Promise.all(
			standard.data.chapters.map(async (s) => {
				const chapter = await usePrismicDocumentByUID("chapter", s.chapter.uid);
				return chapter;
			})
		);
		standard.data.chapters = chapters;
		return standard;
	})
);
standards = standards.map((standard) => standard.data);

