import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

const Contact = ({contacts}) => {
    return (
        <Layout title={'Contact'} contacts={contacts}>
            <Layout.Page>
                <h2 className={'page-title'}>Contact me</h2>
                <ContactForm/>
            </Layout.Page>
        </Layout>
    )
}

export default Contact