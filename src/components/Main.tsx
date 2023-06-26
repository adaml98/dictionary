import { useState } from "react"
import Definition from './Definition'
import Search from './Search'
import './Main.css'

export default function Main() {
    const [word, setWord] = useState<string>('');
    return (
    <div className="main">
    <Search word = {word} setWord={setWord}/>
    <Definition word = {word}/>
    </div>)
}