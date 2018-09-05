import React from 'react'
import { render } from 'react-dom';
import { AppContainer} from 'react-hot-loader';
import Main from './components/main'
//console.log(react.version);
render(
    <AppContainer>
        <Main />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./components/main', () => {
        const NewMain = require('./components/main').default;
        render(
            <AppContainer>
                <NewMain />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}

