import Nav from "../components/navigation/Nav";
import APODViewer from "../components/apod/APODViewer";
import axios from "axios";
import {useEffect, useState} from "react";
import React from "react";


const CurrentContainer = () => {
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        const getData = () => {
            try {
                const response = axios.get("/NASA_APOD")
                    .then((response) => {
                        setCurrentData(response.data)
                    });
            } catch(e) {
                console.error(e);
            }
        };

        getData();
    }, []);


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