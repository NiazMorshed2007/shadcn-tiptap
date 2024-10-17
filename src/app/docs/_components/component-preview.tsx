"use client";
import { cn } from "@/lib/utils";

type ComponentPreviewProps = {
	component: React.ReactElement;
	className?: string;
};

export default function ComponentPreview({
	component,
	className,
}: ComponentPreviewProps) {
	return (
		<div
			className={cn(
				"flex min-h-[350px] w-full items-center justify-center rounded-md",
				className,
			)}
		>
			{component}
		</div>
	);
}
