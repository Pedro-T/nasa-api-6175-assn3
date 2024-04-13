import APODViewer from "../components/apod/APODViewer";
import React, {useEffect} from "react";
import useStore from "../store/store";


const CurrentContainer = () => {

    const {currentData, fetchCurrent} = useStore((state) => (
        {
            currentData: state.currentData,
            fetchCurrent: state.fetchCurrent
        }
    ))

    useEffect(() => {
        fetchCurrent();
    }, [fetchCurrent]);

    return (
        <React.Fragment>
            <div className={"text-center"}>
                <h1>Current APOD Image</h1>
            </div>
            <APODViewer data={currentData} />
        </React.Fragment>
    )
};

export default CurrentContainer;