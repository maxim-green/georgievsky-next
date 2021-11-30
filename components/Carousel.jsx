import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {useCallback} from 'react'
import classes from '../styles/Carousel.module.scss'
import {ampFirstEntryNamesMap} from 'next/dist/build/webpack/plugins/next-drop-client-page-plugin'

export default function Carousel({children}) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {loop: true, align: 'center', speed: 7},
        [Autoplay({delay: 5000})])
    emblaRef.displayName = 'emblaCarousel'

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className={classes.embla} ref={emblaRef}>
            <div className={classes.emblaContainer}>
                {children}
            </div>
            <button className={classes.emblaPrev} onClick={scrollPrev}/>
            <button className={classes.emblaNext} onClick={scrollNext}/>
        </div>
    )
}

Carousel.Slide = ({children}) => {
    return (
        <div className={classes.emblaSlide} >
            <div className={classes.emblaSlideContent}>
                {children}
            </div>
        </div>
    )
}
Carousel.Slide.displayName = 'Carousel.Slide'