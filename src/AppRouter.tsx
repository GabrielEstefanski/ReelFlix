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
                <Route index element={<Home/>}/>
                <Route path="movies" element={<Movies/>}/>
                <Route path="plan-form" element={<PlanForm/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="login-help" element={<LoginHelp/>}/>
                <Route path="login-plan" element={<LoginPlan/>}/>
                <Route path="success-plan" element={<SuccessPlan/>}/>
            </Routes>
        </BrowserRouter>
    )
}