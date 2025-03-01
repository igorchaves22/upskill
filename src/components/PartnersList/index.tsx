import { duplicateArray, partnersListItems } from "~utils";
import { Image } from "../Image";
import "./styles.scss";

export const PartnersList = () => {
    return (
        <section className="partners-list">
            <ul className="partners-list__list">
                {duplicateArray(partnersListItems).map((item) => (
                    <li
                        key={item.title}
                        className="partners-list__item"
                    >
                        <Image
                            src={item.src}
                            alt="Partner logo"
                            size="xs"
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
