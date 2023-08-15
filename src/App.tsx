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
//import { User } from "./components/state/User";
//import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { UserContext } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Counter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { CustomComponent } from "./components/html/CustomComponent";
import { Text } from "./components/polymorphic/Text";

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
      {/* <Greet name="danu" isLoggedIn={true} />
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
      <User />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Counter message="The Count value is " /> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      {/* <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} /> */}
      {/* <List
        items={[
          { id: 1, first: "Bruce", last: "Wayne" },
          { id: 2, first: "Elon", last: "Musk" },
          { id: 3, first: "Jeff", last: "Bezos" },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={5} isPositive /> */}
      <Toast position="center" />
      <CustomButton
        variant="primary"
        onClick={() => console.log("button clicked")}>
        Primary Button
      </CustomButton>
      <CustomComponent isLoggedIn={true} name="danu" />
      <Text as="h1" size="small" color="primary">
        Heading
      </Text>
      <Text as="h3" size="small" color="primary">
        Heading
      </Text>
      <Text as="label" htmlFor="someId" size="small" color="primary">
        Heading
      </Text>
    </div>
  );
}

export default App;
