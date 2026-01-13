import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

let isInitialized = false

const initializeI18n = async () => {
    if (isInitialized) return
    isInitialized = true

    const [{ default: de }, { default: en }] = await Promise.all([
        import('./locales/de.json'),
        import('./locales/en.json'),
    ])

    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources: {
                en: { translation: en },
                de: { translation: de }
            },
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
