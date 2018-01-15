export class DeviceApp {
    id: string;
    name: string;
    
    constructor(initials?: any) {
        Object.assign(this, initials);
    }
}