import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

const Contact = ({instagram, email, phone}) => {
    return (
        <Layout title={'Contact'}>
            <Layout.Page>
                <h2 className={'page-title'}>Contact me</h2>
                <ContactForm/>
            </Layout.Page>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_BASE_URL}/contact`)
    const contact = await res.json()

    return {
        props: {instagram: contact.instagram, email: contact.email, phone: contact.phone}
    }
}

export default Contact