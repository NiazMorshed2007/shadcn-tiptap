"use client";

import { List } from "lucide-react";
import React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useToolbar } from "@/registry/toolbars/toolbar-provider";

const BulletListToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
							editor?.isActive("bulletList") && "bg-accent",
							className,
						)}
						onClick={(e) => {
							editor?.chain().focus().toggleBulletList().run();
							onClick?.(e);
						}}
						disabled={!editor?.can().chain().focus().toggleBulletList().run()}
						ref={ref}
						{...props}
					>
						{children || <List className="h-4 w-4" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<span>Bullet list</span>
				</TooltipContent>
			</Tooltip>
		);
	},
);

BulletListToolbar.displayName = "BulletListToolbar";

export { BulletListToolbar };
