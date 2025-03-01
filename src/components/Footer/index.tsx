import { InstagramLogo, LinkedinLogo, ThreadsLogo, XLogo } from "@phosphor-icons/react";
import { Logo } from "../Logo";
import "./styles.scss";

export const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__box footer__box--main">
                <section className="footer__box footer__box--primary">
                    <section className="footer__box footer__box--secondary">
                        <Logo />
                        <section className="footer__box">
                            <p className="footer__text">
                                <span className="footer__text--weight">Location:</span> São Paulo, Brazil
                            </p>
                            <p className="footer__text">
                                <span className="footer__text--weight">Phone:</span> +99 99999-9999
                            </p>
                            <p className="footer__text">
                                <span className="footer__text--weight">Location:</span> São Paulo, Brazil
                            </p>
                        </section>
                    </section>
                    <section className="footer__box footer__box--secondary">
                        <h4 className="footer__text footer__text--weight footer__text--lg">Follow Us</h4>
                        <p className="footer__text">
                            Follow our news and stay in the loop! Follow us on social media for updates and exclusive
                            content.
                        </p>
                        <section className="footer__box">
                            <a
                                href="/"
                                aria-label="Go to LinkedIn"
                            >
                                <LinkedinLogo className="footer__icon" />
                            </a>
                            <a
                                href="/"
                                aria-label="Go to Instagram"
                                className="footer__link"
                            >
                                <InstagramLogo className="footer__icon" />
                            </a>
                            <a
                                href="/"
                                aria-label="Go to X"
                                className="footer__link"
                            >
                                <XLogo className="footer__icon" />
                            </a>
                            <a
                                href="/"
                                aria-label="Go to Threads"
                                className="footer__link"
                            >
                                <ThreadsLogo className="footer__icon" />
                            </a>
                        </section>
                    </section>
                </section>
                <p className="footer__text footer__text--sm footer__text--center">
                    © Copyright <span className="footer__text--weight">UpSkill</span> All Rights Reserved
                </p>
            </section>
        </footer>
    );
};
