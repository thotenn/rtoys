/**
 * Obtiene la Cookie actual
 * @param {String} name Nombre del parametro en la Cookie
 * @return {String}
 */
export const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};

/**
 * Obtiene el CSRF Token actual
 * @return {String}
 */
export const getCsrfToken = () => {
    // return getCookie('csrftoken');
    return document.querySelector('[name=csrfmiddlewaretoken]').value;
};
/*
const checkStatus = resp => {
    if (resp.status >= 200 && resp.status < 300){
        return resp;
    }
}*/

/**
 * @param {String} urlFetch Es la url para la consulta.
 * @param {String} csrftoken Es el csrftoken del formulario o consulta
 * @param {String} usertoken Es el token del usuario que realiza la consulta
 * @param {Object} jsonDict El json a enviar.
 * @param {String} method El tipo de consulta.
 *
 * @return {Promise}
 */
export const getFetchJsonDict = (urlFetch, csrftoken = null, usertoken = null, jsonDict = null, method = 'POST') => {
    let headerObj = {'Content-type': 'application/json'};
    if (csrftoken !== null) {
        headerObj['X-CSRFToken'] = csrftoken;
    }
    if (usertoken !== null) {
        headerObj['Authorization'] = `Token ${usertoken}`;
    }
    return fetch(urlFetch, {
        method: method,
        headers: headerObj,
        body: jsonDict != null ? JSON.stringify(jsonDict) : undefined
    });
};

/**
 * Test
 * @param urlFetch
 * @param csrftoken
 * @param usertoken
 * @param formData
 * @param method
 * @returns {Promise<Response>}
 */
export const getFetchRestricted = (urlFetch, csrftoken = null, usertoken = null, formData = null, method = 'POST') => {
    // Falta probar
    // let headerObj = {'Content-type': 'multipart/form-data'};

    let headerObj = {'Content-type': 'multipart/form-data; boundary=BoUnDaRyStRiNg'};
    // let headerObj = {'Content-type': undefined};
    // let headerObj = {'Content-type': 'media-type'};
    // let headerObj = {};
    if (csrftoken !== null) {
        headerObj['X-CSRFToken'] = csrftoken;
    }
    if (usertoken !== null) {
        headerObj['Authorization'] = `Token ${usertoken}`;
    }

    console.log(formData);
    return fetch(urlFetch, {
        method: method,
        headers: headerObj,
        body: formData
    });
};


export const getFetchPdf = (urlFetch,
                            csrftoken = null,
                            usertoken = null,
                            jsonDict = null,
                            method = 'POST',
                            fnState = null,
                            name = 'download.pdf'
) => {
    let headerObj = {'Content-type': 'application/pdf'};
    if (csrftoken !== null) {
        headerObj['X-CSRFToken'] = csrftoken;
    }
    if (usertoken !== null) {
        headerObj['Authorization'] = `Token ${usertoken}`;
    }
    return fetch(urlFetch, {
        method: method,
        headers: headerObj,
        body: jsonDict != null ? JSON.stringify(jsonDict) : undefined
    }).then(response => {
        if (response.status >= 200) {
            return response.blob();
        } else {
            console.log('error');
            if (fnState != null) {
                fnState(false);
            }
            return null;
        }
    }).then(blob => {
        if (blob === null) {
            if (fnState != null) {
                fnState(false);
            }
            return null;
        }
        const url = window.URL.createObjectURL(
            new Blob([blob]),
        );
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.setAttribute(
            'download',
            name,
        );

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
        if (fnState != null) {
            fnState(false);
        }
    }).catch(err => {
        console.log(err);
        if (fnState != null) {
            fnState(false);
        }
    });
};



export async function getJsonDictPdfB64(urlFetch,
    csrftoken = null,
    usertoken = null,
    jsonDict = null,
    method = 'POST',
    fnState = null,
    name = 'download.pdf',
    extension = 'pdf'
) {
    let headerObj = { 'Content-type': 'application/json' };
    if (csrftoken !== null) {
        headerObj['X-CSRFToken'] = csrftoken;
    }
    if (usertoken !== null) {
        headerObj['Authorization'] = `Bearer ${usertoken}`;
    }
    return fetch(urlFetch, {
        method: method,
        headers: headerObj,
        body: jsonDict != null ? JSON.stringify(jsonDict) : undefined
    }).then(response => {
        if (response.status >= 200) {
            return response.json();
        } else {
            if (fnState != null) {
                fnState(false);
            }
            return null;
        }
    }).then(dataGet => {
        if (dataGet.data === null) {
            if (fnState != null) {
                fnState(false);
            }
            return dataGet;
        } else {
            const pdf64 = dataGet.data;
            const link = document.createElement('a');
            link.target = '_blank';
            link.setAttribute(
                'download',
                name + '.' + extension
            );
            link.href = "data:application/octet-stream;base64," + pdf64;
            document.body.appendChild(link); // Needed for Firefox
            link.click();
            link.parentNode.removeChild(link);
            if (fnState != null) {
                fnState(false);
            }
        }
    }).catch(err => {
        console.log(err);
        if (fnState != null) {
            fnState(false);
        }
    });
};

export const tgetJsonDictPdfB642 = (
    url,
    csrftoken = null,
    usertoken = null,
    jsonDict = null,
    method = 'POST',
    fnState = null,
    name = 'download.pdf',
    extension = 'pdf'
) => {
    return new Promise((resolve, reject) => {
        getFetchJsonDict(url, csrftoken, usertoken, jsonDict, method)
            .then(response => {
                if (response.status > 299) reject({});
                return response.json()
            })
            .then(dataGet => {
                if (dataGet.status === 'error') { reject(dataGet?.message); return; };
                const pdf64 = dataGet.data;
                const link = document.createElement('a');
                link.target = '_blank';
                link.setAttribute(
                    'download',
                    name + '.' + extension
                );
                link.href = "data:application/octet-stream;base64," + pdf64;
                document.body.appendChild(link); // Needed for Firefox
                link.click();
                link.parentNode.removeChild(link);
                resolve(true);
            }).catch(err => reject(err));
    })

}

export const getUrlGetByObject = (urlBase, jsonObject, finalAmpersand = false, withNullData = false, withNullSpace = false) => {
    let urlRes = urlBase + '?';
    const objLen = Object.keys(jsonObject).length;
    let i = 0;
    for (let key in jsonObject) {
        if ((jsonObject[key] !== null && jsonObject[key] !== '') || (!jsonObject[key] && withNullData) || (jsonObject[key] === '' && withNullSpace)) {
            urlRes += encodeURIComponent(key) + "=" + encodeURIComponent(jsonObject[key]);
            if ((i < (objLen - 1)) || finalAmpersand) urlRes += "&";
        }
        i++;
    }
    return urlRes;
}