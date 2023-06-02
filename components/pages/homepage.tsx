import { type NextPage } from "next";
import { useSSG } from "nextra/ssg";
import { View } from "reshaped/bundle";
import Contributors, { type Props as ContributorsProps } from "../Contributors";
import HeroSection from "../HeroSection";
import Playground from "../Playground";
import Roadmap, { type Props as RoadmapProps } from "../Roadmap";
import USPRead from "./USPRead";
import USPWork from "./USPWrite";
import VideoSection from "../VideoSection";

export type Props = Partial<ContributorsProps & RoadmapProps>;

const Homepage: NextPage = () => {
  const { contributors, sponsorship } = useSSG() as Props;

  return (
    <View direction="column" align="center" className="bg-surface-900">
      <View
        direction="column"
        gap={{ xl: 24, l: 24, m: 16, s: 0 }}
        width="100%"
        maxWidth="1270px"
        paddingInline={{ l: 20, s: 4 }}
        paddingBottom={{ l: 0, s: 0 }}
        align="center"
      >
        <HeroSection />
        <View
          direction="column"
          gap={{ xl: 30, l: 30, m: 16, s: 12 }}
          paddingTop={{ l: 5, m: 5, s: 0 }}
        >
          <USPRead />
          <USPWork />
          
          </View>
        </View>

        <VideoSection />
        <View direction="column"
          gap={{ xl: 30, l: 30, m: 16, s: 12 }}
          paddingTop={{ l: 12, m: 12, s: 8 }}
          paddingInline={{ l: 20, s: 4 }}>
        <Contributors contributors={contributors} />
          <Roadmap sponsorship={sponsorship} />
          </View>
      
     
    </View>
  );
};

export default Homepage;
