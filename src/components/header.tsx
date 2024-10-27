import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Coffee } from "lucide-react";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import ThemeSwitch from "./theme-switch";
import { Button } from "./ui/button";

export const Header = () => {
	return (
		<header className="border-b sticky z-50 top-0 left-0 bg-background/80 backdrop-blur-md md:px-6 px-0 py-3">
			<div className="container mx-auto flex items-center justify-between">
				<div>
					<MainNav />
					<MobileNav />
				</div>
				<div className="flex items-center gap-1.5">
					<Button asChild size={"sm"} variant={"outline"}>
						<Link target="_blank" href={"https://x.com/niazmorshed_"}>
							<TwitterLogoIcon className="size-4 mr-2" />
							Follow on twitter
						</Link>
					</Button>
					<Button asChild size={"icon"} variant={"outline"} className="size-8">
						<Link target="_blank" href={"https://buymeacoffee.com/niazmorshed"}>
							<Coffee className="size-4" />
						</Link>
					</Button>
					<Button asChild size={"icon"} variant={"outline"} className="size-8">
						<Link
							target="_blank"
							href={"https://github.com/NiazMorshed2007/shadcn-tiptap"}
						>
							<GitHubLogoIcon className="size-4" />
						</Link>
					</Button>
					<ThemeSwitch />
				</div>
			</div>
		</header>
	);
};
