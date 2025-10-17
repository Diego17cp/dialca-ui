/**
 * Utility to combine multiple class names into a single string.
 * Filters out falsy values and trims extra spaces.
 *
 * @param {...(string | undefined | null | false)[]} classes - Class names to combine.
 * @returns {string} The combined class names.
 *
 * @example
 * cn("a", undefined, "b", false, "c") // "a b c"
 */
export const cn = (
	...classes: (string | undefined | null | false | Record<string, boolean>)[]
): string => {
	const filtered = classes.filter(
		(c): c is string | Record<string, boolean> => Boolean(c)
	);
	return filtered
		.map(cls => {
			// ensure cls is not null before using Object.entries
			if (cls && typeof cls === 'object') {
				return Object.entries(cls)
					.filter(([_, value]) => Boolean(value))
					.map(([key]) => key)
					.join(' ');
			}
			return cls;
		})
		.join(' ')
		.replace(/\s+/g, ' ')
		.trim();
};

/**
 * Merges two variant objects, combining their states.
 *
 * @template T
 * @param {T} base - The base variant object.
 * @param {Partial<T>} override - The override variant object.
 * @returns {T} The merged variant object.
 */
const mergeVariants = <T extends Record<string, any>>(
	base: T,
	override: Partial<T>
): T => {
	const result = { ...base };
	Object.keys(override).forEach((state) => {
		if (override[state]) {
			(result as any)[state] = {
				...(base as any)[state],
				...(override as any)[state],
			};
		}
	});
	return result;
};

// ============
// Generic Variant Hook
// ============

/**
 * Generic hook to manage CSS vs Custom Variants logic.
 * 
 * @template TStates, TVariant
 * @param {string} variant - Variant key.
 * @param {Record<string, TStates>} customVariants - Custom variants from props.
 * @param {Record<string, boolean | undefined>} states - Component states.
 * @param {boolean} extendDefault - If true, merges custom variant with default variant.
 * @param {string} componentName - Component name for CSS classes (e.g., 'input-field', 'button').
 * @returns {{ shouldUseCSS: boolean, getStyles: (element: keyof TVariant) => string }}
 */
export const useVariantStyles = <TStates extends Record<string, any>, TVariant extends Record<string, any>>(
	variant: string,
	customVariants: Record<string, TStates> = {},
	states: Record<string, boolean | undefined>,
	extendDefault: boolean,
	componentName: string
) => {
	const hasCustomVariants = Object.keys(customVariants).length > 0;
	const shouldUseCSS = !hasCustomVariants || extendDefault;

	/**
	 * Returns the styles for a given element.
	 * - If no custom variants: returns empty string (use CSS classes only).
	 * - If custom variants exist: processes and returns custom classes.
	 */
	const getStyles = (element: keyof TVariant): string => {
		// If no custom variants, return empty string to use CSS classes only.
		if (!hasCustomVariants) return "";
		// If custom variants exist, process them.
		const selectedVariant = customVariants[variant];
		if (!selectedVariant) return "";

		let styles: string[] = [];

		// Add base styles from the selected variant.
		if (selectedVariant.normal) {
			const normalStyles = (selectedVariant.normal as any)[element];
			if (normalStyles) styles.push(normalStyles);
		}
		// Add styles for each active state.
		Object.entries(states).forEach(([stateName, isActive]) => {
			if (isActive && stateName !== "normal" && selectedVariant[stateName]) {
				const stateStyles = (selectedVariant[stateName] as any)[element];
				if (stateStyles) styles.push(stateStyles);
			}
		})
		return cn(...styles);
	}
	return {
		shouldUseCSS,
		getStyles,
		hasCustomVariants
	}
}
/**
 * Generic hook to get styles for any variant-based component.
 *
 * @template TStates, TVariant
 * @param {string} variant - Variant key.
 * @param {Record<string, TStates>} customVariants - Custom variants.
 * @param {Record<string, boolean | undefined>} states - State flags.
 * @param {boolean} extendDefault - If true, merges custom variants with defaults.
 * @param {Record<string, TStates>} defaultVariants - Default variants.
 * @param {Record<string, Partial<TStates>>} variantOverrides - Variant overrides.
 * @returns {{ getStyles: (element: keyof TVariant) => string }}
 */
export const useVariantTWStyles = <
	TStates extends Record<string, any>,
	TVariant extends Record<string, any>
>(
	variant: string,
	customVariants: Record<string, TStates> = {},
	states: Record<string, boolean | undefined>,
	extendDefault: boolean,
	defaultVariants: Record<string, TStates>,
	variantOverrides: Record<string, Partial<TStates>>
) => {
	const processedVariants: Record<string, TStates> = {
		...defaultVariants,
	};
	Object.entries(variantOverrides).forEach(([key, override]) => {
		processedVariants[key] = mergeVariants(
			defaultVariants.default || ({} as TStates),
			override
		);
	});
	Object.entries(customVariants).forEach(([key, customVariant]) => {
		if (extendDefault) {
			processedVariants[key] = mergeVariants(
				defaultVariants.default || ({} as TStates),
				customVariant
			);
		} else {
			processedVariants[key] = customVariant;
		}
	});
	const selectedVariant =
		processedVariants[variant] ||
		processedVariants.default ||
		({} as TStates);
	/**
	 * Returns the styles for a given element, considering the current states.
	 * @param {keyof TVariant} element - The element to get styles for.
	 * @returns {string} The computed class names.
	 */
	const getStyles = (element: keyof TVariant) => {
		let styles: string[] = [];
		if (selectedVariant.normal) {
			const normalStyles = (selectedVariant.normal as any)[element];
			if (normalStyles) styles.push(normalStyles);
		}
		Object.entries(states).forEach(([stateName, isActive]) => {
			if (
				isActive &&
				stateName !== "normal" &&
				selectedVariant[stateName]
			) {
				const stateStyles = (selectedVariant[stateName] as any)[
					element
				];
				if (stateStyles) styles.push(stateStyles);
			}
		});
		return cn(...styles);
	};

	return { getStyles };
};

