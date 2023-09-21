import React from 'react';
import html2canvas from 'html2canvas';
import JSPDF from 'jspdf';
import toPx from 'unit-to-px';

export const printpdf = async (pages, filename='download') => {
    let images = []

    await Promise.all(pages.map(async value => {
        const input = document.getElementById(value)

        const promise = new Promise(
            resolve => html2canvas(input).then(canvas => {
                resolve(canvas)
            })
        )

        await Promise.all([promise]).then(canvas => {
            const image = canvas[0].toDataURL('image/png')
            images.push(image)
        })
    }))

    images.length > 0 && download(images)
}

const download = (images, filename) => {
    const pdf = new JSPDF()
    const pages = document.getElementById('pages').offsetHeight / toPx('297mm')

    for (let i = 0; i < Math.trunc(pages); i++) {
        i > 0 && i < Math.trunc(pages) && pdf.addPage()
        pdf.addImage(images[i], 'PNG', 0, 0)
    }
    pdf.save(filename + '.pdf');

    // pdf.autoPrint();
    // pdf.save('autoprint.pdf');

    pdf.autoPrint();  // Para que al abrir el pdf aparezca la ventana de imprimir
    pdf.save(filename + '.pdf');
}

/**
 * EJEMPLO:
 * import Printer, {printpdf} from "../../../controllers/tools/PrintPDF";
 * const ids = ['id1',...]
 * <Printer>
        <div id={ids[0]} style={{width: '210mm', height: '297mm'}}>
            AQUI VA EL CONTENIDO
        </div>
    </Printer>

 .. luego en alguan funcion
 printpdf(ids);
 * @param children
 * @returns {JSX.Element}
 */
export default ({children}) => {
    return (
        <div id='pages'>
            {children}
        </div>
    )
}

export const Dimensions = [
    {
        name: 'A0',
        width: '841mm',
        height: '1189mm'
    },
    {
        name: 'A1',
        width: '594mm',
        height: '841mm'
    },
    {
        name: 'A2',
        width: '420mm',
        height: '594mm'
    },
    {
        name: 'A3',
        width: '297mm',
        height: '420mm'
    },
    {
        name: 'A4',
        width: '210mm',
        height: '297mm'
    },
    {
        name: 'A5',
        width: '148mm',
        height: '210mm'
    },
    {
        name: 'A6',
        width: '105mm',
        height: '148mm'
    },
    {
        name: 'A7',
        width: '74mm',
        height: '105mm'
    },
    {
        name: 'A8',
        width: '52mm',
        height: '74mm'
    },
    {
        name: 'A9',
        width: '37mm',
        height: '52mm'
    },
    {
        name: 'A10',
        width: '26mm',
        height: '37mm'
    }
]