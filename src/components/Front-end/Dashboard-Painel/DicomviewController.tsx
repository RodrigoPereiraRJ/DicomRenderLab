import React, { useState, useEffect, useRef } from "react";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneTools from "cornerstone-tools";
import dicomParser from "dicom-parser";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import cornerstoneWebImageLoader from "cornerstone-web-image-loader";
import Hammer from "hammerjs";
import * as cornerstoneMath from "cornerstone-math";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;
cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;


cornerstoneTools.init({
    mouseEnabled: true,
    touchEnabled: true,
    showSVGCursors: true,
});

interface DicomRenderProps {
    base64url: React.Dispatch<React.SetStateAction<string>>;
    linkimgurl: React.Dispatch<React.SetStateAction<string>>;
    namefile: React.Dispatch<React.SetStateAction<string>>;
    Getcanvasprintscreen: () => void; 
    languague: string;
}

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

const DicomRender = React.forwardRef<MetodosTools,DicomRenderProps>(({ base64url, linkimgurl, namefile, languague }, ref) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [render, setRender] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);


    const enableZoomTool = () => {
        if (elementRef.current) {
            cornerstoneTools.addTool(cornerstoneTools.ZoomTool);
            cornerstoneTools.setToolActive("Zoom", { mouseButtonMask: 1 });
        }
    };

    const enablerotatetool = () => {
        if (elementRef.current) {
            const RotateTool = cornerstoneTools.RotateTool;
            cornerstoneTools.addTool(RotateTool)
            cornerstoneTools.setToolActive('Rotate', { mouseButtonMask: 1 })
        }
    }

    const enablemagnify = () => {
        if (elementRef.current) {
            const MagnifyTool = cornerstoneTools.MagnifyTool;
            const magnifyToolOptions = {
                mouseButtonMask: 1
            };
            cornerstoneTools.addTool(MagnifyTool)
            cornerstoneTools.setToolActive('Magnify', magnifyToolOptions)
        }
    }

    const enableretanguletool = () => {
        if (elementRef.current) {
            const RectangleRoiTool = cornerstoneTools.RectangleRoiTool;
            cornerstoneTools.addTool(RectangleRoiTool)
            cornerstoneTools.setToolActive('RectangleRoi', { mouseButtonMask: 1 })
        }
    }

    const circuletool = () => {
        if (elementRef.current) {
            const EllipticalRoiTool = cornerstoneTools.EllipticalRoiTool;
            cornerstoneTools.addTool(EllipticalRoiTool)
            cornerstoneTools.setToolActive('EllipticalRoi', { mouseButtonMask: 1 })
        }
    }

    const arrowanotation = () => {
        if (elementRef.current) {
            const ArrowAnnotateTool = cornerstoneTools.ArrowAnnotateTool;
            cornerstoneTools.addTool(ArrowAnnotateTool)
            cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 })
        }
    }

    const Anguletool = () => {
        if (elementRef.current) {
            const AngleTool = cornerstoneTools.AngleTool;
            cornerstoneTools.addTool(AngleTool)
            cornerstoneTools.setToolActive('Angle', { mouseButtonMask: 1 })
        }
    }

    const ContrasteTool = () => {
        if (elementRef.current) {
            const WwwcTool = cornerstoneTools.WwwcTool;
            cornerstoneTools.addTool(WwwcTool)
            cornerstoneTools.setToolActive('Wwwc', { mouseButtonMask: 1 })
        }
    }

    const Pantool = () => {
        if (elementRef.current) {
            const PanTool = cornerstoneTools.PanTool;
            cornerstoneTools.addTool(PanTool)
            cornerstoneTools.setToolActive('Pan', { mouseButtonMask: 1 })
        }
    }

    const GetCanvasdrawn = () => {
        const elementcanvas = elementRef.current?.querySelector("canvas")
        if (elementcanvas) {
            const canvasview = elementcanvas.toDataURL("image/jpeg", 0.6);
            const downloadLink = document.createElement("a");
            downloadLink.href = canvasview;
            downloadLink.download = "imagem-gerada.jpg";
            downloadLink.click();
        }
    }

    React.useImperativeHandle(ref, () => ({
        enableZoomTool,
        enablerotatetool,
        enablemagnify,
        enableretanguletool,
        circuletool,
        arrowanotation,
        Anguletool,
        ContrasteTool,
        Pantool,
        GetCanvasdrawn,
        RemoveAnotation
    }));

    useEffect(() => {
        if (render && elementRef.current) {
            const element = elementRef.current; 
            cornerstone.enable(element);
            return () => {
                cornerstone.disable(element);
            };
        }
    }, [render]);

    useEffect(() => {
        const resizeViewport = () => {
            if (elementRef.current) {
                cornerstone.resize(elementRef.current, true);
            }
        };
        window.addEventListener("resize", resizeViewport);
        return () => {
            window.removeEventListener("resize", resizeViewport);
        };
    }, []);

    const renderFileDcm = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRender(true);
        const file = event.target.files?.[0];
        if (!file) return;
        namefile(file.name);
        const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(file);
        cornerstone
            .loadImage(imageId)
            .then((image: object) => {
                if (elementRef.current) {
                    cornerstone.displayImage(elementRef.current, image);
                }
                setTimeout(() => {
                    const canvas = elementRef.current?.querySelector("canvas");
                    if (canvas) {
                        const imageUrl = canvas.toDataURL("image/jpeg", 0.3);
                        base64url(imageUrl);
                    }
                }, 2000);
            })
            .catch((error: object) => console.error("Erro ao carregar DICOM:", error));
    };

    const renderImg = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOpen(false);
        const input = event.currentTarget[0] as HTMLInputElement;
        const imgUrl = input.value;
        setRender(true);
        linkimgurl(imgUrl);
        cornerstone
            .loadImage(imgUrl)
            .then((image: object) => {
                if (elementRef.current) {
                    cornerstone.displayImage(elementRef.current, image);
                }
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            })
            .catch((error: object) => console.error("Erro ao carregar imagem:", error));
    };

    const RemoveAnotation = () => {
        if (elementRef.current) {
            const element = elementRef.current;
            const toolStateManager = cornerstoneTools.globalImageIdSpecificToolStateManager;
            const toolState = toolStateManager.saveToolState();
            Object.keys(toolState).forEach((imageId) => {
                const tools = toolState[imageId];
                Object.keys(tools).forEach((toolName) => {
                    const data = tools[toolName].data;
                    if (data.length > 0) {
                        data.pop();
                        console.log('removido');
                    }
                });
            });
            cornerstone.updateImage(element);
        }
    };
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {render ? (
                <div className="renderdicomvisualizer" ref={elementRef}></div> 
            ) : (
                <div className="insertcontent">
                    <div className="containeroptioinscontent">
                        {languague === 'English' && (
                            <h1>Upload Your Files Here</h1>
                        )}
                         {languague === 'Spanish' && (
                            <h1>Sube tus archivos aquí</h1>
                        )}
                        {languague === 'Portuguese' && (
                            <h1>Faça Upload de seus Arquivos Aqui</h1>
                        )}
                        {languague === '' && (
                            <h1>Faça Upload de seus Arquivos Aqui</h1>
                        )}
                        
                        <div className="paragraforender">
                            {languague === 'English' && (
                                <p>Compatible Format: DICOM Files (.dcm)</p>
                            )}
                            {languague === 'Spanish' && (
                                <p>Formato compatible: Archivos DICOM (.dcm)</p>
                            )}
                            {languague === 'Portuguese' && (
                                <p>Formato Compatível: DICOM Files (.dcm)</p>
                            )}
                            {languague === '' && (
                                 <p>Formato Compatível: DICOM Files (.dcm)</p>
                            )}
                        </div>
                        <input
                            type="file"
                            accept=".dcm"
                            ref={fileInputRef}
                            onChange={renderFileDcm}
                            
                        />
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger asChild>
                                <Button variant="outline">{languague === 'English' && 'Import image URL'}{languague === 'Spanish' && 'Importar URL de imagen'}{languague === 'Portuguese' && 'Importar URL de imagens'}{languague === '' && 'Importar URL de imagens'}</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]" style={{ backgroundColor: "#27272B" }}>
                                <DialogHeader>
                                    <DialogTitle style={{ color: "white" }}>Anexe o Link</DialogTitle>
                                    <DialogDescription>
                                        Insira o link de sua imagem de preferência para visualização.
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={renderImg}>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="url" className="text-right" style={{ color: "white" }}>
                                                URL:
                                            </Label>
                                            <Input
                                                id="url"
                                                defaultValue="https://dominio.com/imagem.png"
                                                className="col-span-3"
                                                style={{ color: "white" }}
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" style={{ backgroundColor: "#C21D43" }}>
                                            OK
                                        </Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            )}
        </div>
    );
});

export default DicomRender;
