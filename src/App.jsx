import React from "react";
import Input from "./components/Input";
import {
  VALIDATOR_REQUIRE ,
  VALIDATOR_MINLENGTH ,
  VALIDATOR_MAXLENGTH ,
  VALIDATOR_MIN ,
  VALIDATOR_MAX ,
  VALIDATOR_EMAIL
} from "./utils/validators";

function App () {
  return (
    <div className="app">
      <Input
       type="text"
       id="name"
       label="Name"
       validators={[VALIDATOR_REQUIRE()]}
       erroeText="name must be valid"
      />
      <Input
       type="text"
       id="lastName"
       label="LastName"
       validators={[VALIDATOR_MINLENGTH(4) , VALIDATOR_MAXLENGTH(12)]}
       erroeText="lastName must be valid"
      />
      <Input
       type="text"
       id="email"
       label="Email"
       validators={[VALIDATOR_EMAIL()]}
       erroeText="email must be valid"
      />
       <Input
       type="text"
       id="age"
       label="Age"
       validators={[VALIDATOR_MIN(18) , VALIDATOR_MAX(40)]}
       erroeText="age must be valid"
      />
    </div>
  )
}
export default App;