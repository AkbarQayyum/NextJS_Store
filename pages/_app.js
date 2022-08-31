import '../styles/globals.css'
import { Provider } from 'react-redux'
import {store} from '../ReduxStore/Store'
import Header from './Header/Header'
function MyApp({ Component, pageProps }) {
  return<>
  <Header />
  <Provider store={store}>
  <Component {...pageProps} />

  </Provider>
  </> 
}

export default MyApp
