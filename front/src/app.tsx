import { Suspense } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { AppRouter } from "./Router"
import Carga from "./components/carga"

function App() {
    return (
        <Router>
            <Suspense fallback={<Carga />}>
                <AppRouter />
            </Suspense>
        </Router>
    )

}
export default App