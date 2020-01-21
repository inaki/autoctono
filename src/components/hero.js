import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import Logo from "../images/logo-white.png";
import BackgroundImage from "gatsby-background-image";

const getImageRelPath = () => {};

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  background-color: rgba(0, 25, 55, 0.73);
  height: 100vh;
  * + {
    margin-top: 0;
  }
`;

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 750px) / 2) 2rem;
  width: 100%;
  color: white;
  text-align: center;

  h1 {
    font-size: 5rem;
    opacity: 0.8;
    margin-bottom: 10px;
  }
`;

const LogoImage = styled("img")`
  width: 400px;
  align-self: center;
  margin-bottom: 0;
`;

const Hero = ({ children }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "joshua-earle.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <LogoImage src={Logo} alt="logo" />
        <h1>Autóctono</h1>

        <p>Gestión de proyectos de alto impacto social y ambiental.</p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
