import { lazyPage } from "./lazyFactory";

export const HomePage = lazyPage(
	() => import("@/features/home/pages/Home"),
	"Home"
);
