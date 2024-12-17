import '../../../styles/FlexitensUIHome.css'
function FlexitensUIHome() {
    return (
        <div className='flexitenscontainerhome'>
            <div className="flexhomecontainerfeatures">
                <div className="containerproductfeatures">
                    <div className="imgfeatureilustration">
                        <img src="https://www.svgrepo.com/show/190772/notes-notepad.svg" alt="" />
                    </div>
                    <span style={{color: '#65CCD8'}}>Anotaçôes</span>
                    <p>Adicione e gerencie observações <br /> diretamente nas imagens."</p>
                </div>
            </div>
            <div className="flexhomecontainerfeatures">
                <div className="containerproductfeatures">
                    <div className="imgfeatureilustration">
                        <img src="https://www.svgrepo.com/show/151631/text-width.svg" alt="" />
                    </div>
                    <span style={{color: '#14349D'}}>Mediçôes</span>
                    <p>Realize medições precisas <br /> em áreas específicas</p>
                </div>
            </div>
            <div className="flexhomecontainerfeatures">
                <div className="containerproductfeatures">
                    <div className="imgfeatureilustration">
                        <img src="https://www.svgrepo.com/show/184240/zoom-in-lens.svg" alt="" />
                    </div>
                    <span style={{color: '#E28696'}}>Zoom</span>
                    <p>Amplie detalhes com <br /> controle e clareza.</p>
                </div>
            </div>
        </div>
    )
}



export default FlexitensUIHome