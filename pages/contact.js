import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

const Contact = ({instagram, email, phone}) => {
    return (
        <Layout title={'Contact'}>
            <Layout.Page>
                <h2 className={'page-title'}>Contact me</h2>
                <ContactForm/>
                {/*<div><b>Instagram: </b><a href={instagram}>@maxgeorgievsky</a></div>*/}
                {/*<div><b>Instagram: </b><a href={'tel:' + phone}>{phone}</a></div>*/}
                {/*<div><b>Instagram: </b><a href={'mailto:' + email}>{email}</a></div>*/}
            </Layout.Page>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:1337/contact')
    const contact = await res.json()

    return {
        props: {instagram: contact.instagram, email: contact.email, phone: contact.phone}
    }
}

export default Contact