import React from 'react'
import { StringsTools } from '../controllers';

const floatNumPointSep = StringsTools.floatNumPointSep;


export default function useCurrency({
    currency
}) {
    const [currencyProps, setCurrencyProps] = React.useState(null);

    const getFormattedValue = (xNumber, newCurrency = null) => {
        let current = currencyProps;
        let x = '';

        console.log(current)
        if (newCurrency !== null)
            if (currencies.hasOwnProperty(newCurrency))
                current = currencies[newCurrency];
        if (current === null) return '';

        if (current.type === 'int') {
            const newXnumber = parseInt(xNumber.toString())
            if (current.thousandSeparator){
                x = floatNumPointSep(newXnumber)
            }
        }

        if (current.position === 'left')
            x = current.badge + ' ' + x;
        else
            x = x + ' ' + current.badge;
        return x;
    }

    React.useEffect(() => {
        setCurrencyProps(null);
        if (currency !== null)
            if (currencies.hasOwnProperty(currency))
                setCurrencyProps(currencies[currency])
    }, [currency])

  return {
    getFormattedValue
  }
}

useCurrency.defaultProps = {
    currency: null
};

export const currencies = {
    gs: {
        badge: 'Gs',
        position: 'left',
        type: 'int',
        thousandSeparator: true,
        // Al ser int ya no es necesario nada de esto
        // decimalPoint: false,
        // toFixed: 0
    }
}