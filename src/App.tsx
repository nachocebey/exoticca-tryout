import Header from "./components/Header/Header";
import data from "./mockedData.json";
import Content from "./components/Content";
// import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  // const trips = useQuery({
  //   queryKey: ["trips"],
  //   queryFn: () =>
  //     fetch("https://api-us.exoticca.com/api/landing/v2/country/botswana").then(
  //       (res) => res.json()
  //     ),
  // });

  // if (trips.isPending) return "Loading...";

  // if (trips.error) return "Error fetching trips";

  return (
    <>
      <Header />
      <Content data={data} />
    </>
  );
}

export default App;
