"use client";

import { ColorHighlightToolbar } from "@/registry/toolbars/color-and-highlight";
import { ToolbarProvider } from "@/registry/toolbars/toolbar-provider";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [
	StarterKit.configure({
		orderedList: {
			HTMLAttributes: {
				class: "list-decimal",
			},
		},
		heading: {
			levels: [1, 2, 3, 4],
			HTMLAttributes: {
				class: "tiptap-heading",
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
	}),
	TextAlign.configure({
		types: ["heading", "paragraph"],
	}),
	TextStyle,
	Color,
	Highlight.configure({
		multicolor: true,
	}),
];

const content = `
<h2 class="tiptap-heading">Exploring Text Colors and Highlights 🎨</h2>
<p>Welcome to our color and highlight demonstration!</p>
<p>Here's some <span style="color: var(--text-red);">red text</span> to catch your eye.</p>
<p>And now, let's try a <span style="background-color: var(--highlight-yellow);">yellow highlight</span> for emphasis.</p>
<p>We can also combine <span style="color: var(--text-blue); background-color: var(--highlight-orange);">blue text with an orange background</span>.</p>
<p>Feel free to experiment with the color toolbar above to create your own colorful content!</p>
<p>Remember, judicious use of color can enhance readability and highlight key points in your document.</p>
`;

const ColorHighlightExample = () => {
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
			<div className="flex w-full items-center py-2 px-2 justify-between border-b  sticky top-0 left-0 bg-background z-20">
				<ToolbarProvider editor={editor}>
					<ColorHighlightToolbar />
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

export default ColorHighlightExample;
