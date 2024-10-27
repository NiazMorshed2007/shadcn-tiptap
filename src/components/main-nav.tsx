import { docsConfig } from "@/config/docs";
import Link from "next/link";
import { Separator } from "./ui/separator";

export const MainNav = () => {
	const { mainNav } = docsConfig;
	return (
		<div className="md:flex items-center gap-5 hidden">
			<Link href={"/"} className="font-semibold">
				Shadcn Tiptap
			</Link>
			<Separator className=" w-[1px] h-5" orientation="vertical" />
			{mainNav?.map((item) => (
				<Link
					key={item.href}
					href={item.href || ""}
					className="text-sm text-muted-foreground hover:text-primary transition-colors"
				>
					{item.title}
				</Link>
			))}
		</div>
	);
};
