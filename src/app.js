import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import AccordionList from "./components/AccordionList";

const items = [
    {
        title: "what is react?",
        content: "react is a frond-end js framework.",
    },
    {
        title: "why use react?",
        content: "react is a favorite js library among enginners.",
    },
    {
        title: "how do you use react?",
        content: "you use react by creating components.",
    },
];
const options = [
    { label: "The Color Red", value: "red" },
    { label: "The Color Green", value: "green" },
    { label: "A Shade of Blue", value: "blue" },
];

function App() {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div className="ui container">
            <Header />
            <Route path="/">
                <AccordionList items={items} />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label={"select a Color"}
                    options={options}
                    selected={selected}
                    handleSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}

export default App;
