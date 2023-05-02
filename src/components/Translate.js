import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
    { label: "Arabic", value: "ar" },
    { label: "African", value: "af" },
    { label: "Hindi", value: "hi" },
];

const Translate = () => {
    const [selectedLanguage, handleSelectedLanguage] = useState(options[0]);
    const [text, setText] = useState(
        localStorage.getItem("TRANSLATE_TEXT") ?? "programming"
    );
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="ui label">Enter Text</label>
                    <input
                        className="input"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                label={"Select a Language"}
                options={options}
                selected={selectedLanguage}
                handleSelectedChange={handleSelectedLanguage}
            />
            <Convert language={selectedLanguage} text={text} />
        </div>
    );
};

export default Translate;
