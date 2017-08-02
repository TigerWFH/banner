import * as React from 'react';
import * as classNames from 'classnames';

import './banner.less';

// 图片总数
const TOTAL_NUMBER_OF_IMG = 4;
//单位秒(s)
const TIME_INTERVAL = 2;

interface IProps {
    imgSourceList?: Array<string>;
}
interface IState {
    runningOrder?: any;
}
class Banner extends React.Component<IProps, IState> {
    timer: any;
    static defaultProps = {
        imgSourceList: []
    }

    constructor(props: IProps) {
        super(props);
        this.state = {
            runningOrder: 0
        };
    }

    componentDidMount() {
        this.timer = this._setTimer();
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    _renderImgs(runningOrder, imgSourceList = []) {
        let imgsList = [];
        for (let i = 0; i < TOTAL_NUMBER_OF_IMG; i++) {
            imgsList.push(
                <img className={classNames("sx-image-img", { "sx-image-img__active": runningOrder === i })}
                    key={`img${i}`}
                    src={imgSourceList[i]}
                    alt={`${i}`} />
            );
        }

        return imgsList;
    }

    _renderDots(runningOrder) {
        let dotList = [];
        for (let i = 0; i < TOTAL_NUMBER_OF_IMG; i++) {
            dotList.push(
                <span id={`${i}`}
                    key={`dot${i}`}
                    className={classNames("sx-dot-span", { "sx-dot-span__active": runningOrder === i })}>
                </span>
            );
        }

        return dotList;
    }

    _setTimer = () => {
        return setInterval(() => {
            let { runningOrder } = this.state;

            if (runningOrder >= TOTAL_NUMBER_OF_IMG - 1) {
                this.setState({
                    runningOrder: 0
                });
            }
            else {
                runningOrder++;
                this.setState({
                    runningOrder: runningOrder
                });
            }
        }, TIME_INTERVAL * 1000);
    }
    _onDot = (event) => {
        let elem = null;

        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        for (let i = 0; i < TOTAL_NUMBER_OF_IMG; i++) {
            elem = document.getElementById(`${i}`);
            if (elem === event.target) {
                this.setState({
                    runningOrder: i
                });
                break;
            }
        }
        this.timer = this._setTimer();
    }

    render() {
        let { runningOrder } = this.state;
        let { imgSourceList } = this.props;
        return (
            <div className="sx-banner-wrapper">
                <div className="sx-image">
                    {this._renderImgs(runningOrder, imgSourceList)}
                </div>
                <div className="sx-dot" onClick={this._onDot}>
                    {this._renderDots(runningOrder)}
                </div>
            </div>
        )
    }
}

export { Banner };