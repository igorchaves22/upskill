import { duplicateArray, partnersListItems } from "~utils";
import { Image } from "../Image";
import "./styles.scss";

export const PartnersList = () => {
    return (
        <section className="partners-list">
            <ul className="partners-list__list">
                {duplicateArray(partnersListItems).map((item, index) => (
                    <li
                        key={item.title + index}
                        className="partners-list__item"
                    >
                        <Image
                            src={item.logo}
                            alt="Partner logo"
                            size="xs"
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
