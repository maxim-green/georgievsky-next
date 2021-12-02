import Layout from '../../components/Layout'
import Image from 'next/image'
import useMediaQuery from "../../hooks/useMediaQuery";

const Product = ({title, description, year, width, height, medium, surface, photo, contacts}) => {
    return (
        <Layout title={title} contacts={contacts}>
            <Layout.Page flex={!useMediaQuery(801)}>
                <div style={{ marginRight: !useMediaQuery(801) ? '45px' : '0px'}}>
                    <Image
                        width={photo.width}
                        height={photo.height}
                        src={process.env.NEXT_PUBLIC_API_BASE_URL + photo.url}
                        alt=""
                    />
                </div>
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${ctx.query.id}`)
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
            photo: product.photo[0].formats.medium}
    }
}

export default Product