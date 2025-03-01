import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { contactFormSchema, ContactFormSchemaType, toTruthyBoolean } from "~utils";

const TIMEOUT_RESET = 10000;

export const useContactForm = () => {
    const {
        register,
        formState: { errors },
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
    const hasAnyErrorActive = Object.values(errors).some(Boolean);
    const submitData = handleSubmit(() => {
        reset();
    });

    useEffect(() => {
        if (hasAnyErrorActive) {
            setTimeout(() => {
                clearErrors();
            }, TIMEOUT_RESET);
        }
    }, [hasAnyErrorActive, clearErrors]);

    return {
        submitData,
        register,
        errors,
        hasErrors,
        reset
    };
};
