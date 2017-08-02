
/*  单元测试： 单元测试的目的不是为了能够编写出大覆盖率的全部通过的测试代码，而是需要从使用者（调用者）的角度出发，
              尝试**函数逻辑的各种可能性**，进而辅助性增强代码质量。
    测试的分类&测试工具:
        分类：
            API/Func UnitTest
                1、测试不常变化的函数逻辑
                2、测试前后端API接口
            UI UnitTest
                1、页面自动截图
                2、页面DOM元素检查
                3、跑通交互流程
        工具：
            1、 Mocha + Chai
            2、 PhantomJS or CasperJS or Nightwatch.js
            3、 selenium
                    with python
                    with js
*/
/**
 * enzyme接口
 * shallow: 可以实现浅渲染。其作用仅仅是渲染至虚拟节点，不会返回真实的节点，能够极大提高测试性能。
 *          但是不适合测试包含子组件、需要测试声明周期的组件。
 * mount:   Full Rendering，非常适用于存在于DOM API存在交互，或者需要测试组件完整的声明周期。
 * render:  Static Rendering，用于将React组件渲染成静态的HTML并分析生成的HTML结构。render返回的wrapper与其它两个API类似。
 *          不同的是，render使用了第三方HTML解析器和Cheerio。
 * 总结：    一般情况下，使用shallow就已经足够了，偶尔情况下会用到mount。
 */
/**
 * 方向:    测试组件静态特征，即测试组件渲染后某一特征是否符合预期
 * 
 * case 1:  测试组件是否正常渲染（shallow返回wrapper）
 * 方案：    测试其中某个独特的标签是否渲染出来即可。
 * Demo:    expect(wrapper.find('input').exists());
 */

/**
 * 方向:     测试组件的交互1，即组件存在交互，且交互完全在组件内完成，不依赖外部的props，测试交互后，改变的内容是否符合预期
 * 
 * case 2:  测试输入内容并敲下回车键。测试组件调用props的方法
 * 方案:
 * Demo:
 */

/**
 * 方向:    测试组件交互2，即组件交互依赖外部，使用mock函数，检测函数的参数是否符合预期  
 * 
 * case 3:  
 * 方案:
 * Demo:
 */

import React from 'react';
import { Banner } from '../lib/banner';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';

class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <div className={`clicks-${count}`}>
                    {count} clicks
                </div>
                <a href="url" onClick={(event) => { this.setState({ count: count + 1 }); console.log("--->", event.target); }}>
                    Increment
                </a>
            </div>
        );
    }
}

describe("Test", () => {
    it('1', () => {
        const wrapper = mount(<Foo />);
        expect(wrapper.state("count")).toEqual(0);
        wrapper.find('a').simulate('click', {
            target: "simulate"
        });
        expect(wrapper.state("count")).toEqual(1);
    });
})

describe("Banner Test", function () {
    let defautTotalImgOrDot = 4;
    let wrapper = shallow(<Banner />);
    // 测试渲染结果是否符合预期
    it("should render img.sx-image-img", () => {
        expect(wrapper.find('.sx-image-img').length).toBe(defautTotalImgOrDot);
    });

    it("should render span.sx-dot-span", () => {
        expect(wrapper.find('.sx-image-img').length).toBe(defautTotalImgOrDot);
    });

    it("should be selectable by class 'sx-banner-wrapper' ", function () {
        expect(wrapper.is('.sx-banner-wrapper')).toBe(true);
    });
    // 测试周期函数是否调用
    it("calls componentDidMount", () => {
        sinon.spy(Banner.prototype, 'componentDidMount');
        const mWrapper = mount(<Banner />);//渲染到DOM
        expect(Banner.prototype.componentDidMount.calledOnce).toEqual(true);
    });

    it("allowing us to set props", () => {
        const mWrapper = mount(<Banner imgSourceList={["123", "123"]} />);
        expect(mWrapper.props().imgSourceList).toEqual(["123", "123"]);
        mWrapper.setProps({
            imgSourceList: ["111", "222"]
        });
        expect(mWrapper.props().imgSourceList).toEqual(["111", "222"]);

    });

    it("should render to static HTML", () => {
        expect(render(<Banner />).text()).toBe('');
    });
});