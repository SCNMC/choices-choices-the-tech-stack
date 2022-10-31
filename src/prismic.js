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

