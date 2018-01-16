import 'mocha';
import { expect } from 'chai';

import * as fromHelpers from './helpers';


describe('utils/helpers', () => {

    describe('isBrowser()', () => {
        it('should exist', () => {
            expect(fromHelpers.isBrowser).to.be.a('function');
        });
        it('should return false', () => {
            expect(fromHelpers.isBrowser()).to.be.false;
        });
    });

    describe('isNode()', () => {
        it('should exist', () => {
            expect(fromHelpers.isNode).to.be.a('function');
        });
        it('should return true', () => {
            expect(fromHelpers.isNode()).to.be.true;
        });
    });

    describe('fetchDefaultDeviceName()', () => {
        it('should exist', () => {
            expect(fromHelpers.fetchDefaultDeviceName).to.be.a('function');
        });
        it('should return a promise', () => {
            expect(fromHelpers.fetchDefaultDeviceName()).to.be.instanceOf(Promise);
        });
        it('should resolve string from promise', () => {
            return fromHelpers.fetchDefaultDeviceName().then((r => {
                expect(r).to.be.a('string');
                expect(r.length).to.be.gt(1);
            }));
        });
    });




});