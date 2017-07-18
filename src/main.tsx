// libs
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// css
import './main.less';

interface IProps {
}

function App(props: IProps) {
    return <div className="app">
        App
    </div>
}

ReactDOM.render(<App />, document.getElementById("main"), null);