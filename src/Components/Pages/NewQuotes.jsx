




import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function NewQuotes() {

  let navigate = useNavigate();
  let usernameInputRef = useRef();
  let quoteInputRef = useRef();

  async function addQuoteHandler(e) {
    e.preventDefault(); 
    let author = usernameInputRef.current.value;
    let text = quoteInputRef.current.value;

    try {
      let res = await axios.post('https://quotes-backend-j1lz.onrender.com/addquotes', { author, text });
      navigate('/');
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className="add-quote-container">
      <form onSubmit={addQuoteHandler} className="quote-form">
        <div>
          <label htmlFor="naam">Author</label>
          <input type="text" id="naam" placeholder='Authors name' ref={usernameInputRef} className="author-input"/>
        </div>
        <div>
          <label htmlFor="textt" className='quote-h'>Quote</label>
          <textarea name="" id="textt" cols="30" rows="10" placeholder='Author Quotes' ref={quoteInputRef} className="quote-input"></textarea>
        </div>
        <button  className="submit-button">Add Quote</button>
      </form>
    </div>
  )
}

export default NewQuotes;











