import Layout from '../components/Layout'
import Link from 'next/link'
import {Navigation, Autoplay, EffectFade } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

const Index = ({paintings}) => {// todo: extract carousel to separate component
    const settings = {
        modules: [Navigation, Autoplay],
        navigation: true,
        autoplay: {delay: 4000},
        speed: 1000,
        autoHeight: true,
        loop: true
    }
    const swiperItemStyles = {
        fontSize: '10px',
        letterSpacing: '0.14em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'rgba(0, 0, 0, 0.6)'
    }
    return (
        <Layout title={'Home'}>
            <Swiper
                {...settings}
            >
                {paintings.map(painting => <SwiperSlide key={painting.id}>
                    <div style={swiperItemStyles}>
                        <img src={'http://localhost:1337' + painting.photo[0].formats.medium.url} alt=""/>
                        <div style={{marginTop: '30px'}}
                        ><Link href={`/product/${painting.id}`}><a>See details</a></Link></div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
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
