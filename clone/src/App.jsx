import ContentPage from "./Pages/ContentPage";
import StartPage from "./Pages/StartPage";
import LogInPage from "./Pages/LogInPage";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubscribeClicked = () => {
    setLoggedIn(true);
  };

  return (
    <div className="">
      {/* <LogInPage /> */}

      {!loggedIn ? (
        <StartPage handleSubscribeClicked={handleSubscribeClicked} />
      ) : (
        <ContentPage />
      )}
    </div>
  );
}

export default App;
