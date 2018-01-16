
export function isBrowser() {
    return typeof window !== 'undefined'
        && ({}).toString.call(window) === '[object Window]';
}

export function isNode() {
    return !isBrowser();
}

export function fetchDefaultDeviceName() { 
    return new Promise<string>((resolve, reject) => {
        if(isNode()) {
            const exec: Function = require('child_process').exec;
            Promise.all([
                exec('uname -n'),
                exec('uname -s'),
                exec('uname -r')
            ])
            .then(([netName, sysName, sysVersion]) => {
                const deviceName = `${netName} (${sysName} ${sysVersion})`;
                resolve(deviceName);
            })
            .catch(err => {
                resolve('Unknown');
            })
        } else {
            resolve('Web Browser');
        }
    });
}