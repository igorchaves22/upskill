import { navbarItems } from "~utils";

export const useHomePage = () => {
    const sectionIds = Object.fromEntries(navbarItems.map((item) => [item.href, item.href]));

    return { sectionIds };
};
