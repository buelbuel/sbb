import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

let isInitialized = false

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {},
        defaultNS: 'common',
        fallbackLng: 'de',
        debug: false,
        interpolation: {
            escapeValue: false
        }
    })

const initializeI18n = async () => {
    if (isInitialized) return
    isInitialized = true

    const detectedLang = i18n.resolvedLanguage || 'de'

    const [
        { default: enCommon },
        { default: enHome },
        { default: deCommon },
        { default: deHome }
    ] = await Promise.all([
        import('./locales/en/common.json'),
        import('./locales/en/home.json'),
        import('./locales/de/common.json'),
        import('./locales/de/home.json')
    ])

    i18n.addResourceBundle('en', 'common', enCommon)
    i18n.addResourceBundle('en', 'home', enHome)
    i18n.addResourceBundle('de', 'common', deCommon)
    i18n.addResourceBundle('de', 'home', deHome)

    Promise.all([
        import('./locales/en/about.json'),
        import('./locales/en/services.json'),
        import('./locales/en/contact.json'),
        import('./locales/en/references.json'),
        import('./locales/en/legal.json'),
        import('./locales/de/about.json'),
        import('./locales/de/services.json'),
        import('./locales/de/contact.json'),
        import('./locales/de/references.json'),
        import('./locales/de/legal.json')
    ]).then(([enAbout, enServices, enContact, enReferences, enLegal, deAbout, deServices, deContact, deReferences, deLegal]) => {
        i18n.addResourceBundle('en', 'about', enAbout.default)
        i18n.addResourceBundle('en', 'services', enServices.default)
        i18n.addResourceBundle('en', 'contact', enContact.default)
        i18n.addResourceBundle('en', 'references', enReferences.default)
        i18n.addResourceBundle('en', 'legal', enLegal.default)
        i18n.addResourceBundle('de', 'about', deAbout.default)
        i18n.addResourceBundle('de', 'services', deServices.default)
        i18n.addResourceBundle('de', 'contact', deContact.default)
        i18n.addResourceBundle('de', 'references', deReferences.default)
        i18n.addResourceBundle('de', 'legal', deLegal.default)
    }).catch(console.error)
}

export default i18n
export { initializeI18n }
