//useState with object
import React, { useState } from "react";

function StateHook3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      ></input>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      ></input>
      <h2>Your first name is : {name.firstName}</h2>
      <h2>Your last name is : {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
      {/* this shows the name is json format*/}
    </form>
  );
}

export default StateHook3;
//in useState hook we have to merge manually while in class it is auto merge
// spread operator in es6 is used to merge the ans
// as before if we write fname and then start writing lastname then the firstname used to disapper so spread operator is used to merge the state
// the setter function doesnt automatically merge and update the obj we have to do it manually here we use spread operator to merge
