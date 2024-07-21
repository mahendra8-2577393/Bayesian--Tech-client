// components/FlightCard.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const FlightCard = ({ data, origin, destination }) => {
  return (
    <div className="flight-card">
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.XptRoGiX-IV5gIdFtcoTpwHaF7&pid=Api&P=0&h=180"
        alt="partner-program-logo" width={40}
      />
      <h3 className="partner-program">{data.partner_program}</h3>
      <div>
        <div className="originDestination">
          {origin}
          <FaArrowRight />
          {destination}
        </div>
        
        <div className="originDestination-date">
          <p>2024-07-09 - 2024-10-07</p>
        </div>
      </div>

      {!data.min_business_miles && !data.min_business_tax
        ? <div className="NA">
        <p className="fontSize">N/A</p>
        <p>Min Business Miles</p>
      </div>
        : 
       <div className="gapToAll">
          <div className="common">
        <p className="fontSize">{data.min_business_miles}</p>
        <p className="fontSize1">+ ${data.min_business_tax}</p>
        </div>
        <p>Min Business Miles</p>
       </div>
          }

{!data.min_economy_miles && !data.min_economy_tax
        ? <div className="NA">
        <p className="fontSize">N/A</p>
        <p>Min Economy Miles</p>
      </div>
        : 
    <div className="gapToAll">
          <div className="common">
        <p className="fontSize">{data.min_economy_miles}</p>
        <p className="fontSize1">+ ${data.min_economy_tax}</p>
        </div>
        <p>Min Economy Miles</p>
    </div>
          }
      {!data.min_first_miles && !data.min_first_tax
        ? <div className="NA">
          <p className="fontSize">N/A</p>
          <p>Min First Miles</p>
        </div>
        : 
       <div className="gapToAll">
         <div className="common">
        <p className="fontSize">{data.min_first_miles}</p>
        <p className="fontSize1">${data.min_first_tax}</p>
        </div>
        <p>Min First Miles</p>
       </div>
          }
    </div>
  );
};

export default FlightCard;
