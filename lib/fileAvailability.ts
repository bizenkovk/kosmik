import { existsSync } from "node:fs";
import { join } from "node:path";

export function hasPublicFile(publicPath: string) {
  const normalized = publicPath.replace(/^\/+/, "");
  return existsSync(join(process.cwd(), "public", normalized));
}

export function findPublicAsset(basePath: string, extensions: string[]) {
  for (const extension of extensions) {
    const candidate = `${basePath}.${extension}`;
    if (hasPublicFile(candidate)) {
      return candidate;
    }
  }

  return null;
}
