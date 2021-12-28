import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import NavBar from "./components/layout/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DrawingPage from "./components/paint/DrawingPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <ToastContainer />
                <NavBar />
                <Switch>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/" component={Dashboard} />
                    <Route path="/draw" component={DrawingPage} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
