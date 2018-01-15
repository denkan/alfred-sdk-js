import { AccessToken, Device, DeviceApp } from "../models";
import { fetchDefaultDeviceName } from "./index";

export interface IAuthOptions {
    username: string,
    password: string,
    deviceAppName: string,
    deviceName?: string,
}

export class Auth {
    $promise: Promise<Auth>;
    accessToken: AccessToken;
    device: Device;
    deviceApp: DeviceApp;

    constructor(options?: IAuthOptions) {
        if (options) {
            this.init(options);
        }
    }

    init(options: IAuthOptions) {
        return this.$promise = new Promise((resolve, reject) => {
            const todos = [];

            if (!options.deviceName) {
                todos.push(fetchDefaultDeviceName());
            }

            Promise.all(todos)
                .then(results => resolve(this))
                .catch(err => reject(err));

        });
    }
}