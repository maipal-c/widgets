import { useState } from "react";

const Accordion = ({ title, content }) => {
    const [active, setActive] = useState(false);
    return (
        <>
            <div
                className={active ? "title active" : "title"}
                onClick={() => setActive(!active)}
            >
                <i className="dropdown icon"></i>
                {title}
            </div>
            <div className={active ? "content active" : "content"}>
                <p>{content}</p>
            </div>
        </>
    );
};
export default Accordion;
