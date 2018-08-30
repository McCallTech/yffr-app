import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './views/App';
import registerServiceWorker from './registerServiceWorker';
import { CookiesProvider } from 'react-cookie';
import BasicLink from './components/BasicLink';

// function render(MainApplication) {
//   return (
//     <CookiesProvider>
//       <MainApplication />
//     </CookiesProvider>
//   );
// }

// ReactDOM.render(render(App), document.getElementById('root'));
// registerServiceWorker();



class Application extends React.Component {
  constructor(props){
    super();
    this.state = {
      location: props.location
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', (e) => {
      const location = e.newURL.split('#')[1] || '';
      this.setState({
        location
      });
    });
  }

  render() {

    switch (this.state.location) {
      case 'asdf':
        return <BasicLink href='#n'>
          <div><h1>Index Page</h1></div>
        </BasicLink>
      case 'n':
        return <BasicLink href='#1'>
          <div><h1>n-word Page</h1></div>
        </BasicLink>
      case '1':
        return <BasicLink href='#2'>
          <div><h1>1 Page</h1></div>
        </BasicLink>
      case '2':        
        return <BasicLink href='#3'>
          <div><h1>2 Page</h1></div>
        </BasicLink>
      default:
        return <BasicLink href='#asdf'>
          <div><h1>Not Found</h1></div>
        </BasicLink>
    }
  }
};

//handleNewHash()
window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Application location={'asdf'}/>, document.getElementById('root'));
});

