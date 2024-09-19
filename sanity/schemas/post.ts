export const post = {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			title: "Poster",
			name: "poster",
			type: "image",
			options: {
				hotspot: true, // <-- Defaults to false
			},
			fields: [
				{
					name: "caption",
					type: "string",
					title: "Caption",
				},
				{
					name: "attribution",
					type: "string",
					title: "Attribution",
				},
			],
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title" },
		},
		{
			name: "date",
			title: "Date",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		},
		{
			name: "excerpt",
			title: "Excerpt",
			type: "text",
		},
		{
			name: "body",
			title: "Body",
			type: "array",
			of: [
				{ type: "block" },
				{
					type: "image",
					fields: [
						{
							type: "text",
							name: "alt",
							title: "Alt",
						},
					],
				},
			],
		},
	],
};
