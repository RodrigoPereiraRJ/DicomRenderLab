import '../../../styles/FeaturesProducts3.css'
import { Link } from 'react-router-dom'
import IMGilustration03 from '../../../assets/medicalimageteaching.svg'

function FeaturesProducts3() {
    return (
        <section className="FeaturesProductsSession3">
            <div className="flexcontainerproductsessio3">
                <div className="flexitensproducts3">
                    <div className="containerflexproducts3">
                        <img src={IMGilustration03} alt="" />
                    </div>
                </div>
                <div className="flexitensproducts3">
                    <div className="containerflexproducts3">
                        <h4>Manipule Imagens</h4>
                        <p>Anotações e Marcadores: Adicione anotações e marque áreas de interesse diretamente na imagem.
                            Desempenho Otimizado: Renderização fluida para lidar com grandes volumes de dados médicos sem comprometimento da performance.</p>
                            <button><Link to="/DashboardDicomWeb" target='_blank'>Quero Testar</Link></button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default FeaturesProducts3