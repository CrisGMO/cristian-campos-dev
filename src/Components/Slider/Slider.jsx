import React, {StrictMode} from "react"
import Slide from "../Slide/Slide"
import conocimientos from './conocimientos.json'

function Slider () {
    const keys = Object.keys(conocimientos);
    return (
        keys.map ( (key) => {
            return (
                <Slide url={conocimientos[key]}></Slide>
            )
        })
    )
}

export default Slider