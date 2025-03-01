import { Checks } from "@phosphor-icons/react";
import serviceSvg from "~assets/svg/service.svg";
import { CtaLink } from "../CtaLink";
import { Image } from "../Image";
import "./styles.scss";

export const ServiceList = () => {
    return (
        <section className="service-list">
            <section className="service-list__box service-list__box--main">
                <ul className="service-list__box service-list__box--list">
                    <li className="service-list__box  service-list__box--item">
                        <Checks className="service-list__icon" />
                        <p className="service-list__text">Personalized Learning</p>
                    </li>
                    <li className="service-list__box  service-list__box--item">
                        <Checks className="service-list__icon" />
                        <p className="service-list__text">Recognized Certification</p>
                    </li>
                    <li className="service-list__box  service-list__box--item">
                        <Checks className="service-list__icon" />
                        <p className="service-list__text">Unlimited Access</p>
                    </li>
                    <li className="service-list__box  service-list__box--item">
                        <Checks className="service-list__icon" />
                        <p className="service-list__text">Live Mentorship</p>
                    </li>
                    <li className="service-list__box  service-list__box--item">
                        <Checks className="service-list__icon" />
                        <p className="service-list__text">Exclusive Learning Community</p>
                    </li>
                    <li className="service-list__box  service-list__box--item">
                        <Checks className="service-list__icon" />
                        <p className="service-list__text">Job-Oriented Courses</p>
                    </li>
                </ul>
                <CtaLink
                    text="Read More"
                    alternative
                />
            </section>
            <Image
                src={serviceSvg}
                alt="Service"
                size="md"
            />
        </section>
    );
};
