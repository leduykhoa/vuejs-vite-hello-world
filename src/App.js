import {
    AtSymbolIcon,
    BadgeCheckIcon,
    ChatIcon,
    CollectionIcon,
    ServerIcon,
    PencilIcon,
    LightBulbIcon,
    DotsVerticalIcon
} from '@heroicons/vue/outline';

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

import BaseButton from './components/form/BaseButton.vue';
import BaseImage from './components/form/BaseImage.vue';
import BaseInput from './components/form/BaseInput.vue';
import BaseSelect from './components/form/BaseSelect.vue';
import BaseTextarea from './components/form/BaseTextarea.vue';

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


export const EL_SESSION_CONTENT = `content`;
export const EL_SESSION_DESIGN = `design`;
export const EL_SESSION_ADVANCED = `advanced`;

export const EL_SESSION_POSITION = {
    heading:
    {
        content: EL_SESSION_CONTENT,
        tag: EL_SESSION_CONTENT,
        link: EL_SESSION_CONTENT,
    },
    featured:
    {
        layout: EL_SESSION_CONTENT,
        image: EL_SESSION_CONTENT,
        title: EL_SESSION_CONTENT,
        content: EL_SESSION_CONTENT,
        button: EL_SESSION_CONTENT,
        link: EL_SESSION_CONTENT,
    }
}


const CDF = {
    tabColRight: [
        {
            name: EL_SESSION_CONTENT,
            title: `Content`,
            icon: PencilIcon,
        },
        {
            name: EL_SESSION_DESIGN,
            title: `Design`,
            icon: LightBulbIcon,
        },
        {
            name: EL_SESSION_ADVANCED,
            title: ``,
            icon: DotsVerticalIcon,
        }
    ],
    elements: [
        {
            name: GROUP_EL_BASIC,
            title: `Basic`,
            items: [
                {
                    id: EL_HEADING,
                    name: EL_HEADING,
                    title: `Heading`,
                    icon: AtSymbolIcon,
                    _config: buildConfigForElement(EL_SETTINGS_HEADING, EL__CONFIGS_HEADING, EL_SESSION_POSITION.heading)
                },
                {
                    id: EL_FEATURED,
                    name: EL_FEATURED,
                    title: `Featured`,
                    icon: BadgeCheckIcon,
                    _config: buildConfigForElement(EL_SETTINGS_FEATURED, EL__CONFIGS_FEATURED, EL__CONFIGS_HEADING, EL_SESSION_POSITION.featured)
                },
                {
                    id: EL_TESTIMONIALS,
                    name: EL_TESTIMONIALS,
                    title: `Testimonials`,
                    icon: ChatIcon,
                    _config: buildConfigForElement(EL_SETTINGS_TESTIMONIALS, EL__CONFIGS_TESTIMONIALS, EL__CONFIGS_HEADING, EL_SESSION_POSITION.testimonials)
                },
                {
                    id: EL_COLLECTION,
                    name: EL_COLLECTION,
                    title: `Collection`,
                    icon: CollectionIcon,
                    _config: buildConfigForElement(EL_SETTINGS_COLLECTION, EL__CONFIGS_COLLECTION, EL__CONFIGS_HEADING, EL_SESSION_POSITION.collection)
                },
                {
                    id: EL_PRODUCT,
                    name: EL_PRODUCT,
                    title: `Product`,
                    icon: ServerIcon,
                    _config: buildConfigForElement(EL_SETTINGS_PRODUCT, EL__CONFIGS_PRODUCT, EL__CONFIGS_HEADING, EL_SESSION_POSITION.product)
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

export function buildConfigForElement(settings, configs, session) {
    return Object.keys(settings)
        .map((key) => {
            return {
                ...configs.find(item => item.name == key),
                ...{ value: settings[key], session: session[key] }
            }
        })
};
// Maybe not use
export function buildComputedSettingsForElement(element) {

};

export function getComponentFormBase(name) {
    switch (name) {
        case FORM_BASE_BUTTON:
            return BaseButton;
            break;
        case FORM_BASE_IMAGE:
            return BaseImage;
            break;
        case FORM_BASE_INPUT:
            return BaseInput;
            break;
        case FORM_BASE_SELECT:
            return BaseSelect;
            break;
        case FORM_BASE_TEXTAREA:
            return BaseTextarea;
            break;
        default:
            return false;
    }
};

export default CDF;