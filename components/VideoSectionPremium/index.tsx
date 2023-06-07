import { Button, Image, View, Scrim, Icon, Text } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";
import Check from "../Icons/Play/Check";
import Clock from "../Icons/Play/Clock";
import PlayIcon from "../Icons/Play/Play";
import LockIcon from "../Icons/Play/Lock";

// sdk.embedProjectId("playground", "nextjs-2jqmx4", {
//   forceEmbedLayout: true,
//   openFile: "src/components/Query.tsx",
//   hideExplorer: true,
//   hideNavigation: true,
// });

const VideoSectionPremium = () => {
  return (
    <>    
    <div className="grid grid-cols-10 gap-6 bg-black w-full">
        {/* Video */}
        <div className="col-start-2 col-span-8">
         
        <Scrim
        className="filter backdrop-blur-lg bg-black/30"
          backgroundSlot={
          <View aspectRatio={16 / 9} justify="center" >
            <iframe  className="w-full aspect-video h-[480px] " src="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s&ab_channel=RickAstley">
          
            </iframe>
           </View>
           }
           >
        <View  align="center" gap={4} justify="center">
          <Icon svg={<LockIcon/>} size={10} />
          <Text variant="body-2" weight="bold">Unlock to start watching the Course</Text>
         </View>
        </Scrim>
        
         
        </div>
      </div>

   
    
    </>

  );
};

export default VideoSectionPremium;



