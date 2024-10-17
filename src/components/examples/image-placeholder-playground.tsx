"use client";

import { ImageExtension } from "@/extensions/image";
import { ImagePlaceholder } from "@/extensions/image-placeholder";
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
import { ImageToolbar } from "../toolbar-components/image";
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
	ImageExtension,
	ImagePlaceholder,
];

const content = `
<h2 class="tiptap-heading">A notion style image placeholder.</h2>
<p>Try adding a image here by clicking the media icon 👆</p>
`;

const ImagePlaceholderPlayground = () => {
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
						<ImageToolbar />
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

export default ImagePlaceholderPlayground;
