import aboutSvg from "~assets/svg/about.svg";
import faqSvg from "~assets/svg/faq.svg";
import learningSvg from "~assets/svg/learning.svg";
import opinionSvg from "~assets/svg/opinion.svg";
import { useHomePage } from "~hooks";
import { faqItems } from "~utils";
import { ContactForm } from "../ContactForm";
import { ContactList } from "../ContactList";
import { CtaLink } from "../CtaLink";
import { FaqCard } from "../FaqCard";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Image } from "../Image";
import { NewsletterForm } from "../NewsletterForm";
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
                    bgColor
                    layout={{ breakpoint: "lg", type: "side", flip: true }}
                >
                    <Image
                        src={learningSvg}
                        alt="Learning"
                        size="lg"
                    />
                    <SectionInfo
                        size="sm"
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
                    layout={{ breakpoint: "md", type: "largeSideOpposite", flip: true }}
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
                        size="sm"
                    />
                </SectionContainer>
                <SectionContainer id={sectionIds["services"]}>
                    <SectionInfo
                        title="SERVICES"
                        subtitle="Check out some of our services"
                    />
                    <ServiceList />
                </SectionContainer>
                <SectionContainer id={sectionIds["pricing"]}>
                    <SectionInfo
                        title="PRICING"
                        subtitle="Affordable plans for all types of learners"
                    />
                    <PricingList />
                </SectionContainer>
                <SectionContainer
                    id={sectionIds["testimonials"]}
                    layout={{ breakpoint: "lg", type: "largeSide", flip: true }}
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
                <SectionContainer id={sectionIds["partners"]}>
                    <SectionInfo title="PARTNERS" />
                    <PartnersList />
                </SectionContainer>
                <SectionContainer
                    id={sectionIds["faq"]}
                    bgColor
                    layout={{ breakpoint: "md", type: "side" }}
                >
                    <SectionInfo
                        size="md"
                        title="FAQ"
                        subtitle="Frequently Asked Questions"
                        description="We have answers to your main questions about our courses, methodology, and support. Explore our FAQ section and start your journey with confidence."
                        leftAlign
                    >
                        {faqItems.map((item) => (
                            <FaqCard
                                key={item.question}
                                {...item}
                            />
                        ))}
                    </SectionInfo>
                    <Image
                        src={faqSvg}
                        alt="FAQ"
                        size="lg"
                    />
                </SectionContainer>
                <SectionContainer id={sectionIds["newsletter"]}>
                    <SectionInfo title="NEWSLETTER" />
                    <NewsletterForm />
                </SectionContainer>
                <SectionContainer id={sectionIds["contact"]}>
                    <SectionInfo title="CONTACT" />
                    <ContactList />
                    <ContactForm />
                </SectionContainer>
            </main>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};
