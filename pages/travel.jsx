import React from "react";
import Card from "../components/cards";
import data from "../src/data"

function Travel() {
    const cardData = data.map((item) => {
        return <Card 
          key={item.id}
          item={item}
    
        />
      })

    return (
        <div>
            <h1>Around the World</h1>
            <section>
                {cardData}    
            </section>
        </div>
        
    )
}

export default Travel;