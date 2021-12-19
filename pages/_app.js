import '../styles/globals.css'
import 'antd/dist/antd.css';
import SY_layout from '../layout';
function MyApp({ Component, pageProps }) {
  return (
    <SY_layout>
      <Component {...pageProps} />
    </SY_layout>
  )
}

export default MyApp
