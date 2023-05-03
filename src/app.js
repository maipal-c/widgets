import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Search from "./components/Search";
import Translate from "./components/Translate";
// import Route from "./components/Route";
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
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<AccordionList items={items} />} />
                    <Route path="/search" element={<Search />} />
                    <Route
                        path="/dropdown"
                        element={
                            <Dropdown
                                label={"select a Color"}
                                options={options}
                                selected={selected}
                                handleSelectedChange={setSelected}
                            />
                        }
                    />
                    <Route path="/translate" element={<Translate />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
