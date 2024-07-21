import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ onSubmit }) => {
  const [origin, setOrigin] = useState('SYD');
  const [destination, setDestination] = useState('JFK');
  const [cabinClass, setCabinClass] = useState('Business'); // Changed to 'Business' to match the Python script
  const [error , setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('https://bayesian-tech-server.onrender.com/proxy', {
        url: 'https://cardgpt.in/apitest',
        method: 'POST',
        headers: {
          'accept': 'application/json, text/plain, */*',
          'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
          'cache-control': 'no-cache',
          'content-type': 'application/json',
        },
        data: {
          origin,
          destination,
          partnerPrograms: [
            'Air Canada',
            'United Airlines',
            'KLM',
            'Qantas',
            'American Airlines',
            'Etihad Airways',
            'Alaska Airlines',
            'Qatar Airways',
            'LifeMiles',
          ],
          stops: 2,
          departureTimeFrom: '2024-07-09T00:00:00Z',
          departureTimeTo: '2024-10-07T00:00:00Z',
          isOldData: false,
          limit: 302,
          offset: 0,
          cabinSelection: [cabinClass],
          date: '2024-07-09T12:00:17.796Z',
        },
      });
      onSubmit(response.data ,origin , destination);
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h1>Choose Origin & Desitination Airports </h1>
      <div className='backGround'>
      <label htmlFor="origin">Origin:</label>
      <select className="input" value={origin} onChange={(e) => setOrigin(e.target.value)}>
        <option value="JFK">JFK</option>
        <option value="DEL">DEL</option>
        <option value="SYD">SYD</option>
        <option value="BOM">BOM</option>
        <option value="BNE">BNE</option>
        <option value="BLR">BLR</option>
      </select>
      </div>
    
     <div className='backGround'>
      
     <label htmlFor="destination">Destination:</label>
      <select className="input" value={destination} onChange={(e) => setDestination(e.target.value)}>
        <option value="JFK">JFK</option>
        <option value="DEL">DEL</option>
        <option value="SYD">SYD</option>
        <option value="LHR">LHR</option>
        <option value="CDG">CDG</option>
        <option value="DOH">DOH</option>
        <option value="SIN">SIN</option>
      </select>
     </div>

   <div className='backGround'>
   <label htmlFor="cabinClass">Cabin Selection:</label>
      <select className="input" value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}>
        <option value="Economy">Economy</option>
        <option value="Business">Business</option>
        <option value="First">First</option>
      </select>
   </div>

      <button className='btn' type="submit" disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
      
    </form>
  );
};

export default SearchForm;
