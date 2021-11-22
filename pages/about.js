import Layout from '../components/Layout'

const About = ({text, photo}) => {
    return (
        <Layout title={'About'}>
            <img src={'http://localhost:1337' + photo} alt=""/>
            <p>{text}</p>
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