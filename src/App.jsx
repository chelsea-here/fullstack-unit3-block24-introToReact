import "./App.css";
import { puppyList } from "./data";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupID] = useState(null);
  console.log(puppies);
  const featuredPuppy = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPuppy);
  return (
    <div className="App">
      <div className="puppyList">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupID(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>

      {featPupId && (
        <div className="featuredPuppy">
          <h2>{featuredPuppy.name}</h2>
          <ul>
            <li>Age: {featuredPuppy.age}</li>
            <li>Email: {featuredPuppy.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
