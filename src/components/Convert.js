import axios from "axios";
import React, { useState, useEffect } from "react";

const api_key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
const Convert = ({ language, text }) => {
    const [translatedText, setTranslatedText] = useState("");
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.post(
                "https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: { q: text, target: language.value, key: api_key },
                }
            );
            setTranslatedText(data.data.translations[0].translatedText);
        };
        const timerId = setTimeout(() => {
            if (text) search();
        }, 500);
        return () => {
            clearTimeout(timerId);
        };
    }, [language, text]);
    return (
        <>
            <h1 className="ui header">Output</h1>
            <h2 className="ui header">{translatedText}</h2>
        </>
    );
};

export default Convert;
