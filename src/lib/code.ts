import * as fs from "node:fs";
import * as path from "node:path";

export const extractCodeFromFilePath = (filePath: string) => {
	const fullPath = path.resolve(process.cwd(), "src", filePath);

	try {
		const fileContent = fs.readFileSync(fullPath, "utf-8");
		return fileContent;
	} catch (err) {
		console.error("Error reading the file:", err);
		return "";
	}
};
