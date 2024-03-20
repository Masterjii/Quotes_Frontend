import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowQuotes() {
  let [quote, setQuote] = useState({ author: "", text: "" });
  const params = useParams();
  useEffect(() => {
    async function fetchQuote() {
      let res = await axios.get(`https://quotes-backend-j1lz.onrender.com/quotes/${params.id}`);
      let { author, text } = res.data;
      console.log(author);
      console.log(text);
      setQuote({ author, text });
    }
    fetchQuote();
  }, []);
  return (
    <div
      style={{
        fontSize: 20,
        alignItems: "center",
        marginLeft:20
      }}
    >
      <h2>Author: {quote.author}</h2>
      <p>{quote.text}</p>
    </div>
  );
}

export default ShowQuotes;
