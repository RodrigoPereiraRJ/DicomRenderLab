import { Link } from 'react-router-dom';
import '../../../styles/BannerUIhome.css'
import BannerUIimg from '../../../assets/bannerUi.png'



function BannerUIhome() {
    return (
        <section className="teste">
            <div className="flexitens">
                <div className="divflex">
                    <div className="containerinfoproduct">
                        <p>Renderize Online</p>
                        <span>Visualize e analise imagens DICOM com precisão e praticidade. Sua ferramenta confiável em um clique!</span>
                        <button><Link to="/DashboardDicomWeb" target='_blank'>Começe a Usar Agora</Link></button>
                    </div>
                </div>
                
                <div className="divflex">
                    <div className="containerimg">
                        <img src={BannerUIimg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerUIhome;
