"use client";

import { Subscript } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useToolbar } from "../../providers/toolbar-provider";
import { Button, type ButtonProps } from "../../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

const SubscriptToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
							editor?.isActive("subscript") && "bg-accent",
							className,
						)}
						onClick={(e) => {
							editor?.chain().focus().toggleSubscript().run();
							onClick?.(e);
						}}
						disabled={!editor?.can().chain().focus().toggleSubscript().run()}
						ref={ref}
						{...props}
					>
						{children || <Subscript className="h-4 w-4" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<span>Subscript</span>
				</TooltipContent>
			</Tooltip>
		);
	},
);

SubscriptToolbar.displayName = "SubscriptToolbar";

export { SubscriptToolbar };
