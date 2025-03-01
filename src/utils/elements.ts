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
        href: "partners",
        title: "Partners"
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
        href: "faq",
        title: "FAQ"
    },
    {
        href: "contact",
        title: "Contact"
    }
];

export const partnersListItems = [
    { title: "Partner logo 1", src: partner1Svg },
    { title: "Partner logo 2", src: partner2Svg },
    { title: "Partner logo 3", src: partner3Svg },
    { title: "Partner logo 4", src: partner4Svg },
    { title: "Partner logo 5", src: partner5Svg },
    { title: "Partner logo 6", src: partner6Svg },
    { title: "Partner logo 7", src: partner7Svg }
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
