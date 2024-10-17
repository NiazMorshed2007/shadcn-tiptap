"use client";

import { Superscript } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useToolbar } from "../../providers/toolbar-provider";
import { Button, type ButtonProps } from "../../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

const SuperscriptToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
							editor?.isActive("superscript") && "bg-accent",
							className,
						)}
						onClick={(e) => {
							editor?.chain().focus().toggleSuperscript().run();
							onClick?.(e);
						}}
						disabled={!editor?.can().chain().focus().toggleSuperscript().run()}
						ref={ref}
						{...props}
					>
						{children || <Superscript className="h-4 w-4" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<span>Superscript</span>
				</TooltipContent>
			</Tooltip>
		);
	},
);

SuperscriptToolbar.displayName = "SuperscriptToolbar";

export { SuperscriptToolbar };
