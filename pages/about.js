import Layout from '../components/Layout'
import Image from 'next/image'
import useMediaQuery from "../hooks/useMediaQuery";

const About = ({text, photo, contacts}) => {
    return (
        <Layout title={'About'} contacts={contacts}>
            <Layout.Page flex={!useMediaQuery(801)}>
                <div style={{ marginRight: !useMediaQuery(801) ? '45px' : '0px'}}>
                    <Image
                        src={process.env.NEXT_PUBLIC_API_BASE_URL + photo.url}
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/about`)
    const about = await res.json()

    return {
        props: {text: about.text, photo: about.photo[0].formats.small}
    }
}

export default About