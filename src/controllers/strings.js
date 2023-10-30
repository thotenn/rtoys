class StringsTools {
    /**
     * Separador de miles
     * @param x El numero sin puntos a enviar
     * @param character El caracter para separar, por default es un punto
     * @returns {string} El numero en string separado de a miles.
     */
    static numPointsSep(x, character = '.') {
        if (x === 0) return '0';
        if (!x) return '';
        const s = x.toString();
        let m = '';
        if (s[0] === '-') {
            m = '-';
        }
        return m + s.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, character);
        // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, character);
    }

    /**
     * Separa en miles y retorna en string un numero float
     * @param {String} x El numero tipo float
     * @param {String} character El caracter separador de miles
     * @param {String} floatCharacter El caracter de punto flotante
     * @returns {String}
     */
    static floatNumPointSep(x, character = '.', floatCharacter = '.', floatCharFinal = ','){
        if (x === 0) return '0';
        if (!x) return '';
        const s = x.toString();
        const xSplitted = s.split(floatCharacter);
        const integerPart = xSplitted[0];
        const floatPart = xSplitted[1];
        const integerFinal = StringsTools.numPointsSep(integerPart, character);
        return integerFinal + floatCharFinal + floatPart;
    }

    /**
     * Extrae los numeros de un string y los retorna en un entero
     * @param x {string}
     * @returns {number}
     */
    static getIntFromString(x) {
        if (typeof x !== 'string') return x;
        if (x === "") return 0;
        const numeros = x.match(/\d+/g);  // Extraer los números utilizando una expresión regular
        return parseInt(numeros.join(''), 10);  // Convertir los números en un string a un entero
    }

    /**
     * Retorna el string normalizado, por ejemplo, lápiz ñu => lapiz nu
     * @param x
     * @returns {*}
     */
    static getNormalize(x) {
        return x.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    }

    /**
     * Retorna un string random que comienza con una letra, es especial para id's
     * @return {string}
     */
    static getStrRandomb64 = () => btoa(Math.random().toString()).substring(0, 12);

    /**
     * Obtiene un random hexadecimal
     * @returns {string}
     */
    static getHexaRandom = () => '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);

    // TODO: Se supone que tiene que capitalizar las primeras letras de cada palabra
    static capitalize(x) {
        let r = x.toLowerCase();
        return r.charAt(0).toUpperCase() + r.slice(1);
    }
}

export default StringsTools;