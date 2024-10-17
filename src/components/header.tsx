import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const Header = () => {
	return (
		<header className="border-b sticky z-50 top-0 left-0 bg-background/80 backdrop-blur-md px-6 py-3">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<div className="flex items-center gap-5">
					<Link href={"/"} className="font-semibold">
						Shadcn Tiptap
					</Link>
					<Separator className=" w-[1px] h-5" orientation="vertical" />
					<Link
						className="text-sm text-muted-foreground hover:text-primary transition-colors"
						href={"/docs"}
					>
						Docs
					</Link>
				</div>

				<div className="flex items-center gap-1.5">
					<Button asChild size={"sm"} variant={"outline"}>
						<Link target="_blank" href={"https://x.com/niazmorshed_"}>
							<TwitterLogoIcon className="size-4 mr-2" />
							Follow on twitter
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
