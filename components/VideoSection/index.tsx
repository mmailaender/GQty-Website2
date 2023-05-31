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
      <div className=" max-w-[1108px]  lg:grid lg:grid-cols-12 md:flex md:flex-col sm:flex sm:flex-col gap-6">

        {/* title */}
        <div className="col-start-4 col-span-6">
          <View gap={6}>
          <Text className="lg:text-6xl md:text-5xl sm:text-5xl" weight="bold" align="center">Simplify Your Life</Text>
          <Text className="lg:text-xl md:text-l sm:text-l text-surface-200 lg:px-0 md:px-40 sm:px-40"  align="center">Streamline your coding process, save time, and implement our innovative solution to say goodbye to tedious coding once and for all!</Text>
          </View>
        </div>
     
      </div>

       {/* content */}
      <div className=" max-w-[1108px] w-full lg:grid lg:grid-cols-12 md:flew md:flex-col gap-6 pt-14 pb-14">

        {/* course title */}
        <div className="col-start-1 lg:col-span-3 md:flex sm:flew md:w-full sm:w-full pt-4 md:px-4 sm:px-4">
          <View gap={1}>
          <Text variant="featured-1" weight="bold" >GQty Basics</Text>
          <Text variant="body-2" weight="medium" className="text-surface-200" >9 Tutorials</Text>
          </View>
        </div>
        
        {/* tutorials */}
        <div className=" lg:col-start-5 lg:col-span-8 md:col-start-1 md:col-span-12 sm:col-start-1 sm:col-span-12 md:px-4 sm:px-4">
          <div className="flex flex-col divide-y divide-surface-700 gap-6">
           <Tutorial/>
           <Tutorial/>
           <Tutorial/>
          </div>
        </div>
     
      </div>

    </div>
    
    </>

  );
};

export default VideoSection;
