export const intro = {
	name: "intro",
	title: "Intro",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title" },
		},
		{
			name: "fragments",
			title: "Fragments",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "fragment",
							title: "Fragment",
							type: "string",
						},
						{
							name: "image",
							title: "Image",
							type: "image",
							options: {
								hotspot: true,
							},
						},
					],
				},
			],
		},
	],
};
