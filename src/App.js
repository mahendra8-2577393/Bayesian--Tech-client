import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import FlightCard from "./components/FlightCard";
import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const fetchDefaultData = () => {
    return {
      data: [
        {
          min_business_miles: 85000,
          min_business_tax: 10126,
          min_economy_miles: 42500,
          min_economy_tax: 8632,
          min_first_miles: null,
          min_first_tax: null,
          partner_program: "Alaska Airlines",
        },
        {
          min_business_miles: null,
          min_business_tax: null,
          min_economy_miles: 53500,
          min_economy_tax: 189,
          min_first_miles: null,
          min_first_tax: null,
          partner_program: "KLM",
        },
        {
          min_business_miles: 144600,
          min_business_tax: 177,
          min_economy_miles: 55200,
          min_economy_tax: 158,
          min_first_miles: null,
          min_first_tax: null,
          partner_program: "Qantas",
        },
      ],
    };
  };

  useEffect(() => {
    // Set default search results on component mount
    const defaultData = fetchDefaultData();
    setSearchResults(defaultData);
  }, []);

  const handleSearchResults = (data, origin, destination) => {
    setSearchResults(data);
    setOrigin(origin);
    setDestination(destination);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSearchResults} />

      {searchResults ? (
        searchResults.data && searchResults.data.length > 0 ? (
          <div className="card-container">
            {searchResults.data.map((result, index) => (
              <FlightCard
                key={index}
                data={result}
                origin={origin}
                destination={destination}
              />
            ))}
          </div>
        ) : (
          <p className="try-btn">Try another search route.</p>
        )
      ) : (
        <p>Try search button.</p>
      )}
    </div>
  );
};

export default App;
