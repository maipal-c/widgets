import Accordion from "./Accordion";

const AccordionList = ({ items }) => {
    return (
        <div className="ui styled accordion">
            {items.map((item) => {
                return (
                    <Accordion
                        content={item.content}
                        title={item.title}
                        key={item.title}
                    />
                );
            })}
        </div>
    );
};
export default AccordionList;
