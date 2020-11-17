import '@babel/polyfill';
import App from './pages/Base/App';
import './scss/main';
console.log('check plugin>>>', MAINTAIN)
console.log(process.env.CHECKING)
if( MAINTAIN) {   
  ReactDOM.render(<h1>Opps something wrong...</h1>, document.getElementById("root"));
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}

