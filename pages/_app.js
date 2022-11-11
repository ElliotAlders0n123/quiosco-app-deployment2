import '../styles/globals.css'
import {QuioscoProvider} from '../context-quioscoapp/context';


function MyApp({ Component, pageProps }) {
 

  return( 
    <QuioscoProvider>


        <Component {...pageProps} />



    </QuioscoProvider>

  )

}

export default MyApp
