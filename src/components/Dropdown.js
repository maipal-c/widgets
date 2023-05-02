import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, options, selected, handleSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const mostParentNode = useRef(null);

    useEffect(() => {
        document.body.addEventListener(
            "click",
            (event) => {
                if (
                    mostParentNode.current &&
                    mostParentNode.current.contains(event.target)
                )
                    return;
                setOpen(false);
            },
            { capture: true }
        );
    }, []);

    const renderedOptions = options.map((option) => {
        return (
            <React.Fragment key={option?.value}>
                {option.value !== selected.value && (
                    <div
                        className="item"
                        onClick={() => handleSelectedChange(option)}
                    >
                        {option.label}
                    </div>
                )}
            </React.Fragment>
        );
    });
    return (
        <div ref={mostParentNode} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${
                        open ? "visible active" : ""
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? "visible transition" : ""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dropdown;
