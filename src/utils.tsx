import { ReactElement } from "react";
import { ServiceType } from "./types";

export const formatServiceName = (
  service: ServiceType
): ReactElement | null => {
  let result: ReactElement | null = null;
  switch (service) {
    case "ACCOMMODATION":
      result = (
        <>
          <span className="material-symbols-outlined">bed</span>
          <span>Accommodation</span>
        </>
      );
      break;
    case "ALL_FLIGHTS":
      result = (
        <>
          <span className="material-symbols-outlined">connecting_airports</span>
          <span>All flights</span>
        </>
      );
      break;
    case "ALL_TRANSFERS":
      result = (
        <>
          <span className="material-symbols-outlined">directions_bus</span>
          <span>All transfers</span>
        </>
      );
      break;
    case "SOME_MEALS":
      result = (
        <>
          <span className="material-symbols-outlined">coffee</span>
          <span>Some meals</span>
        </>
      );
      break;
    case "ACTIVITIES":
      result = (
        <>
          <span className="material-symbols-outlined">hiking</span>
          <span>Activities</span>
        </>
      );
      break;
    default:
      break;
  }
  return result;
};
