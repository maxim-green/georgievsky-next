import classes from '../styles/Gallery.module.scss'
import Link from 'next/link'

const Gallery = ({paintings, columnsNumber}) => {
    const columns = []
    for (let i = 0; i < 4; i++) {
        columns.push(<Gallery.Column key={i}>
            {paintings.filter((painting, index) => index % columnsNumber === i)
                .map((painting) => <Gallery.Item key={painting.id} painting={painting}/>)}
        </Gallery.Column>)
    }
    return (
        <div className={classes.wrapper}>
            {columns}
        </div>
    )
}

Gallery.Column = ({children}) => {
    return (
        <div className={classes.column}>
            {children}
        </div>
    )
}

Gallery.Item = ({painting}) => {
    return (
        <Link href={`/product/${painting.id}`}>
            <a className={classes.item}>
                <img src={'http://localhost:1337' + painting.photo[0].formats.small.url} alt=""/>
                <h2>{painting.title}</h2>
                <p className={classes.productInfo}>{painting.year}</p>
                <p className={classes.productInfo}>{painting.width}x{painting.height} cm</p>
                <p className={classes.productInfo}>{painting.medium}, {painting.surface}</p>
            </a>
        </Link>
    )
}

export default Gallery