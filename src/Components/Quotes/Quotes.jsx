import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";



function Quotes(props) {
  let navigate = useNavigate();
  function showQuoteHandler(id) {
    navigate(`/quotes/${id}`);
  }
  const handleDeleteQuote = async (e) => {
    const quoteId = e.target.dataset.quoteId;
    try {
      await axios.delete(`https://quotes-backend-j1lz.onrender.com/quotes/${quoteId}`);
      alert("Your file is Deleted");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li>
      <span>
        <h1>Text: {props.text} </h1>
        <h3>Author: {props.author} </h3>
      </span>
      <Button
        onClick={() => showQuoteHandler(props.id)}
        variant="contained"
        endIcon={<SendIcon />}
      >
        View More
      </Button>
      <Button
        data-quote-id={props.id}
        onClick={handleDeleteQuote}
        variant="outlined"
        startIcon={<DeleteIcon />}
        style={{marginLeft:20}}
      >
        Delete
      </Button>
    </li>
  );
}

export default Quotes;
