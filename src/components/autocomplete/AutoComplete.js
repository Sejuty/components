import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../lib/css/allspark.min.css";
import { SCButton } from "../../lib/index.cjs.js";
import { BsArrowLeft } from "react-icons/bs";
import { ReactComponent as LocationIcon } from "./tabler-icon-map-pin.svg";

const Autocomplete = () => {
  var allowGeoRecall = true;
  var countLocationAttempts = 0;
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [liveLocationSuggestions, setLiveLocationSuggestions] = useState([]);
  const [isLocationSelected, setIsLocationSelected] = useState(false);
  const [
    suggestedPlaceDropdownVisibility,
    setSuggestedPlaceDropdownVisibility,
  ] = useState(false);

  const [liveLocationLatitude, setLiveLocationLatitude] = useState(0);
  const [liveLocationLongitude, setLiveLocationLongitude] = useState(0);

  const map_base_url = "";

  const access_token =""

  const getSuggestions = async () => {
    try {
      if ((inputValue !== "") & (inputValue.length >= 3)) {
        const response = await axios.get(
          `${map_base_url}/v1/map/auto-complete?term=${inputValue}`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        const data = response.data;
        setSuggestions([...data]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!suggestedPlaceDropdownVisibility) {
      getSuggestions();
      setIsLocationSelected(false);
    } else {
      setSuggestedPlaceDropdownVisibility(!suggestedPlaceDropdownVisibility);
    }
  }, [inputValue]);

  const liveLocationURL = ``;

  const getLatAndLangOfUser = async () => {
    try {
      if (liveLocationLatitude !== 0 || liveLocationLongitude !== 0) {
        const response = await axios.get(liveLocationURL, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const data = response.data;
        console.log(data);
        setLiveLocationSuggestions([...data]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLatAndLangOfUser();
  }, [liveLocationLatitude, liveLocationLongitude]);

  useEffect(() => {
    setSuggestions(liveLocationSuggestions);
    console.log(liveLocationSuggestions[0]);
  }, [liveLocationSuggestions]);

  const fetchSuggestions = (value) => {
    const filteredSuggestions = suggestions.filter((item) => {
      const regex = new RegExp(value, "gi");
      return item.address.toLowerCase().match(regex);
    });
    setSuggestions(filteredSuggestions);
  };

  const onSelectALocation = (e) => {
    const selectedLocation = e.target.innerText;
    setInputValue(selectedLocation);
    setIsLocationSelected(true);
    setSuggestedPlaceDropdownVisibility(true);
    setSuggestions([]);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length >= 3) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const successLocationCallback = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLiveLocationLatitude(latitude);
    setLiveLocationLongitude(longitude);
  };

  const errorLocationCallback = (error) => {
    console.log(error);
  };

  const handleLocationPermission = () => {
    navigator.geolocation.getCurrentPosition(
      successLocationCallback,
      errorLocationCallback
    );
  };

  return (
    <div className="h-screen flex flex-col bg-gray-light gap-12">
     
        <div className="px-4 py-10 shadow-sm mb-4 bg-white">
          <div className="flex items-center gap-x-2">
            <div>
              <BsArrowLeft className="text-primary" />
            </div>
            <div className="text-lg font-medium">Branches Near You</div>
          </div>
        </div>
        <div className="relative">
        <div className="px-16  flex flex-col gap-2">
          <div className="font-medium">Deliver to</div>
          <input
            placeholder="V Corporate Center"
            className="w-full h-34 text-sm p-2 rounded-8 bg-white  @apply shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div
        className="absolute inset-0 top-full mt-4 flex justify-center text-xs text-center text-primary-dark"
        onClick={handleLocationPermission}
      >
        <p>Give location access to pinpoint your address</p>
      </div>
      </div>

      <div className="mx-12 rounded-8 bg-white flex flex-col gap-8 max-h-200 overflow-y-scroll z-20">
        <ul>
          {suggestions.map((item, index) => (
            <div key={index} className="px-16 py-8 flex gap-4 items-center">
              <div>
                <LocationIcon />
              </div>
              <li className="text-sm" onClick={(e) => onSelectALocation(e)}>
                {item.address || item.formatted_address}
              </li>
            </div>
          ))}
        </ul>
      </div>
    

      <div className="flex-grow"></div>
      <div className="px-16 mb-12 ">
        {isLocationSelected ? (
          <button
            type="button"
            className="bg-primary text-white w-full h-33 py-8 rounded-4"
          >
            Confirm
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="bg-gray-darker text-gray w-full h-33 py-8 rounded-4"
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
