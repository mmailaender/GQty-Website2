import { Image, View } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";
import Check from "../Icons/Play/Check";
import Clock from "../Icons/Play/Clock";

// sdk.embedProjectId("playground", "nextjs-2jqmx4", {
//   forceEmbedLayout: true,
//   openFile: "src/components/Query.tsx",
//   hideExplorer: true,
//   hideNavigation: true,
// });

const VideoBox = () => {
  return (
    <>    
   <div className="aspect-video border border-surface-700 rounded-2xl max-w-full w-full h-full">
    <View backgroundColor="primary"></View>
   </div>

   
    
    </>

  );
};

export default VideoBox;
