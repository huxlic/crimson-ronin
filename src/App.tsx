import {Route, Routes} from "react-router";
import {navLinks} from "./shared/navLinks.ts";

const App = () => {
	return (
		<div className={"min-h-screen bg-black"}>
			<Routes>
				{navLinks.map(({href, element: Element}) => (
					Element && <Route key={href} path={href} element={<Element/>} />
				))}
			</Routes>
		</div>
	)
}
export default App
