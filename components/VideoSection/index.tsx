import { View, Text } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";
import Tutorial from "../Tutorial";

// sdk.embedProjectId("playground", "nextjs-2jqmx4", {
//   forceEmbedLayout: true,
//   openFile: "src/components/Query.tsx",
//   hideExplorer: true,
//   hideNavigation: true,
// });

const VideoSection = () => {
  return (
    <>    
    <div className=" flex flex-col w-full bg-surface-800 items-center justify-center pt-20">
      <div className=" max-w-[1108px]  grid grid-cols-12 gap-6">

        {/* title */}
        <div className="col-start-4 col-span-6">
          <View gap={6}>
          <Text variant="title-4" align="center">Simplify Your Life</Text>
          <Text variant="featured-3" className="text-surface-200" align="center">Streamline your coding process, save time, and implement our innovative solution to say goodbye to tedious coding once and for all!</Text>
          </View>
        </div>
     
      </div>

       {/* content */}
      <div className=" max-w-[1108px] w-full grid grid-cols-12 gap-6 pt-20">

        {/* course title */}
        <div className="col-start-1 col-span-3">
          <View gap={3}>
          <Text variant="featured-1" weight="bold" >GQty Basics</Text>
          <Text variant="body-2" weight="medium" className="text-surface-200" >9 Tutorials</Text>
          </View>
        </div>

        <div className=" col-start-5 col-span-8"><Tutorial/></div>
     
      </div>

    </div>
    
    </>

  );
};

export default VideoSection;
