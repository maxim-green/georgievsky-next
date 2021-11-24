import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'

const Paintings = ({paintings}) => {
    return (
        <Layout title={'Paintings'}>
            <Gallery paintings={paintings} columnsNumber={4}/>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch('http://localhost:1337/categories?title=Paintings')
    const categories = await res.json()
    const paintings = categories[0].products

    return {
        props: {paintings}
    }
}

export default Paintings