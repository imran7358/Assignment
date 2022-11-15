import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="main-wrapper">
    <Header/>
    <div className="width-100 content-area"> 
    <h1 className="txt-center f-70 m-b-15 letter-space-10 f-m">CERTIFICATE</h1>
    <h2 className="txt-center border-bottom letter-space-10 f-15">OF APPRECIATION</h2>
    <div className="name-area txt-center width-100 m-t-50">
      <h4 className="f-30 f-bold letter-space-5 f-bold">PROUDLY PRSENTED TO</h4>
      <div className=" width-100 m-t-30">
        <div className="flex-flow txt-center just-center name-info">
          <label className="m-r-20 f-20">Name </label> <label className="f-20">Last Name</label>
        </div>
      </div>
      </div>
    </div>
    </div>
  
  );
}

export default App;
