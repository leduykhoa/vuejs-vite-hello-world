import { AtSymbolIcon, BadgeCheckIcon, ChatIcon, CollectionIcon, ServerIcon } from '@heroicons/vue/outline';

export default {
    elements: [
        {
            name: `basic`,
            title: `Basic`,
            items: [
                {
                    id: `heading`,
                    name: `heading`,
                    title: `Heading`,
                    icon: AtSymbolIcon
                },
                {
                    id: `featured`,
                    name: `featured`,
                    title: `Featured`,
                    icon: BadgeCheckIcon
                },
                {
                    id: `testimonials`,
                    name: `testimonials`,
                    title: `Testimonials`,
                    icon: ChatIcon
                },
                {
                    id: `collection`,
                    name: `collection`,
                    title: `Collection`,
                    icon: CollectionIcon
                },
                {
                    id: `product`,
                    name: `product`,
                    title: `Product`,
                    icon: ServerIcon
                },
            ]
        }
    ]
}
