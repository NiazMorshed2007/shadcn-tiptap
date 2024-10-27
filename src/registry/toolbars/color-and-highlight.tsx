"use client";

import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useToolbar } from "@/registry/toolbars/toolbar-provider";
import type { Extension } from "@tiptap/core";
import type { ColorOptions } from "@tiptap/extension-color";
import type { HighlightOptions } from "@tiptap/extension-highlight";
import { Check, ChevronDown } from "lucide-react";

type TextStylingExtensions =
	| Extension<ColorOptions, any>
	| Extension<HighlightOptions, any>;

const TEXT_COLORS = [
	{ name: "Default", color: "var(--text-default)" },
	{ name: "Gray", color: "var(--text-gray)" },
	{ name: "Brown", color: "var(--text-brown)" },
	{ name: "Orange", color: "var(--text-orange)" },
	{ name: "Yellow", color: "var(--text-yellow)" },
	{ name: "Green", color: "var(--text-green)" },
	{ name: "Blue", color: "var(--text-blue)" },
	{ name: "Purple", color: "var(--text-purple)" },
	{ name: "Pink", color: "var(--text-pink)" },
	{ name: "Red", color: "var(--text-red)" },
];

const HIGHLIGHT_COLORS = [
	{ name: "Default", color: "var(--highlight-default)" },
	{ name: "Gray", color: "var(--highlight-gray)" },
	{ name: "Brown", color: "var(--highlight-brown)" },
	{ name: "Orange", color: "var(--highlight-orange)" },
	{ name: "Yellow", color: "var(--highlight-yellow)" },
	{ name: "Green", color: "var(--highlight-green)" },
	{ name: "Blue", color: "var(--highlight-blue)" },
	{ name: "Purple", color: "var(--highlight-purple)" },
	{ name: "Pink", color: "var(--highlight-pink)" },
	{ name: "Red", color: "var(--highlight-red)" },
];

interface ColorHighlightButtonProps {
	name: string;
	color: string;
	isActive: boolean;
	onClick: () => void;
	isHighlight?: boolean;
}

const ColorHighlightButton = ({
	name,
	color,
	isActive,
	onClick,
	isHighlight,
}: ColorHighlightButtonProps) => (
	<button
		onClick={onClick}
		className="flex w-full items-center justify-between rounded-sm px-2 py-1 text-sm hover:bg-gray-3"
		type="button"
	>
		<div className="flex items-center space-x-2">
			<div
				className="rounded-sm border px-1 py-px font-medium"
				style={isHighlight ? { backgroundColor: color } : { color }}
			>
				A
			</div>
			<span>{name}</span>
		</div>
		{isActive && <Check className="h-4 w-4" />}
	</button>
);

export const ColorHighlightToolbar = () => {
	const { editor } = useToolbar();

	const currentColor = editor?.getAttributes("textStyle").color;
	const currentHighlight = editor?.getAttributes("highlight").color;

	const handleSetColor = (color: string) => {
		editor
			?.chain()
			.focus()
			.setColor(color === currentColor ? "" : color)
			.run();
	};

	const handleSetHighlight = (color: string) => {
		editor
			?.chain()
			.focus()
			.setHighlight(color === currentHighlight ? { color: "" } : { color })
			.run();
	};

	const isDisabled =
		!editor?.can().chain().setHighlight().run() ||
		!editor?.can().chain().setColor("").run();

	return (
		<Popover>
			<div className="relative h-full">
				<Tooltip>
					<TooltipTrigger asChild>
						<PopoverTrigger disabled={isDisabled} asChild>
							<Button
								variant="ghost"
								size="sm"
								style={{
									color: currentColor,
								}}
								className={cn("h-8 w-14 p-0 font-normal")}
							>
								<span className="text-md">A</span>
								<ChevronDown className="ml-2 h-4 w-4" />
							</Button>
						</PopoverTrigger>
					</TooltipTrigger>
					<TooltipContent>Text Color & Highlight</TooltipContent>
				</Tooltip>

				<PopoverContent align="start" className="w-56 p-1 dark:bg-gray-2">
					<ScrollArea className="max-h-80 overflow-y-auto pr-2">
						<div className="mb-2.5 mt-2 px-2 text-xs text-gray-11">Color</div>
						{TEXT_COLORS.map(({ name, color }) => (
							<ColorHighlightButton
								key={name}
								name={name}
								color={color}
								isActive={currentColor === color}
								onClick={() => handleSetColor(color)}
							/>
						))}

						<Separator className="my-3" />

						<div className="mb-2.5 w-full px-2 pr-3 text-xs text-gray-11">
							Background
						</div>
						{HIGHLIGHT_COLORS.map(({ name, color }) => (
							<ColorHighlightButton
								key={name}
								name={name}
								color={color}
								isActive={currentHighlight === color}
								onClick={() => handleSetHighlight(color)}
								isHighlight
							/>
						))}
					</ScrollArea>
				</PopoverContent>
			</div>
		</Popover>
	);
};
