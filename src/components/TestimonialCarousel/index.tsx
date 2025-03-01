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
                onClick={() => handleClickPrevSlide()}
                className="testimonial-carousel__button"
            >
                <CaretLeft className="testimonial-carousel__icon" />
            </button>
            <button
                type="button"
                onClick={() => handleClickNextSlide()}
                className="testimonial-carousel__button"
            >
                <CaretRight className="testimonial-carousel__icon" />
            </button>
        </section>
    );
}
