import Layout from '../components/Layout'

export default function ContactSuccessPage({contacts}) {
    return <Layout title={'Thank you!'} contacts={contacts}>
        <Layout.Page><h2 className={'page-title'}>Thank you! We will contact you soon!</h2></Layout.Page>
    </Layout>
}