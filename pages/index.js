import Layout from '../components/Layout'
import Link from 'next/link'
import Carousel from '../components/Carousel'
import classes from '../styles/Index.module.scss'
import Image from 'next/image'

const Index = ({paintings, contacts}) => {// todo: extract carousel to separate component
    return (
        <Layout title={'Home'} contacts={contacts}>
            <div className={classes.carousel}>
                <Carousel>
                    {paintings.map(painting =>
                        <Carousel.Slide key={painting.id} height={painting.photo[0].formats.medium.height}>
                            <div style={{marginBottom: '30px'}}>
                                <Image
                                    src={process.env.NEXT_PUBLIC_API_BASE_URL + painting.photo[0].formats.medium.url}
                                    width={painting.photo[0].formats.medium.width}
                                    height={painting.photo[0].formats.medium.height}
                                    alt=""
                                />
                            </div>
                            <Link href={`/product/${painting.id}`}><a className={classes.slideLink}>See details</a></Link>
                        </Carousel.Slide>
                    )}
                </Carousel>
            </div>
            <div className={classes.paintings}>
                {paintings.map(painting =>
                    <div className={classes.painting} key={painting.id}>
                        <Link href={`/product/${painting.id}`}>
                            <a>
                                <div style={{marginBottom: '5px'}}>
                                    <Image
                                        src={process.env.NEXT_PUBLIC_API_BASE_URL + painting.photo[0].formats.medium.url}
                                        width={painting.photo[0].formats.medium.width}
                                        height={painting.photo[0].formats.medium.height}
                                        alt=""
                                    />
                                </div>
                            </a>
                        </Link>
                        <Link href={`/product/${painting.id}`}><a className={classes.slideLink}>See details</a></Link>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories?title=Paintings`)
    const categories = await res.json()
    const paintings = categories[0].products.filter(painting => painting.quantity > 0 && painting.featured)

    return {
        props: {paintings}
    }
}

export default Index
