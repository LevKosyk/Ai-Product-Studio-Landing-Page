import type { NextConfig } from "next";

const projectPagesBasePath = "/Ai-Product-Studio---Landing-Page";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPagesBuild =
	process.env.GITHUB_ACTIONS === "true" && Boolean(repoName);
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const resolvedBasePath =
	envBasePath && envBasePath.length > 0
		? envBasePath
		: isGitHubPagesBuild && repoName
			? `/${repoName}`
			: process.env.NODE_ENV === "production"
				? projectPagesBasePath
				: "";
const basePath =
	resolvedBasePath === "/"
		? ""
		: resolvedBasePath.replace(/\/+$/, "");

const nextConfig: NextConfig = {
	...(isGitHubPagesBuild
		? {
				output: "export" as const,
				trailingSlash: true,
				images: { unoptimized: true },
			}
		: {}),
	...(basePath
		? {
				basePath,
				assetPrefix: `${basePath}/`,
			}
		: {}),
	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
	...(!isGitHubPagesBuild
		? {
				async headers() {
					if (process.env.NODE_ENV !== "development") {
						return [];
					}

					return [
						{
							source: "/sw.js",
							headers: [
								{
									key: "Cache-Control",
									value: "no-store, no-cache, must-revalidate",
								},
							],
						},
					];
				},
			}
		: {}),
};

export default nextConfig;
