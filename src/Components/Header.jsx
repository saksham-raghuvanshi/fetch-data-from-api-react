import React, { useState } from "react";
import "../Style/style.css";

import { searchshow } from "../API/Getapi";

const Header = () => {
  const [input, setInput] = useState("");
  const [apidata, setapidata] = useState(null);
  const [apidataerror, setapidataerror] = useState(null);

  console.log(input);
  const onsearchinput = (ev) => {
    setInput(ev.target.value);
  };

  const inputsubmit = async (ev) => {
    ev.preventDefault();

    try {
      setapidataerror(null);
      const result = await searchshow(input);
      setapidata(result);
    } catch (error) {
      setapidataerror(error);
    }

    //Now we find show by apiget(/search/shows?q=${input});

    // const response = await fetch(
    //   `https://api.tvmaze.com/search/shows?q=${input}`
    // );
    // const body = await response.json();
    // console.log(body);
  };

  //apidata can't be null show error
  const renderapi = () => {
    if (apidataerror) {
      return <div>{apidataerror.message}</div>; // for error
    }
    if (apidata) {
      return apidata.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }

    return null;
  };
  return (
    <div>
      <h1>Fetch Data from API</h1>
      <p>Search Any Movie</p>

      <form onSubmit={inputsubmit}>
        <input
          type="text"
          value={input}
          onChange={onsearchinput}
          placeholder="search any show"
        />
        <button type="submit">Search</button>
      </form>
      <div>{renderapi()}</div>
    </div>
  );
};

export default Header;
