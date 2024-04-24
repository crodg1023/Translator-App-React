import axios from 'axios';
import { useEffect, useState } from 'react';
import Output from './components/Output';
import Input from './components/Input';
import logo from './assets/logo.svg';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState('fr');
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.mymemory.translated.net/get?q=${text}!&langpair=${selectedLanguage}|${selectedTargetLanguage}`)
      .then(response => {
        const translatedText = response.data.responseData.translatedText;
        setTranslation(translatedText);
      })
      .catch(error => console.error(error));
  }, [text, selectedTargetLanguage]);

  const handleTranslateClick = (text) => {
    setText(text);
  }
  const handleSelectLanguageClick = (language) => {
    setSelectedLanguage(language);
  }
  const handleTargetLanguage = (language) => {
    setSelectedTargetLanguage(language);
  }

  return (
    <main className ='px-6 lg:px-[72px]'>
      <img src={ logo } alt="" className='mx-auto mt-[92px] mb-[52px]'/>
      <div className='h-screen flex flex-col xl:flex-row gap-6 mb-24'>
        <Input handleTranslate={ handleTranslateClick } handleSelectLanguage={ handleSelectLanguageClick } selectedLanguage={ selectedLanguage }></Input>
        <Output translatedText={ translation } handleTargetLanguage={ handleTargetLanguage } selectedLanguage={ selectedTargetLanguage }></Output>
      </div>
    </main>
  )
}

export default App
