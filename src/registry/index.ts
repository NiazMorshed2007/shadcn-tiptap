import { examples } from "@/registry/registry-exmples";
import type { Registry } from "@/registry/schema";
import { extensions } from "./registry-extensions";

export const registry: Registry = [...examples, ...extensions];
