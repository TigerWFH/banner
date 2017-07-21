// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// css
import './main.less';

// components
import { Banner } from './modules/banner';

interface IProps {
}

function App(props: IProps) {
    return <div className="app">
        <Banner />
    </div>
}

ReactDOM.render(<App />, document.getElementById("main"), null);