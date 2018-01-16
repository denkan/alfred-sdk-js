import 'mocha';
import { expect } from 'chai';

import * as fromApi from './api';


describe('utils/Api', () => {

    describe('constructor without params', () => {
        const a1 = new fromApi.Api();

        it('should create', () => {
            expect(a1).to.be.instanceOf(fromApi.Api);
        });
        it('should have default host', () => {
            expect(a1.host).to.equal(fromApi.defaultApi.host);
        });
        it('should have default port', () => {
            expect(a1.port).to.equal(fromApi.defaultApi.port);
        });
        it('should have default baseUrl', () => {
            expect(a1.baseUrl).to.equal(fromApi.defaultApi.baseUrl);
        });
    });


    describe('constructor with params', () => {
        const customApi = {
            host: 'test-domain.tld',
            port: 3000,
            baseUrl: '/something-else'
        }
        const a2 = new fromApi.Api(customApi);

        it('should create', () => {
            expect(a2).to.be.instanceOf(fromApi.Api);
        });
        it('should have custom host', () => {
            expect(a2.host).to.equal(customApi.host);
        });
        it('should have custom port', () => {
            expect(a2.port).to.equal(customApi.port);
        });
        it('should have custom baseUrl', () => {
            expect(a2.baseUrl).to.equal(customApi.baseUrl);
        });
    });

});