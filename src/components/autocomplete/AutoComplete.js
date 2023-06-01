import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../lib/css/allspark.min.css";
import { BsArrowLeft } from "react-icons/bs";
import { ReactComponent as LocationIcon } from "./tabler-icon-map-pin.svg";

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [liveLocationSuggestions, setLiveLocationSuggestions] = useState([]);
  const [isLocationSelected, setIsLocationSelected] = useState(false);
  const [
    isSuggestedPlaceDropdownVisible,
    setIsSuggestedPlaceDropdownVisible,
  ] = useState(false);

  const [isLocationLive, setIsLocationLive] = useState(false);
  const [liveLocationLatitude, setLiveLocationLatitude] = useState(0);
  const [liveLocationLongitude, setLiveLocationLongitude] = useState(0);
  const liveLocationSuggestionsForDropdown = liveLocationSuggestions.filter(
    (_, index) => index !== 0
  );
  const [
    isLocationAccessPermissionVisible,
    setIsLocationAccessPermissionVisible,
  ] = useState(true);

  const locationAccesPermissionStyle = `absolute inset-0 top-full mt-24 flex justify-center text-xs text-center text-primary-dark ${
    isLocationAccessPermissionVisible ? "" : "hidden"
  }`;


  const map_base_url = "https://consumer.dev.shadowchef.co";

  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOiIxM2Q0YjAxYi0wZDZiLTQzMTgtYmVkZi0yYmFmNzFlYjMyZTgiLCJleHAiOjE2ODYwNjAzMDUsInJpZCI6ImExOGM1YTM2LWM1YjItNDcwYS1hYWJmLTkyNWZmYjk2YzExYiIsInVpZCI6Mzh9.JKcGUhDdIESKZAg3dThSmMAFfE10xFdxgjToaZqkeAE";

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
    if (!isSuggestedPlaceDropdownVisible && !isLocationLive) {
      getSuggestions();
      setIsLocationSelected(false);
    } else if (isLocationLive) {
      setSuggestions(liveLocationSuggestionsForDropdown);
      setIsLocationLive(false);
    } else {
      setIsSuggestedPlaceDropdownVisible(!isSuggestedPlaceDropdownVisible);
    }
  }, [inputValue]);

  const liveLocationURL = `${map_base_url}/v1/map/geocoding?lat=${liveLocationLatitude}&lon=${liveLocationLongitude}`;

  const getLiveLatAndLangOfUser = async () => {
    try {
      if (liveLocationLatitude !== 0 || liveLocationLongitude !== 0) {
        const response = await axios.get(liveLocationURL, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const data = response.data;
        setLiveLocationSuggestions([...data]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLiveLatAndLangOfUser();
    setIsLocationLive(true);
  }, [liveLocationLatitude, liveLocationLongitude]);

  useEffect(() => {
    setInputValue(liveLocationSuggestions[0]?.formatted_address || "");
    setSuggestions(liveLocationSuggestionsForDropdown);
  }, [liveLocationSuggestions]);

  const fetchSuggestions = (value) => {
    const filteredSuggestions = suggestions.filter((item) => {
      const regex = new RegExp(value, "gi");
      const location = item.address || item.formatted_address;
      return location.toLowerCase().match(regex);
    });
    setSuggestions(filteredSuggestions);
  };


  const onSelectALocation = (e) => {
    const selectedLocation = e.target.innerText;
    setInputValue(selectedLocation);
    setIsLocationSelected(true);
    setIsSuggestedPlaceDropdownVisible(true);
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
    setIsLocationAccessPermissionVisible(false);
  };

  const errorLocationCallback = (error) => {
    console.log(error);
    setIsLocationAccessPermissionVisible(false);
  };

  const handleLocationPermission = () => {
    navigator.geolocation.getCurrentPosition(
      successLocationCallback,
      errorLocationCallback
    );
  };



  return (
    <div className="h-screen flex flex-col bg-gray-light">
      <div className="px-4 py-10 shadow-sm bg-white">
        <div className="flex items-center gap-x-2">
          <div>
            <BsArrowLeft className="text-primary" />
          </div>
          <div className="text-lg font-medium">Delivery address</div>
        </div>
      </div>
      <div className="relative">
        <div className="px-16 flex flex-col mt-16">
          <div className="font-medium mb-2">Deliver to</div>
          <input
            placeholder="Enter your address"
            className="w-full h-34 text-sm p-8 rounded-8 bg-white  @apply shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)]"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div
          className={locationAccesPermissionStyle}
          onClick={handleLocationPermission}
        >
          <p>Give location access to pinpoint your address</p>
        </div>
      </div>

      <div className="mx-16 mt-8 rounded-8 bg-white flex flex-col gap-8 max-h-200 overflow-y-scroll z-20">
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
