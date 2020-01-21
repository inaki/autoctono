import React from "react";
import Styled from "@emotion/styled";

const Wrapper = Styled("div")`
    margin-top: 50px;
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    img {
        max-width: 30vw
    }
`;

const TextBox = Styled("div")`
    padding: 15px 20px;
    
`;

const TopicSection = ({
  title,
  content,
  imgSrc,
  altText = "this is an image",
  reverse = false
}) => {
  return (
    <Wrapper reverse={reverse}>
      <img src={imgSrc} alt={altText} />
      <TextBox>
        <h1>{title}</h1>
        <p>{content}</p>
      </TextBox>
    </Wrapper>
  );
};

export default TopicSection;
