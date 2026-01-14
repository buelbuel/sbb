import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

let isInitialized = false

const initializeI18n = async () => {
    if (isInitialized) return
    isInitialized = true

    const [
        { default: enCommon },
        { default: enHome },
        { default: enAbout },
        { default: enServices },
        { default: enContact },
        { default: enReferences },
        { default: enLegal },
        { default: deCommon },
        { default: deHome },
        { default: deAbout },
        { default: deServices },
        { default: deContact },
        { default: deReferences },
        { default: deLegal }
    ] = await Promise.all([
        import('./locales/en/common.json'),
        import('./locales/en/home.json'),
        import('./locales/en/about.json'),
        import('./locales/en/services.json'),
        import('./locales/en/contact.json'),
        import('./locales/en/references.json'),
        import('./locales/en/legal.json'),
        import('./locales/de/common.json'),
        import('./locales/de/home.json'),
        import('./locales/de/about.json'),
        import('./locales/de/services.json'),
        import('./locales/de/contact.json'),
        import('./locales/de/references.json'),
        import('./locales/de/legal.json')
    ])

    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources: {
                en: {
                    common: enCommon,
                    home: enHome,
                    about: enAbout,
                    services: enServices,
                    contact: enContact,
                    references: enReferences,
                    legal: enLegal
                },
                de: {
                    common: deCommon,
                    home: deHome,
                    about: deAbout,
                    services: deServices,
                    contact: deContact,
                    references: deReferences,
                    legal: deLegal
                }
            },
            defaultNS: 'common',
            fallbackLng: 'de',
            debug: false,
            interpolation: {
                escapeValue: false
            }
        })
}

Promise.resolve().then(() => initializeI18n()).catch(console.error)

export default i18n
export { initializeI18n }
