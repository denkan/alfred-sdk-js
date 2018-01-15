export class AccessToken {
    id: string;
    ttl: number;
    scopes: string;
    created: Date;
    userId: string;
    
    constructor(initials?: any) {
        Object.assign(this, initials);
    }
}