import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ViewData } from "../Components/ViewData"
import { Main } from "../Views/Main"

export const RouterS = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:id" element={<ViewData />} />   {/* // pass id to url */}
            </Routes>
        </BrowserRouter>
    )
}
