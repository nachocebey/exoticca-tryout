import { Highlight } from "../../types";
import "./styles.css";

type Props = {
  highlights: Highlight[];
};
const MAX_HIGHLIGHTS = 4;

export default function HighlightList({ highlights }: Props) {
  return (
    <>
      <ul>
        {highlights.slice(0, MAX_HIGHLIGHTS).map((highlight, index) => (
          <li key={index}>
            <span className="material-symbols-outlined">where_to_vote</span>
            <span>{highlight.title}</span>
          </li>
        ))}
        {highlights.length > MAX_HIGHLIGHTS && (
          <li key={5}>
            <span className="extra-items">{`+${
              highlights.length - MAX_HIGHLIGHTS
            } more`}</span>
          </li>
        )}
      </ul>
    </>
  );
}
