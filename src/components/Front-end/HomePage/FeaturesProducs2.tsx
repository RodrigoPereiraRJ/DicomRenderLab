import '../../../styles/FeaturesProducts2.css'
import { Link } from 'react-router-dom'
import IMGilustration02 from '../../../assets/diagnosticviewer.svg'

function FeaturesProducts2() {
    return (
        <section className="FeaturesProductsSession2">
            <div className="flexcontainerproductsessio2">
                <div className="flexitensproducts2">
                    <div className="containerflexproducts2">
                          <img src={IMGilustration02} alt="" />
                    </div>
                </div>
                <div className="flexitensproducts2">
                    <div className="containerflexproducts2">
                        <h4>Rapido Processamento</h4>
                        <p>Análise DICOM robusta. Suporta DICOMweb e todas as sintaxes de transferência prontas para uso.Exibição de imagem acelerada por GPU de alto desempenho. Decodificação de imagem multithread. Streaming progressivo de dados.</p>
                        <button><Link to="/DashboardDicomWeb" target='_blank'>Tente Agora</Link></button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FeaturesProducts2