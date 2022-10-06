import { useEffect } from "react";
import CharList from "./components/CharList";
import RndChar from "./components/RndChar";
import HttpService from "./utils/http";

function App() {

  useEffect(() => {
    const http = new HttpService()

    const chars = http.getCharecter(1)
    chars.then(res =>
      console.log(res)
    )
  }, [])

  return (
    <div>
      <h2>Random</h2>
      <RndChar />
      <hr />
      <h2>List</h2>
      <CharList />
    </div>
  );
}

export default App;
