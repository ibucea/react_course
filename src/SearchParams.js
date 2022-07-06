// change import at top
import { useEffect, useState } from "react";
// import Pet from "./Pet";
// at top, replace import from Pet.js
import Results from "./Results";
import useBreedList from "./useBreedList";

// in SearchParams.js
// import { useState } from "react";

// under the imports
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  // add to the other useStates inside component at top
  const [pets, setPets] = useState([]);
  // replace location
  //   const location = "Seattle, WA";
  const [location, setLocation] = useState("");
  // under location
  const [animal, setAnimal] = useState("");
  // under your other state inside the component
  const [breed, setBreed] = useState("");
  // replace `const breeds = [];`
  const [breeds] = useBreedList(animal);

  // add inside component, beneath all the `useState` setup
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  //   console.log(location);

  //don't do this
  //   if (something){
  //     const [hook,setHook] = useState();
  //   }

  return (
    <div className="search-params">
      {/* <form> */}
      {/* // replace <form> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          {/* replace input */}
          {/* <input id="location" value={location} placeholder="Location" /> */}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        {/* // under the location label */}
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        {/* // under the animal label */}
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {/* // in jsx, under form, inside the larger div
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))} */}
      {/* // under </form>, still inside the div, replace { pets.map ... } */}
      <Results pets={pets} />;
    </div>
  );
};

export default SearchParams;
