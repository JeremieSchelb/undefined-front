import React, { useState, useEffect } from "react";
 import { useParams } from 'react-router-dom';
// import axios from "axios";

const Rescuer = (props) => {

    const [RescuerData, setRescuerData] = useState(null);
    const params = useParams();

    useEffect(() => {
        if (params.name !== '') {
                    setRescuerData(params.name);
        }
    }, [params.name]);


    return (
        RescuerData ? <h1>{ RescuerData }</h1> :  <h1>no data</h1>
    )
}
export default Rescuer;
