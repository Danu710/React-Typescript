import React from "react";
import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return (
    <div>
      Name : {props.name.first} {props.name.last}
      Gender : {props.gender.gender}
    </div>
  );
};
