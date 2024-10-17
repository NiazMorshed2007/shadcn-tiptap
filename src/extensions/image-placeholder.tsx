"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	NODE_HANDLES_SELECTED_STYLE_CLASSNAME,
	cn,
	isValidUrl,
} from "@/lib/utils";
import {
	type CommandProps,
	type Editor,
	Node,
	type NodeViewProps,
	NodeViewWrapper,
	ReactNodeViewRenderer,
	mergeAttributes,
} from "@tiptap/react";
import { Image, Link, Upload } from "lucide-react";
import { type FormEvent, useState } from "react";
import { type Accept, useDropzone } from "react-dropzone";

export interface ImagePlaceholderOptions {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	HTMLAttributes: Record<string, any>;
	onDrop: (files: File[], editor: Editor) => void;
	onDropRejected?: (files: File[], editor: Editor) => void;
	onEmbed: (url: string, editor: Editor) => void;
	allowedMimeTypes?: Accept;
	maxFiles?: number;
	maxSize?: number;
}

declare module "@tiptap/core" {
	interface Commands<ReturnType> {
		imagePlaceholder: {
			/**
			 * Inserts an image placeholder
			 */
			insertImagePlaceholder: () => ReturnType;
		};
	}
}

export const ImagePlaceholder = Node.create<ImagePlaceholderOptions>({
	name: "image-placeholder",

	addOptions() {
		return {
			HTMLAttributes: {},
			onDrop: () => {},
			onDropRejected: () => {},
			onEmbed: () => {},
		};
	},

	group: "block",

	parseHTML() {
		return [{ tag: `div[data-type="${this.name}"]` }];
	},

	renderHTML({ HTMLAttributes }) {
		return ["div", mergeAttributes(HTMLAttributes)];
	},

	addNodeView() {
		return ReactNodeViewRenderer(ImagePlaceholderComponent, {
			className: NODE_HANDLES_SELECTED_STYLE_CLASSNAME,
		});
	},

	addCommands() {
		return {
			insertImagePlaceholder: () => (props: CommandProps) => {
				return props.commands.insertContent({
					type: "image-placeholder",
				});
			},
		};
	},
});

function ImagePlaceholderComponent(props: NodeViewProps) {
	const { editor, extension, selected } = props;

	const [open, setOpen] = useState(false);
	const [url, setUrl] = useState("");
	const [urlError, setUrlError] = useState(false);

	const { getRootProps, getInputProps, isDragActive, isDragReject } =
		useDropzone({
			accept: extension.options.allowedMimeTypes,
			maxFiles: extension.options.maxFiles,
			maxSize: extension.options.maxSize,
			multiple: extension.options.maxFiles !== 1,
			onDrop: (acceptedFiles) => {
				acceptedFiles.map((file) => {
					const reader = new FileReader();

					reader.onload = () => {
						const src = reader.result as string;
						editor.chain().focus().setImage({ src }).run();
					};

					reader.readAsDataURL(file);
				});
				if (extension.options.onDrop) {
					extension.options.onDrop(acceptedFiles, editor);
				}
			},
			onDropRejected(fileRejections) {
				extension.options.onDropRejected?.(fileRejections, editor);
			},
		});

	const handleInsertEmbed = (e: FormEvent) => {
		e.preventDefault();
		const valid = isValidUrl(url);
		if (!valid) {
			setUrlError(true);
			return;
		}
		if (url !== "") {
			editor.chain().focus().setImage({ src: url }).run();
			extension.options.onEmbed(url, editor);
		}
	};

	return (
		<NodeViewWrapper className="w-full">
			<Popover modal open={open}>
				<PopoverTrigger
					onClick={() => {
						setOpen(true);
					}}
					asChild
					className="w-full"
				>
					<div
						className={cn(
							"flex cursor-pointer items-center gap-3 rounded-md bg-accent p-2 py-3 text-sm text-accent-foreground transition-colors hover:bg-gray-4",
							selected && "bg-blue-100 dark:bg-blue-400/80 hover:bg-blue-200",
						)}
					>
						<Image className="h-6 w-6" />
						Add an image
					</div>
				</PopoverTrigger>
				<PopoverContent
					className="w-[450px] px-0 py-2"
					onPointerDownOutside={() => {
						setOpen(false);
					}}
					onEscapeKeyDown={() => {
						setOpen(false);
					}}
				>
					<Tabs defaultValue="upload" className="px-3">
						<TabsList>
							<TabsTrigger className="px-2 py-1 text-sm" value="upload">
								<Upload className="mr-2 h-4 w-4" />
								Upload
							</TabsTrigger>
							<TabsTrigger className="px-2 py-1 text-sm" value="url">
								<Link className="mr-2 h-4 w-4" />
								Embed link
							</TabsTrigger>
						</TabsList>

						<TabsContent value="upload">
							<div
								{...getRootProps()}
								className={cn(
									"my-2 flex h-28 flex-col items-center justify-center rounded-md border border-dashed text-sm hover:bg-gray-3",
									isDragActive && "border-gray-9 bg-gray-3",
									isDragReject && "border-danger-9 bg-background",
								)}
							>
								<input {...getInputProps()} />
								<Upload className="mb-4 h-6 w-6" />
								Drag & drop or choose file to upload
							</div>
						</TabsContent>
						<TabsContent value="url">
							<form onSubmit={handleInsertEmbed}>
								<Input
									value={url}
									onChange={(e) => {
										setUrl(e.target.value);
										if (urlError) {
											setUrlError(false);
										}
									}}
									placeholder="Paste the image link..."
								/>
								{urlError && (
									<p className="py-1.5 text-xs text-danger-11">
										Please enter a valid URL
									</p>
								)}
								<Button
									onClick={handleInsertEmbed}
									type="button"
									size="sm"
									className="my-2 h-8 w-full p-2 text-xs"
								>
									Embed Image
								</Button>
								<p className="text-center text-xs text-gray-11">
									Works with any image form the web
								</p>
							</form>
						</TabsContent>
					</Tabs>
				</PopoverContent>
			</Popover>
		</NodeViewWrapper>
	);
}
