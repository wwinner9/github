import { render } from "react-dom"
import document, {Html,Head,Main,NextScript} from 'next/document'

export default class MyDocument extends document {
    render() {
        return(
            <Html>
                <Head></Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>

        )
    }
}