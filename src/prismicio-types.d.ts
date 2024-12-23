// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
	/**
	 * Label field in *Navigation → Links*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Optional - Label for the link
	 * - **API ID Path**: navigation.links[].label
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	label: prismic.TitleField;

	/**
	 * Link field in *Navigation → Links*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: Link for navigation item
	 * - **API ID Path**: navigation.links[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
	/**
	 * Links field in *Navigation*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: navigation.links[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<NavigationDocumentData>,
	'navigation',
	Lang
>;

type PageDocumentDataSlicesSlice =
	| FooterSlice
	| AboutUsSlice
	| BrandsSlice
	| TestimonialsSlice
	| HomeMapSlice
	| ServicesSlice
	| ProjectsSlice
	| HeroSlice
	| QuoteSlice
	| TextSlice
	| ImageSlice
	| ImageCardsSlice
	| TextWithImageSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Parent field in *Page*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.parent
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	parent: prismic.ContentRelationshipField<'page'>;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Site Title field in *Settings*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: Title of the site
	 * - **API ID Path**: settings.siteTitle
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	siteTitle: prismic.TitleField;

	/**
	 * Logo field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.logo
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	logo: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = NavigationDocument | PageDocument | SettingsDocument;

/**
 * Primary content in *AboutUs → Default → Primary*
 */
export interface AboutUsSliceDefaultPrimary {
	/**
	 * Title field in *AboutUs → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * Description field in *AboutUs → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about_us.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;
}

/**
 * Default variation for AboutUs Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<AboutUsSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *AboutUs*
 */
type AboutUsSliceVariation = AboutUsSliceDefault;

/**
 * AboutUs Shared Slice
 *
 * - **API ID**: `about_us`
 * - **Description**: AboutUs
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutUsSlice = prismic.SharedSlice<'about_us', AboutUsSliceVariation>;

/**
 * Item in *Brands → Default → Primary → Card*
 */
export interface BrandsSliceDefaultPrimaryCardItem {
	/**
	 * Brand Image field in *Brands → Default → Primary → Card*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: brands.default.primary.card[].brand_image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	brand_image: prismic.ImageField<never>;
}

/**
 * Primary content in *Brands → Default → Primary*
 */
export interface BrandsSliceDefaultPrimary {
	/**
	 * Title field in *Brands → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: brands.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * Description field in *Brands → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: brands.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Card field in *Brands → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: brands.default.primary.card[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	card: prismic.GroupField<Simplify<BrandsSliceDefaultPrimaryCardItem>>;
}

/**
 * Default variation for Brands Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BrandsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<BrandsSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Brands*
 */
type BrandsSliceVariation = BrandsSliceDefault;

/**
 * Brands Shared Slice
 *
 * - **API ID**: `brands`
 * - **Description**: Brands
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BrandsSlice = prismic.SharedSlice<'brands', BrandsSliceVariation>;

/**
 * Primary content in *Footer → Default → Primary*
 */
export interface FooterSliceDefaultPrimary {
	/**
	 * Title field in *Footer → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: footer.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<FooterSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault;

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterSlice = prismic.SharedSlice<'footer', FooterSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Text field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Button Link field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.buttonLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	buttonLink: prismic.LinkField;

	/**
	 * Button Text field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.buttonText
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	buttonText: prismic.KeyTextField;

	/**
	 * Background Image field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.backgroundImage
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	backgroundImage: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Primary content in *HomeMap → Default → Primary*
 */
export interface HomeMapSliceDefaultPrimary {
	/**
	 * Title field in *HomeMap → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home_map.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * Description field in *HomeMap → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home_map.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;
}

/**
 * Default variation for HomeMap Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeMapSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HomeMapSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *HomeMap*
 */
type HomeMapSliceVariation = HomeMapSliceDefault;

/**
 * HomeMap Shared Slice
 *
 * - **API ID**: `home_map`
 * - **Description**: HomeMap
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeMapSlice = prismic.SharedSlice<'home_map', HomeMapSliceVariation>;

/**
 * Primary content in *Image → Default → Primary*
 */
export interface ImageSliceDefaultPrimary {
	/**
	 * Image field in *Image → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ImageSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Image → Banner → Primary*
 */
export interface ImageSliceBannerPrimary {
	/**
	 * Image field in *Image → Banner → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image.banner.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Banner variation for Image Slice
 *
 * - **API ID**: `banner`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceBanner = prismic.SharedSliceVariation<
	'banner',
	Simplify<ImageSliceBannerPrimary>,
	never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceBanner;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<'image', ImageSliceVariation>;

/**
 * Item in *ImageCards → Default → Primary → Cards*
 */
export interface ImageCardsSliceDefaultPrimaryCardsItem {
	/**
	 * Image field in *ImageCards → Default → Primary → Cards*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.cards[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;

	/**
	 * Text field in *ImageCards → Default → Primary → Cards*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.cards[].text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Button Link field in *ImageCards → Default → Primary → Cards*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.cards[].buttonLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	buttonLink: prismic.LinkField;

	/**
	 * Button Text field in *ImageCards → Default → Primary → Cards*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.cards[].buttonText
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	buttonText: prismic.KeyTextField;
}

/**
 * Primary content in *ImageCards → Default → Primary*
 */
export interface ImageCardsSliceDefaultPrimary {
	/**
	 * Heading field in *ImageCards → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	heading: prismic.RichTextField;

	/**
	 * Cards field in *ImageCards → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: image_cards.default.primary.cards[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	cards: prismic.GroupField<Simplify<ImageCardsSliceDefaultPrimaryCardsItem>>;
}

/**
 * Default variation for ImageCards Slice
 *
 * - **API ID**: `default`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ImageCardsSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *ImageCards*
 */
type ImageCardsSliceVariation = ImageCardsSliceDefault;

/**
 * ImageCards Shared Slice
 *
 * - **API ID**: `image_cards`
 * - **Description**: ImageCards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageCardsSlice = prismic.SharedSlice<'image_cards', ImageCardsSliceVariation>;

/**
 * Item in *Projects → Default → Primary → Card*
 */
export interface ProjectsSliceDefaultPrimaryCardItem {
	/**
	 * Title field in *Projects → Default → Primary → Card*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.card[].title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * Description field in *Projects → Default → Primary → Card*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.card[].description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Image field in *Projects → Default → Primary → Card*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.card[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Primary content in *Projects → Default → Primary*
 */
export interface ProjectsSliceDefaultPrimary {
	/**
	 * Title field in *Projects → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * Sub Title field in *Projects → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.sub_title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	sub_title: prismic.RichTextField;

	/**
	 * Card field in *Projects → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projects.default.primary.card[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	card: prismic.GroupField<Simplify<ProjectsSliceDefaultPrimaryCardItem>>;
}

/**
 * Default variation for Projects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ProjectsSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Projects*
 */
type ProjectsSliceVariation = ProjectsSliceDefault;

/**
 * Projects Shared Slice
 *
 * - **API ID**: `projects`
 * - **Description**: Projects
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSlice = prismic.SharedSlice<'projects', ProjectsSliceVariation>;

/**
 * Primary content in *Quote → Default → Primary*
 */
export interface QuoteSliceDefaultPrimary {
	/**
	 * Quote field in *Quote → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: quote.default.primary.quote
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	quote: prismic.RichTextField;

	/**
	 * Source field in *Quote → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: quote.default.primary.source
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	source: prismic.KeyTextField;
}

/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<QuoteSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Quote*
 */
type QuoteSliceVariation = QuoteSliceDefault;

/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSlice = prismic.SharedSlice<'quote', QuoteSliceVariation>;

/**
 * Item in *Services → Default → Primary → Card*
 */
export interface ServicesSliceDefaultPrimaryCardItem {
	/**
	 * Title field in *Services → Default → Primary → Card*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: services.default.primary.card[].title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * Description field in *Services → Default → Primary → Card*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: services.default.primary.card[].description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Image field in *Services → Default → Primary → Card*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: services.default.primary.card[].image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Primary content in *Services → Default → Primary*
 */
export interface ServicesSliceDefaultPrimary {
	/**
	 * Title field in *Services → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: services.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * Description field in *Services → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: services.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Card field in *Services → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: services.default.primary.card[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	card: prismic.GroupField<Simplify<ServicesSliceDefaultPrimaryCardItem>>;
}

/**
 * Default variation for Services Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ServicesSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Services*
 */
type ServicesSliceVariation = ServicesSliceDefault;

/**
 * Services Shared Slice
 *
 * - **API ID**: `services`
 * - **Description**: Services
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSlice = prismic.SharedSlice<'services', ServicesSliceVariation>;

/**
 * Item in *Testimonials → Default → Primary → Card*
 */
export interface TestimonialsSliceDefaultPrimaryCardItem {
	/**
	 * Name field in *Testimonials → Default → Primary → Card*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.card[].name
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	name: prismic.RichTextField;

	/**
	 * Testimonial field in *Testimonials → Default → Primary → Card*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.card[].testimonial
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	testimonial: prismic.RichTextField;

	/**
	 * User Image field in *Testimonials → Default → Primary → Card*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.card[].user_image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	user_image: prismic.ImageField<never>;
}

/**
 * Primary content in *Testimonials → Default → Primary*
 */
export interface TestimonialsSliceDefaultPrimary {
	/**
	 * Title field in *Testimonials → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.RichTextField;

	/**
	 * Description field in *Testimonials → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Card field in *Testimonials → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: testimonials.default.primary.card[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	card: prismic.GroupField<Simplify<TestimonialsSliceDefaultPrimaryCardItem>>;
}

/**
 * Default variation for Testimonials Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TestimonialsSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Testimonials*
 */
type TestimonialsSliceVariation = TestimonialsSliceDefault;

/**
 * Testimonials Shared Slice
 *
 * - **API ID**: `testimonials`
 * - **Description**: Testimonials
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialsSlice = prismic.SharedSlice<'testimonials', TestimonialsSliceVariation>;

/**
 * Primary content in *Text → Default → Primary*
 */
export interface TextSliceDefaultPrimary {
	/**
	 * Text field in *Text → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text.default.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TextSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *Text → Two Columns → Primary*
 */
export interface TextSliceTwoColumnsPrimary {
	/**
	 * Text field in *Text → Two Columns → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text.twoColumns.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;
}

/**
 * Two Columns variation for Text Slice
 *
 * - **API ID**: `twoColumns`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceTwoColumns = prismic.SharedSliceVariation<
	'twoColumns',
	Simplify<TextSliceTwoColumnsPrimary>,
	never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault | TextSliceTwoColumns;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<'text', TextSliceVariation>;

/**
 * Primary content in *TextWithImage → Default → Primary*
 */
export interface TextWithImageSliceDefaultPrimary {
	/**
	 * Text field in *TextWithImage → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.default.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Image field in *TextWithImage → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for TextWithImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TextWithImageSliceDefaultPrimary>,
	never
>;

/**
 * Primary content in *TextWithImage → With Button → Primary*
 */
export interface TextWithImageSliceWithButtonPrimary {
	/**
	 * Text field in *TextWithImage → With Button → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.withButton.primary.text
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	text: prismic.RichTextField;

	/**
	 * Button Link field in *TextWithImage → With Button → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.withButton.primary.buttonLink
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	buttonLink: prismic.LinkField;

	/**
	 * Button Text field in *TextWithImage → With Button → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.withButton.primary.buttonText
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	buttonText: prismic.KeyTextField;

	/**
	 * Image field in *TextWithImage → With Button → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_with_image.withButton.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * With Button variation for TextWithImage Slice
 *
 * - **API ID**: `withButton`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSliceWithButton = prismic.SharedSliceVariation<
	'withButton',
	Simplify<TextWithImageSliceWithButtonPrimary>,
	never
>;

/**
 * Slice variation for *TextWithImage*
 */
type TextWithImageSliceVariation = TextWithImageSliceDefault | TextWithImageSliceWithButton;

/**
 * TextWithImage Shared Slice
 *
 * - **API ID**: `text_with_image`
 * - **Description**: TextWithImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextWithImageSlice = prismic.SharedSlice<
	'text_with_image',
	TextWithImageSliceVariation
>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	interface CreateWriteClient {
		(
			repositoryNameOrEndpoint: string,
			options: prismic.WriteClientConfig
		): prismic.WriteClient<AllDocumentTypes>;
	}

	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			NavigationDocument,
			NavigationDocumentData,
			NavigationDocumentDataLinksItem,
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			AllDocumentTypes,
			AboutUsSlice,
			AboutUsSliceDefaultPrimary,
			AboutUsSliceVariation,
			AboutUsSliceDefault,
			BrandsSlice,
			BrandsSliceDefaultPrimaryCardItem,
			BrandsSliceDefaultPrimary,
			BrandsSliceVariation,
			BrandsSliceDefault,
			FooterSlice,
			FooterSliceDefaultPrimary,
			FooterSliceVariation,
			FooterSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			HomeMapSlice,
			HomeMapSliceDefaultPrimary,
			HomeMapSliceVariation,
			HomeMapSliceDefault,
			ImageSlice,
			ImageSliceDefaultPrimary,
			ImageSliceBannerPrimary,
			ImageSliceVariation,
			ImageSliceDefault,
			ImageSliceBanner,
			ImageCardsSlice,
			ImageCardsSliceDefaultPrimaryCardsItem,
			ImageCardsSliceDefaultPrimary,
			ImageCardsSliceVariation,
			ImageCardsSliceDefault,
			ProjectsSlice,
			ProjectsSliceDefaultPrimaryCardItem,
			ProjectsSliceDefaultPrimary,
			ProjectsSliceVariation,
			ProjectsSliceDefault,
			QuoteSlice,
			QuoteSliceDefaultPrimary,
			QuoteSliceVariation,
			QuoteSliceDefault,
			ServicesSlice,
			ServicesSliceDefaultPrimaryCardItem,
			ServicesSliceDefaultPrimary,
			ServicesSliceVariation,
			ServicesSliceDefault,
			TestimonialsSlice,
			TestimonialsSliceDefaultPrimaryCardItem,
			TestimonialsSliceDefaultPrimary,
			TestimonialsSliceVariation,
			TestimonialsSliceDefault,
			TextSlice,
			TextSliceDefaultPrimary,
			TextSliceTwoColumnsPrimary,
			TextSliceVariation,
			TextSliceDefault,
			TextSliceTwoColumns,
			TextWithImageSlice,
			TextWithImageSliceDefaultPrimary,
			TextWithImageSliceWithButtonPrimary,
			TextWithImageSliceVariation,
			TextWithImageSliceDefault,
			TextWithImageSliceWithButton
		};
	}
}
