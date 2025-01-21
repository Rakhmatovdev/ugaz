import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../constants/translatens/en.json';
import ru from '../constants/translatens/ru.json';
import uz from '../constants/translatens/uz.json';

const resources = {
    en,
    ru,
    uz
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ru',
        debug: true,
        interpolation: {
        },
    });

export default i18n;
