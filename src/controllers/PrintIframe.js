import React from "react";
export const printIframeDiv = (divId) => {
        const content = document.getElementById(divId);
        const pri = document.getElementById("ifmcontentstoprint").contentWindow;
        pri.document.open();
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }

/**
 * Ejemplo:
 * import PIframe, {printIframeDiv} from "../../../controllers/tools/PrintIframe";
 * <PIframe>
        <div id="asdfasdf">
            hola
        </div>
    </PIframe>

    En otro lado printIframeDiv("asdfasdf"), para activar la imprecion del contenido de ese elemento
 * @param children
 * @returns {JSX.Element}
 */
/*
export const PrintIframe = ({children}) => {
    return (
        <React.Fragment>
            <iframe
                id="ifmcontentstoprint"
                style={{
                    height: '0px',
                    width: '0px',
                    position: 'absolute'
                }}
            />
            {children}
        </React.Fragment>
    );
}*/