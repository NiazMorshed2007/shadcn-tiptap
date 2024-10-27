"use client";

import SearchAndReplace from "@/registry/extensions/search-and-replace";
import { SearchAndReplaceToolbar } from "@/registry/toolbars/search-and-replace-toolbar";
import { ToolbarProvider } from "@/registry/toolbars/toolbar-provider";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [
	StarterKit.configure({
		orderedList: {
			HTMLAttributes: {
				class: "list-decimal",
			},
		},
		blockquote: {
			HTMLAttributes: {
				class: "text-accent-foreground p-2",
			},
		},
		bulletList: {
			HTMLAttributes: {
				class: "list-disc",
			},
		},
		heading: {
			levels: [1, 2, 3, 4],
			HTMLAttributes: {
				class: "tiptap-heading",
			},
		},
	}),
	SearchAndReplace,
];

const SearchReplaceExample = () => {
	const editor = useEditor({
		extensions,
		immediatelyRender: false,
	});

	if (!editor) {
		return null;
	}
	return (
		<div className="w-full p-3 flex items-center justify-center">
			<ToolbarProvider editor={editor}>
				<SearchAndReplaceToolbar />
			</ToolbarProvider>
		</div>
	);
};

export default SearchReplaceExample;
