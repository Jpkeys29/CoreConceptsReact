import TabButton from "./TabButton";
import { EXAMPLES } from '../data.js';
import { useState } from "react";
import Section from "./Section.jsx";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleSelect(selectedButton){
        // selecetedButton => 'components','jsx','props','state'
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }

    return(
        <Section title='Examples' id='examples' >
            <menu>
              <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            {!selectedTopic && <p>Please select a topic.</p>} 
            {selectedTopic && (<div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title} </h3>
              <p>{EXAMPLES[selectedTopic].description} </p>
              <pre>
                {EXAMPLES[selectedTopic].code}
              </pre>
            </div>)}
          </Section>
    ); 
}