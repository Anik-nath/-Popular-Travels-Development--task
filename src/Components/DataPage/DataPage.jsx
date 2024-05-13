import React from 'react';
import { useEffect,useState } from "react";

const DataPage = () => {
    const [flightOffers, setFlightOffers] = useState([]);

    useEffect(() => {
      fetch("../src/assets/data/LHR_CDG_ADT1_TYPE_1.txt")
        .then((response) => response.text())
        .then((data) => {
          const parsedData = JSON.parse(data);
          console.log(parsedData.flightOffer);
          setFlightOffers(parsedData.flightOffer);
        });
    }, []);
    return (
        <>
            <div className="border border-l-0 border-r-0 border-t-0">
                    <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold">Master price</h1>
                    </div>
                </div>
            <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                <section>
                <div className="flex flex-row justify-center py-4">
                    <button className="p-2 border">Round Trip</button>
                    <button className="p-2 border bg-blue-800 text-white">
                    One Way
                    </button>
                    <button className="p-2 border">Multi city</button>
                </div>
                <div className="grid md:grid-cols-8 lg:grid-cols-8 grid-cols-4 border-blue-800 border-1 border-l-0 border-r-0 border py-4 gap-4">
                    <div>
                    <input
                        className="w-full p-2 border border-black"
                        type="text"
                        name="LHR"
                        id="LHR"
                        placeholder="LHR"
                    />
                    </div>
                    <div>
                    <input
                        className="w-full p-2 border border-black"
                        type="text"
                        name="CDT"
                        id="CDT"
                        placeholder="CDT"
                    />
                    </div>
                    <div>
                    <input
                        className="w-full p-2 border border-black"
                        type="date"
                        name="date"
                        id="date"
                        placeholder="date"
                    />
                    </div>
                    <div>
                    <select className="w-full p-2 border border-black" name="day" id="day">
                        <option value="Day">Day -</option>
                        <option value="Day">1</option>
                        <option value="Day">2</option>
                        <option value="Day">3</option>
                    </select>
                    </div>
                    <div>
                    <select className="w-full p-2 border border-black" name="day" id="day">
                        <option value="Day">Day +</option>
                        <option value="Day">1</option>
                        <option value="Day">2</option>
                        <option value="Day">3</option>
                    </select>
                    </div>
                
                    <div>
                    <select className="w-full p-2 border border-black" name="day" id="day">
                        <option value="Day">Anytime</option>
                    </select>
                    </div>
                    <div>
                    <select className="w-full p-2 border border-black" name="day" id="day">
                        <option value="Day">ADT</option>
                    </select>
                    </div>
                
                    <div>
                    <select className="w-full p-2 border border-black" name="day" id="day">
                        <option value="Day">1</option>
                    </select>
                    </div>
                </div>
                <div className="flex flex-row justify-between border-blue-800 border-1 border-l-0 border-r-0 border-t-0 border py-4">
                    <div id="part-left" className="flex flex-row items-center gap-2">
                    <div>
                        <input type="checkbox" name="Extract" id="Extract" />
                    </div>
                    <div className='font-semibold'>Extract option</div>
                    </div>
                    <div id="part-middel" className="flex flex-row gap-2 items-center">
                    <div className='font-semibold'>Environment</div>
                    <div className='font-semibold flex gap-2 flex-row items-center'>
                        <input type="radio" name="radio" id="Dummy" value="Dummy" />
                        <span>Dummy</span>
                    </div>
                    <div className='font-semibold flex gap-2 flex-row items-center'>
                        <input type="radio" name="radio" id="PDT" value="PDT" />
                        <span>PDT</span>
                    </div>
                    </div>
                    <div id="part-right">
                    <div>
                        <button className="bg-blue-800 py-1 px-4 text-white rounded-sm">
                        search
                        </button>
                    </div>
                    </div>
                </div>
                </section>
                {/* data parsed section start */}
                <section>
                {flightOffers ? (
                    <div>
                    <p>Data parsed successfully</p>
                    <div className="relative overflow-x-auto pt-4">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                            <tr>
                            <th scope="col" className="px-6 py-3">
                                Flight
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aircraft
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Class
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fare
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Route
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Departure
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Arrival
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Duration
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {flightOffers.map((offer, index) => (
                            // Iterate over flight offers
                            <tr
                                key={index}
                                className="bg-white border-b border border-red-300 border-r-0 border-l-0 border-t-0"
                            >
                                {/* Flight and Aircraft */}
                                <td className="px-6 py-4">
                                {offer.itineraries[0].segments.map((itinerary, i) => (
                                    // Iterate over segments to display flight and aircraft
                                    <tr
                                    key={i}
                                    scope="row"
                                    className="px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                    <td>
                                        {itinerary.marketingCarrier}
                                        {itinerary.aircraft}
                                    </td>
                                    </tr>
                                ))}
                                </td>

                                {/* Flight Number */}
                                <td className="px-6 py-4">
                                {offer.itineraries[0].segments.map((itinerary, i) => (
                                    // Iterate over segments to display flight number
                                    <tr
                                    key={i}
                                    scope="row"
                                    className="px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                    <td>{itinerary.flightNumber}</td>
                                    </tr>
                                ))}
                                </td>
                                
                                {/* Class */}
                                <td className="px-6 py-4">
                                {offer.class.map((classArray, index) => (
                                    // Iterate over class array to display class
                                    <tr
                                    key={index}
                                    scope="row"
                                    className="px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                    {classArray.map((classItem, idx) => (
                                        // Iterate over class items to display each item
                                        <tr key={idx}>{classItem}</tr>
                                    ))}
                                    </tr>
                                ))}
                                </td>

                                {/* Fare Basis */}
                                <td className="px-6 py-4">
                                {offer.fareBasis.map((classArray, index) => (
                                    // Iterate over fare basis array to display fare basis
                                    <tr
                                    key={index}
                                    scope="row"
                                    className="px-6 py-4 font-medium whitespace-nowrap"
                                    >
                                    {classArray.map((classItem, idx) => (
                                        // Iterate over fare basis items to display each item
                                        <tr key={idx}>{classItem}</tr>
                                    ))}
                                    </tr>
                                ))}
                                </td>

                                {/* Route */}
                                <td className="px-6 py-4">
                                {offer.itineraries[0].segments.map((segment, j) => (
                                    // Iterate over segments to display route
                                    <tr key={j}>
                                    {segment.departure.iataCode}-
                                    {segment.arrival.iataCode}
                                    </tr>
                                ))}
                                </td>

                                {/* Departure */}
                                <td className="px-6 py-4">
                                {offer.itineraries[0].segments.map((segment, j) => (
                                    // Iterate over segments to display departure time
                                    <tr key={j}>
                                    {segment.departure.at}
                                    </tr>
                                ))}
                                </td>

                                {/* Arrival */}
                                <td className="px-6 py-4">
                                {offer.itineraries[0].segments.map((segment, j) => (
                                    // Iterate over segments to display arrival time
                                    <tr key={j}>
                                    {segment.arrival.at}
                                    </tr>
                                ))}
                                </td>

                                {/* Duration */}
                                <td className="px-6 py-4">
                                {offer.itineraries[0].duration}
                                </td>

                                {/* Price and Select Button */}
                                <td className="px-6 py-4 flex flex-col">
                                ${offer.price}
                                <button className="text-white uppercase bg-blue-800 py-1 px-2 rounded-sm">
                                    Select
                                </button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                ) : (
                    <p>Loading flight data...</p>
                )}
                </section>
            </div>
        </>
    );
};

export default DataPage;