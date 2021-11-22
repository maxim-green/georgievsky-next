import {useRouter} from 'next/router'
import Layout from '../../components/Layout'

const Paintings = ({paintings}) => {
    const router = useRouter()

    return (
        <Layout title={router.query.year}>
            <div>
                {paintings.map(painting => <div key={painting.id}>
                    <h1>{painting.title}</h1>
                    <p>{painting.year}</p>
                    <img src={'http://localhost:1337' + painting.photo[0].formats.thumbnail.url} alt=""/>
                </div>)}
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