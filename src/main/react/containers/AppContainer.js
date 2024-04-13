import React from 'react';
import Nav from "../components/navigation/Nav";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import CurrentContainer from "./CurrentContainer";
import CountContainer from "./CountContainer";
import DateRangeContainer from "./DateRangeContainer";
import SingleDateContainer from "./SingleDateContainer";

const AppContainer = () => {
    return (
        <React.Fragment>
            <Nav />
            <Routes>
                <Route path="/" element={<Navigate replace to="/current" />} />
                <Route path="/current" element={<CurrentContainer />} />
                <Route path="/random" element={<CountContainer />} />
                <Route path="/date-single" element={<SingleDateContainer />} />
                <Route path="/date-range" element={<DateRangeContainer />} />
            </Routes>
            <Outlet />
        </React.Fragment>
    );
}

export default AppContainer;