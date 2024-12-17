import  { useEffect, useState } from 'react';
import '../../../styles/Header.css';
import LogoHeader from '../../../assets/LOGOHOME.png'

function Headerpage() {
    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav style={isFixed ? {position: 'fixed', background: 'linear-gradient(to right, #1F28AF, #3D204B', height: '85px',boxShadow: '0 0 40px #10037C'} : {position: 'relative'}}>
                <div className="containeritens">
                    <div className="imglogonavbar">
                        <img src={LogoHeader} alt="" />
                    </div>
                    <button>GitHub</button>
                </div>
            </nav>
        </header>
    );
}

export default Headerpage;