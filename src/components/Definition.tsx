import { useEffect, useState } from "react";


type DefinitionProps = {
  word: string;
};

type DefinitionData = {
  word: string;
  phonetic: string;
  meanings: {
    definitions: {
      definition: string;
    }[];
  }[];
};

const Definition: React.FC<DefinitionProps> = ({word}) => {
    const [definition, setDefinition] = useState<DefinitionData | null>(null);
    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((res) => {
            return res.json();
        }).then((body) => {
            setDefinition(body[0]);
        })
    }, [word])
    if(definition){
        return <> 
    <h1>{definition.word}</h1>
    <h2>{definition.phonetic}</h2>
    <h3>{definition.meanings[0].definitions[0].definition}</h3>
    </>
}
}

export default Definition;