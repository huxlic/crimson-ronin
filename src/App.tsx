import {Route, Routes} from "react-router";
import Homepage from "./pages/Homepage.tsx";

const App = () => {
	return (
		<div className={"min-h-screen"}>
			<Routes>
				<Route path="/" element={<Homepage/>} />
			</Routes>
		</div>
	)
}
export default App
