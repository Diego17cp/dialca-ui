import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ThemeProvider } from "./providers";
import { LazyWrapper } from "@/core/components";
import { CustomizationPage, GettingStartedPage, HomePage } from "./routes";
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
							</Route>
						</Route>
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
