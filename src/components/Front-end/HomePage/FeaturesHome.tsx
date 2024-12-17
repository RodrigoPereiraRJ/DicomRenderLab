import '../../../styles/FeaturesHome.css'
import VetorIlustration from '../../../assets/vetorimgmedical.jpg'


function FeatruresHome(){
    return(
        <section className='flexproductsSection'>
            <div className="flexproducts">
                <div className="itensproducts">
                    <div className="imgproductsexample">
                        <img src={VetorIlustration} alt="" />
                    </div>
                </div>
                <div className="itensproducts">
                    <div className="aboutproducts">
                        <label>Sobre o projeto</label>
                         <div className="h2texto">
                            <h2>Ferramenta online Gratis</h2>
                            <h2 style={{color: '#4395B7'}}>Renderize Dicom Web Images</h2>
                         </div>
                         <span>Visualize-os com um visualizador DICOM HTML5 fácil de usar e rápido em qualquer máquina cliente (PCs desktop, notebooks, tablets e telefones).</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatruresHome