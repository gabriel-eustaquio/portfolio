import React from 'react'

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submit, setSubmit] = React.useState(false)

  const formData = {
    name, email, message
  }

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
    try {
      event.preventDefault();
      if (name && email && message) {
        const url = "https://formspree.io/f/mblryrzz"
        const options = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
        await fetch(url, options)
        setSubmit(true)
      } else {
        alert("Preencha todos os campos do formulário.")
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (submit) return <h1 className="container grid h-screen content-center text-center text-green-950 bg-green-200">Obrigado por entrar em contato, te respondo em breve ;)</h1>
  return (
    <section className="container max-w-4xl pl-10">
      <h1 className="text-2xl font-bold mt-10 uppercase pb-5 mb-5 rounded-sm dark:text-neutral-300 ">
        Contate-me
      </h1>
      <form>
        <label htmlFor="nome" className="text-lg">Nome</label>
        <input type="text" id="nome" name="nome" className="border-2 block w-full text-base border-violet-700 p-2 bg-zinc-100 dark:bg-zinc-300" value={name} onChange={(event) => setName(event.target.value)} required/>
        <label htmlFor="emailLabel" className="text-lg">Email</label>
        <input type="email" id="emailLabel" name="email" className="border-2 block w-full text-base border-violet-700 p-2 bg-zinc-100 dark:bg-zinc-300" value={email} onChange={(event) => setEmail(event.target.value)} required/>
        <label htmlFor="mensagem" className="text-lg">Mensagem</label>
        <textarea name="mensagem" id="mensagem" className="border-2 block w-full text-base border-violet-700 h-28 p-2 bg-zinc-100 dark:bg-zinc-300" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>
        <button className="pt-2 pb-2 pl-2 pr-2 bg-slate-950 text-neutral-100 rounded-sm mt-2 dark:bg-slate-300 dark:text-slate-950" onClick={handleSubmit}>Entrar em contato</button>
      </form>
      <h2 className="mt-20 uppercase bg-neutral-100 pt-5 pb-5 mb-5 rounded-sm dark:text-neutral-800">+ Redes de contato</h2>
      <ul role="list" className="marker:text-violet-500 list-disc pl-5 space-y-3 text-slate-500 mb-5">
        <li><a href="https://www.instagram.com/_gabrieleustaquio/">Meu instagram</a></li>
        <li><a href="https://github.com/gabriel-eustaquio">Meu github</a></li>
        <li><a href="mailto:contato@gabrieleustaquio.com.br">contato@gabrieleustaquio.com.br</a></li>
        <li><a href="https://web.whatsapp.com/send?phone=5521980693443">(21) 9 8069-3443 WhatsApp</a></li>
      </ul>
      <p>Rio de Janeiro - RJ</p>
      <p>Disponivel de Seg a Sex 8h as 18h</p>
    </section>
  )
}

export default Contact