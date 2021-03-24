import React, { Component,useState } from 'react';
function App() {
  return ( 
    <div className="App">
        <Folder name="Desktop" >
          <Folder name="Music">
            <File name="BobMarley.mp4"/>
            <File name="MichaelJackson.mp4"/>
          </Folder>
            
          <File name="dogs.jpg"/>
          <File name="cats.png"/>
        </Folder>

         <Folder name="Application"/>    
    </div>
  );
}

function Folder(props){
  const{name, children}=props;
  const [isOpen, setisOpen] = useState(true);
  const handleClick = ()=> setisOpen(!isOpen);
  const direction = isOpen? 'down' : 'right';

  return (
    <div>
        <span onClick={handleClick}>
          <i className="red folder icon"></i>
          <i className={`caret ${direction} icon`}></i>
        </span>
        {name}
        <div style={{marginLeft: "17px"}}>
            {isOpen ? children : null}
        </div>
    </div>
  );
}

function File(props){
  const{name}=props;
  const fileExtension = name.split('.')[1];
  const fileIcons={
    mp4:'headphones',
    jpg:'file image',
    png:'file image outline'
  }
 
  return (
      
    <div>
     <i className={`${fileIcons[fileExtension]} icon`}></i>
     {name}
    </div>
  );
}

export default App;
