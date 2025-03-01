import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
    name: yup.string().required("This is a required field"),
    email: yup.string().required("This is a required field").email("Enter a valid email"),
    subject: yup.string().required("This is a required field"),
    message: yup.string().required("This is a required field")
});

export type ContactFormSchemaType = yup.InferType<typeof contactFormSchema>;
