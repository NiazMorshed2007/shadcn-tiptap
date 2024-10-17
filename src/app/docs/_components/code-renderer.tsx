import { codeToHtml } from "@/lib/shiki";

type CodeRenderer = {
	code: string;
	lang: string;
};

export default async function CodeRenderer({ code, lang }: CodeRenderer) {
	const html = await codeToHtml({
		code,
		lang,
	});

	return (
		<div>
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	);
}
