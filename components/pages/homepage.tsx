import { View } from "reshaped/bundle";
import Contributor from "../Contributor";
import HeroSection from "../HeroSection";
import Playground from "../Playground";
import Roadmap from "../Roadmap";
import USPRead from "./USPRead";
import USPWork from "./USPWrite";

const Homepage = () => {
  return (
    <View direction="column" align="center" className="bg-surface-900">
      <View
        direction="column"
        gap={30}
        width="100%"
        maxWidth="1270px"
        padding={[0, 20]}
        align="center"
      >
        <HeroSection />
        <View direction="column" gap={30} paddingTop={5}>
          <USPRead />
          <USPWork />
          {/* <USP
          direction="row"
          title="Read"
          content="Simply read from the query object, and GQty fetches missing data on-the-fly!"
        />
        <USP
          direction="row-reverse"
          title="Write"
          content="You have full control when mutations are sent, with optimistic updates and more!"
        />
        <USP
          direction="row"
          title="Performance optimized"
          content="Normalized cache built-In, which you can also use quite easily for state
        management!"
        /> */}
          <Playground />
          <Contributor />
          <Roadmap />
        </View>
      </View>
    </View>
  );
};

export default Homepage;
