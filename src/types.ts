export type Destination = {
  id: number;
  title: string;
  destination: string;
  days: number;
  hasSoloTraveller: boolean;
  images: {
    desktop: string;
    tablet: string;
    mobile: string;
  }[];
  highlights: Highlight[];
  includes: ServiceType[];
  priceDetail: {
    fromPrice: number;
    fromPriceBeautify: string;
    discountSaved: number;
    oldPriceBeautify: string;
    pricingPercentage: number;
    pricePerNight: string;
    oldPrice: number;
  };
  tags: {
    alias: string;
    name: string;
    description: string;
    categoryName: string;
    uri: string;
    tagId: string;
  }[];
};

export type Destinations = {
  featuredMultiMarket: Array<Destination>;
  multiMarket: Array<Destination>;
};

export type ServiceType =
  | "ACCOMMODATION"
  | "ALL_FLIGHTS"
  | "ALL_TRANSFERS"
  | "SOME_MEALS"
  | "ACTIVITIES";

export type Tag = {
  alias: string;
  name: string;
  description: string;
  categoryName: string;
  uri: string;
  tagId: string;
};

export type Highlight = {
  title: string;
  url: string;
};
