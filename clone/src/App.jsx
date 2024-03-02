import ContentPage from "./Pages/ContentPage";
import LogInPage from "./Pages/LogInPage";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return <div className="">{!loggedIn ? <LogInPage /> : <ContentPage />}</div>;
}

export default App;
