const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "heading1" }, "I'm heading 1"),
        React.createElement("h1", { id: "heading2" }, "I'm heading 2"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "heading3" }, "I'm heading 1"),
        React.createElement("h1", { id: "heading4" }, "I'm heading 2"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
