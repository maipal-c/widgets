import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState();
    const handleActiveIndex = (index) => {
        // if (index === activeIndex && activeIndex >= 0) {
        //     setActiveIndex(null);
        //     console.log("same index", index, activeIndex);
        // }
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? "active" : " ";
        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => {
                        handleActiveIndex(index);
                    }}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return <div className="ui styled accordion">{renderedItems}</div>;
};
export default Accordion;
