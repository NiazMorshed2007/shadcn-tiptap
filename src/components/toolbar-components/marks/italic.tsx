"use client";

import { ItalicIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useToolbar } from "../../providers/toolbar-provider";
import { Button, type ButtonProps } from "../../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

const ItalicToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, onClick, children, ...props }, ref) => {
		const { editor } = useToolbar();
		return (
			<Tooltip>
				<TooltipTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className={cn(
							"h-8 w-8",
							editor?.isActive("italic") && "bg-accent",
							className,
						)}
						onClick={(e) => {
							editor?.chain().focus().toggleItalic().run();
							onClick?.(e);
						}}
						disabled={!editor?.can().chain().focus().toggleItalic().run()}
						ref={ref}
						{...props}
					>
						{children || <ItalicIcon className="h-4 w-4" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<span>Italic</span>
					<span className="ml-1 text-xs text-gray-11">(cmd + i)</span>
				</TooltipContent>
			</Tooltip>
		);
	},
);

ItalicToolbar.displayName = "ItalicToolbar";

export { ItalicToolbar };
