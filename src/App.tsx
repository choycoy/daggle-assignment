import "./App.css";
import client from "./api/client";

function App() {
  client.get("/posts?page=1&limit=10");
  return <h1>Hello World</h1>;
}

export default App;
