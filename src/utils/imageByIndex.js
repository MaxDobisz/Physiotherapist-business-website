import image1 from '../assets/images/heroCarousel/2.jpg';
import image2 from '../assets/images/heroCarousel/3.jpg';
import image3 from '../assets/images/heroCarousel/4.jpg';

export const images = [image1, image2, image3]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex