import arrowsIcon from '../assets/Horizontal_top_left_main.svg';
import soundIcon from '../assets/sound_max_fill.svg';
import copyIcon from '../assets/Copy.svg';

const Output = ({ translatedText, handleTargetLanguage, selectedLanguage }) => {
    const handleSelectTargetLanguage = (event) => {
        const value = event.target.dataset.value;
        console.log(value);
        handleTargetLanguage(value);
    }

    const handleCopyButtonClick = () => {
        navigator.clipboard.writeText(translatedText)
            .then(() => console.log('texto copiado al portapeles'))
            .catch(error => console.error(error));
    }

    const hanldeAudioButtonClick = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(translatedText);
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
                <li className={`text-[#4D5562] font-bold px-3 py-2 rounded-lg cursor-pointer ${ selectedLanguage === 'en' ? 'bg-[#4D5562] text-[#F9FAFB]' : '' }`} data-value={ 'en' } onClick={ handleSelectTargetLanguage }>English</li>
                        <li className={`text-[#4D5562] font-bold px-3 py-2 rounded-lg cursor-pointer ${ selectedLanguage === 'fr' ? 'bg-[#4D5562] text-[#F9FAFB]' : '' }`} data-value={ 'fr' } onClick={ handleSelectTargetLanguage }>French</li>
                        <li className={`text-[#4D5562] font-bold px-3 py-2 rounded-lg cursor-pointer ${ selectedLanguage === 'es' ? 'bg-[#4D5562] text-[#F9FAFB]' : '' }`} data-value={ 'es' } onClick={ handleSelectTargetLanguage }>Spanish</li>
                </ul>
            </div>
            <div className='flex flex-col justify-between h-[80%]'>
                <div className='mt-6'>
                    <p className='text-[#F9FAFB] text-base font-bold'>{ translatedText }</p>
                </div>
                <div className='flex gap-2'>
                    <button className='p-2 border-2 border-[#4D5562] rounded-xl hover:bg-[#CDD5E0]' onClick={ hanldeAudioButtonClick } style={{ transition: 'background-color 300ms ease' }}>
                        <img src={ soundIcon } alt="" />
                    </button>
                    <button className='p-2 border-2 border-[#4D5562] rounded-xl hover:bg-[#CDD5E0]' onClick={ handleCopyButtonClick } style={{ transition: 'background-color 300ms ease' }}>
                        <img src={ copyIcon } alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Output;