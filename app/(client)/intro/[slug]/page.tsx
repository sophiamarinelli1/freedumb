import { Intro } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";
import TextFlash from "@/app/components/TextFlash";
import Footer from "@/app/components/Footer";
import Back from "@/app/components/Back";

interface Params {
	params: {
		slug: string;
	};
}

async function getIntro(slug: string) {
	const query = `
	*[_type == "intro" && slug.current == "${slug}"][0] {
	title,
	slug,
	fragments[] {
    fragment,
    "imageUrl": image.asset->url
    }
	}
	`;
	const intro = await client.fetch(query);
	return intro;
}

const page = async ({ params }: Params) => {
	const intro: Intro = await getIntro(params?.slug);
	console.log(intro, "post");
	return (
		<div>
			<Back />
			<TextFlash key={intro._id} intro={intro} />
			<Footer />
		</div>
	);
};

export default page;
