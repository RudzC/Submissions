import React from "react";

export default function Search() {
  return (
    <>
      <form>
        <input type="text" id="city" placeholder="City"></input>
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
