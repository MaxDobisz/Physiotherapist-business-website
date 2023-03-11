import { Hero } from "./Hero"
import { Treatment } from "./Treatment"
import { About } from "./About"
import { EmblaCarousel } from "./EmblaCarousel";
import { Contact } from "./Contact";
import { Location } from "./Location";

const OPTIONS = {}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const Content = () => {
    return (
        <main className="content">
            <Hero />
            <Treatment />
            <About />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            <Location />
            <Contact />
        </main>
    );
}