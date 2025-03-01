import aboutSvg from "~assets/svg/about.svg";
import faqSvg from "~assets/svg/faq.svg";
import learningSvg from "~assets/svg/learning.svg";
import opinionSvg from "~assets/svg/opinion.svg";
import { useHomePage } from "~hooks";
import { ContactForm } from "../ContactForm";
import { CtaLink } from "../CtaLink";
import { FaqCard } from "../FaqCard";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Image } from "../Image";
import { PartnersList } from "../PartnersList";
import { PricingList } from "../PricingList";
import { ScrollToTopButton } from "../ScrollToTopButton";
import { SectionContainer } from "../SectionContainer";
import { SectionInfo } from "../SectionInfo";
import { ServiceList } from "../ServiceList";
import { TestimonialCarousel } from "../TestimonialCarousel";
import "./styles.scss";

export const HomePage = () => {
    const { sectionIds } = useHomePage();

    return (
        <>
            <Header />
            <main className="home-page">
                <SectionContainer
                    minHeightScreen
                    largePaddingTop
                    layoutOnLargeScreen={{ breakpoint: "md", type: "side", flip: true }}
                    bgColor
                >
                    <Image
                        src={learningSvg}
                        alt="Learning"
                        size="lg"
                    />
                    <SectionInfo
                        size="md"
                        title="LEARN EASILY AND EFFICIENTLY"
                        subtitle="Master new skills and transform your future"
                        description="Access high-quality content with a practical methodology and expert support. Learn at your own pace and achieve your goals with ease."
                        leftAlignOnLargeScreen="md"
                    >
                        <CtaLink text="Get Started" />
                        <CtaLink
                            text="Learn More"
                            alternative
                        />
                    </SectionInfo>
                </SectionContainer>
                <SectionContainer
                    id={sectionIds["about"]}
                    layoutOnLargeScreen={{ breakpoint: "md", type: "largeSideOpposite", flip: true }}
                >
                    <SectionInfo
                        title="MORE ABOUT US"
                        subtitle="UpSkill empowers you with practical learning to boost your career"
                        description="It is the perfect platform for those who want to learn with quality, flexibility and specialized support. We offer courses that meet the needs of the job market and adapt to your learning pace."
                        leftAlign
                    >
                        <CtaLink text="Read More" />
                    </SectionInfo>
                    <Image
                        src={aboutSvg}
                        alt="About"
                        size="md"
                    />
                </SectionContainer>
                <SectionContainer id={sectionIds["partners"]}>
                    <SectionInfo
                        title="PARTNERS"
                        subtitle="Our Trusted Partners"
                    />
                    <PartnersList />
                </SectionContainer>
                <SectionContainer
                    id={sectionIds["services"]}
                    bgColor
                >
                    <SectionInfo
                        title="SERVICES"
                        subtitle="Check out some of our services"
                    />
                    <ServiceList />
                </SectionContainer>
                <SectionContainer
                    id={sectionIds["pricing"]}
                    bgColor
                >
                    <SectionInfo
                        title="PRICING"
                        subtitle="Affordable plans for all types of learners"
                    />
                    <PricingList />
                </SectionContainer>
                <SectionContainer
                    id={sectionIds["testimonials"]}
                    layoutOnLargeScreen={{ breakpoint: "lg", type: "largeSide", flip: true }}
                >
                    <SectionInfo
                        title="TESTIMONIALS"
                        subtitle="See how we impact our students' lives"
                    >
                        <Image
                            src={opinionSvg}
                            alt="Learning"
                            size="sm"
                        />
                    </SectionInfo>
                    <TestimonialCarousel />
                </SectionContainer>
                <SectionContainer
                    id={sectionIds["faq"]}
                    layoutOnLargeScreen={{ breakpoint: "lg", type: "largeSide", flip: true }}
                    bgColor
                >
                    <Image
                        src={faqSvg}
                        alt="FAQ"
                        size="lg"
                    />
                    <SectionInfo
                        size="md"
                        title="FAQ"
                        subtitle="Frequently Asked Questions"
                        description="We have answers to your main questions about our courses, methodology, and support. Explore our FAQ section and start your journey with confidence."
                        leftAlignOnLargeScreen="lg"
                    >
                        <FaqCard
                            question="How do UpSkill courses work?"
                            answer="Our courses are online and offer practical content with expert support. You learn at your own pace and can access the materials anytime."
                        />
                        <FaqCard
                            question="Do I need prior experience to enroll?"
                            answer="No! Our courses are designed for all levels, from beginners to professionals looking to enhance their skills."
                        />
                        <FaqCard
                            question="Do the courses provide a certificate?"
                            answer="Yes! Upon completing a course, you receive a certificate that can be used to enhance your resume and validate your knowledge."
                        />
                        <FaqCard
                            question="What payment methods are accepted?"
                            answer="We accept various payment methods, including credit cards, PayPal, and bank transfers, depending on your region."
                        />
                        <FaqCard
                            question="Can I cancel my subscription at any time?"
                            answer="Yes! You can cancel your subscription anytime without penalties or extra fees. Your access will remain active until the end of the billing period."
                        />
                    </SectionInfo>
                </SectionContainer>
                <SectionContainer id={sectionIds["contact"]}>
                    <SectionInfo
                        title="CONTACT"
                        subtitle="Get in touch and transform your learning"
                    />
                    <ContactForm />
                </SectionContainer>
            </main>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};
