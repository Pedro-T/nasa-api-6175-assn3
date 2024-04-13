import React from "react";
import useStore from "../store/store"
import APODViewer from "../components/apod/APODViewer";

const CountContainer = () => {

    const {currentData, setCount, fetchRandom} = useStore((state) => (
        {
            currentData: state.currentData,
            setCount: state.setCount,
            fetchRandom: state.fetchRandom
        }
    ))

    return (
        <React.Fragment>
            <div className="text-center">
                <h2>Random APOD Images</h2>
                <p>How many? <input type={"text"} id={"countField"} onChange={(e) => {
                    console.log(e.target.value)
                    setCount(e.target.value)
                }}/></p>
                <input type={"button"} id={"submitButton"} value="Submit" onClick={() => fetchRandom()} />
            </div>
            <APODViewer data={currentData}/>
        </React.Fragment>
    )
}

export default CountContainer;