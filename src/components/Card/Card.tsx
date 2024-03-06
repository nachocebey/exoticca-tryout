import React from "react";
import { Destination } from "../../types";
import TagPool from "../TagPool/TagPool";
import ServicesList from "../ServicesList/ServicesList";
import HighlightList from "../HighlightList/HighlightList";
import "./styles.css";

type Props = {
  trip: Destination;
};

const Card: React.FC<Props> = ({ trip }) => {
  const {
    id,
    title,
    destination,
    images,
    highlights,
    includes,
    tags,
    hasSoloTraveller,
    priceDetail,
  } = trip;

  return (
    <article
      id={`destination-card-${id}`}
      data-testid="card"
      className="card-container"
    >
      <div className="card-image">
        <img src={images[0].desktop} alt={`${title} Image`} />
      </div>
      <div className="card-content">
        <div className="title">
          <h3>{title}</h3>
          <h2>{destination}</h2>
        </div>
        <div className="highlights">
          <HighlightList highlights={highlights} />
        </div>
        <div className="services">
          <ServicesList services={includes} />
        </div>
        <div className="tags">
          <TagPool tags={tags} hasSoloTraveller={hasSoloTraveller} />
        </div>
        <div className="pricing">
          <span className="discount">-{priceDetail.pricingPercentage}%</span>
          <p className="secondary">
            From{" "}
            <span className="from-price">{`${priceDetail.oldPriceBeautify}`}</span>
          </p>
          <p className="primary">{`${priceDetail.fromPriceBeautify}`}</p>
          <p className="secondary">{`Per night ${priceDetail.pricePerNight}`}</p>
        </div>
        <div className="button-container">
          <button>See trip</button>
        </div>
      </div>
    </article>
  );
};

export default Card;
