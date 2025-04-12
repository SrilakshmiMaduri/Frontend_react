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
const parent = React.createElement(
    "parent",
    { id: "parent" },
    React.createElement("child", { id: "child" }, [
      React.createElement("h1", {}, "I'm H1 tag"),
      React.createElement("h2", {}, "I'm H2 tag"),
    ])
  );
  
  const heading = React.createElement("h1", {}, "hello world from React");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(heading);
  root.render(parent);
  
  
  
  