import { AirplaneTilt, Cube, PaperPlaneTilt, Rocket } from "@phosphor-icons/react";
import { CtaLink } from "../CtaLink";
import "./styles.scss";

export const PricingList = () => {
    return (
        <ul className="pricing-list">
            <li className="pricing-list__box pricing-list__box--main">
                <section className="pricing-list__box">
                    <p className="pricing-list__text pricing-list__text--title">Free Plan</p>
                    <p className="pricing-list__text">$0/ mo</p>
                </section>
                <Cube className="pricing-list__icon pricing-list__icon--success" />
                <CtaLink text="Buy Now" />
            </li>
            <li className="pricing-list__box pricing-list__box--main">
                <section className="pricing-list__box">
                    <p className="pricing-list__text pricing-list__text--title">Starter Plan</p>
                    <p className="pricing-list__text">$19/ mo</p>
                </section>
                <PaperPlaneTilt className="pricing-list__icon" />
                <CtaLink
                    text="Buy Now"
                    alternative
                />
            </li>
            <li className="pricing-list__box pricing-list__box--main">
                <section className="pricing-list__box">
                    <p className="pricing-list__text pricing-list__text--title">Business Plan</p>
                    <p className="pricing-list__text">$29/ mo</p>
                </section>
                <AirplaneTilt className="pricing-list__icon pricing-list__icon--danger" />
                <CtaLink
                    text="Buy Now"
                    alternative
                />
            </li>
            <li className="pricing-list__box pricing-list__box--main">
                <section className="pricing-list__box">
                    <p className="pricing-list__text pricing-list__text--title">Ultimate Plan</p>
                    <p className="pricing-list__text">$49/ mo</p>
                </section>
                <Rocket className="pricing-list__icon pricing-list__icon--warning" />
                <CtaLink text="Buy Now" />
            </li>
        </ul>
    );
};
