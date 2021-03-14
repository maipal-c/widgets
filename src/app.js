import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

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
export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Dropdown
                selected={selected}
                handleSelectedChange={setSelected}
                options={options}
            />
        </div>
    );
};
