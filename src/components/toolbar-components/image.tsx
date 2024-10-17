"use client";

import { Image } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";
import { useToolbar } from "../providers/toolbar-provider";
import { Button, type ButtonProps } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const ImageToolbar = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
							editor?.isActive("image-placeholder") && "bg-accent",
							className,
						)}
						onClick={(e) => {
							editor?.chain().focus().insertImagePlaceholder().run();
							onClick?.(e);
						}}
						ref={ref}
						{...props}
					>
						{children || <Image className="h-4 w-4" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<span>Image</span>
				</TooltipContent>
			</Tooltip>
		);
	},
);

ImageToolbar.displayName = "ImageToolbar";

export { ImageToolbar };
