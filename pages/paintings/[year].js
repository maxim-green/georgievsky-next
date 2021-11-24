import {useRouter} from 'next/router'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'

const Paintings = ({paintings}) => {
    const router = useRouter()

    return (
        <Layout title={router.query.year}>
            <div>
                <Gallery paintings={paintings} columnsNumber={4}/>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch('http://localhost:1337/categories?title=Paintings')
    const categories = await res.json()
    const paintings = categories[0].products.filter(painting => painting.year === parseInt(ctx.query.year))

    return {
        props: {paintings}
    }
}

export default Paintings