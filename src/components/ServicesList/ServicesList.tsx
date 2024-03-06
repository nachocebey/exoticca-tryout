import { ServiceType } from "../../types";
import { formatServiceName } from "../../utils";
import "./styles.css";

type Props = {
  services: ServiceType[];
};

export default function ServicesList({ services }: Props) {
  return (
    <>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{formatServiceName(service as ServiceType)}</li>
        ))}
      </ul>
    </>
  );
}
