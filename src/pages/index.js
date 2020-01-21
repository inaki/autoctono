import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Autoctono Org" />
    <h1>EXPERTOS EN HACER LA DIFERENCIA</h1>
    <p>Gestión de proyectos de alto impacto social y ambiental.</p>
    <p>¿Quieres construir un mundo mejor?</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <div>
      <h1>Todos Somos Autóctono</h1>
      <p>
        Somos una organización que gestiona proyectos de alto impacto social y
        ambiental. Nos enfocamos en profesionalizar proyectos para que tenga un
        alcance de largo plazo con objetivos claros y medibles. Reconociendo que
        todos compartimos el mismo planeta, creemos que podemos unirnos y
        organizarnos para vivir en armonía como una misma Tribu.
      </p>
    </div>

    <div>
      <h1>Transparencia Extrema: Nuevos Valores</h1>
      <p>
        Creemos en la transparencia extrema, para que siempre conozcas nuestros
        avances, nuestros recursos y nuestras necesidades. Somos una
        organización descentralizada, de tal forma que todos podamos lograr
        nuestras metas, en equipo y de manera organizada y eficiente. Nuestra
        plataforma es colaborativa, en la cual podremos canalizar la ayuda de
        cualquier individuo u organización en el momento y en lugar que se
        requiera.
      </p>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
