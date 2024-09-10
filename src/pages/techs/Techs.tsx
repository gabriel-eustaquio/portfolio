import htmlSvg from "../../assets/languages/html.svg";
import cssSvg from "../../assets/languages/css.svg";
import javaScriptSvg from "../../assets/languages/javascript.svg";
import typeScriptSvg from "../../assets/languages/typescript.svg";
import reactSvg from "../../assets/languages/react.svg";
import styledComponentsSvg from "../../assets/languages/styledcomponents.svg";
import nodeJsSvg from "../../assets/languages/nodejs.svg";
import tailwindCssSvg from "../../assets/languages/tailwindcss.svg";
import jestPng from "../../assets/languages/jest.png";
import figmaSvg from "../../assets/languages/figma.svg";
import euaPng from "../../assets/languagesHuman/eua.png";
import russiaPng from "../../assets/languagesHuman/russia.png";

type Language = {
  name: string,
  imgSrc: string,
  description: string,
}

const languages: Language[] = [
  {
    name: "HTML",
    imgSrc: htmlSvg,
    description: "É uma linguagem de marcação utilizada para construir páginas web. Faz parte do que uso no dia a dia.",
  },
  {
    name: "CSS",
    imgSrc: cssSvg,
    description: "Uso esta linguagem de estilo para deixar as páginas mais atraentes ao usuário."
  },
  {
    name: "JavaScript",
    imgSrc: javaScriptSvg,
    description: "Essa linguagem de script seria responsável pelos comportamentos da página e o que mais os usuários utilizam como abrir um menu, fechar..."
  },
  {
    name: "TypeScript",
    imgSrc: typeScriptSvg,
    description: "Utilizo mais internamente para facilitar meu desenvolvimento."
  },
  {
    name: "React.js",
    imgSrc: reactSvg,
    description: "Traz poder ao meu desenvolvimento pois consigo utilizar javascript dentro do html."
  },
  {
    name: "Node.js",
    imgSrc: nodeJsSvg,
    description: "Consigo baixar pacotes para gerar resultados mais rápidos."
  },
  {
    name: "Styled-components",
    imgSrc: styledComponentsSvg,
    description: "Utilizo para criar CSS dentro do JS."
  },
  {
    name: "Shadcn/UI Tailwind Css",
    imgSrc: tailwindCssSvg,
    description: "Uma biblioteca/framework poderosissimos, facilitou bastante a construção deste portfólio."
  },
  {
    name: "Jest",
    imgSrc: jestPng,
    description: "Serve para testar meus componentes, funções..."
  },
  {
    name: "Figma",
    imgSrc: figmaSvg,
    description: "Bastante usado para criar protótipos antes do desenvolvimento propriamente dito."
  },
]

const languagesHuman: Language[] = [
  {
    name: "Inglês",
    description: "Estudo desde 2020 em um curso particular de conversação.",
    imgSrc: euaPng,
  },
  {
    name: "Russo",
    description: "Comecei a estudar recentemente por conta própria e sei apenas o básico.",
    imgSrc: russiaPng,
  }
]

const languagesIKnew = ["Java", "Scss", "Php", "Sql", "jQuery", "Bootstrap", "MongoDB", "Derby", "Git", "Design patterns: MVC..."]


function Techs() {

  return (
    <>
      <section className="container p-10 md:pt-32">
        <h2 className="uppercase tracking-widest mb-5">Minhas techs do dia a dia</h2>
        <ul className="grid md:grid-cols-2 gap-5">
          {languages.map((language, index) => {
            return <li key={index} className="bg-violet-300 p-5 shadow-lg rounded-sm dark:text-neutral-700">
              <span>{language.name}</span>
              <img src={language.imgSrc} alt={language.name} />
              <p>{language.description}</p>
            </li>
          })}
        </ul>
        <h2 className="uppercase tracking-widest mt-20">Meus idiomas</h2>
        <ul className="grid md:grid-cols-2 gap-5">
          {languagesHuman.map((languageHuman, index) => {
            return <li key={index}>
              <img src={languageHuman.imgSrc} alt={languageHuman.name} />
              <span>{languageHuman.name}</span>
              <p>{languageHuman.description}</p>
            </li>
          })}
        </ul>
        <h2 className="uppercase tracking-widest mt-20 mb-2">Tecnologias que conheço e já utilizei.</h2>
        <ul role="list" className="marker:text-violet-500 list-disc pl-5 space-y-3 text-slate-500 mb-5">
          {languagesIKnew.map((languageiknow, index) => {
            return <li key={index}>{languageiknow}</li>
          })}
        </ul>
      </section>
    </>
  )
}

export default Techs