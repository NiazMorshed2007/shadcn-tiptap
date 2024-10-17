import { HeroSection } from "./_components/hero-section";

async function fetchStarCount(repo: string): Promise<number> {
	const response = await fetch(`https://api.github.com/repos/${repo}`);
	const data = await response.json();
	return data.stargazers_count;
}

export default async function Home() {
	const starCount = await fetchStarCount("NiazMorshed2007/shadcn-tiptap");
	return (
		<main className="max-w-6xl mx-auto px-6 pb-20">
			<HeroSection starCount={starCount} />
		</main>
	);
}
