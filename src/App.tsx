import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const genderName = {
    gender: "Male",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Elon",
      last: "Musk",
    },
    {
      first: "Jeff",
      last: "Bezos",
    },
  ];

  return (
    <div className="App">
      <Greet name="danu" isLoggedIn={true} />
      <Person name={personName} gender={genderName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Placeholder Oscar Oasis</Heading>
      </Oscar>

      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container
        styles={{ color: "red", border: "1px solid black", padding: "10px" }}
      />
    </div>
  );
}

export default App;
