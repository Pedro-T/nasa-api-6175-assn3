import React, {useState} from "react";
import axios from "axios";
import APODViewer from "../components/apod/APODViewer";

const CountContainer = () => {

    const [currentData, setCurrentData] = useState([]);

    function updateRandom() {
        try {
            axios.get(`/NASA_APOD?count=${document.getElementById("countField").value}`)
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
                <h2>Random APOD Images</h2>
                <p>How many? <input type={"text"} id={"countField"} /></p>
                <input type={"button"} id={"submitButton"} value="Submit" onClick={() => updateRandom()} />
            </div>
            <APODViewer data={currentData}/>
        </React.Fragment>
    )
}

export default CountContainer;