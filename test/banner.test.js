// import React from 'react';
// import { shallow, mount, render } from 'enzyme';


// jest.dontMock('../lib/banner');
// import { Banner } from '../lib/banner';

// describe("Banner Test", () => {
//     it("1111", () => {
//         expect(true).toBe(true)
//     });
// })

var enzyme = require('enzyme');

jest.dontMock('../lib/banner');
var Banner = require('../lib/banner');

describe("Banner Test", function () {
    it("111", function () {
        expect(true).toBe(true);
    });
});