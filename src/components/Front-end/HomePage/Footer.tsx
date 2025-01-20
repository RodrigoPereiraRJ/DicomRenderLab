import '../../../styles/Footer.css'
import LOGOfooter from '../../../assets/LOGOHOME.png'
import Productsico from '../../../assets/productsICO.svg'
import SoluctionsICO from '../../../assets/solutionsICO.svg'
import InovaçâoICo from '../../../assets/InovaçâoICO.svg'
function Footer() {
    return (
        <footer>
            <div className="containerfooter">
                <div className="footerflexitens">
                    <div className="containeritensproductfooter" >
                        <div className="containerdescproductfooter" style={{borderBottom: '1px solid #2a4868'}}>
                            <img src={Productsico} alt="" />
                            <p style={{fontWeight: 'bold'}}>Produtos</p>
                        </div>
                        <div className="containerdescproductfooter" style={{borderBottom: '1px solid #2a4868'}}>
                            <img src={SoluctionsICO} alt="" />
                            <p style={{fontWeight: 'bold'}}>Soluçoês</p>
                        </div>
                        <div className="containerdescproductfooter" style={{borderBottom: '1px solid #2a4868'}}>
                            <img src={InovaçâoICo} alt="" style={{backgroundColor: '#EA2885'}}/>
                            <p style={{fontWeight: 'bold'}}>Inovaçâo</p>
                        </div>
                    </div>
                </div>
                <div className="footerflexitens">
                    <div className="containeritensproductfooter">
                        <div className="containerdescproductfooter" style={{flexDirection: 'column'}}>
                            <img src={LOGOfooter} alt="" style={{width: '200px',borderRadius: '0', backgroundColor: 'transparent', height: '70px'}}/>
                            <p>Aplicaçâo Rapida baseada em Browser <br /> para estudantes de medicina <br /> e Empolgantes, Alta Velocidade E <br /> Simplicidade de Uso</p>
                        </div>
                        <div className="containerdescproductfooter" style={{flexDirection: 'column',alignItems: 'center'}}>
                            <p style={{fontWeight: 'bold'}}>Conceitos</p>
                            <a href="https://pt.wikipedia.org/wiki/DICOM" target='_blank'>O Que E Dicom?</a>
                            <a href="https://www.inf.ufpr.br/lmperes/2017_2/ci167/alunos/johanna/Trabalho4.pdf" target='_blank'>Criaçâo do Dicom</a>
                            <a href="https://www.cornerstonejs.org/" target='_blank'>Cornestone JS</a>
                            <a href="https://www.yller.com.br/guia-completo-sobre-radiologia-digital/" target='_blank'>Radiologia Digital</a>
                        </div>
                        <div className="containerdescproductfooter" style={{flexDirection: 'column', alignItems: 'center'}}>
                            <p style={{fontWeight: 'bold'}}>Links Rapidos</p>
                            <a href="../../../../public/Apresentacao_Projeto_DICOM.pdf" target='_blank'>Sobre o Projeto</a>
                            <a href="https://github.com/RodrigoPereiraRJ" target='_blank'>Linkedin</a>
                            
                        </div>
                    </div>
                </div>
               
            </div>
        </footer>
    )
}

export default Footer