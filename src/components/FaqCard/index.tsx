import { CaretUp } from "@phosphor-icons/react";
import "./styles.scss";

interface IFaqCardProps {
    question: string;
    answer: string;
}

export const FaqCard = ({ question, answer }: IFaqCardProps) => {
    return (
        <details className="faq-card">
            <summary className="faq-card__box">
                <span className="faq-card__text faq-card__text--question">{question}</span>
                <CaretUp className="faq-card__icon" />
            </summary>
            <p className="faq-card__text">{answer}</p>
        </details>
    );
};
