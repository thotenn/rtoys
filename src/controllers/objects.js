export const objectsMergeByDir = (oldData, odir, newDataByDir) => {
    const dataRes = oldData;
    const obj2 = {[odir]: newDataByDir}
    for (const i in obj2) {
        const res = i.split(".");
        const fieldName = res.splice(res.length - 1, 1);
        let objField = res.reduce((r, u) => r && r[u] ? r[u] : '', dataRes);
        objField[fieldName] = obj2[i];
    }
    return dataRes;
}


/**
 * Revierte el orden de un objeto tipo enum, ej: {Py: 1} a => {1: Py}
 * @param {Object} objTypeEnum 
 */
export const reverseObjectTypeEnum = (objTypeEnum) => {
    const newObj = {};
    Object.keys(objTypeEnum).forEach((k) => {
        newObj[objTypeEnum[k]] = k;
    });
    return newObj;
}


/**
 * Asigna los valores de otro objeto al nuevo, ya que este podria no necesitar todos los valores.
 * @param {Object} newObj
 * @param {Object} otherObj
 * @returns {Object}
 */
export const objectGetDataFromOther = (newObj, otherObj) => {
    Object.keys(newObj).forEach(objKey => {
        if (otherObj.hasOwnProperty(objKey))
            newObj[objKey] = otherObj[objKey];
    });
    return newObj;
}


/**
 * Convierte un array de Objetos tipo json en un texto csv
 * @param {Array<Object>} arr
 * @returns
 */
export const objectToCSV = (arr) => {
    const array = [Object.keys(arr[0])].concat(arr)

    return array.map(it => {
        return Object.values(it).toString()
    }).join('\n')
}


/**
 * Convierte un array de Objetos tipo json en un texto csv
 * @param {Array<Object>} arr
 * @returns
 */
export const objectToCSV2 = (arr) => {
    let csvContent = "";
    csvContent += Object.keys(arr[0]).join(",") + "\r\n";

    arr.forEach(item => {
        csvContent += Object.values(item).join(",") + "\r\n";
    });

    return csvContent;
}


/**
 * Descarga un archivo csv a partir de un array de objetos tipo json
 * @param {Array<Object>} arr
 * @param {String} title
 */
export const downloadCsvFileFromArrayObject = (arr, title = 'download') => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += objectToCSV2(arr);

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${title}.csv`);
    document.body.appendChild(link);
    link.click();
}


/**
 * Formatea un json en un string de tal manera que {Pais: 'Paraguay, ...} res = 'Pais: Paraguay' \n ...
 * @param {Object} obj
 * @returns {String}
 */
export const getObjectJsonToStringSimpleFormat = (obj) => {
    let res = '';
    Object.keys(obj).forEach(item => {
        res += `${item}: ${obj[item]} \r\n`;
    });
    return res;
}


/**
 * Formatea un array de json en un string de tal manera que [{Pais: 'Paraguay, ...}, {...}, ...] res = 'Pais: Paraguay' \n ...
 * @param {Object} obj
 * @returns {String}
 */
export const getArrayOfJsonToStringSimpleFormat = (arr) => {
    let res = '';
    arr.forEach(obj => {
        Object.keys(obj).forEach(item => {
            res += `${item}: ${obj[item]} \r\n`;
        });
        res += `\r\n`;
    });
    return res;
}


/**
 * Retorna un Objeto tipo json que solo contendra los keys del array de Strings arr.
 * @param {Object} obj 
 * @param {String[]} arr 
 * @returns 
 */
export const getObjectByKeys = (obj, arr) => {
    const newObj = {};
    for (const item of arr) {
        if (obj.hasOwnProperty(item))
            newObj[item] = obj[item];
    }
    return newObj;
}