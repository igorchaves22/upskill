import { useContactForm } from "~hooks";
import { applyClassName, isEqual, MESSAGE, renderElementIfTrue } from "~utils";
import "./styles.scss";

export const ContactForm = () => {
    const { submitData, register, isSubmitSuccessful, reset, hasErrors, errors, SUBMIT_SUCCESSFUL_MESSAGE } =
        useContactForm();

    return (
        <form
            onSubmit={submitData}
            noValidate
            className="contact-form"
        >
            <section className="contact-form__box contact-form__box--max contact-form__box--input-group">
                <label className="contact-form__text contact-form__text--label">Name:</label>
                <input
                    type="text"
                    placeholder="Your name"
                    className={
                        "contact-form__input" +
                        applyClassName(
                            `contact-form__input--${isEqual(errors.name?.message, MESSAGE.contact.name) ? "error" : ""}`
                        )
                    }
                    {...register("name")}
                />
                {renderElementIfTrue(
                    hasErrors.name,
                    <p
                        className={
                            "contact-form__text contact-form__text--status" +
                            applyClassName(
                                `contact-form__text--${isEqual(errors.name?.message, MESSAGE.contact.name) ? "error" : ""}`
                            )
                        }
                    >
                        {errors.name?.message}
                    </p>
                )}
            </section>
            <section className="contact-form__box contact-form__box--max contact-form__box--input-group">
                <label className="contact-form__text contact-form__text--label">Email:</label>
                <input
                    type="email"
                    placeholder="Your email"
                    className={
                        "contact-form__input" +
                        applyClassName(
                            `contact-form__input--${
                                isEqual(errors.email?.message, MESSAGE.contact.email.required) ? "error"
                                : isEqual(errors.email?.message, MESSAGE.contact.email.invalid) ? "warning"
                                : ""
                            }`
                        )
                    }
                    {...register("email")}
                />
                {renderElementIfTrue(
                    hasErrors.email,
                    <p
                        className={
                            "contact-form__text contact-form__text--status" +
                            applyClassName(
                                `contact-form__text--${
                                    isEqual(errors.email?.message, MESSAGE.contact.email.required) ? "error"
                                    : isEqual(errors.email?.message, MESSAGE.contact.email.invalid) ? "warning"
                                    : ""
                                }`
                            )
                        }
                    >
                        {errors.email?.message}
                    </p>
                )}
            </section>
            <section className="contact-form__box contact-form__box--input-group">
                <label className="contact-form__text contact-form__text--label">Subject:</label>
                <input
                    type="text"
                    placeholder="Subject"
                    className={
                        "contact-form__input" +
                        applyClassName(
                            `contact-form__input--${isEqual(errors.subject?.message, MESSAGE.contact.subject) ? "error" : ""}`
                        )
                    }
                    {...register("subject")}
                />
                {renderElementIfTrue(
                    hasErrors.subject,
                    <p
                        className={
                            "contact-form__text contact-form__text--status" +
                            applyClassName(
                                `contact-form__text--${isEqual(errors.subject?.message, MESSAGE.contact.subject) ? "error" : ""}`
                            )
                        }
                    >
                        {errors.subject?.message}
                    </p>
                )}
            </section>
            <section className="contact-form__box contact-form__box--input-group">
                <label className="contact-form__text contact-form__text--label">Message:</label>
                <textarea
                    placeholder="Your message"
                    className={
                        "contact-form__input contact-form__input--textarea" +
                        applyClassName(
                            `contact-form__input--${
                                isEqual(errors.message?.message, MESSAGE.contact.message.required) ? "error"
                                : (
                                    isEqual(errors.message?.message, MESSAGE.contact.message.min) ||
                                    isEqual(errors.message?.message, MESSAGE.contact.message.max)
                                ) ?
                                    "warning"
                                :   ""
                            }`
                        )
                    }
                    {...register("message")}
                ></textarea>
                {renderElementIfTrue(
                    hasErrors.message,
                    <p
                        className={
                            "contact-form__text contact-form__text--status" +
                            applyClassName(
                                `contact-form__text--${
                                    isEqual(errors.message?.message, MESSAGE.contact.message.required) ? "error"
                                    : (
                                        isEqual(errors.message?.message, MESSAGE.contact.message.min) ||
                                        isEqual(errors.message?.message, MESSAGE.contact.message.max)
                                    ) ?
                                        "warning"
                                    :   ""
                                }`
                            )
                        }
                    >
                        {errors.message?.message}
                    </p>
                )}
            </section>
            <section className="contact-form__box contact-form__box--button-group">
                <button
                    type="reset"
                    onClick={() => reset()}
                    className="contact-form__button"
                >
                    clear
                </button>
                <button
                    type="submit"
                    className="contact-form__button"
                >
                    send
                </button>
            </section>
            {renderElementIfTrue(
                isSubmitSuccessful,
                <p className="contact-form__text contact-form__text--status contact-form__text--success">
                    {SUBMIT_SUCCESSFUL_MESSAGE}
                </p>
            )}
        </form>
    );
};
