import Layout from '../components/Layout'
import Image from 'next/image'

const About = ({text, photo}) => {
    return (
        <Layout title={'About'}>
            <Layout.Page flex>
                <div style={{ marginRight: '45px'}}>
                    <Image
                        src={'http://localhost:1337' + photo.url}
                        width={photo.width}
                        height={photo.height}
                        alt=""
                    />
                </div>

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
        props: {text: about.text, photo: about.photo[0]}
    }
}

export default About