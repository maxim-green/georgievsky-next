import {useRouter} from 'next/router'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'

const Paintings = ({paintings, contacts}) => {
    const router = useRouter()
    return (
        <Layout title={router.query.year} contacts={contacts}>
            <div>
                <Gallery paintings={paintings} columnsNumber={4}/>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories?title=Paintings`)
    const categories = await res.json()
    const paintings = categories[0].products.filter(painting => painting.year === parseInt(ctx.query.year)).reverse()

    return {
        props: {paintings}
    }
}

export default Paintings