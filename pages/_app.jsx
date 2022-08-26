import { GlobalStyles} from '../src/styles/globalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
