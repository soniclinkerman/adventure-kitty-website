import React from "react"
import Card from "../containers/Card"

const CardList = ({characters}) => {
   
    return(
        <div>
            {
                characters.map(character => {
                    return(
                        <Card 
                        key = {character.id}
                        name={character.name}
                        image1={character.image1}
                        image2={character.image2}
                        />

                    )
                })
            }

        </div>
    )
}

export default CardList
