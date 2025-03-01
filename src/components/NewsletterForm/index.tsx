import { PaperPlaneTilt } from "@phosphor-icons/react";
import { useNewsletterForm } from "~hooks";
import { applyClassName, isEqual, MESSAGE, renderElementIfTrue, toTruthyBoolean } from "~utils";
import "./styles.scss";

export const NewsletterForm = () => {
    const { submitData, register, isSubmitSuccessful, errors, SUBMIT_SUCCESSFUL_MESSAGE } = useNewsletterForm();

    return (
        <form
            onSubmit={submitData}
            className="newsletter-form"
        >
            <input
                type="email"
                placeholder="Your Email"
                className="newsletter-form__input"
                {...register("email")}
            />
            <button
                type="submit"
                aria-label="Submit form"
                className="newsletter-form__button"
            >
                <PaperPlaneTilt className="newsletter-form__icon" />
            </button>
            {renderElementIfTrue(
                toTruthyBoolean(errors.email) || isSubmitSuccessful,
                <p
                    className={
                        "newsletter-form__status" +
                        applyClassName(
                            `newsletter-form__status--${
                                isEqual(errors.email?.message, MESSAGE.newsletter.required) ? "error"
                                : isEqual(errors.email?.message, MESSAGE.newsletter.invalid) ? "warning"
                                : isSubmitSuccessful ? "success"
                                : ""
                            }`
                        )
                    }
                >
                    {toTruthyBoolean(errors.email) ?
                        errors.email?.message
                    : isSubmitSuccessful ?
                        SUBMIT_SUCCESSFUL_MESSAGE
                    :   ""}
                </p>
            )}
        </form>
    );
};
