import { Tag } from "../../types";
import "./styles.css";

type Props = {
  tags: Tag[];
  hasSoloTraveller: boolean;
};

export default function TagPool({ tags, hasSoloTraveller }: Props) {
  return (
    <>
      {hasSoloTraveller && <div className="pill pill-special">SOLO TRAVEL</div>}
      {tags.map((tag, index) => (
        <div className="pill" key={index}>
          {tag.name}
        </div>
      ))}
    </>
  );
}
