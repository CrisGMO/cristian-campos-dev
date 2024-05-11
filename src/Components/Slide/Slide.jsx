import React, {StrictMode} from "react"

function Slide(url) {
    return (
        <StrictMode>
                    <div className="slide">
                        <img src={url.url} alt="" />
                    </div>
        </StrictMode>
    )
}

export default Slide