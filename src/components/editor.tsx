"use client";

import SearchAndReplace from "@/extensions/search-and-replace";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import {
	BubbleMenu,
	EditorContent,
	FloatingMenu,
	useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { BorderTrail } from "./motion-primitives/border-trail";
import { ToolbarProvider } from "./providers/toolbar-provider";
import { AlignmentTooolbar } from "./toolbar-components/alignment";
import { BulletListToolbar } from "./toolbar-components/bullet-list";
import {
	BoldToolbar,
	ItalicToolbar,
	LinkToolbar,
	UnderlineToolbar,
} from "./toolbar-components/marks";
import { OrderedListToolbar } from "./toolbar-components/ordered-list";
import { RedoToolbar } from "./toolbar-components/redo";
import { SearchAndReplaceToolbar } from "./toolbar-components/search-and-replace-toolbar";
import { UndoToolbar } from "./toolbar-components/undo";
import { Separator } from "./ui/separator";

const extensions = [
	StarterKit.configure({
		orderedList: {
			HTMLAttributes: {
				class: "list-decimal",
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
	SearchAndReplace,
];

const content = "<p>Hello World!</p>";

const TiptapEditor = () => {
	const editor = useEditor({
		extensions,
		content,
	});

	if (!editor) {
		return null;
	}
	return (
		<div className="border relative rounded-md overflow-hidden pb-3">
			<BorderTrail />
			<div className="flex w-full items-center py-2 px-2 justify-between border-b  sticky top-0 left-0 bg-background z-20">
				<ToolbarProvider editor={editor}>
					<div className="flex items-center gap-2">
						<UndoToolbar />
						<RedoToolbar />
						<Separator orientation="vertical" className="h-7" />
						<BoldToolbar />
						<ItalicToolbar />
						<LinkToolbar />
						<UnderlineToolbar />
						<BulletListToolbar />
						<OrderedListToolbar />
						<AlignmentTooolbar />
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

export default TiptapEditor;
