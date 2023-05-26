import { View, Text } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";

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
      <div className=" max-w-[1270px]  grid grid-cols-12 gap-6">
        {/* title */}
        <div className="col-start-4 col-span-6">
          <View gap={6}>
<Text variant="display-3" align="center">Simplify Your Life</Text>
<Text variant="body-1"  align="center" className="text-surface-200">Streamline your coding process, save time, and implement our innovative solution to say goodbye to tedious coding once and for all!</Text>
</View>
</div>
<div className="col-start-1 col-span-3"><Text variant="featured-2">GQty Basics</Text></div>
</div>

    </div>
    <div></div>
    </>

  );
};

export default VideoSection;
