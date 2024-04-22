import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { vn, kor, en } from "./languages";

i18n.use(initReactI18next).init({
    resources: {
        vn: { translation: vn },
        kor: { translation: kor },
        en: { translation: en },
    },
    lng: "kor",
    fallbackLng: "kor",
});

export default i18n;