import { IApi, Api } from "./utils/api";


export class AlfredSDK {
    private _api: Api;

    constructor(api: IApi) {
        this._api = new Api(api);
    }

}
