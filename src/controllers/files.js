import printJS from "print-js";

class FilesTools {
    downloadFile(data, type = 'text/plain', isBase64 = false, hasPrint = false, download = true, filename = "sinnombre.txt") {
        let pdfBsc = data;
        if (isBase64) {
            pdfBsc = atob(data);
        }

        // Pasamos directamente a esta linea si esque enviamos desde django con HttpResponse
        const pdfFile = new Blob([pdfBsc], {
            type: type
        });
        const pdfUrl = window.URL.createObjectURL(pdfFile);
        if (hasPrint) {
            // printJS(pdfUrl);
            // printJS({printable: pdfUrl, showModal: false});
            printJS({
                printable: data,
                type: "pdf",
                base64: isBase64
            })
        }
        if (download) {
            // Tambien se descargara la factura
            const a = document.createElement('a');
            a.href = pdfUrl;
            a.download = filename;
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();
            a.remove();  //afterwards we remove the element again
        }
    }

    /**
     * Funcion que descarga e imprime un pdf que puede estar en base64
     * @param data
     * @param isBase64 {boolean} Si esta en code base64
     * @param hasPrint {boolean} Si se imprimira
     * @param download {boolean} Si se va descargar o no
     * @param filename {String} El nombre del archivo
     */
    pdf_printDownload(data, isBase64 = false, hasPrint = true, download = true, filename = 'sinnombre.pdf') {
        /*  esto es por que quisimos enviar en un json el pdf y lo tuvimos
            que codificar en base64 para dejarlo como variable en el json
            en caso de enviarlo directamente como HttpResponse, no hara falta la conversion de atob
        */
        /*
        En Brave debemos desactivar la opcion:
        Ask where to save each file before downloading
        */
        this.downloadFile(
            data,
            "application/pdf",
            isBase64,
            hasPrint,
            download,
            filename
        );
    }

    /**
     * Abre el gestor de archivos y al agregar el archivo/imagen/* se convierte en b64 y lo retorna
     * en la funcion fn con los parametros value, name
     * Ejemplo de uso:
     * <input
     *  id='ifotos'
     *  onChange={e => getB64File(e, setInputFile)}
     *  accept="image/*"
     *  type="file"
     *  hidden
     *  />
     * @param event {Event}
     * @param fn {Function}
     */
    static getB64File = (event, fn) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => fn({
            value: reader.result,
            name: file.name
        });
        reader.readAsDataURL(file);
    }
}

export default FilesTools;