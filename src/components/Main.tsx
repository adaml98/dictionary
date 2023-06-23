import { useState } from "react"
import Definition from './Definition'
import Search from './Search'

export default function Main() {
    const [word, setWord] = useState<string>('');
    return (
    <div style={{
        width: '600px',
        height: '500px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        // backgroundColor: '#f8f8f8',
    }}>
    <Search word = {word} setWord={setWord}/>
    <Definition word = {word}/>
    </div>)
}