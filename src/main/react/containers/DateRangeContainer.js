import React, {useState} from "react";
import axios from "axios";
import APODViewer from "../components/apod/APODViewer";
import {format} from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangeContainer = () => {
    const [currentData, setCurrentData] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    function update() {
        try {
            let requestURL = `/NASA_APOD?start_date=${format(startDate, "yyyy-MM-dd")}`;
            if (endDate) {
                requestURL += `&end_date=${format(endDate, "yyyy-MM-dd")}`;
            }
            axios.get(requestURL)
                .then((response) => {
                    setCurrentData(response.data)
                });
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <React.Fragment>
            <div className="text-center">
                <h2>Date Range</h2>
                <p>Start Date <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></p>
                <p>End Date <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} /></p>
                <input type={"button"} id={"submitButton"} value="Submit" onClick={() => update()} />
            </div>
            <APODViewer data={currentData}/>
        </React.Fragment>
    )
}

export default DateRangeContainer;