import Layout from '../components/Layout'
import Link from 'next/link'
import Carousel from '../components/Carousel'
import classes from '../styles/Index.module.scss'

const Index = ({paintings}) => {// todo: extract carousel to separate component
    return (
        <Layout title={'Home'}>
            <Carousel>
                {paintings.map(painting =>
                    <Carousel.Slide key={painting.id} className={'embla__slide'}>
                            <img className={classes.slideImg} src={'http://localhost:1337' + painting.photo[0].formats.medium.url} alt=""/>
                            <Link href={`/product/${painting.id}`}><a className={classes.slideLink}>See details</a></Link>
                    </Carousel.Slide>
                )}
            </Carousel>
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch('http://localhost:1337/categories?title=Paintings')
    const categories = await res.json()
    const paintings = categories[0].products.filter(painting => painting.quantity > 0)

    return {
        props: {paintings}
    }
}

export default Index
