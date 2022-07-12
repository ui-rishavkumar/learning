import React from "react";

function Cards(val){
    return(
      <>
       <div className=" card-main">
          <div className="cards">
          <div className="cardsImg">
              <img src={val.imgsrc} alt="img1"/>
           </div>
          <div className="cardInfo">
            <p className="subheading">{val.subheading}</p>
            <p  className="heading">{val.heading}</p>
            <a className="link" href={val.link} target="_blank" rel="noreferer">Watch Now</a>
          </div> 
        </div>
        </div>
      </>
    )
};

export default Cards;