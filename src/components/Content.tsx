import { Destination } from "../types";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import MultimarketSection from "./MultimarketSection/MultimarketSection";

type Props = {
  data: {
    name: string;
    destinations: {
      featuredMultiMarket: Destination[];
      multiMarket: Destination[];
    };
  };
};
export default function Content({ data }: Props) {
  const { name, destinations } = data;
  return (
    <div className="content">
      <FeaturedSection
        destinations={destinations.featuredMultiMarket}
        name={name}
      />
      <MultimarketSection destinations={destinations.multiMarket} name={name} />
    </div>
  );
}
