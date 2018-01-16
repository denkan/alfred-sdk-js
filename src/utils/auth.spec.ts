import 'mocha';
import { expect } from 'chai';

import * as fromAuth from './auth';


describe('utils/Api', () => {

    describe('constructor without options', () => {
        const a1 = new fromAuth.Auth();

        it('should create', () => {
            expect(a1).to.be.instanceOf(fromAuth.Auth);
        });
        it('shouldn\'t trigger .$promise', () => {
            expect(a1.$promise).to.be.undefined;
        });
    });

    describe('constructor with options', () => {
        const o = {
            username: 'myUser',
            password: 'mypass',
            deviceAppName: 'myDeviceApp',
            deviceName: 'myDevice'
        };
        const a2 = new fromAuth.Auth(o);

        it('should create', () => {
            expect(a2).to.be.instanceOf(fromAuth.Auth);
        });
        it('should trigger .$promise', () => {
            expect(a2.$promise).to.be.instanceOf(Promise);
        });
    });


    const a = new fromAuth.Auth();

    describe('.init()', () => {
        it('should exist', () => {
            expect(a.init).to.be.a('function');
        });

        const o = {
            username: 'myUser',
            password: 'mypass',
            deviceAppName: 'myDeviceApp',
            deviceName: 'myDevice'
        };

        it('should return promise', () => {
            const r = a.init(o);
            expect(r).to.be.instanceOf(Promise);
        });
        it('should trigger .$promise', () => {
            const r = a.init(o);
            expect(r).to.be.instanceOf(Promise);
        });
    });

});