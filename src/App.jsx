import { useEffect, useState } from "react";
import { Article } from "./components/Article"
import { Body } from "./components/Body"
import { Container } from "./components/Container"
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return 'dark'
    }
    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    console.log(theme);
  }

  return (
    <main className="p-4 dark:bg-dark">
      <button onClick={handleTheme} className='p-2'>
        {theme === 'dark' ? (
          <FontAwesomeIcon icon={faSun} className="text-indigo-100"/>
        ) : (
          <FontAwesomeIcon icon={faMoon} className="text-indigo-900" />
        )}
      </button>
      <div className="lg:flex lg:gap-8">
        <Article />
        <Container />
      </div>
      <div>
        <Body />
      </div>
    </main>
  )
}

export default App
