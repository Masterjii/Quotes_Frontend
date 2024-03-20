

import React from "react";
import {Link} from "react-router-dom";
import { Typography } from '@mui/material';


function MainNav() {
  return (
    <nav>
      <Typography variant="h2" align="center" style={{marginTop:20}}>
      The Greate Quotes App
      </Typography>
      <ul>
        <li>
            <Link to='/' >All Quotes</Link>
        </li>
        <li>
            <Link to='/new' >New Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
