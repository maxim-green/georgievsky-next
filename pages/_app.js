import '../styles/globals.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

export default function App({Component, pageProps, contacts}) {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return <Component {...pageProps} contacts={contacts}/>
}

App.getInitialProps = async (ctx) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`)
    const contacts = await res.json()
    return {
        contacts
    }
}