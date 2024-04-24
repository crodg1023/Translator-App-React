import arrowsIcon from '../assets/Horizontal_top_left_main.svg';
import soundIcon from '../assets/sound_max_fill.svg';
import copyIcon from '../assets/Copy.svg';
import sortIcon from '../assets/Sort_alfa.svg';
import { useState } from 'react';
        
const Input = ({ handleTranslate, handleSelectLanguage, selectedLanguage }) => {
    const [textToTranslate, setTextToTranslate] = useState('');

    const translateText = () => {
        handleTranslate(textToTranslate);
    }
    const selectLanguage = (event) => {
        const value = event.target.dataset.value;
        console.log(value);
        handleSelectLanguage(value);
    }
    const handleChange = (event) => {
        setTextToTranslate(event.target.value);
    }
    const handleCopyButtonClick = () => {
        navigator.clipboard.writeText(textToTranslate)
            .then(() => console.log('texto copiado al portapeles'))
            .catch(error => console.error(error));
    }
    const hanldeAudioButtonClick = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(textToTranslate);
            utterance.lang = selectedLanguage;
            window.speechSynthesis.speak(utterance);
        } else {
            console.error('Browser doesnt supports TTS');
        }
    }

    return (
        <div className="rounded-3xl bg-[#121826] px-6 py-6 h-[500px] w-100 flex-1 opacity-80">
            <div className="pb-4 border-b-[1px] border-[#4D5562]">
                <ul className="flex gap-3 items-center">
                    <li className={`text-[#4D5562] font-bold cursor-pointer px-3 py-2 rounded-lg ${ selectedLanguage === 'en' ? 'bg-[#4D5562] text-[#F9FAFB]' : '' }`} data-value={ 'en' } onClick={ selectLanguage }>English</li>
                    <li className={`text-[#4D5562] font-bold cursor-pointer px-3 py-2 rounded-lg ${ selectedLanguage === 'fr' ? 'bg-[#4D5562] text-[#F9FAFB]' : '' }`} data-value={ 'fr' } onClick={ selectLanguage }>French</li>
                    <li className={`text-[#4D5562] font-bold cursor-pointer px-3 py-2 rounded-lg ${ selectedLanguage === 'es' ? 'bg-[#4D5562] text-[#F9FAFB]' : '' }`} data-value={ 'es' } onClick={ selectLanguage }>Spanish</li>
                </ul>
            </div>
            <div className='flex flex-col justify-between h-[80%] w-100'>
                <div className='mt-6 h-[80%]'>
                    <textarea className='text-[#F9FAFB] text-base font-bold resize-none bg-transparent outline-none' style={{ width: '100%', height: '100%' }} value={ textToTranslate } onChange={ handleChange }></textarea>
                </div>
                <div className="flex justify-between items-center">
                    <div className='flex gap-2'>
                        <button className='p-2 border-2 border-[#4D5562] rounded-xl hover:bg-[#CDD5E0]' onClick={ hanldeAudioButtonClick } style={{ transition: 'background-color 300ms ease' }}>
                            <img src={ soundIcon } alt="" />
                        </button>
                        <button className='p-2 border-2 border-[#4D5562] rounded-xl hover:bg-[#CDD5E0]' onClick={ handleCopyButtonClick } style={{ transition: 'background-color 300ms ease' }}>
                            <img src={ copyIcon } alt="" />
                        </button>
                    </div>
                    <button className='flex gap-3 py-3 px-6 bg-[#3662E3] font-bold text-[#F9FAFB] rounded-xl border-[1px] border-[#7CA9F3]' onClick={ translateText }>
                        <img src={ sortIcon } alt="" />
                        Translate
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Input;