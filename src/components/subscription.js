import React from "react";
import Styled from "@emotion/styled";

const Wrapper = Styled("div")`
    margin-top: 25px;
    background-color: rgba(0,25,55,0.1);
  
    height: 100%;
    padding: 0 calc((100vw - 750px) / 2) 2rem;
    width: 100%;
    color: white;
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
    }

    label {
        color: #18b9bf;
        margin-bottom: 10px;
        margin-top: 50px;
    }

    input {
        border: 1px solid #ccc;
        border-radius: 4px;
        height: 45px;
        padding-left: 15px;
        margin-bottom: 10px;
    }
    button {
        border: 1px solid #18b9bf;
        background-color: #18b9bf;
        color: white;
        border-radius: 4px;
        height: 45px;
        padding-left: 15px;
        margin-bottom: 10px;
    }
`;

const Subscription = () => {
  return (
    <Wrapper>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label>Subscríbete a nuestro newsletter</label>
        <input placeholder="Entra tu email" type="email" name="email" />
        <button type="submit">Subscríbete</button>
      </form>
    </Wrapper>
  );
};

export default Subscription;
