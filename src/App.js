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
import { StrictMode } from "react";
import { render } from "react-dom";
// delete Pet import, and add SearchParams
import SearchParams from "./SearchParams";

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
  return (
    <StrictMode>
      <div>
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
