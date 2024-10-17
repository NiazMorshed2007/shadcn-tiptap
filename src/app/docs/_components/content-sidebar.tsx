"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type NavigationItem = {
	name: string;
	href: string;
	isNew?: boolean;
	isUpdated?: boolean;
};

type NavigationGroup = {
	name: string;
	children: NavigationItem[];
};

const NAVIGATION: NavigationGroup[] = [
	{
		name: "Getting started",
		children: [
			{
				name: "Introduction",
				href: "/docs",
			},
		],
	},
	{
		name: "Extensions",
		children: [
			{
				name: "Search & Replace",
				href: "/docs/extensions/search-and-replace",
			},
			{
				name: "Image (Extended)",
				href: "/docs/extensions/image",
			},
			{
				name: "Image placeholder",
				href: "/docs/extensions/image-placeholder",
			},
		],
	},
];

export function NavigationDesktop() {
	const pathname = usePathname();

	return (
		<aside className="sticky top-14 hidden h-[calc(100dvh-theme(spacing.16))] w-[220px] shrink-0 pt-8 md:block lg:pt-12">
			<ScrollArea className="h-full w-full">
				<nav>
					<ul className="h-full">
						{NAVIGATION.map((item, index) => {
							return (
								<li className="mb-6" key={`${item.name}-${index}`}>
									<div className="text-sm/6 font-[450] text-zinc-950 dark:text-white">
										{item.name}
									</div>
									<ul className="mt-4 space-y-3.5 border-l border-zinc-200 dark:border-zinc-800">
										{item.children.map((child) => {
											const isActive = pathname === child.href;

											return (
												<li key={child.href}>
													<Link
														className={cn(
															"relative inline-flex items-center space-x-1 pl-4 text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
															isActive &&
																"text-zinc-950 before:absolute before:inset-y-0 before:left-[-1.5px] before:w-[2px] before:rounded-full before:bg-zinc-950 dark:text-white dark:before:bg-white",
														)}
														href={child.href}
													>
														<span>{child.name}</span>
														{child?.isNew && (
															<span className="whitespace-nowrap rounded-lg bg-emerald-100 px-2 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-50">
																New
															</span>
														)}
														{child?.isUpdated && (
															<span className="whitespace-nowrap rounded-lg bg-amber-100 px-2 text-[10px] font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-50">
																Updated
															</span>
														)}
													</Link>
												</li>
											);
										})}
									</ul>
								</li>
							);
						})}
					</ul>
				</nav>
			</ScrollArea>
		</aside>
	);
}

export function NavigationMobile() {
	const router = useRouter();
	const pathname = usePathname();
	const [selectedHref, setSelectedHref] = useState(pathname);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const href = e.target.value;
		setSelectedHref(href);
		router.push(href);
	};

	return (
		<div className="block w-full px-6 pt-8 md:hidden">
			<select
				className="block w-full appearance-none rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
				value={selectedHref}
				onChange={handleChange}
			>
				{NAVIGATION.map((item) => {
					return (
						<optgroup label={item.name} key={item.name}>
							{item.children.map((child) => (
								<option key={child.href} value={child.href}>
									{child.name}
								</option>
							))}
						</optgroup>
					);
				})}
			</select>
		</div>
	);
}
