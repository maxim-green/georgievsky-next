import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {useCallback} from 'react'
import classes from '../styles/Carousel.module.scss'

const Carousel = ({children}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {loop: true, align: 'center', speed: 7},
        [Autoplay({delay: 5000})])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    })

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    })

    return (
        <div className={classes.embla} ref={emblaRef}>
            <div className={classes.emblaContainer}>
                {children}
            </div>
            <button class={classes.emblaPrev} onClick={scrollPrev}/>
            <button class={classes.emblaNext} onClick={scrollNext}/>
        </div>
    )
}

Carousel.Slide = ({children}) => {
    return (
        <div className={classes.emblaSlide}>
            <div className={classes.emblaSlideContent}>
                {children}
            </div>
        </div>
    )
}

export default Carousel