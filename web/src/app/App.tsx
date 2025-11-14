import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ThemeProvider } from "./providers";
import { LazyWrapper } from "@/core/components";
import { ComponentPage, ComponentsPage, CustomizationPage, GettingStartedPage, HomePage, ThemingPage } from "./routes";
import { DocsLayout, WebLayout } from "./layouts";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<Routes>
					<Route path="/" element={<WebLayout />}>
						<Route
							index
							element={
								<LazyWrapper>
									<HomePage />
								</LazyWrapper>
							}
						/>
						<Route path="docs" element={<DocsLayout />}>
							<Route
								index
								element={
									<Navigate to="/docs/overview/getting-started" />
								}
							/>
							<Route path="overview">
								<Route
									index
									element={
										<Navigate to="/docs/overview/getting-started" />
									}
								/>
								<Route
									path="getting-started"
									element={
										<LazyWrapper>
											<GettingStartedPage />
										</LazyWrapper>
									}
								/>
								<Route
									path="customization"
									element={
										<LazyWrapper>
											<CustomizationPage />
										</LazyWrapper>
									}
								/>
								<Route
									path="theming"
									element={
										<LazyWrapper>
											<ThemingPage />
										</LazyWrapper>
									}
								/>
								<Route
									path="components"
									element={
										<LazyWrapper>
											<ComponentsPage />
										</LazyWrapper>
									}
								/>
							</Route>
							<Route path="components">
								<Route
									index
									element={
										<Navigate to="/docs/overview/components" />
									}
								/>
								<Route
									path=":componentName"
									element={
										<LazyWrapper>
											<ComponentPage />
										</LazyWrapper>
									}
								/>
							</Route>
						</Route>
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
