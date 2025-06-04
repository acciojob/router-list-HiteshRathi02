import React from "react";
import { useParams } from "react-router-dom";

export default function ItemDetails (){
    const {id} = useParams();
    return(
        <div>
            <h1>{`Item ${id}`}</h1>
            <p>{`Description for Item ${id}`}</p>
        </div>
    )
}