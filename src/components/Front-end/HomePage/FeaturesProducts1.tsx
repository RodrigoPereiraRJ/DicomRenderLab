import '../../../styles/FeaturesProducs1.css'
import { Link } from 'react-router-dom'
import IMGilustration01 from '../../../assets/medical-image-sharing.svg'
function FeaturesProducts1() {
    return (
        <section className="FeaturesProductsSession">
            <div className="containertituloproduct1">
                <h2>Recursos</h2>
                <p>Esta ferramenta Permite Manipular Imagens Dicom para analises Detalisticas</p>
            </div>
            <div className="containerflexproducts1">
                <div className="flexproducts1">
                    <div className="productsinfoexample1">
                        <h4>Facil de usar e Leve </h4>
                        <span>Suporte Multiplataforma: Compatível com navegadores modernos e ambientes multiplataforma, permitindo acesso às ferramentas em qualquer lugar.
                            Interação em Tempo Real: Manipulação de imagens, como zoom, rotação e deslocamento, para visualizações detalhadas.
                            Ferramentas de Medição: Inclui medidores de distância, ângulos, áreas e outros cálculos essenciais.
                            Suporte a DICOM: Permite carregar e visualizar imagens no formato DICOM, padrão da área médica.</span>
                            <button><Link to="/DashboardDicomWeb" target='_blank'>Usar Agora</Link></button>
                    </div>
                </div>
                <div className="flexproducts1">
                    <div className="productsinfoexample1">
                        <img src={IMGilustration01} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesProducts1