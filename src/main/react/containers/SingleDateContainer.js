import React, {useState} from "react";
import axios from "axios";
import APODViewer from "../components/apod/APODViewer";
import {format} from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SingleDateContainer = () => {
    const [currentData, setCurrentData] = useState([]);
    const [date, setDate] = useState(new Date());
    function update() {
        try {
            let requestURL = `/NASA_APOD?date=${format(date, "yyyy-MM-dd")}`;
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
                <h2>Single Date</h2>
                <DatePicker selected={date} onChange={(date) => setDate(date)} /><br />
                <input type={"button"} id={"submitButton"} value="Submit" onClick={() => update()} />
            </div>
            <APODViewer data={currentData}/>
        </React.Fragment>
    )
}

export default SingleDateContainer;