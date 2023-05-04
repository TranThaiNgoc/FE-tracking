import React, { useState } from "react";
import "./index.css";
import axios from "axios";

function formatTime(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}

function App() {
  const [trackingData, setTrackingData] = useState({});

  const callAPI = () => {
    axios
      .get("http://127.0.0.1:8000/api/tracking")
      .then((response) => {
        setTrackingData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-100">
      <div>
        <button onClick={callAPI}>Call API</button>
        <div>{trackingData.description}</div>
        <div>{trackingData.trackingNumber}</div>
      </div>
      <header>
        <div className="background-0C69F3 p-4 flex justify-center items-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-white font-normal">
              <span>LAUNCHING THIS NEW YEAR ON 1ST JAN 2023</span>
            </h1>
            <button className="text-white border-custom border-133 h-31 text-poppins text-center">
              Register Now
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="pl-[91px] py-[21px]">
            <img src="./logo.png" alt="Logo" className="w-[240px] h-[33px]" />
          </div>
          <div className="flex items-center space-x-3 pr-[91px] py-[21px] text-white text-base">
            <img src="./Vector.png" alt="Logo" className="w-240 h-33" />
            <p className="color-131466">Info@hajexbolt.com</p>
            <img
              src="./fi-rr-phone-call.png"
              alt="Logo"
              className="pl-10 w-240 h-33"
            />
            <p className="color-131466">514 941 5145</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="items-center space-x-3 pl-[91px] py-[21px] color-131466">
            <span>Carrier</span>
            <span>Shipping Solution</span>
            <span>Tracking</span>
            <span>Integration</span>
          </div>
          <div className="flex items-center space-x-3 pr-[91px] py-[21px] text-white text-base color-131466">
            <span className="border-color-0C69F3">Legacy Login</span>
            <span className="border-color-0C69F3">Login</span>
            <span className="border-color-0C69F3 background-0C69F3 text-white shadow-md hover:shadow-lg hover:translate-x-1 transition-all duration-300">
              Sign up
            </span>

            <div className="pl-5">
              <span className="color-131466 pr-2">FR</span>
              <span className="border-2 border-color-131466 rounded-5 p-1">
                EN
              </span>
            </div>
            <img src="./fi-rr-search.png" alt="fi-rr-search" className="pl-5" />
            <img src="./fi-rr-menu-burger.png" alt="fi-rr-menu-burger" />
          </div>
        </div>
        <div className="h-[134px] artboard">
          <img src="./Artboard.png" alt="Artboard" className="w-full" />
        </div>
      </header>
      <main className="p-4">
        <div
          className="my-[60px] bg-gray-100 shadow-md hover:shadow-lg hover:translate-x-1 transition-all duration-300 p-4"
          style={{ boxShadow: "-2px 2px 6px 3px rgba(0, 0, 0, 0.3)" }}
        >
          <div className="grid grid-cols-10 ">
            <div className="col-span-1 text-sm text-center grid-rows-2 items-center">
              <p>Carrier</p>
              <img
                src="./local-canpar.png"
                alt="Artboard"
                className="w-2/3 max-h-5"
              />
            </div>
            {/* <div>{trackingData.description}</div>
            <div>{trackingData.trackingNumber}</div> */}
            <div className="col-span-1 text-sm text-center grid-rows-2">
              <p>Pickup#</p>
              <p>{trackingData.trackingNumber}</p>
            </div>
            <div className="col-span-1 text-sm text-center grid-rows-2">
              <p>Master Tracking</p>
              <p>{trackingData.description}</p>
            </div>
            <div className="col-span-1 text-sm text-center grid-rows-2">
              <p>Canpar Tracking</p>
              <p>{trackingData.trackingNumber}</p>
            </div>
            <div className="col-span-1 text-sm text-center grid-rows-2">
              <p>Shipment Booked</p>
              <p>{formatTime(trackingData.actual_pickup)}</p>
            </div>
            <div className="col-span-1 text-sm text-center grid-rows-2">
              <p>Pickup Date</p>
              <p>{formatTime(trackingData.ship)}</p>
            </div>
            <div className="col-span-1 text-sm text-center grid-rows-2">
              <p>Shipment Type</p>
              <p>{formatTime(trackingData.actual_tender)}</p>
            </div>
            <div className="col-span-1 text-sm text-center grid-rows-2">
              <p>Package Count</p>
              <p>{trackingData.packageDetails}</p>
            </div>
            <div className="col-span-1 text-sm text-center grid-rows-2">
              <p>Weight </p>
              <p>PENDING</p>
            </div>
            <div className="col-span-1 text-sm text-center grid-rows-2">
              <p>Additional Services </p>
              <p className="p-1 bg-gray-300" style={{ width: '50%', margin: '0 auto' }}>{trackingData.carrierCode}</p>
            </div>
          </div>
        </div>
        <div className="my-[60px] flex justify-center">
          <div className="text-center">
            <span className="text-xl color-131466">
              Shipment Current Status:{" "}
              <p className="inline-block color-0C69F3">Picked up</p>
            </span>
            <p className="text-xs mt-2 color-131466">
              Estimate Delivery: Fri 27 Dec 2022
            </p>
          </div>
        </div>
        <div className="my-[60px] grid grid-cols-[1fr,2fr] gap-4">
          <div className="bg-gray-100 p-4 flex items-center justify-center">
            <p className="text-[18.17px] color-131466">Picked up</p>
          </div>
          <div className="bg-gray-100 p-4">
            <div
              className="relative overflow-x-auto shadow-md sm:rounded-sm px-5 py-5"
              style={{ boxShadow: "-1px 2px 6px 3px rgba(0, 0, 0, 0.3)" }}
            >
              <table className="border-separate border-spacing-y-2 border-collapse w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase color-131466">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Picked up Time/Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Barcode
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Weight
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="text-xs text-gray-700 uppercase bg-gray-50 color-131466 border border-collapse border-gray-300 rounded-md">
                {trackingData.histories &&
                    trackingData.histories.map((history, index) => (
                      <tr key={index} className="color-131466">
                        <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                          {index + 1}
                        </th>
                        <td className="px-6 py-2">{formatTime(history.date)}</td>
                        <td className="px-6 py-2">{history.eventDescription}</td>
                        <td className="px-6 py-2">{history.scanLocation.city + ', ' + history.scanLocation.stateOrProvinceCode}</td>
                        <td className="px-6 py-2">Pending</td>
                        <td className="px-6 py-2">Pending</td>
                        <td className="px-6 py-2 text-right">
                          <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Edit
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-gray-100 p-4 flex items-center justify-center">
            <p className="text-[18.17px] color-131466">Delivered</p>
          </div>
          <div className="bg-gray-100 p-4">
            <div
              className="relative overflow-x-auto shadow-md sm:rounded-sm px-5 py-5"
              style={{ boxShadow: "-1px 2px 6px 3px rgba(0, 0, 0, 0.3)" }}
            >
              <table className="border-separate border-spacing-y-2 border-collapse w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase color-131466">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Picked up Time/Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Barcode
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Weight
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody className="text-xs text-gray-700 uppercase bg-gray-50 color-131466 border border-collapse border-gray-300 rounded-md">
                  <tr className="color-131466">
                    <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                      1
                    </th>
                    <td className="px-6 py-2">11:25 Thur 19 Dec 2022</td>
                    <td className="px-6 py-2">Package 1</td>
                    <td className="px-6 py-2">Barcode #123</td>
                    <td className="px-6 py-2">5x5x5</td>
                    <td className="px-6 py-2">12lb</td>
                    <td className="px-6 py-2 text-right">
                      <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </div>
                    </td>
                  </tr>
                  <tr className="color-131466">
                    <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                      1
                    </th>
                    <td className="px-6 py-2">11:25 Thur 19 Dec 2022</td>
                    <td className="px-6 py-2">Package 1</td>
                    <td className="px-6 py-2">Barcode #123</td>
                    <td className="px-6 py-2">5x5x5</td>
                    <td className="px-6 py-2">12lb</td>
                    <td className="px-6 py-2 text-right">
                      <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </div>
                    </td>
                  </tr>
                  <tr className="color-131466">
                    <th className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                      1
                    </th>
                    <td className="px-6 py-2">11:25 Thur 19 Dec 2022</td>
                    <td className="px-6 py-2">Package 1</td>
                    <td className="px-6 py-2">Barcode #123</td>
                    <td className="px-6 py-2">5x5x5</td>
                    <td className="px-6 py-2">12lb</td>
                    <td className="px-6 py-2 text-right">
                      <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Edit
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <p className="text-sm">Footer</p>
      </footer>
    </div>
  );
}

export default App;
