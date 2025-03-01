import { List, X } from "@phosphor-icons/react";
import { useHeader } from "~hooks";
import { applyClassNameIfTrue, navbarItems, renderElementIfTrue } from "~utils";
import { Logo } from "../Logo";
import "./styles.scss";

const MENU_ICON = {
    List: <List className="header__icon" />,
    X: <X className="header__icon" />
};

export const Header = () => {
    const {
        isWidthAboveThreshold,
        isScrolledBelowThreshold,
        menuIsRendered,
        menuIsDelayedRendered,
        updateMenuIsRendered
    } = useHeader();

    return (
        <header className={"header" + applyClassNameIfTrue(isScrolledBelowThreshold || menuIsRendered, "header--bg")}>
            <section className="header__box header__box--main">
                <Logo />
                {renderElementIfTrue(
                    !isWidthAboveThreshold,
                    <button
                        type="button"
                        aria-label="Menu icon"
                        onClick={() => updateMenuIsRendered()}
                        className="header__button"
                    >
                        {MENU_ICON[menuIsRendered ? "X" : "List"]}
                    </button>
                )}
                {renderElementIfTrue(
                    menuIsDelayedRendered || isWidthAboveThreshold,
                    <nav
                        className={
                            "header__box header__box--navbar" +
                            applyClassNameIfTrue(
                                !isWidthAboveThreshold,
                                `header__box--${menuIsRendered ? "rendered" : "not-rendered"}`
                            )
                        }
                    >
                        <ul className="header__box header__box--list">
                            {navbarItems.map((item) => (
                                <li
                                    key={item.href}
                                    className="header__box header__box--item"
                                >
                                    <a
                                        key={item.href}
                                        href={`#${item.href}`}
                                        onClick={() => updateMenuIsRendered()}
                                        className="header__link"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </section>
        </header>
    );
};
