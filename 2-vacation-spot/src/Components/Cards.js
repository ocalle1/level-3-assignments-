import React from "react";

function Locations(props) {
    return (
        <>
            <div className="vacationInformation">
                <div>
                    <div className="images">
                    <img src={props.imgUrl} alt="meridian" width="200px"/>

                    </div>
                    {/* <img src={props.imgUrl} alt="meridian" width="200px"/> */}
                    <h1 className="place">{props.place}</h1>
                </div>
                <h5>${props.price}</h5>
                <h3>{props.timeToGo}</h3>

            </div>
        </>
    )
};



export default Locations;