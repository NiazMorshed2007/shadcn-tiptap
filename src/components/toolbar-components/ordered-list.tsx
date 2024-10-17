"use client";

import { ListOrdered } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useToolbar } from "../providers/toolbar-provider";
import { Button, type ButtonProps } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const OrderedListToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
							editor?.isActive("orderedList") && "bg-accent",
							className,
						)}
						onClick={(e) => {
							editor?.chain().focus().toggleOrderedList().run();
							onClick?.(e);
						}}
						disabled={!editor?.can().chain().focus().toggleOrderedList().run()}
						ref={ref}
						{...props}
					>
						{children || <ListOrdered className="h-4 w-4" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<span>Ordered list</span>
				</TooltipContent>
			</Tooltip>
		);
	},
);

OrderedListToolbar.displayName = "OrderedListToolbar";

export { OrderedListToolbar };
