import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, PrevButton, NextButton, } from './EmblaCarouselArrowsDotsButtons';
import { heroSlides } from './../../data/heroSlides';
import './../../styles/heroCarousel.css';

export const HeroCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const scrollPrev = useCallback(
        () => emblaApi && emblaApi.scrollPrev(),
        [emblaApi],
    )
    const scrollNext = useCallback(
        () => emblaApi && emblaApi.scrollNext(),
        [emblaApi],
    )
    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi],
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, setScrollSnaps, onSelect])

    return (
        <section className='' id='review-section'>
            <div className="carousel">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {heroSlides.map(review => {
                            return (
                                <div className="slide" key={review.id} style={{ backgroundImage: `url(${review.imagePath})` }}>
                                    <div className="description">
                                        {review.description}
                                    </div>
                                    {/* <img className="image" src={review.imagePath} alt="reviewer" /> */}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />

                <div className="dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            selected={index === selectedIndex}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}