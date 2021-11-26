import Layout from '../components/Layout'
import Link from 'next/link'
import Carousel from '../components/Carousel'
import classes from '../styles/Index.module.scss'
import Image from 'next/image'

const Index = ({paintings}) => {// todo: extract carousel to separate component
    return (
        <Layout title={'Home'}>
            <Carousel>
                {paintings.map(painting =>
                    <Carousel.Slide key={painting.id} className={'embla__slide'}>
                        <div style={{marginBottom: '30px'}}>
                            <Image
                                   src={'http://localhost:1337' + painting.photo[0].formats.medium.url}
                                   width={painting.photo[0].formats.medium.width}
                                   height={painting.photo[0].formats.medium.height}
                                   alt=""
                            />
                        </div>
                        <Link href={`/product/${painting.id}`}><a className={classes.slideLink}>See details</a></Link>
                    </Carousel.Slide>
                )}
            </Carousel>
        </Layout>
    )
}
//test

export async function getServerSideProps(ctx) {
    console.log(process.env.API_BASE_URL)
    const res = await fetch(`${process.env.API_BASE_URL}/categories?title=Paintings`)
    const categories = await res.json()
    const paintings = categories[0].products.filter(painting => painting.quantity > 0)

    return {
        props: {paintings}
    }
}

export default Index
