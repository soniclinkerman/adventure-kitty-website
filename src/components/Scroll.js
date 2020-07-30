import React from "react"

const Scroll = ({children}) => {
    return(
        <div style={{overflowY: "scroll", border: "1px solid lightgray", height: "519px"}}>
            {children}
        </div>
    )
}

export default Scroll
