import React from 'react';
import logo from './logo_white.png';
import './App.css';
import Nakath from "./components/nakath";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-container">
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                    <div className="heading-container heading">
                        <div>කොහෝ කොහෝ</div>
                        <div>கோகோ கோகோ</div>
                        <div className="sub-heading">koho koho</div>
                    </div>
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                </div>
                <div className="description-container">
                    <div className="description-inner-container">
                        <p> 🌾 මෙම වෙබ් අඩවියේ ප්‍රධාන අරමුණ වන්නේ ශ්‍රී ලංකාවේ නැකැත් වේලාවට සමගාමීව ඔබේ වේලා කලාපය මත
                            2026
                            වසරේ සිංහල සහ දෙමළ අලුත් අවුරුදු
                            නැකැත් වේලාවන් ප්‍රදර්ශනය කිරීමයි.</p>

                        <p> 🌾 This website's main purpose is to showcase the auspicious times for the 2026 Sinhala and
                            Tamil
                            New
                            Year in Sri Lanka, based on your timezone. </p>
                    </div>
                </div>
                <div className="header-container">
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                    <div className="heading-container heading">
                        <div>අවුරුදු නැකැත් සීට්ටුව 2026</div>
                        <div>2026 ஆம் ஆண்டுக்கான புத்தாண்டு நல்ல நேரம்</div>
                        <div className="sub-heading">New Year auspicious times for 2026</div>
                    </div>
                    <img className="App-logo heading-container" src={logo} alt="logo"/>
                </div>
            </header>
            <Nakath/>
            <div className="tamil-description-container">
                <div className="description-inner-container">
                    <p> வணக்கம் என் தமிழ் நண்பர்களே, தமிழில் உள்ளடக்கத்தைச் சேர்ப்பதில் தமிழ்
                        மொழியைப் பற்றி எனக்கு
                        நம்பிக்கை இல்லை (நீங்கள் சொல்வது போல்!). எனவே, நீங்கள் எனக்கு உதவ முடிந்தால், தயவுசெய்து
                        தொடர்பு கொள்ளவும் 🤍
                    </p>
                </div>
            </div>
            <footer className="footer">
                <a href="https://www.youtube.com/watch?v=dntB7xfC9gc" target="_blank" rel="noopener noreferrer">Source</a>
                : : Made with ❤️ by
                <a href="https://github.com/Milindi-Kodikara" target="_blank">Milindi Kodikara</a> : :
                <a
                    href="https://ko-fi.com/milindi" target="_blank"> Shout me
                    a tea</a> 🍃
            </footer>
        </div>
    )
}

export default App;
