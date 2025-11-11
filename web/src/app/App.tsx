import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./providers";
import { LazyWrapper } from "@/core/components";
import { HomePage } from "./routes";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<Routes>
					<Route
						path="/"
						index
						element={
							<LazyWrapper>
								<HomePage />
							</LazyWrapper>
						}
					/>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
