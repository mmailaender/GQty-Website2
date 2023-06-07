import { Button, Image, View, Scrim } from "reshaped/bundle";
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

const VideoSectionFree = () => {
  return (
    <>    
    <div className="grid grid-cols-10 gap-6 bg-black w-full">
        {/* Video */}
        <div className="col-start-2 col-span-8">
        <Scrim
          backgroundSlot={
          <View aspectRatio={16 / 9}>
            <iframe  className="w-full aspect-video h-[480px] bg-black/90" src="https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s&ab_channel=RickAstley">
          
            </iframe>
           </View>
           }
           >
        <View aspectRatio={1/1} >
          <Button rounded={true} size="large" variant="ghost" icon={<PlayIcon/>} ></Button>
         </View>
        </Scrim>
         
        </div>
      </div>

   
    
    </>

  );
};

export default VideoSectionFree;



