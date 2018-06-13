import {createStore} from 'redux';
import reducer from './Dux/reducer';

+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


export default createStore(reducer);