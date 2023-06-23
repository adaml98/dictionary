type SearchProps = {
    word:string;
    setWord:any;
}

const Search: React.FC<SearchProps> = ({word, setWord}) => {
    const handleSubmit = (event: any) => {
        event.preventDefault();
        setWord('');
        console.log(word);
    }
    return <>
    <form onSubmit={handleSubmit}>
            <input
            style={{
                width: '100%',
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box',
                }}
            value={word}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setWord(event.target.value);
            }}
            />
    </form>
    </>
}

export default Search;