import React, { useEffect } from 'react'
import "./Meme.css"
import html2canvas from 'html2canvas'

const Meme = ({ linea1, linea2, imagen, exportar, setExportar }) => {
    useEffect(() => {
        document.querySelector("#meme").style.backgroundImage = `url('../../resources/${imagen}.jpg')`
    }, [imagen])

    useEffect(() => {
        if(exportar) exportarImagen()
    }, [exportar])

    const exportarImagen = () => {
        html2canvas(document.querySelector("#meme")).then(canvas => {
            const img = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.download = 'meme.png';
            link.href = img;
            link.click();
        });
        setExportar(false)

    }

    
    return (
       
        <div className="meme" id="meme">
            <span className='m-3'>{linea1}</span>
            <span className='m-3'>{linea2}</span>
        </div>
    )
}

export default Meme