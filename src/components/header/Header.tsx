import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useTheme } from "../theme/ThemeProvider"
import { Button } from "../ui/button"
import React from 'react'
import { NavLink } from "react-router-dom"

function Header() {
  const {theme, setTheme} = useTheme()
  const [menu, setMenu] = React.useState(false);

  return (
    <header className="md:container md:mx-auto flex flex-wrap justify-between items-center p-10 sticky top-0 z-50 bg-violet-500 md:bg-white dark:md:bg-slate-950">
      <h1 className="capitalize font-bold md:text-2xl">{"<Portfolio/>"}</h1>
      <nav>
        <ul className={menu ? "container absolute left-0 top-28 flex gap-5 flex-col bg-slate-200 h-screen pt-5 right-0 md:h-auto md:relative md:top-0 md:flex-row md:bg-white" : "md:flex flex-wrap md:gap-10 hidden"}>
          <li><NavLink to="/" end style={({isActive}) => {
            return {
              color: isActive ? "#7c3aed" : ""
            }
          }} className="pt-2 pb-2 md:pl-4 pr-4 rounded-lg absolute top-0 left-0 right-0 pl-8 md:relative border-t border-y-slate-300 md:border-white dark:md:border-black dark:text-neutral-800 dark:md:text-neutral-200" onClick={() => setMenu(false)}>Sobre</NavLink></li>
          <li><NavLink to="/techs" style={({isActive}) => {
            return {
              color: isActive ? "#7c3aed" : ""
            }
          }} className="pt-2 pb-2 md:pl-4 pr-4 rounded-lg absolute top-10 left-0 right-0 pl-8 md:relative md:top-0 dark:text-neutral-800 dark:md:text-neutral-200" onClick={() => setMenu(false)}>Techs</NavLink></li>
          <li><NavLink to="/contact" style={({isActive}) => {
            return {
              color: isActive ? "#7c3aed" : ""
            }
          }} className="pt-2 pb-2 md:pl-4 pr-4 rounded-lg absolute top-20 left-0 right-0 pl-8 md:relative md:top-0 dark:text-neutral-800 dark:md:text-neutral-200" onClick={() => setMenu(false)}>Contato</NavLink></li>
        </ul>
      </nav>    
      <span className="flex flex-wrap items-center gap-1">
        <Switch id="dark-mode" onClick={() => setTheme(!theme)} checked={theme}/>
        <Label htmlFor="dark-mode">Light</Label>
      </span>
      <Button className="md:hidden duration-700" onClick={() => setMenu(!menu)}>{menu ? "Fechar" : "Abrir"} Menu</Button>
    </header>
  )
}

export default Header