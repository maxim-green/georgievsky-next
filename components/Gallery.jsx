import classes from '../styles/Gallery.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import useMediaQuery from "../hooks/useMediaQuery";

export default function Gallery({paintings}) {

    let columnsNumber = 4
    if (useMediaQuery(1281)) columnsNumber = 3
    if (useMediaQuery(600)) columnsNumber = 2
    if (useMediaQuery(320)) columnsNumber = 1

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
Gallery.Column.displayName = 'Gallery.Column'

Gallery.Item = ({painting}) => {
    return (
        <Link href={`/product/${painting.id}`}>
            <a className={classes.item}>
                <Image
                    src={'http://localhost:1337' + painting.photo[0].formats.small.url}
                    width={painting.photo[0].formats.small.width}
                    height={painting.photo[0].formats.small.height}
                    alt=""
                />
                <h2>{painting.title}</h2>
                <p className={classes.productInfo}>{painting.year}</p>
                <p className={classes.productInfo}>{painting.width}x{painting.height} cm</p>
                <p className={classes.productInfo}>{painting.medium}, {painting.surface}</p>
            </a>
        </Link>
    )
}
Gallery.Item.displayName = 'Gallery.Item'