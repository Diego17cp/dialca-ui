import { lazyPage } from "./lazyFactory";

export const HomePage = lazyPage(
	() => import("@/features/home/pages/Home"),
	"Home"
);
export const GettingStartedPage = lazyPage(
	() => import("@/features/getting-started/pages/GettingStarted"),
	"GettingStarted"
);
export const CustomizationPage = lazyPage(
	() => import("@/features/customization/pages/Customization"),
	"Customization"
);
export const ThemingPage = lazyPage(
	() => import("@/features/theming/pages/Theming"),
	"Theming"
);
export const ComponentsPage = lazyPage(
	() => import("@/features/components/pages/ComponentsList"),
	"ComponentsList"
);