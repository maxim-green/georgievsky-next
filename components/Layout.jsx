import Head from 'next/head'
import classes from '../styles/AppLayout.module.scss'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'
import {BsInstagram, BsList, BsXLg} from 'react-icons/bs'
import favicon from '../public/favicon.svg'


export default function Layout({children, title, contacts}) {
    return (
        <div className={classes.appLayout}>
            <Head>
                <title>{title} | Georgievsky</title>
            </Head>
            <Navigation className={classes.navigation} instagram={contacts.instagram}/>
            <Content>{children}</Content>
        </div>
    )
}

const Navigation = ({instagram}) => {
    const [menuActive, setMenuActive] = useState(false)

    const router = useRouter()

    useEffect(() => {
        setMenuActive(false)
    }, [router.asPath])
    return (
        <nav className={classes.navigation}>
            <button className={classes.menuButton} onClick={() => setMenuActive(!menuActive)}>
                {!menuActive && <BsList style={{width: '24px', height: '24px'}}/>}
                {menuActive && <BsXLg style={{width: '16px', height: '16px'}}/>}
            </button>
            <div className={classes.logo}>
                <Link href={'/'}><a>Georgievsky</a></Link>
            </div>
            <ul className={menuActive ? classes.active : ''}>
                <li><Link href={'/paintings/2021'}><a
                    className={router.asPath === '/paintings/2021' ? classes.active : ''}>2021</a></Link></li>
                <li><Link href={'/paintings/2020'}><a
                    className={router.asPath === '/paintings/2020' ? classes.active : ''}>2020</a></Link></li>
                <li><Link href={'/about'}><a
                    className={router.asPath === '/about' ? classes.active : ''}>About</a></Link></li>
                <li><Link href={'/contact'}><a
                    className={router.asPath === '/contact' ? classes.active : ''}>Contact</a></Link></li>
                <li><a href={`https://www.instagram.com/${instagram}`} target={'_blank'} rel={'noreferrer'}
                    className={router.asPath === '/contact' ? classes.active : ''}>
                    <BsInstagram style={{width: '20px', height: '20px'}}/>
                </a></li>
            </ul>
            <div className={classes.language}> </div>
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

Layout.Page = ({children, flex}) => {
    return (
        <div className={classes.page} style={{display: flex ? 'flex' : 'block'}}>
            {children}
        </div>
    )
}
Layout.Page.displayName = 'Layout.Page'