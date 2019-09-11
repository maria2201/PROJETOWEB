import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    font-size: 30px;
    font-family: Comic Sans MS, Comic Sans, cursive;
    padding: 0;
  }
  html, body, #root {
    height: 100%;
  }

  body{
    background: #db7093;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }

  h1 {
    font-size: 30px;
    color: #b03060;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      }

  }
  input{
    width: 100%;
    margin-bottom:20px;
    padding: 15px;
    font-size: 30px;
    border-radius: 50px;
  }


  label {
    color: white;
    width: 100%;
    /* padding: 15px; */
    font-size: 30px;
  }
  p{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    color: white;

}



`;
