import React from "react"

const SearchBox = ({type,searchChange,}) => {
    return(
        <div className="pa2">
            <input 
            className="search-input pa3 ba b--gray bg-white tc"
            type={type} onChange={searchChange}/>
        </div>
    )
}

export default SearchBox
