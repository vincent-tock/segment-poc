import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
const users = [
  {
    id: "1",
    firstName: "Vincent",
    lastName: "Taing",
    email: "vincent@tockhq.com",
  },
  {
    id: "2",
    firstName: "Emmanuel",
    lastName: "Macron",
    email: "emmanuel@tockhq.com",
  },
];

function App() {
  const [currentUser, setCurrentUser] = React.useState();
  console.log(currentUser);
  React.useEffect(() => {
    if (currentUser) {
      console.log("Identifying a user....", currentUser.id);
      window.analytics.identify(currentUser.id, currentUser);
    }
  }, [currentUser]);

  const handleFoo = () => {
    console.log("Tracking foo");
    window.analytics.track("Clicked on foo", {
      commonProp: ["orange", "Kiwis"],
      anotherProp: "baz",
    });
  };

  const handleBaz = () => {
    console.log("Tracking Baz");
    window.analytics.track("Clicked on baz", {
      commonProp: ["orange", "Kiwis"],
      extraProp: "foobar",
    });
  };

  const switchUser = () => {
    console.log("switching user...");
    if (!currentUser) {
      // To Vincent
      console.log("logging Vincent");
      setCurrentUser(users[0]);
    }

    if (currentUser.id === "1") {
      console.log("logging in Emmanuel");
      // to Emmanuel
      console.log(users[1]);
      setCurrentUser(users[1]);
    } else {
      console.log("logging in Vincent");
      // To Vincent
      console.log(users[0]);
      setCurrentUser(users[0]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: "flex", alignItems: "center" }}></div>
        <div>loggedin : {currentUser?.firstName || "Not logged in"}</div>
        <button onClick={() => handleFoo()}>Did foo</button>
        <button onClick={() => handleBaz()}>Did baz</button>
        <button onClick={() => switchUser()}>Switch User</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
