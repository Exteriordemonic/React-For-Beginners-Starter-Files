import React from 'react';
import ReactDOM from 'react-dom';

import StorePicker from './components/StrorePicker';

const app = document.querySelector('#main');

class App extends React.Component {
    render() {
        return (
            <div>
                <StorePicker/>
            </div>
        )
    }
}

ReactDOM.render( <App/>, app);
