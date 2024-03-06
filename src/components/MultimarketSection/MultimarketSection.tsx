import { Destination } from "../../types";
import Card from "../Card/Card";

type Props = {
  destinations: Destination[];
  name: string;
};

export default function FeaturedSection({ destinations, name }: Props) {
  return (
    <section data-testid="multimarket-section">
      <h2>Multi country vacation packages inclouding {name}</h2>
      {destinations.map((destination, index) => (
        <Card trip={destination} key={index + "normal"} />
      ))}
    </section>
  );
}
