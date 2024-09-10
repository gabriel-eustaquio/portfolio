import photo from '../../assets/photo.png'
import curriculo from "../../assets/gabrieleustaquio.pdf";


function About() {
  return (
    <>
      <main className="container pt-4 pl-10 md:pt-40 flex justify-center md:justify-between flex-col-reverse gap-5 md:flex-row mb-10">
        <section>
          <h1 className="md:text-4xl text-2xl font-bold">Olá, eu sou o <span className="text-violet-500 font-bold block">Gabriel Eustaquio ;)</span></h1>
          <p className="tracking-wider uppercase text-neutral-400">Desenvolvedor web</p>
          <ul className="flex gap-3 pt-2">
            <li><a className="transition ease-in-out delay-150 bg-violet-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 pt-4 pb-4 pr-2 pl-2 inline-block rounded-sm" href={curriculo} download="gabrieleustaquio.pdf">Download CV</a></li>
            <li><a className="transition ease-in-out delay-150 bg-violet-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 pt-4 pb-4 pr-2 pl-2 inline-block rounded-sm" href="https://www.linkedin.com/in/gabriel-eustaquio-b4711b255/">LinkedIn</a></li>
          </ul>
        </section>
        <img src={photo} alt="Minha foto" className="rounded-full md:w-96 md:h-96 w-48 h-48 md:mb-24"/>
      </main>
      <section className="container grid justify-center pl-10">
        <h2 className="text-2xl md:text-5xl md:text-center">Sobre mim</h2>
        <p className="mt-3 md:w-3/5 md:text-center md:justify-self-center text-neutral-500 dark:text-neutral-400">Particularmente gosto de ir a Igreja e sair para passear com minha família aos finais de semana. Atualmente estou aprendendo a tocar bateria e tenho hobby por carros, provavelmente meu veículo será totalmente modificado seja esteticamente quanto em potência. No âmbito profissional sou apaixonado em utilizar componentes reutilizáveis, possuo conhecimento em tecnologias como: HTML, CSS, JavaScript, TypeScript, React.js, Node.js, Styled-components, Shadcn UI e consumo de APIs Rest. Formado em Ciência da Computação e cursando Front-end na Origamid.</p>
      </section>
    </>
  )
}

export default About