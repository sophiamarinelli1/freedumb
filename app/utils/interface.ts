import { PortableTextBlock } from "next-sanity";

export interface Post {
	title: string;
	slug: { current: string };
	date: string;
	excerpt: string;
	body: PortableTextBlock[];
	_id: string;
}

export interface Intro {
	title: string;
	slug: { current: string };
	_id: string;
	fragments: Array<{
		fragment: string;
	}>;
}
