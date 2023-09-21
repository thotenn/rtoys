class NetworkTools {
    static getIp() {
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET", "https://api.ipify.org/?format=json", true);
            xhttp.send();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    let ip = JSON.parse(this.responseText).ip;
                    resolve(ip);
                } else reject(null);
            };
        });
    }
}

export default NetworkTools;