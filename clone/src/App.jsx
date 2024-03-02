import ContentPage from "./Pages/ContentPage";
import LogInPage from "./Pages/LogInPage";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubscribeClicked = () => {
    setLoggedIn(true);
  };

  return (
    <div className="">
      {!loggedIn ? (
        <LogInPage handleSubscribeClicked={handleSubscribeClicked} />
      ) : (
        <ContentPage />
      )}
    </div>
  );
}

export default App;
