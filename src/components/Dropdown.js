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
        // if (option.value === selected.value) return null;
        return (
            <>
                {option.value !== selected.value && (
                    <div
                        key={option.value}
                        className="item"
                        onClick={() => handleSelectedChange(option)}
                    >
                        {option.label}
                    </div>
                )}
            </>
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
