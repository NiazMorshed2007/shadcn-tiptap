"use client";

import { Strikethrough } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useToolbar } from "../../providers/toolbar-provider";
import { Button, type ButtonProps } from "../../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

const StrikeThroughToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
							editor?.isActive("strike") && "bg-accent",
							className,
						)}
						onClick={(e) => {
							editor?.chain().focus().toggleStrike().run();
							onClick?.(e);
						}}
						disabled={!editor?.can().chain().focus().toggleStrike().run()}
						ref={ref}
						{...props}
					>
						{children || <Strikethrough className="h-4 w-4" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<span>Strikethrough</span>
					<span className="ml-1 text-xs text-gray-11">(cmd + shift + x)</span>
				</TooltipContent>
			</Tooltip>
		);
	},
);

StrikeThroughToolbar.displayName = "StrikeThroughToolbar";

export { StrikeThroughToolbar };
