import { useEffect, useState } from "react";
import {getFetchJsonDict, getFetchRestricted, getJsonDictPdfB64} from "../ApiCommons";

export default function useFetch({
    csrfToken,
    userToken,
    url = 'api-base-url',
    dataSend = null,
    method = 'POST',
    typeFetch = 'normal',  //normal/pdf/pdfb64
    downloadTitle = 'download',
    downloadExtension = 'pdf',  //pdf/csv
    code = ''
}) {
    const [apiData, setApiData] = useState({
        url: null,
        dataSend: null,
        method: null,
        typeFetch,
        downloadTitle,
        downloadExtension
    })
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);
    const [reload, setReload] = useState(false);
    const [wasReload, setWasReload] = useState(false);

    useEffect(() => {
        setData(null);
        setApiData({
            url,
            dataSend,
            method,
            typeFetch,
            downloadTitle,
            downloadExtension,
            code
        })
    }, [url, dataSend, method, typeFetch, downloadTitle, downloadExtension, code])

    useEffect(() => {
        if (wasReload) {
            setWasReload(false);
            return;
        }
        if (error !== null) setError(null);
        const abortController = new AbortController();
        if (apiData.url !== null) {
            setController(new AbortController());
            setLoading(true);
            if (typeFetch === 'pdfb64') {
                getJsonDictPdfB64(
                    apiData.url,
                    csrfToken,
                    userToken,
                    apiData.dataSend,
                    method,
                    null,
                    downloadTitle,
                    downloadExtension
                ).then(dataResponse => {
                        if (!dataResponse?.success) {
                            setError(dataResponse?.error?.message);
                        } else {
                            setData({status: true});
                        }
                }).catch(error => {
                    console.log('Error en useFetch.useEffect: ', error, ', url: ', apiData.url);
                    if (error.name === "AbortError") console.log("Request cancelled");
                    else setError(error);
                    setData(null);
                }).finally(() => {
                    setLoading(false);
                    if (reload) {
                        setReload(false);
                        setWasReload(true);
                    }
                })
            }
            else if (typeFetch === 'multipart') {
                // Falta probar
                getFetchRestricted(
                    apiData.url, csrfToken, userToken, apiData.dataSend, method
                ).then(response => {
                    if (response.status > 299) setError(response.status);
                    return response.json()
                }).then(dataResponse => {
                    if (!dataResponse?.success) {
                        setError(dataResponse?.error?.message);
                    } else {
                        setData(dataResponse);
                    }
                }).catch(error => {
                    console.log('Error en useFetch.useEffect: ', error, ', url: ', apiData.url);
                    if (error.name === "AbortError") console.log("Request cancelled");
                    else setError(error);
                    setData(null);
                }).finally(() => {
                    setLoading(false);
                    if (reload) {
                        setReload(false);
                        setWasReload(true);
                    }
                })
            }
            else {
                getFetchJsonDict(
                    apiData.url, csrfToken, userToken, apiData.dataSend, method
                ).then(response => {
                    if (response.status > 299) setError(response.status);
                    return response.json()
                }).then(dataResponse => {
                    if (!dataResponse?.success) {
                        setError(dataResponse?.error?.message);
                    } else {
                        setData(dataResponse);
                    }
                }).catch(error => {
                    console.log('Error en useFetch.useEffect: ', error, ', url: ', apiData.url);
                    if (error.name === "AbortError") console.log("Request cancelled");
                    else setError(error);
                    setData(null);
                }).finally(() => {
                    setLoading(false);
                    if (reload) {
                        setReload(false);
                        setWasReload(true);
                    }
                })
            }
        }

        return () => abortController.abort();
    }, [apiData.url, apiData.dataSend, reload]);

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort();
            setError('Request cancelled');
        }
    }

    const sendError = (errorText) => {
        setError(errorText);
    }

    const reloadData = () => {setData(null); setReload(true);}

    return {
        data,
        loading,
        error,
        code,
        sendError,
        handleCancelRequest,
        reloadData
    }
}