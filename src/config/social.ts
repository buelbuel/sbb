import { LinkedIn, GitHub, Trailhead } from '@/components/Icons'
import type { ComponentType, SVGProps } from 'react'

export interface SocialLink {
    key: string
    label: string
    handle: string
    href: string
    Icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const SOCIAL_LINKS: SocialLink[] = [
    {
        key: 'linkedin',
        label: 'LinkedIn',
        handle: 'linkedin.com/in/alicem-buelbuel',
        href: 'https://www.linkedin.com/in/alicem-buelbuel/',
        Icon: LinkedIn
    },
    {
        key: 'trailhead',
        label: 'Trailblazer',
        handle: 'trailblazer.me/alicemb',
        href: 'https://www.salesforce.com/trailblazer/alicemb',
        Icon: Trailhead
    },
    {
        key: 'github',
        label: 'GitHub',
        handle: 'github.com/buelbuel',
        href: 'https://github.com/buelbuel',
        Icon: GitHub
    }
]

export const getSocialLink = (key: string) => SOCIAL_LINKS.find(link => link.key === key)
