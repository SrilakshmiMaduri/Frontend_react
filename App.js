// U need to write in nested objects inside code----write like this in react
/*
*
*<div id="parent">
    <div id="child">
        <h1>I'm H1 tag</h1>
                  suppose if you have one more heading tag here, i.e. 
        <h2>I'm H2 tag</h2>
        --We will do in react with array/list[]
    </div>
</div>
*
*
*/
//inception

// const parent = React.createElement(
//     "parent",
//     { id: "parent" },
//     React.createElement("child", { id: "child" }, [
//       React.createElement("h1", {}, "I'm H1 tag"),
//       React.createElement("h2", {}, "I'm H2 tag"),
//     ])
//   );

//   const heading = React.createElement("h1", {}, "hello world from React");
//   const root = ReactDOM.createRoot(document.getElementById("root"));

//   root.render(heading);
//   root.render(parent);

// Laying the foundation
// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "This is Namaste React");
// console.log(heading);

// // JSX--it is javascript XML. HTML-like syntax. not HTML -- PARCEL--BABEL
// // JSX--React.reateElement--js object--HTML element(render to)
// const jsxHeading = <h1 id="heading">Namaste react using JSX</h1>
// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// root.render(jsxHeading);

// Creating a food order website
// -----------------------------------------------
/***
 * ----Header
 *      -->logo
 *      -->nav-items
 * ----Body
 *      -->search
 *      -->restaurant-container
 *      -->restaurant-card
 * ----Footer
 *      -->copyRights
 *      -->links
 *      -->About
 *      -->Address
 * ******************* */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";


const AppLayout = () => {
  return (
    <div className="AppLayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
