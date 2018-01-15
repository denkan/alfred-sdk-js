export class Device {
    id: string;
    name: string;
    
    constructor(initials?: any) {
        Object.assign(this, initials);
    }
}