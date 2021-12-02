import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'

const Paintings = ({paintings, contacts}) => {
    return (
        <Layout title={'Paintings'} contacts={contacts}>
            <Gallery paintings={paintings} columnsNumber={4}/>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories?title=Paintings`)
    const categories = await res.json()
    const paintings = categories[0].products

    return {
        props: {paintings}
    }
}

export default Paintings