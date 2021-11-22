import Layout from '../../components/Layout'

const Product = ({title, photo}) => {
    return (
        <Layout title={title}>
            <h1>{title}</h1>
            <img src={'http://localhost:1337' + photo} alt=""/>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`http://localhost:1337/products/${ctx.query.id}`)
    const product = await res.json()

    return {
        props: {title: product.title, photo: product.photo[0].formats.large.url}
    }
}

export default Product