import { useState, useRef } from 'react';
import '../../../styles/PainelDicomDashboard/PainelDicomview.css';
import DicomviewController from './DicomviewController';
import Logo from '../../../assets/LOGOHOME.png';
import Zoomimg from '../../../assets/Zoom.svg';
import Rotate from '../../../assets/Rotate.svg';
import Magnifyer from '../../../assets/Magnifier.svg';
import Retangule from '../../../assets/Retangule.svg';
import Circle from '../../../assets/Circule.svg';
import Notes from '../../../assets/Notes.svg';
import Angle from '../../../assets/Angule.svg';
import Contrast from '../../../assets/Contrast.svg';
import Pan from '../../../assets/Pan.svg';
import Undo from '../../../assets/Desfazer.svg';
import Save from '../../../assets/Save.svg';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';


interface MetodosTools {
    enableZoomTool: () => void;
    enablerotatetool: () => void;
    enablemagnify: () => void;
    enableretanguletool: () => void;
    circuletool: () => void;
    arrowanotation: () => void;
    Anguletool: () => void;
    ContrasteTool: () => void;
    Pantool: () => void;
    RemoveAnotation: () => void;
    GetCanvasdrawn: () => void;
}

function PainelDicomview() {
    const dicomRenderRef = useRef<MetodosTools | null>(null);
    const [base64img, setBase64img] = useState<string>('');
    const [urlweb, setUrlweb] = useState<string>('');
    const [namefile, setNamefile] = useState<string>('');
    const [language, setLanguage] = useState<string>('Portuguese'); 

    const handleAction = (action: keyof MetodosTools) => {
        dicomRenderRef.current?.[action]?.();
    };

    const translations = {
        Portuguese: {
            Zoom: 'Zoom',
            Rotate: 'Rotacionar',
            Magnify: 'Lupa',
            Rectangle: 'Retângulo',
            Circle: 'Círculo',
            Annotations: 'Anotações',
            Angles: 'Ângulos',
            Contrast: 'Contraste',
            Pan: 'Arrastar',
            Undo: 'Desfazer',
            Save: 'Salvar',
            PreviewImage: 'Pré-visualização de imagem',
            Language: 'Idioma',
            Select: 'Selecione',
        },
        English: {
            Zoom: 'Zoom',
            Rotate: 'Rotate',
            Magnify: 'Magnifier',
            Rectangle: 'Rectangle',
            Circle: 'Circle',
            Annotations: 'Annotations',
            Angles: 'Angles',
            Contrast: 'Contrast',
            Pan: 'Pan',
            Undo: 'Undo',
            Save: 'Save',
            PreviewImage: 'Preview Image',
            Language: 'Language',
            Select: 'Select',
        },
        Spanish: {
            Zoom: 'Zoom',
            Rotate: 'Rotar',
            Magnify: 'Lupa',
            Rectangle: 'Rectángulo',
            Circle: 'Círculo',
            Annotations: 'Anotaciones',
            Angles: 'Ángulos',
            Contrast: 'Contraste',
            Pan: 'Mover',
            Undo: 'Deshacer',
            Save: 'Guardar',
            PreviewImage: 'Vista previa de imagen',
            Language: 'Idioma',
            Select: 'Seleccionar',
        },
    }

    type TranslationKeys = 'Zoom' | 'Rotate' | 'Magnify' | 'Rectangle' | 'Circle' | 'Annotations' | 'Angles' | 'Contrast' | 'Pan' | 'Undo' | 'Save' | 'PreviewImage' | 'Language' | 'Select';

    const translate = (key: TranslationKeys) => {
        return translations[language as keyof typeof translations]?.[key] || key;
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value);
    };

    const isTranslationKey = (key: string): key is TranslationKeys => {
        return ['Zoom', 'Rotate', 'Magnify', 'Rectangle', 'Circle', 'Annotations', 'Angles', 'Contrast', 'Pan', 'Undo', 'Save', 'PreviewImage', 'Language', 'Select'].includes(key);
    };


    return (
        <div className="containergeral">
            <div className="flexpainelcontainers">
                <div className="containerflexcontent">
                    <nav>
                        <div className="logoimgnav">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="itensmenucontainer">
                            <ul>
                                {[
                                    { action: 'enableZoomTool', label: 'Zoom', img: Zoomimg },
                                    { action: 'enablerotatetool', label: 'Rotate', img: Rotate },
                                    { action: 'enablemagnify', label: 'Magnify', img: Magnifyer },
                                    { action: 'enableretanguletool', label: 'Rectangle', img: Retangule },
                                    { action: 'circuletool', label: 'Circle', img: Circle },
                                    { action: 'arrowanotation', label: 'Annotations', img: Notes },
                                    { action: 'Anguletool', label: 'Angles', img: Angle },
                                    { action: 'ContrasteTool', label: 'Contrast', img: Contrast },
                                    { action: 'Pantool', label: 'Pan', img: Pan },
                                    { action: 'RemoveAnotation', label: 'Undo', img: Undo },
                                    { action: 'GetCanvasdrawn', label: 'Save', img: Save },
                                ].map((tool, index) => (
                                    <li key={index} onClick={() => handleAction(tool.action as keyof MetodosTools)}>
                                        <img src={tool.img} alt={isTranslationKey(tool.label) ? translate(tool.label) : tool.label} />
                                        <label>{isTranslationKey(tool.label) ? translate(tool.label) : tool.label}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="containerflexcontent">
                    <div className="containerloadingimg">
                        <Accordion type="single" collapsible style={{ position: 'absolute', width: '100%' }} defaultValue='item-1'>
                            <AccordionItem value="item-1">
                                <AccordionTrigger style={{ backgroundColor: '#383842', border: 'none' }}>
                                    {translate('PreviewImage')}
                                </AccordionTrigger>
                                <AccordionContent style={base64img.length > 0 || urlweb.length > 0 ? { backgroundColor: 'black' } : { backgroundColor: '#383842' }}>
                                    <div>
                                        {base64img.length > 0 || urlweb.length > 0 ? (
                                            <div onContextMenu={(e) => { e.preventDefault(); }} style={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                                {base64img.length > 0 && (
                                                    <img src={base64img} alt="" style={{position: 'relative', height: '170px', width: '100%'}} />
                                                )}
                                                {urlweb.length> 0 && (
                                                    <img src={urlweb} alt="" style={{position: 'relative', height: '170px', width: '100%'}} />
                                                )}
                                                <span style={{ color: 'white' }}>{namefile}</span>
                                            </div>
                                        ) : (
                                            <div style={{ position: 'relative', textAlign: 'center' }}>
                                                <span style={{ color: 'white' }}>{translate('PreviewImage')}</span>
                                            </div>
                                        )}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <div className="selectlinguage">
                            <form>
                                <label htmlFor="language">{translate('Language')}: </label>
                                <select id="language" onChange={handleLanguageChange}>
                                    <option value="Portuguese">{translate('Select')}</option>
                                    <option value="English">EN</option>
                                    <option value="Spanish">ES</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div className="canvasviewDicomcontainer">
                        <DicomviewController
                            base64url={setBase64img}
                            linkimgurl={setUrlweb}
                            namefile={setNamefile}
                            ref={dicomRenderRef}
                            Getcanvasprintscreen={() => handleAction('GetCanvasdrawn')}
                            languague={language}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PainelDicomview;
