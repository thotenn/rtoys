import {useEffect} from "react";

/**
 * Seria un hook que se usara generalmente para events tipo key press
 * @param cb {function} Seria el callback el cual se ejecutara mediante se presione alguna tecla en arrayKeysInt
 * @param arrayKeysInt {Array} Array que contendra las teclas de evento, estaran en formato ascii
 * @param typeEvent {string} keydown, keypress o keyup
 */
export const useKey = (cb, arrayKeysInt, typeEvent = "keyup") => {
    // const callbackRef = useRef(cb);
    // useEffect(() => {callbackRef.current = cb;})

    useEffect(() => {
        //
        const handle = (event) => {
            // console.log(typeEvent, ": ", event.which);
            if (arrayKeysInt.includes(event.which)) {
                cb(event);
                // callbackRef.current(event);
            }
        }
        document.addEventListener(typeEvent, handle);
        return () => document.removeEventListener(typeEvent, handle);
    }, [cb, arrayKeysInt, typeEvent]);
}