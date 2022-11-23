import React from "react";
import footerImage from '../assets/cover/cover-photo-1.webp';

function Footer() {
  return (
    <div className="card text-center fixed-bottom" style={{ backgroundImage: `url(${footerImage})` } }>
      <div className="card-body d-flex justify-content-center">    
        <a href="https://github.com/sheetaljwl795" className="btn btn-primary btn-spacing" style={ {margin: '10px 30px', backgroundColor: "black"}}>Github</a>      
        <a href="https://www.linkedin.com/in/sheetaljawale/" className="btn btn-primary btn-spacing" style={ {margin: '10px 30px', backgroundColor: "black"}}>Linkedin</a>
      </div>
    </div>
  );
}

export default Footer;