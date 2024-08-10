import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Movies from "./pages/movies/";
import Login from "./pages/login";
import LoginHelp from "./pages/loginHelp";
import PlanForm from "./pages/plans/planForm";
import LoginPlan from "./pages/plans/loginPlan";
import SuccessPlan from "./pages/plans/successPlan";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movies" element={<Movies />}></Route>
                <Route path="plan-form" element={<PlanForm />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="login-help" element={<LoginHelp />}></Route>
                <Route path="login-plan" element={<LoginPlan />}></Route>
                <Route path="success-plan" element={<SuccessPlan />}></Route>
            </Routes>
        </BrowserRouter>
    )
}