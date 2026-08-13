import {Route, Routes} from "react-router";
import Homepage from "./pages/Homepage.tsx";

const App = () => {
	return (
		<div className={"font-marcellus"}>
			<Routes>
				<Route path="/" element={<Homepage/>} />
			</Routes>
		</div>
	)
}
export default App
