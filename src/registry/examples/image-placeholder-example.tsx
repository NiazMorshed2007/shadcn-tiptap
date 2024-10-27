"use client";

import { ImageExtension } from "@/registry/extensions/image";
import { ImagePlaceholder } from "@/registry/extensions/image-placeholder";
import { ImagePlaceholderToolbar } from "@/registry/toolbars/image-placeholder-toolbar";
import { ToolbarProvider } from "@/registry/toolbars/toolbar-provider";
import TextAlign from "@tiptap/extension-text-align";
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
				class: " text-accent p-2",
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
	TextAlign.configure({
		types: ["heading", "paragraph"],
	}),
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
		immediatelyRender: false,
	});

	if (!editor) {
		return null;
	}
	return (
		<div className="border w-full relative rounded-md overflow-hidden pb-3">
			<div className="flex w-full items-center py-2 px-2 justify-between border-b  sticky top-0 left-0 bg-background z-20">
				<ToolbarProvider editor={editor}>
					<ImagePlaceholderToolbar />
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

export default ImagePlaceholderPlayground;
