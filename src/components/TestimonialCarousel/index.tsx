import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useTestimonialCarousel } from "~hooks";
import { Image } from "../Image";
import "./styles.scss";

export function TestimonialCarousel() {
    const { testimonial, handleClickPrevSlide, handleClickNextSlide } = useTestimonialCarousel();

    return (
        <section className="testimonial-carousel">
            <section className="testimonial-carousel__box testimonial-carousel__box--primary">
                <figure className="testimonial-carousel__box testimonial-carousel__box--secondary">
                    <Image
                        src={testimonial.photo}
                        alt={testimonial.name}
                        size="xs"
                        radius
                    />
                    <figcaption className="testimonial-carousel__text testimonial-carousel__text--name">
                        {testimonial.name}
                    </figcaption>
                </figure>
                <p className="testimonial-carousel__text">{testimonial.testimonial}</p>
            </section>
            <button
                type="button"
                aria-label="Prev testimonial"
                className="testimonial-carousel__button"
                onClick={() => handleClickPrevSlide()}
            >
                <CaretLeft className="testimonial-carousel__icon" />
            </button>
            <button
                type="button"
                aria-label="Next testimonial"
                className="testimonial-carousel__button"
                onClick={() => handleClickNextSlide()}
            >
                <CaretRight className="testimonial-carousel__icon" />
            </button>
        </section>
    );
}
