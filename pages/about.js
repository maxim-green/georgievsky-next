import Layout from '../components/Layout'

const About = ({text, photo}) => {
    return (
        <Layout title={'About'}>
            <Layout.Page flex>
                <img style={{ maxWidth: '600px', marginRight: '45px'}} src={'http://localhost:1337' + photo} alt=""/>
                <div style={{ maxWidth: '400px'}}>
                    <h2 className={'page-title'}>About me</h2>
                    <p className={'text'}>{text}</p>
                </div>
            </Layout.Page>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:1337/about')
    const about = await res.json()

    return {
        props: {text: about.text, photo: about.photo[0].url}
    }
}

export default About