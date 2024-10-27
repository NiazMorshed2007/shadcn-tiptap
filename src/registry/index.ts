import { examples } from "@/registry/registry-exmples";
import type { Registry } from "@/registry/schema";
import { extensions } from "./registry-extensions";
import { toolbarExamples } from "./registry-toolbar-examples";
import { toolbars } from "./registry-toolbars";

export const registry: Registry = [
	...examples,
	...extensions,
	...toolbars,
	...toolbarExamples,
];
