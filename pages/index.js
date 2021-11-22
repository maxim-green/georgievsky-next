import Layout from '../components/Layout'

const Index = ({paintings}) => {
    console.log(paintings)
    return (
        <Layout title={'Home'}>
            {paintings.map(painting => <div key={painting.id}>
                <img src={'http://localhost:1337' + painting.photo[0].formats.thumbnail.url} alt=""/>
            </div>)}
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
