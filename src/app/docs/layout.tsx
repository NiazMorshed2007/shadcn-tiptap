"use client";

import {
	NavigationDesktop,
	NavigationMobile,
} from "./_components/content-sidebar";
import { TableOfContents } from "./_components/toc";

const DocsLayout = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-12">
			<aside>
				<NavigationDesktop />
				<NavigationMobile />
			</aside>
			<main className="prose px-6 md:px-0 prose-zinc min-w-0 max-w-full flex-1 pb-16 pt-8 dark:prose-invert prose-h1:scroll-m-20 prose-h1:text-2xl prose-h1:font-semibold prose-h2:scroll-m-20 prose-h2:text-xl prose-h2:font-medium prose-h3:scroll-m-20 prose-h3:text-base prose-h3:font-medium prose-h4:scroll-m-20 prose-h5:scroll-m-20 prose-h6:scroll-m-20 prose-strong:font-medium prose-table:block prose-table:overflow-y-auto lg:pt-12 xl:max-w-2xl">
				{children}
			</main>
			<div className="w-3/12 hidden md:block">
				<aside className="pl-6 py-12 sticky top-14">
					<TableOfContents />
				</aside>
			</div>
		</div>
	);
};

export default DocsLayout;
