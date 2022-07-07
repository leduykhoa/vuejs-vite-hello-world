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

export const FORM_BASE_BUTTON = `button`;
export const FORM_BASE_IMAGE = `img`;
export const FORM_BASE_INPUT = `input`;
export const FORM_BASE_SELECT = `select`;
export const FORM_BASE_TEXTAREA = `textarea`;

export const GROUP_EL_BASIC = `basic`;

export const EL_HEADING = `heading`;
export const EL_FEATURED = `featured`;
export const EL_TESTIMONIALS = `testimonials`;
export const EL_COLLECTION = `collection`;
export const EL_PRODUCT = `product`;

export const EL_SETTINGS_HEADING = {
    content: `Enter your heading text`,
    tag: `h3`
};
export const EL_SETTINGS_FEATURED = {
};
export const EL_SETTINGS_TESTIMONIALS = {
};
export const EL_SETTINGS_COLLECTION = {
};
export const EL_SETTINGS_PRODUCT = {
};

export const EL__CONFIGS_BASE_CONTENT = {
    name: `content`,
    title: `Heading`,
    type: FORM_BASE_TEXTAREA
};
export const EL__CONFIGS_BASE_TAG = {
    name: `tag`,
    title: `Tag`,
    type: FORM_BASE_SELECT,
    option: {
        h1: `H1`,
        h2: `H2`,
        h3: `H3`,
        h4: `H4`,
        h5: `H5`,
        h6: `H6`
    }
};
export const EL__CONFIGS_BASE_LINK = {
    name: `link`,
    title: `Link`,
    type: FORM_BASE_INPUT,
};
export const EL__CONFIGS_BASE_LAYOUT = {
    name: `layout`,
    title: `Layout`,
    type: FORM_BASE_SELECT,
    option: {
        oneColumn: `oneColumn`,
        twoColumnLeft: `twoColumnLeft`,
        twoColumnRight: `twoColumnRight`,
        threeColumn: `threeColumn`,
        custom: `custom`,
    }
};
export const EL__CONFIGS_BASE_IMAGE = {
    name: `image`,
    title: `Image`,
    type: FORM_BASE_INPUT
};
export const EL__CONFIGS_BASE_TITLE = {
    name: `title`,
    title: `Title`,
    type: FORM_BASE_INPUT
};
export const EL__CONFIGS_BASE_BUTTON = {
    name: `title`,
    title: `Title`,
    type: FORM_BASE_INPUT
};
export const EL__CONFIGS_BASE_AVATAR = {
    name: `avatar`,
    title: `Avatar`,
    type: FORM_BASE_INPUT
};
export const EL__CONFIGS_BASE_POSITION = {
    name: `position`,
    title: `Position`,
    type: FORM_BASE_INPUT
};

export const EL__CONFIGS_HEADING = [
    EL__CONFIGS_BASE_CONTENT,
    EL__CONFIGS_BASE_TAG,
    EL__CONFIGS_BASE_LINK
];
export const EL__CONFIGS_FEATURED = [
    EL__CONFIGS_BASE_LAYOUT,
    EL__CONFIGS_BASE_IMAGE,
    EL__CONFIGS_BASE_TITLE,
    EL__CONFIGS_BASE_CONTENT,
    EL__CONFIGS_BASE_BUTTON,
    EL__CONFIGS_BASE_LINK
];
export const EL__CONFIGS_TESTIMONIALS = [
    EL__CONFIGS_BASE_AVATAR,
    EL__CONFIGS_BASE_TITLE,
    EL__CONFIGS_BASE_POSITION,
    EL__CONFIGS_BASE_CONTENT
];
export const EL__CONFIGS_COLLECTION = [
];
export const EL__CONFIGS_PRODUCT = [
];

const CDF = {
    elements: [
        {
            name: GROUP_EL_BASIC,
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