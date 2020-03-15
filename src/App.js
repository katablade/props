import React from 'react';
import "./App.css";
import Wrapper from "./Wrapper";
import Photo from "./Photo";
import Title from "./Title";


function App() {
  return (
    <Wrapper class="App">
      <Photo src="/profile.png" />
      <Title style={{color: "red"}}>My Name here</Title>
      <Title small>My job here</Title>
    </Wrapper>

  );
}

export default App;


