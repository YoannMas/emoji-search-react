import "./App.scss";
import Search from "./Search";
import Line from "./Line";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  let counter = 0;

  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <div className="line-box">
        {data.map((el, index) => {
          if (counter < 20) {
            if (el.keywords.match(search)) {
              counter++;
              return <Line key={index} symbol={el.symbol} title={el.title} />;
            }
          }
        })}
      </div>
    </div>
  );
}

export default App;
