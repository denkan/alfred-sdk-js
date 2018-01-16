import 'mocha';
import { expect } from 'chai';

import { AlfredSDK } from './alfred-sdk';


describe('AlfredSDK', () => {

    const a = new AlfredSDK({ host: 'test-domain.tld' });

    it('should create', () => {
        expect(a).to.be.instanceOf(AlfredSDK);
    });


    describe('.auth()', () => {
        it('should exist', () => {
            expect(a.auth).to.be.a('function');
        });

        const o = {
            username: 'myUser',
            password: 'mypass',
            deviceAppName: 'myDeviceApp',
            deviceName: 'myDevice'
        };

        it('should return promise', () => {
            const r = a.auth(o);
            expect(r).to.be.instanceOf(Promise);
        });

    });

});