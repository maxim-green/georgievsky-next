import Head from 'next/head'
import classes from '../styles/AppLayout.module.scss'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Layout = ({children, title}) => {
    return (
        <div className={classes.appLayout}>
            <Head>
                <title>{title} | Georgievsky</title>
            </Head>
            <Navigation cclassName={classes.navigation}/>
            <Content>{children}</Content>
        </div>
    )
}

const Navigation = () => {
    const router = useRouter()
    return (
        <nav className={classes.navigation}>
            <div className={classes.logo}><Link href={'/'}><a>Georgievsky</a></Link></div>
            <ul>
                <li><Link href={'/paintings/2021'}><a className={router.asPath === '/paintings/2021' ? classes.active : ''}>2021</a></Link></li>
                <li><Link href={'/paintings/2020'}><a className={router.asPath === '/paintings/2020' ? classes.active : ''}>2020</a></Link></li>
                <li><Link href={'/about'}><a className={router.asPath === '/about' ? classes.active : ''}>About</a></Link></li>
                <li><Link href={'/contact'}><a className={router.asPath === '/contact' ? classes.active : ''}>Contact</a></Link></li>
            </ul>
            <div className={classes.language}>EN | RU</div>
        </nav>
    )
}

const Content = ({children}) => {
    return (
        <main className={classes.content}>
            {children}
        </main>
    )
}

export default Layout