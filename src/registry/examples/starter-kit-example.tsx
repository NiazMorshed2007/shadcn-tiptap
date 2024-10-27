"use client";

import { Separator } from "@/components/ui/separator";
import { BlockquoteToolbar } from "@/registry/toolbars/blockquote";
import { BoldToolbar } from "@/registry/toolbars/bold";
import { BulletListToolbar } from "@/registry/toolbars/bullet-list";
import { CodeToolbar } from "@/registry/toolbars/code";
import { CodeBlockToolbar } from "@/registry/toolbars/code-block";
import { HardBreakToolbar } from "@/registry/toolbars/hard-break";
import { HorizontalRuleToolbar } from "@/registry/toolbars/horizontal-rule";
import { ItalicToolbar } from "@/registry/toolbars/italic";
import { OrderedListToolbar } from "@/registry/toolbars/ordered-list";
import { RedoToolbar } from "@/registry/toolbars/redo";
import { StrikeThroughToolbar } from "@/registry/toolbars/strikethrough";
import { ToolbarProvider } from "@/registry/toolbars/toolbar-provider";
import { UndoToolbar } from "@/registry/toolbars/undo";
import { EditorContent, type Extension, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

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
		code: {
			HTMLAttributes: {
				class: "bg-accent rounded-md p-1",
			},
		},
		horizontalRule: {
			HTMLAttributes: {
				class: "my-2",
			},
		},
		codeBlock: {
			HTMLAttributes: {
				class: "bg-primary text-primary-foreground p-2 text-sm rounded-md p-1",
			},
		},
		heading: {
			levels: [1, 2, 3, 4],
			HTMLAttributes: {
				class: "tiptap-heading",
			},
		},
	}),
];

const content = `
<h2 class="tiptap-heading" style="text-align: center">Hello world 🌍</h2>
`;

const StarterKitExample = () => {
	const editor = useEditor({
		extensions: extensions as Extension[],
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
					<div className="flex items-center gap-2">
						<UndoToolbar />
						<RedoToolbar />
						<Separator orientation="vertical" className="h-7" />
						<BoldToolbar />
						<ItalicToolbar />
						<StrikeThroughToolbar />
						<BulletListToolbar />
						<OrderedListToolbar />
						<CodeToolbar />
						<CodeBlockToolbar />
						<HorizontalRuleToolbar />
						<BlockquoteToolbar />
						<HardBreakToolbar />
					</div>
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

export default StarterKitExample;
