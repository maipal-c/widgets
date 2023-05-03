import axios from "axios";
import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";

const Search = () => {
    const [term, setTerm] = useState(
        localStorage.getItem("SEARCH_TERM") ?? "programming"
    );
    const [results, setResults] = useState([]);
    useEffect(() => {
        const search = async () => {
            localStorage.setItem("SEARCH_TERM", term);
            const { data } = await axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: term,
                    },
                }
            );
            setResults(data.query.search);
        };
        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (term) search();
            }, 500);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [term, results.length]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {results.map((item) => (
                    <ListItem item={item} key={item?.pageid} />
                ))}
            </div>
        </div>
    );
};
export default Search;
