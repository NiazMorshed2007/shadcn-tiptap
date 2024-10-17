"use client";

import TiptapEditor from "@/components/editor";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = ({ starCount: _ }: { starCount: number }) => {
	const staggeredAnimation = {
		hidden: { opacity: 0, y: -20, filter: "blur(4px)" },
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
	};

	const childAnimation = {
		hidden: { opacity: 0, y: -20, filter: "blur(4px)" },
		visible: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)",
			transition: {
				type: "spring",
				bounce: 0,
			},
		},
	};

	return (
		<motion.section
			variants={staggeredAnimation}
			initial="hidden"
			animate="visible"
			className="pt-32 relative pb-20 flex space-y-2 flex-col items-center justify-center"
		>
			<div className="absolute hidden md:block left-1/2 top-48 -translate-x-1/2 opacity-50 w-[700px] h-[300px] dark:opacity-40 bg-orange-100 blur-3xl" />
			<motion.h1 className="text-5xl font-semibold" variants={childAnimation}>
				Shadcn Tiptap
			</motion.h1>
			<motion.p
				className="text-muted-foreground text-center"
				variants={childAnimation}
			>
				Collection of custom extensions and toolbars for Tiptap editor. <br />{" "}
				Ready to copy & paste and use with shadcn/ui components
			</motion.p>
			<motion.div
				className="flex items-center gap-3 pt-5"
				variants={childAnimation}
			>
				<Button asChild variant={"outline"}>
					<Link href={"/docs"}>View docs</Link>
				</Button>
				<Button asChild>
					<Link
						target="_blank"
						href={"https://github.com/NiazMorshed2007/shadcn-tiptap"}
					>
						<GitHubLogoIcon className="size-4 mr-2" />
						Star on Github
					</Link>
				</Button>
			</motion.div>

			<motion.div className="w-full md:w-10/12 pt-28" variants={childAnimation}>
				<TiptapEditor />
			</motion.div>

			<footer className="text-sm pt-10">
				Made with ❤️ by{" "}
				<Link className="underline" href={"https://x.com/niazmorshed_"}>
					Niaz Morshed
				</Link>
			</footer>
		</motion.section>
	);
};
