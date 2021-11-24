import Layout from '../../components/Layout'

const Product = ({title, description, year, width, height, medium, surface, photo}) => {
    return (
        <Layout title={title}>
            <Layout.Page flex>
                <img style={{ maxWidth: '600px', marginRight: '45px'}} src={'http://localhost:1337' + photo} alt=""/>
                <div style={{ maxWidth: '400px'}}>
                    <h2 className={'page-title'}>{title}</h2>
                    <p className={'text-info'}>
                        Year: {year}
                    </p>
                    <p className={'text-info'}>
                        {width} x {height} cm
                    </p>
                    <p className={'text-info'}>
                        {medium}, {surface}
                    </p>
                    <p>
                        {description}
                    </p>
                </div>
            </Layout.Page>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`http://localhost:1337/products/${ctx.query.id}`)
    const product = await res.json()

    return {
        props: {
            title: product.title,
            description: product.description,
            year: product.year,
            width: product.width,
            height: product.height,
            medium: product.medium,
            surface: product.surface,
            photo: product.photo[0].formats.large.url}
    }
}

export default Product