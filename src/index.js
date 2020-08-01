import React from "react";
import ReactDOM from "react-dom";
function Card(props){
return(

<div className="heading">
<h1>{props.name}</h1>
<img
  src={props.img}
  alt="avatar_img"
/>
<p>{props.tel}</p>
<p>{props.email}</p>
</div>
);
}
ReactDOM.render(
  <div>
  <h1>My Contacts</h1>
  <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com"/>
  <Card name="jackbaur" img="data:image/jpeg;base64,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"
  tel="+2354682" email="b@jackbaur"/>
  </div>,
   
  document.getElementById("root")
);
