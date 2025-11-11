import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { ThemeProvider } from "./providers";
import { LazyWrapper } from "@/core/components";
import { HomePage } from "./routes";
import { WebLayout } from "./layouts";

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
						<Route path="docs">
							<Route
								index
								element={
									<Navigate to="/docs/overview/getting-started" />
								}
							/>
							<Route path="overview">
								<Route index element={<Navigate to="/docs/overview/getting-started" />} />
								<Route
									path="getting-started"
									element={
										<LazyWrapper>
											<div>Getting Started Page</div>
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
