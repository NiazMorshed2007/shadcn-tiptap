"use client";

import SearchAndReplace from "@/registry/extensions/search-and-replace";
import { SearchAndReplaceToolbar } from "@/registry/toolbars/search-and-replace-toolbar";
import { ToolbarProvider } from "@/registry/toolbars/toolbar-provider";
import { EditorContent, useEditor } from "@tiptap/react";
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

const content = `
  <p><strong>Try searching for the word "the"</strong>.</p>
  <blockquote><p>"The only thing we have to fear is fear itself." - Franklin D. Roosevelt</p></blockquote>
  <p>The quick brown fox jumps over the lazy dog.</p>
  <p>In the end, we only regret the chances we didn't take.</p>`;

const SearchReplaceExample = () => {
	const editor = useEditor({
		extensions,
		content,
		immediatelyRender: false,
	});

	if (!editor) {
		return null;
	}
	return (
		<div className="border w-full relative rounded-md overflow-hidden pb-3">
			<div className="flex items-center justify-end p-2 border-b">
				<ToolbarProvider editor={editor}>
					<SearchAndReplaceToolbar />
				</ToolbarProvider>
			</div>
			<div
				onClick={() => {
					editor?.chain().focus().run();
				}}
				className="cursor-text min-h-[18rem] bg-background"
			>
				<EditorContent className="outline-none" editor={editor} />
			</div>
		</div>
	);
};

export default SearchReplaceExample;
