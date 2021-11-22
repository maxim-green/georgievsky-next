import Head from 'next/head'
import classes from '../styles/AppLayout.module.scss'
import Link from 'next/link'

const Layout = ({children, title}) => {
    return (
        <div className={classes.appLayout}>
            <Head>
                <title>{title} | Georgievsky</title>
            </Head>
            <Header/>
            <div className={classes.wrapper}>
                <Navigation cclassName={classes.navigation}/>
                <Content>{children}</Content>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <header className={classes.header}>
            <Link href={'/'}><a>Georgievsky</a></Link>
            <div>EN | RU</div>
        </header>
    )
}

const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <ul>
                <li><Link href={'/paintings/2021'}><a>2021</a></Link></li>
                <li><Link href={'/paintings/2020'}><a>2020</a></Link></li>
                <li><Link href={'/about'}><a>About</a></Link></li>
                <li><Link href={'/contact'}><a>Contact</a></Link></li>
            </ul>
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