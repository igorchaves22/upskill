import { useContactForm } from "~hooks";
import { applyClassNameIfTrue, renderElementIfTrue } from "~utils";
import "./styles.scss";

export const ContactForm = () => {
    const { submitData, register, errors, hasErrors, reset } = useContactForm();

    return (
        <form
            onSubmit={submitData}
            className="contact-form"
        >
            <section className="contact-form__box contact-form__box--max">
                <input
                    type="text"
                    placeholder="Your Name"
                    className={
                        "contact-form__input" + applyClassNameIfTrue(hasErrors.name, "contact-form__input--error")
                    }
                    {...register("name")}
                />
                {renderElementIfTrue(
                    hasErrors.name,
                    <p className="contact-form__error-message">{errors.name?.message}</p>
                )}
            </section>
            <section className="contact-form__box contact-form__box--max">
                <input
                    type="text"
                    placeholder="Your Email"
                    className={
                        "contact-form__input" + applyClassNameIfTrue(hasErrors.email, "contact-form__input--error")
                    }
                    {...register("email")}
                />
                {renderElementIfTrue(
                    hasErrors.email,
                    <p className="contact-form__error-message">{errors.email?.message}</p>
                )}
            </section>
            <section className="contact-form__box">
                <input
                    type="text"
                    placeholder="Subject"
                    className={
                        "contact-form__input" + applyClassNameIfTrue(hasErrors.subject, "contact-form__input--error")
                    }
                    {...register("subject")}
                />
                {renderElementIfTrue(
                    hasErrors.subject,
                    <p className="contact-form__error-message">{errors.subject?.message}</p>
                )}
            </section>
            <section className="contact-form__box">
                <textarea
                    placeholder="Message"
                    className={
                        "contact-form__input contact-form__input--textarea" +
                        applyClassNameIfTrue(hasErrors.message, "contact-form__input--error")
                    }
                    {...register("message")}
                ></textarea>
                {renderElementIfTrue(
                    hasErrors.message,
                    <p className="contact-form__error-message">{errors.subject?.message}</p>
                )}
            </section>
            <section className="contact-form__box contact-form__box--end">
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
        </form>
    );
};
