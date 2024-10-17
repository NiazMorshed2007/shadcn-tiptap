import type { Editor } from "@tiptap/core";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const NODE_HANDLES_SELECTED_STYLE_CLASSNAME =
	"node-handles-selected-style";

export function isValidUrl(url: string) {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
}

export const duplicateContent = (editor: Editor) => {
	const { view } = editor;
	const { state } = view;
	const { selection } = state;

	editor
		.chain()
		.insertContentAt(
			selection.to,
			selection.content().content.firstChild?.toJSON(),
			{
				updateSelection: true,
			},
		)
		.focus(selection.to)
		.run();
};

export function getUrlFromString(str: string) {
	if (isValidUrl(str)) {
		return str;
	}
	try {
		if (str.includes(".") && !str.includes(" ")) {
			return new URL(`https://${str}`).toString();
		}
	} catch {
		return null;
	}
}
