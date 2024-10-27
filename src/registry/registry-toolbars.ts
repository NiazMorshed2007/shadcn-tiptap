import type { Registry } from "./schema";

export const toolbars: Registry = [
	{
		name: "toolbar-provider",
		type: "registry:component",
		description: "A toolbar provider that serves editor to its children.",
		dependencies: ["@tiptap/react"],
		files: [
			{
				path: "toolbars/toolbar-provider.tsx",
				type: "registry:component",
				target: "components/toolbars/toolbar-provider.tsx",
			},
		],
	},
	{
		name: "search-and-replace-toolbar",
		type: "registry:component",
		description: "A toolbar for searching and replacing text in the editor.",
		files: [
			{
				path: "toolbars/search-and-replace.tsx",
				type: "registry:component",
				target: "components/toolbars/search-and-replace.tsx",
			},
		],
	},
	{
		name: "image-placeholder-toolbar",
		type: "registry:component",
		description: "A toolbar for adding image placeholder.",
		files: [
			{
				path: "toolbars/image-placeholder-toolbar.tsx",
				type: "registry:component",
				target: "components/toolbars/image-placeholder-toolbar.tsx",
			},
		],
	},
	{
		name: "color-and-highlight-toolbar",
		type: "registry:component",
		description: "A toolbar for adding color and highlight.",
		files: [
			{
				path: "toolbars/color-and-highlight.tsx",
				type: "registry:component",
				target: "components/toolbars/color-and-highlight.tsx",
			},
		],
	},
];
