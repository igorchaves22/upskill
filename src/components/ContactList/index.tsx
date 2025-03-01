import { Clock, EnvelopeSimple, MapPinLine, Phone } from "@phosphor-icons/react";
import { contactListItems } from "~utils";
import "./styles.scss";

type IconKeyType = keyof typeof ICON;

const ICON = {
    MapPinLine: <MapPinLine className="contact-list__icon" />,
    Phone: <Phone className="contact-list__icon" />,
    EnvelopeSimple: <EnvelopeSimple className="contact-list__icon" />,
    Clock: <Clock className="contact-list__icon" />
};

export const ContactList = () => {
    return (
        <ul className="contact-list">
            {contactListItems.map((item) => (
                <li
                    key={item.title}
                    className="contact-list__box"
                >
                    {ICON[item.icon as IconKeyType]}
                    <h3 className="contact-list__text contact-list__text--title">{item.title}</h3>
                    <p className="contact-list__text">{item.text}</p>
                </li>
            ))}
        </ul>
    );
};
