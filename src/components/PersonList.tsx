import React from "react";

import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};
export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <div key={name.first}>
            Name : {name.first} {name.last}
          </div>
        );
      })}
    </div>
  );
};
