import React, {useEffect, useState} from 'react';
import axios from 'axios';


const APODViewer = ({data}) => {
    let colClass = 'col-4';
    if (data.length === 2) {
        colClass = "col-6";
    } else if (data.length === 1) {
        colClass = "col-10";
    }

    return (
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    {data.map((entry, index) => (
                        <div key={index} className={colClass}>
                            <div className="card">
                                <a href={entry.url} target="_blank">
                                    <img src={entry.url} className="card-img-bottom" alt="APOD Image"/>
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title">{entry.title}</h5>
                                    <p>Date: {entry.date}</p>
                                    <p>{entry.explanation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default APODViewer;