import { useEffect, useState } from "react";
import { getFetchJsonDict } from "../ApiCommons";

function getSuspender(promise) {
    let status = "pending";
    let response;

    const suspender = promise.then(
        (res) => {
            status = "success";
            response = res;
        },
        (err) => {
            status = "error";
            response = err;
        }
    )

    const read = () => {
        switch (status) {
            case "pending":
                throw suspender;
            case "error":
                throw response;
            default:
                return response;
        }
    }

    return { read };
}

export function fetchData(
    url,
    userToken,
    dataSend = null,
    method = 'GET',
) {
    const promise = getFetchJsonDict(
        url, null, userToken, dataSend, method
    ).then(response => response.json())
        .then(dataResponse => dataResponse);

    return getSuspender(promise)
}

export default function FetchSuspense ({
    url,
    dataSend = null,
    method = 'GET',
    userToken,
    children
}) {
    const [ apiFetch, sendApiFetch ] = useState(null);

    
    const dataFromFetch = apiFetch?.read();

    useEffect(() => {
         console.log('dataFromFetch: ', dataFromFetch);
        if (dataFromFetch) {
            // console.log('data: ', data);
        }
    }, [dataFromFetch]);

    useEffect(() => {
        const apiData = fetchData(url + 'k', userToken, dataSend, method);
        sendApiFetch(apiData)
    }, []);

    return React.Suspense({fallback: "...", children: children});

    // TODO: Verificar Suspense si funciona
    /*return (
        <Suspense fallback={<CircularProgress />}>
            {children}
        </Suspense>
    )*/
}