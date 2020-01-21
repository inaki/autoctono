/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import BgImg from "../images/joshua-earle.jpg";
import Logo from "../images/logo-white.png";

const getImageRelPath = () => {};

const ImageBackground = styled("div")`
  background-image: url(${BgImg});
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
  return (
    <ImageBackground>
      <TextBox>
        <LogoImage src={Logo} alt="logo" />
        <h1>Autóctono</h1>

        <p>Gestión de proyectos de alto impacto social y ambiental.</p>
      </TextBox>
    </ImageBackground>
  );
};

export default Hero;
