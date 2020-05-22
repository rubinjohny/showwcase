//component to display emoji's
import React from 'react';

const Emoji = props => (
   <span
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
      style={{fontSize:props.size}}
   >
      {props.symbol}
   </span>
);
export default Emoji;