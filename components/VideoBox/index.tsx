import { Button, Image, View } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";
import Check from "../Icons/Play/Check";
import Clock from "../Icons/Play/Clock";
import PlayIcon from "../Icons/Play/Play";

// sdk.embedProjectId("playground", "nextjs-2jqmx4", {
//   forceEmbedLayout: true,
//   openFile: "src/components/Query.tsx",
//   hideExplorer: true,
//   hideNavigation: true,
// });

const VideoBox = () => {
  return (
    <>    
   <div className="aspect-video border border-surface-700 rounded-2xl max-w-full w-full h-40 flex justify-center  items-center">
    <View aspectRatio={1/1}>
    <Button rounded={true} icon={<PlayIcon/>} ></Button>
    </View>
   </div>

   
    
    </>

  );
};

export default VideoBox;



