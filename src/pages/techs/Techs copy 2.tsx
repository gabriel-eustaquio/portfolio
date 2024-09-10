import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
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

const languages = [
  {
    name: "HTML",
    imgSrc: htmlSvg,
  },
  {
    name: "CSS",
    imgSrc: cssSvg,
  },
  {
    name: "JavaScript",
    imgSrc: javaScriptSvg,
  },
  {
    name: "TypeScript",
    imgSrc: typeScriptSvg,
  },
  {
    name: "React.js",
    imgSrc: reactSvg,
  },
  {
    name: "Node.js",
    imgSrc: nodeJsSvg,
  },
  {
    name: "Styled-components",
    imgSrc: styledComponentsSvg,
  },
  {
    name: "Shadcn/UI Tailwind Css",
    imgSrc: tailwindCssSvg,
  },
  {
    name: "Jest",
    imgSrc: jestPng,
  },
  {
    name: "Figma",
    imgSrc: figmaSvg,
  },
]


function Techs() {

  return (
    <>
      <section className="container p-20 md:pt-40">
        <h2 className="uppercase tracking-widest text-center">Minhas techs</h2>
        <Carousel className="w-full max-w-60 mr-auto ml-auto">
          <CarouselContent>
            {languages.map((language, index) => {
              return (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 flex-col">
                        <h1>{language.name}</h1>
                        <img src={language.imgSrc} alt={language.name} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        <span>Total de techs: {languages.length} (Arraste para o lado)</span>
        </Carousel>
      </section>
    </>
  )
}

export default Techs