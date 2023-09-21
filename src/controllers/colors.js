export default class ColorsTools {
    /**
     * Obtiene un random hexadecimal
     * @returns {string}
     */
    static getHexaRandom = () => '#' + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);

    /**
     * Agrega iluminacion al color
     * @param hex {string} El valor hexadecimal del color
     * @param lum {number} Mientras mas bajo (tipo menor a 0.09) mas oscuro, y si el valor es negativo, con mas razon
     * @returns {string} El color hexadecimal de nuevo pero con la iluminacion agregada
     */
    static colorLuminance(hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;

        // convert to decimal and change luminosity
        let rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }

        return rgb;
    }

    /**
     * Obtiene un array de string de colores hexadecimales
     * @param fields_length {number}
     * @param array_fields_colors {array}
     * @param luminosity {number}
     * @returns {*[]|*}
     */
    static getArrayColors(fields_length, array_fields_colors, luminosity=-0.3) {
        const res = [];
        if (array_fields_colors.length > 0) {
            if (array_fields_colors.length !== fields_length) {
                for (let i = 0; i < fields_length; i++) {
                    if (i < array_fields_colors.length)
                        res.push(array_fields_colors[i])
                    else
                        res.push(ColorsTools.getHexaRandom());
                }
            } else return array_fields_colors;
        } else {
            for (let i = 0; i < fields_length; i++) {
                const hexRandom = ColorsTools.colorLuminance(ColorsTools.getHexaRandom(), -0.3);
                res.push(hexRandom);
            }
            // const newArrayColors = [...Array(array_fields.length).keys()].fill(getHexaRandom(), 0);
        }
        return res;
    }
}