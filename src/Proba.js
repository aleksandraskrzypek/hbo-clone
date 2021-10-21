import React,{useState, useEffect} from 'react'
import axios from "axios"
import './Proba.css'

function Proba() {
    const [name, setName] = useState('');







    return (
        <div>
            <p>Bla bla</p> <br/>
            <p>Bla bla</p> <br/>
            <p>Bla bla</p> <br/>
            <p>Bla bla</p> <br/>
            <p>Bla bla</p> <br/>

            <div className="tooltip"> Hover over me
                  <span className="tooltiptext">Tooltip text</span>
            </div>
            <h1>Name: </h1>
        </div>
    )
}

export default Proba
