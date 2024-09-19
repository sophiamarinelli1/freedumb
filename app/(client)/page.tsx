import { client } from "@/sanity/lib/client";
import { Intro } from "../utils/interface";
import Title from "../components/Title";
import Footer from "../components/Footer";
import BackgroundSwitcher from "../components/BackgroundTreatment";

async function getIntro() {
	const query = `
	*[_type == "intro"] {
	title,
	_id,
    slug,
	fragments[] {
    fragment,
    "imageUrl": image.asset->url
    }
	}
	`;
	const data = await client.fetch(query);
	return data;
}

export const revalidate = 60;

export default async function Home() {
	const intros: Intro[] = await getIntro();
	return (
		<div className="">
			<div className="flex flex-col h-screen justify-center">
				{intros.length > 0 &&
					intros.map((intro) => <Title key={intro._id} intro={intro} />)}
			</div>
			<BackgroundSwitcher />
			<Footer />
		</div>
	);
}
