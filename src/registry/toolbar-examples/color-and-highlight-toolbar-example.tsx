"use client";

import { ColorHighlightToolbar } from "@/registry/toolbars/color-and-highlight";
import { ToolbarProvider } from "@/registry/toolbars/toolbar-provider";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TextStyle from "@tiptap/extension-text-style";
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
	TextStyle,
	Color,
	Highlight.configure({
		multicolor: true,
	}),
];

const ColorHighlightToolbarExample = () => {
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
				<ColorHighlightToolbar />
			</ToolbarProvider>
		</div>
	);
};

export default ColorHighlightToolbarExample;
