import {BrowserRouter, Route, Routes} from "react-router";
import Dashboard from "./views/dashboard/Dashboard.tsx";
import QueryProvider from "./config/providers/query.provider.tsx";
import ReduxProvider from "./config/providers/redux.provider.tsx";
import Menu from "./views/dashboard/Menu.tsx";

function App() {
    return (
        <QueryProvider><ReduxProvider><BrowserRouter><Routes>
                        {/*<Route path="/" element={<Home/>}/>*/}
                        <Route path="/" element={<Dashboard/>}><Route path="/menu" element={<Menu/>}/></Route>
        </Routes></BrowserRouter></ReduxProvider></QueryProvider>
    )
}

export default App
