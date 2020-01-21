import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import Image from "../components/image";
import SEO from "../components/seo";
import Subscription from "../components/subscription";
import TopicSection from "../components/topicsection";
import TopicImg1 from "../images/paisaje-autoctono.png";
import TopicImg2 from "../images/paisajes-mexico.jpg";

const IndexPage = () => (
  <>
    <Hero />
    <Layout>
      <SEO title="Home" />
      <Subscription />
      <TopicSection
        imgSrc={TopicImg1}
        title="Todos Somos Autóctono"
        content="Somos una organización que gestiona proyectos de alto impacto social y ambiental. Nos enfocamos en profesionalizar proyectos para que tenga un alcance de largo plazo con objetivos claros y medibles. Reconociendo que todos compartimos el mismo planeta, creemos que podemos unirnos y organizarnos para vivir en armonía como una misma Tribu."
      />
      <TopicSection
        reverse
        imgSrc={TopicImg2}
        title="Transparencia Extrema: Nuevos Valores"
        content="Creemos en la transparencia extrema, para que siempre conozcas nuestros avances, nuestros recursos y nuestras necesidades. Somos una organización descentralizada, de tal forma que todos podamos lograr nuestras metas, en equipo y de manera organizada y eficiente. Nuestra plataforma es colaborativa, en la cual podremos canalizar la ayuda de cualquier individuo u organización en el momento y en lugar que se requiera."
      />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  </>
);

export default IndexPage;
