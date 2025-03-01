import { useCallback, useState } from "react";
import { testimonialsItems } from "~utils";

const INITIAL_STATE_INDEX = 0;
const TOTAL_TESTIMONIALS = testimonialsItems.length;

export const useTestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(INITIAL_STATE_INDEX);

    const handleClickPrevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? TOTAL_TESTIMONIALS - 1 : prevIndex - 1));
    }, []);
    const handleClickNextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === TOTAL_TESTIMONIALS - 1 ? 0 : prevIndex + 1));
    }, []);

    return { testimonial: testimonialsItems[currentIndex], handleClickPrevSlide, handleClickNextSlide };
};
