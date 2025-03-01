import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { newsletterFormSchema, NewsletterFormSchemaType } from "~utils";

const SUBMIT_SUCCESSFUL_MESSAGE = "Your email has been sent!";
const TIMEOUT_RESET = {
    error: 10000,
    submitSuccessful: 2500
};

export const useNewsletterForm = () => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        handleSubmit,
        reset,
        clearErrors
    } = useForm<NewsletterFormSchemaType>({
        resolver: yupResolver(newsletterFormSchema)
    });

    const submitData = handleSubmit(() => {
        reset();
    });

    useEffect(() => {
        if (errors.email) {
            setTimeout(() => {
                clearErrors();
            }, TIMEOUT_RESET.error);
        }

        if (isSubmitSuccessful) {
            setTimeout(() => {
                reset();
            }, TIMEOUT_RESET.submitSuccessful);
        }
    }, [clearErrors, errors.email, isSubmitSuccessful, reset]);

    return { submitData, register, isSubmitSuccessful, errors, SUBMIT_SUCCESSFUL_MESSAGE };
};
