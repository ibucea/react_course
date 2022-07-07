// // at the top, under React imports
// import React from "react";
// import ReactDOM from "react-dom";
// import Pet from "./Pet";

// // remove Pet component

// // const Pet = (props) => {
// //   return React.createElement("div", {}, [
// //     React.createElement("h1", {}, props.name),
// //     React.createElement("h2", {}, props.animal),
// //     React.createElement("h2", {}, props.breed),
// //   ]);
// // };

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dogs",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Doink",
//       animal: "Cat",
//       breed: "Mix",
//     }),
//   ]);
// };

// ReactDOM.render(React.createElement(App), document.getElementById("root"));

//============>>>> JSX
// import { render } from "react-dom";
// import Pet from "./Pet";

// const App = () => {
//   return (
// <div>
//   <h1>Adopt Me!</h1>
//       <Pet name="Luna" animal="dog" breed="Havanese" />
//       <Pet name="Pepper" animal="bird" breed="Cockatiel" />
//       <Pet name="Doink" animal="cat" breed="Mix" />
//     </div>
//   );
// };

// render(<App />, document.getElementById("root"));

//============>>>>>> Add SearchParams.js

// import at top
import { StrictMode, useState } from "react";
import { render } from "react-dom";
// delete Pet import, and add SearchParams
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

// at top
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

// import Link too
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//code for add searchParams.js
// const App = () => {
//   return (
//     <div>
//       <h1>Adopt Me!</h1>

//       {/* in App.js, replace all the Pets */}
//       <SearchParams />
//     </div>
//   );
// };

// render(<App />, document.getElementById("root"));

//code using strict mode
// replace App
const App = () => {
  // top of App function body
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <StrictMode>
        <div>
          {/* <h1>Adopt Me!</h1> */}
          {/* <SearchParams /> */}
          <BrowserRouter>
            {/*  replace h1 */}
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            {/* <h1>Adopt Me!</h1> */}
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </BrowserRouter>
          ;
        </div>
      </StrictMode>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
