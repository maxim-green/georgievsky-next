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

// this is needed to resolve process.env.API_BASE_URL
// otherwise it will be undefined when navigating to the page via <Link/>
export async function getServerSideProps() {
    return {props: {}}
}

export default Contact