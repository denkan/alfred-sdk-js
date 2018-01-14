
export interface IApi {
    host: string;
    port: number;
    baseUrl: string;
}

export const defaultApi: IApi = {
    host: 'alfred.local',
    port: 80,
    baseUrl: '/api'
}

export class Api implements IApi {
    host: string;
    port: number;
    baseUrl: string;

    constructor(initials: IApi) {
        Object.assign(this, defaultApi, initials);
    }
}