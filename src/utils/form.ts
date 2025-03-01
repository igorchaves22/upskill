import * as yup from "yup";

export const MESSAGE = {
    newsletter: {
        required: 'The "email" field is required!',
        invalid: "Invalid email format!"
    },
    contact: {
        name: 'The "name" field is required!',
        email: {
            required: 'The "email" field is required!',
            invalid: "Invalid email format!"
        },
        subject: 'The "subject" field is required!',
        message: {
            required: 'The "message" field is required!',
            min: "The message must have at least 10 characters",
            max: "The message must have at most 300 characters"
        }
    }
};
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 300;

export const newsletterFormSchema = yup.object().shape({
    email: yup.string().required(MESSAGE.newsletter.required).email(MESSAGE.newsletter.invalid)
});

export const contactFormSchema = yup.object().shape({
    name: yup.string().required(MESSAGE.contact.name),
    email: yup.string().required(MESSAGE.contact.email.required).email(MESSAGE.contact.email.invalid),
    subject: yup.string().required(MESSAGE.contact.subject),
    message: yup
        .string()
        .required(MESSAGE.contact.message.required)
        .min(MESSAGE_MIN_LENGTH, MESSAGE.contact.message.min)
        .max(MESSAGE_MAX_LENGTH, MESSAGE.contact.message.max)
});

export type NewsletterFormSchemaType = yup.InferType<typeof newsletterFormSchema>;
export type ContactFormSchemaType = yup.InferType<typeof contactFormSchema>;
