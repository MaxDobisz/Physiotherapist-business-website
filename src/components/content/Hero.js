import './../../styles/hero.css';
import { HeroCarousel } from '../content/HeroCarousel';

const OPTIONS = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const Hero = () => {
    return (
        <section className="hero-wrapper">
            <HeroCarousel slides={SLIDES} options={OPTIONS} />
        </section>
    )
}
