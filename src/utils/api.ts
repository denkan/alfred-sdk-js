
export const defaultApi: Api = {
    host: 'alfred.local',
    port: 80,
    baseUrl: '/api'
}

export class Api {
    host?: string;
    port?: number;
    baseUrl?: string;

    constructor(initials?: Api) {
        Object.assign(this, defaultApi, initials);
    }
}