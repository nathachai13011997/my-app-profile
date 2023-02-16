import React from 'react'
import { DiJsBadge, DiSass, DiMsqlServer, DiMongodb } from "react-icons/di";
import { AiOutlineAntDesign } from 'react-icons/ai'
import { SiReact, SiNestjs, SiNodedotjs, SiGraphql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

import AboutContentner from './AboutContentner.jsx'
import TechnologiesContentner from './TechnologiesContentner.jsx'

import '../styles/components/maincontent.sass'

const frontEnd = [
    {
      id: "react",
      name: "React.JS",
      icon: <SiReact />,
      text: "Components, Hooks, Router, Props, API's.",
    },
    {
      id: "js",
      name: "JavaScript",
      icon: <DiJsBadge />,
      text: "Functions, Object, Array, API's.",
    },
    {
      id: "sass",
      name: "Sass",
      icon: <DiSass />,
      text: "Variables, Mixins, Includes.",
    },
    {
      id: "antdesign",
      name: "AntDesign",
      icon: <AiOutlineAntDesign />,
      text: "Layout, Components, Navigation, DataEntry.",
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      icon: <FaBootstrap />,
      text: "Layout, Components, Froms.",
    },
  ];

  const backEnd = [
    {
      id: "nest",
      name: "Nest.TS",
      icon: <SiNestjs />,
      text: "Controllers, Modules, Middleware, API's, TypeORM.",
    },
    {
      id: "node",
      name: "Node.JS",
      icon: <SiNodedotjs />,
      text: "Express, Router, Middleware, REST API's.",
    },
    {
        id: "graphql",
        name: "GraphQL",
        icon: <SiGraphql />,
        text: "Query, Mutation",
    },
    {
        id: "sqlserver",
        name: "SQLServer",
        icon: <DiMsqlServer />,
        text: "",
    },
    {
        id: "mongodb",
        name: "Mongodb",
        icon: <DiMongodb />,
        text: "",
    },
  ]; 

const MainContent = () => {
  return (
    <main id="main-content">
        <AboutContentner />
        <TechnologiesContentner technologias={frontEnd} title="Front End"/>
        <TechnologiesContentner technologias={backEnd} title="Back End"/>
    </main>
  )
}

export default MainContent