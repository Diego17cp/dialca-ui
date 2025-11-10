import { lazy } from "react";

export function lazyPage<T extends React.ComponentType<unknown>>(
	importFn: () => Promise<{ [key: string]: T } | { default: T }>,
	exportName?: string
) {
	return lazy(() =>
		importFn().then((module) => ({
			default: exportName
				? (module as Record<string, T>)[exportName as string]
				: module.default,
		}))
	);
}