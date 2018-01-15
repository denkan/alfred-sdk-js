import { Api } from "./utils/api";
import { Auth, IAuthOptions } from "./utils/auth";

export class AlfredSDK {
    private _api: Api;
    private _auth: Auth;

    constructor(api: Api) {
        this._api = new Api(api);
    }

    auth(options: IAuthOptions) {
        this._auth = new Auth(options);
        this._auth.$promise.then((auth) => {
            console.log('### AUTH DONE', auth);
        });
        return this._auth.$promise;
    }

}
