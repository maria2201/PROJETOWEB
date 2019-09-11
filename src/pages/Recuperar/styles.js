import styled from "styled-components";

export const Container = styled.div`
  div {
    flex-direction: column;
    display: flex;
    height: 60%;
    width: 500px;
    padding: 30px;

    background: #b03060;
    border-radius: 50px;
  }

  form {
    width: 100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 40px 40px 40px; */
  }

  button {
    background: #db7093;
    color: whitesmoke;
    width: 80%;
    margin-top: 02px;
    margin-bottom: 5px;
    padding: 15px;
    font-size: 1em;
    border-radius: 50px;
  }
`;
