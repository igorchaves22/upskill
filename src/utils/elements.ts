import { ReactNode } from "react";
import photo1Img from "~assets/img/testimonial-1.jpg";
import photo2Img from "~assets/img/testimonial-2.jpg";
import photo3Img from "~assets/img/testimonial-3.jpg";
import photo4Img from "~assets/img/testimonial-4.jpg";
import partner1Svg from "~assets/svg/partner-1.svg";
import partner2Svg from "~assets/svg/partner-2.svg";
import partner3Svg from "~assets/svg/partner-3.svg";
import partner4Svg from "~assets/svg/partner-4.svg";
import partner5Svg from "~assets/svg/partner-5.svg";
import partner6Svg from "~assets/svg/partner-6.svg";
import partner7Svg from "~assets/svg/partner-7.svg";
import { toTruthyBoolean } from "./global";

export const viteRootElement = document.getElementById("root")!;

export const renderElementIfTrue = (condition: boolean, element: ReactNode) => {
    return condition ? element : null;
};

export const renderElementIfDefined = (value: unknown, element: ReactNode) => {
    return renderElementIfTrue(toTruthyBoolean(value), element);
};

export const navbarItems = [
    {
        href: "about",
        title: "About"
    },
    {
        href: "services",
        title: "Services"
    },
    {
        href: "pricing",
        title: "Pricing"
    },
    {
        href: "testimonials",
        title: "Testimonials"
    },
    {
        href: "partners",
        title: "Partners"
    },
    {
        href: "faq",
        title: "FAQ"
    },
    {
        href: "newsletter",
        title: "Newsletter"
    },
    {
        href: "contact",
        title: "Contact"
    }
];

export const testimonialsItems = [
    {
        photo: photo1Img,
        name: "Saul Goodman",
        testimonial: "The platform completely changed the way I learn. The courses are engaging and easy to follow!"
    },
    {
        photo: photo2Img,
        name: "Sara Wilsson",
        testimonial: "Thanks to the certificates I earned here, I landed new job opportunities. Highly recommend!"
    },
    {
        photo: photo3Img,
        name: "Matt Brandon",
        testimonial: "The support and teaching methodology make all the difference. I learned so much in a short time!"
    },
    {
        photo: photo4Img,
        name: "Jena Karlis",
        testimonial:
            "The flexibility of the courses allowed me to study at my own pace and improve my professional skills."
    }
];

export const partnersListItems = [
    { title: "Partner logo 1", logo: partner1Svg },
    { title: "Partner logo 2", logo: partner2Svg },
    { title: "Partner logo 3", logo: partner3Svg },
    { title: "Partner logo 4", logo: partner4Svg },
    { title: "Partner logo 5", logo: partner5Svg },
    { title: "Partner logo 6", logo: partner6Svg },
    { title: "Partner logo 7", logo: partner7Svg }
];

export const faqItems = [
    {
        question: "How do UpSkill courses work?",
        answer: "Our courses are online and offer practical content with expert support. You learn at your own pace and can access the materials anytime."
    },
    {
        question: "Do I need prior experience to enroll?",
        answer: "No! Our courses are designed for all levels, from beginners to professionals looking to enhance their skills."
    },
    {
        question: "Do the courses provide a certificate?",
        answer: "Yes! Upon completing a course, you receive a certificate that can be used to enhance your resume and validate your knowledge."
    },
    {
        question: "What payment methods are accepted?",
        answer: "We accept various payment methods, including credit cards, PayPal, and bank transfers, depending on your region."
    },
    {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes! You can cancel your subscription anytime without penalties or extra fees. Your access will remain active until the end of the billing period."
    }
];

export const contactListItems = [
    {
        icon: "MapPinLine",
        title: "Address",
        text: "São Paulo, Brazil"
    },
    {
        icon: "Phone",
        title: "Contact Us",
        text: "+99 9999-9999"
    },
    {
        icon: "EnvelopeSimple",
        title: "Email Us",
        text: "upskill@example.com"
    },
    {
        icon: "Clock",
        title: "Open Hours",
        text: "Monday - Friday | 9:00AM - 05:00PM"
    }
];
