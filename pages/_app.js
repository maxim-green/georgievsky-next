import '../styles/globals.scss'

export default function App({Component, pageProps, contacts}) {
    return <Component {...pageProps} contacts={contacts}/>
}

App.getInitialProps = async (ctx) => {
    console.log(process.env.API_BASE_URL)
    const res = await fetch(`${process.env.API_BASE_URL}/contact`)
    const contacts = await res.json()
    return {
        contacts
    }
}