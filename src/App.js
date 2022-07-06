import { AtSymbolIcon, BadgeCheckIcon, ChatIcon, CollectionIcon, ServerIcon } from '@heroicons/vue/outline';
import HeadingContentView from './components/elements/heading/HeadingContentView.vue';
import HeadingColRight from './components/elements/heading/HeadingColRight.vue';
import FeaturedContentView from './components/elements/featured/FeaturedContentView.vue';
import FeaturedColRight from './components/elements/featured/FeaturedColRight.vue';
import TestimonialsContentView from './components/elements/testimonials/TestimonialsContentView.vue';
import TestimonialsColRight from './components/elements/testimonials/TestimonialsColRight.vue';
import CollectionContentView from './components/elements/collection/CollectionContentView.vue';
import CollectionColRight from './components/elements/collection/CollectionColRight.vue';
import ProductContentView from './components/elements/product/ProductContentView.vue';
import ProductColRight from './components/elements/product/ProductColRight.vue';

const GROUP_BASIC = `basic`;

const EL_HEADING = `heading`;
const EL_FEATURED = `featured`;
const EL_TESTIMONIALS = `testimonials`;
const EL_COLLECTION = `collection`;
const EL_PRODUCT = `product`;

const CDF = {
    elements: [
        {
            name: GROUP_BASIC,
            title: `Basic`,
            items: [
                {
                    id: EL_HEADING,
                    name: EL_HEADING,
                    title: `Heading`,
                    icon: AtSymbolIcon
                },
                {
                    id: EL_FEATURED,
                    name: EL_FEATURED,
                    title: `Featured`,
                    icon: BadgeCheckIcon
                },
                {
                    id: EL_TESTIMONIALS,
                    name: EL_TESTIMONIALS,
                    title: `Testimonials`,
                    icon: ChatIcon
                },
                {
                    id: EL_COLLECTION,
                    name: EL_COLLECTION,
                    title: `Collection`,
                    icon: CollectionIcon
                },
                {
                    id: EL_PRODUCT,
                    name: EL_PRODUCT,
                    title: `Product`,
                    icon: ServerIcon
                },
            ]
        }
    ]
};

export function findElementData(name) {
    return CDF
        .elements
        .find((item) => {
            return (item.items.find((itemFind) => itemFind.name === name) !== undefined);
        })
        .items
        .find(itemFind => itemFind.name === name);
};

export function getComponentContentView(name) {
    switch (name) {
        case EL_FEATURED:
            return FeaturedContentView;
            break;
        case EL_TESTIMONIALS:
            return TestimonialsContentView;
            break;
        case EL_COLLECTION:
            return CollectionContentView;
            break;
        case EL_PRODUCT:
            return ProductContentView;
            break;
        default:
            return HeadingContentView;
    }
};

export function getComponentColRight(name) {
    switch (name) {
        case EL_FEATURED:
            return FeaturedColRight;
            break;
        case EL_TESTIMONIALS:
            return TestimonialsColRight;
            break;
        case EL_COLLECTION:
            return CollectionColRight;
            break;
        case EL_PRODUCT:
            return ProductColRight;
            break;
        default:
            return HeadingColRight;
    }
};
export default CDF;