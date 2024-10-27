import type { MainNavItem, SidebarNavItem } from "@/types/nav";

export interface DocsConfig {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Documentation",
			href: "/docs",
		},
		{
			title: "Extensions",
			href: "/docs/extensions/search-and-replace",
		},
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs",
					items: [],
				},
				{
					title: "Installation",
					href: "/docs/installation",
					items: [],
				},
			],
		},
		{
			title: "Extensions",
			items: [
				{
					title: "StarterKit",
					href: "/docs/extensions/starter-kit",
					items: [],
				},
				{
					title: "Search & Replace",
					href: "/docs/extensions/search-and-replace",
					items: [],
					label: "Custom",
				},
				{
					title: "Image (extended)",
					href: "/docs/extensions/image",
					items: [],
				},
				{
					title: "Image placeholder",
					href: "/docs/extensions/image-placeholder",
					items: [],
					label: "Custom",
				},
				{
					title: "Color and Highlight",
					href: "/docs/extensions/color-and-highlight",
					items: [],
				},
			],
		},
		{
			title: "Toolbars",
			items: [
				{
					title: "Search & Replace",
					href: "/docs/toolbars/search-and-replace",
					items: [],
				},
				{
					title: "Image placeholder",
					href: "/docs/toolbars/image-placeholder",
					items: [],
				},
				{
					title: "Color and Highlight",
					href: "/docs/toolbars/color-and-highlight",
					items: [],
				},
			],
		},
	],
};
