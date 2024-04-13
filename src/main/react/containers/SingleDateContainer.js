import React from "react";
import APODViewer from "../components/apod/APODViewer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useStore from "../store/store";

const SingleDateContainer = () => {
    const {currentData, singleDate, setSingleDate, fetchSingleDate} = useStore((state) => (
        {
            currentData: state.currentData,
            singleDate: state.singleDate,
            setSingleDate: state.setSingleDate,
            fetchSingleDate: state.fetchSingleDate
        }
    ))

    return (
        <React.Fragment>
            <div className="text-center">
                <h2>Single Date</h2>
                <DatePicker selected={singleDate} onChange={(date) => setSingleDate(date)} /><br />
                <input type={"button"} id={"submitButton"} value="Submit" onClick={() => fetchSingleDate()} />
            </div>
            <APODViewer data={currentData}/>
        </React.Fragment>
    )
}

export default SingleDateContainer;