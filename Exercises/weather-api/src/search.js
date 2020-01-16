import React from "react";

export default function Search(props) {
  return (
    <>
      <form>
        <input
          type="text"
          id="city"
          placeholder="City"
          value={props.sear}
        ></input>
        <input
          type="button"
          name="submit"
          value="Find Weather"
          id="find"
        ></input>
      </form>
    </>
  );
}
