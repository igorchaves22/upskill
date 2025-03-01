import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { contactFormSchema, ContactFormSchemaType, toTruthyBoolean } from "~utils";

const SUBMIT_SUCCESSFUL_MESSAGE = "Your message has been sent!";
const TIMEOUT_RESET = {
    error: 10000,
    submitSuccessful: 1000
};

export const useContactForm = () => {
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        handleSubmit,
        reset,
        clearErrors
    } = useForm<ContactFormSchemaType>({
        resolver: yupResolver(contactFormSchema)
    });

    const hasErrors = {
        name: toTruthyBoolean(errors.name),
        email: toTruthyBoolean(errors.email),
        subject: toTruthyBoolean(errors.subject),
        message: toTruthyBoolean(errors.message)
    };
    const hasAnyErrorActive = Object.values(hasErrors).some(Boolean);
    const submitData = handleSubmit(() => {
        reset();
    });

    useEffect(() => {
        if (hasAnyErrorActive) {
            setTimeout(() => {
                clearErrors();
            }, TIMEOUT_RESET.error);
        }
        if (isSubmitSuccessful) {
            setTimeout(() => {
                reset();
            }, TIMEOUT_RESET.submitSuccessful);
        }
    }, [clearErrors, hasAnyErrorActive, isSubmitSuccessful, reset]);

    return {
        submitData,
        register,
        isSubmitSuccessful,
        reset,
        hasErrors,
        errors,
        SUBMIT_SUCCESSFUL_MESSAGE
    };
};
