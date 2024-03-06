import { Destination } from "../../types";
import Card from "../Card/Card";

type Props = {
  destinations: Destination[];
  name: string;
};

export default function FeaturedSection({ destinations, name }: Props) {
  return (
    <section data-testid="featured-multimarket-section">
      <h2>Our recommendation to visit {name} and neighboring countries</h2>
      {destinations.map((destination, index) => (
        <Card trip={destination} key={index + "featured"} />
      ))}
    </section>
  );
}
