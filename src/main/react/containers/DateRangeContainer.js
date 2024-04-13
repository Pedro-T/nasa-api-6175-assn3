import React from "react";
import APODViewer from "../components/apod/APODViewer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useStore from "../store/store";

const DateRangeContainer = () => {

    const {currentData, startDate, endDate, setStartDate, setEndDate, fetchDateRange} = useStore((state) => (
        {
            currentData: state.currentData,
            startDate: state.startDate,
            endDate: state.endDate,
            setStartDate: state.setStartDate,
            setEndDate: state.setEndDate,
            fetchDateRange: state.fetchDateRange
        }
    ))

    return (
        <React.Fragment>
            <div className="text-center">
                <h2>Date Range</h2>
                <p>Start Date <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></p>
                <p>End Date <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /></p>
                <input type={"button"} id={"submitButton"} value="Submit" onClick={() => fetchDateRange()} />
            </div>
            <APODViewer data={currentData}/>
        </React.Fragment>
    )
}

export default DateRangeContainer;