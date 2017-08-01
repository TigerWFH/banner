import React from 'react';
import { Banner } from '../lib/banner';
import { shallow, mount, render } from 'enzyme';

describe("Banner Test", function () {
    it("should render with throwing an error", function () {
        expect(shallow(<Banner />).contains(<div className="sx-banner-wrapper"></div>)).not.toBe(true);
    });
    it("should be selectable by class 'sx-banner-wrapper' ", function () {
        expect(shallow(<Banner />).is('.sx-banner-wrapper')).toBe(true);
    });
    it("should mount in a fill dom", () => {
        expect(mount(<Banner />).find('.sx-banner-wrapper').length).toBe(1);
    });
    it("should render to static HTML", () => {
        expect(render(<Banner />).text()).toBe('');
    })
});