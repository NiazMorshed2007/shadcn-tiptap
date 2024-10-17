"use client";

import SearchAndReplace from "@/extensions/search-and-replace";
import Blockquote from "@tiptap/extension-blockquote";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { BorderTrail } from "../motion-primitives/border-trail";
import { ToolbarProvider } from "../providers/toolbar-provider";
import { BulletListToolbar } from "../toolbar-components/bullet-list";
import {
	BoldToolbar,
	ItalicToolbar,
	LinkToolbar,
	UnderlineToolbar,
} from "../toolbar-components/marks";
import { SearchAndReplaceToolbar } from "../toolbar-components/search-and-replace-toolbar";

const extensions = [
	StarterKit.configure({
		orderedList: {
			HTMLAttributes: {
				class: "list-decimal",
			},
		},
		blockquote: {
			HTMLAttributes: {
				class: " text-accent p-2",
			},
		},
		bulletList: {
			HTMLAttributes: {
				class: "list-disc",
			},
		},
	}),
	Heading.configure({
		levels: [1, 2, 3, 4],
		HTMLAttributes: {
			class: "tiptap-heading",
		},
	}),
	TextAlign.configure({
		types: ["heading", "paragraph"],
	}),
	TextStyle,
	Subscript,
	Superscript,
	Underline,
	Link,
	Blockquote,
	SearchAndReplace,
];

const content = `
  <p><strong>Try searching for the word "the"</strong>.</p>
  <blockquote><p>"The only thing we have to fear is fear itself." - Franklin D. Roosevelt</p></blockquote>
  <p>The quick brown fox jumps over the lazy dog.</p>
  <p>In the end, we only regret the chances we didn't take.</p>`;

const SearchReplacePlayground = () => {
	const editor = useEditor({
		extensions,
		content,
	});

	if (!editor) {
		return null;
	}
	return (
		<div className="border w-full relative rounded-md overflow-hidden pb-3">
			<BorderTrail />
			<div className="flex w-full items-center py-2 px-2 justify-between border-b  sticky top-0 left-0 bg-background z-20">
				<ToolbarProvider editor={editor}>
					<div className="flex items-center gap-2">
						<BoldToolbar />
						<ItalicToolbar />
						<LinkToolbar />
						<UnderlineToolbar />
						<BulletListToolbar />
					</div>
					<SearchAndReplaceToolbar />
				</ToolbarProvider>
			</div>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
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

export default SearchReplacePlayground;
