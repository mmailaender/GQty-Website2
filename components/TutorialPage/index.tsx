import { View, Text, Icon, IconProps,Tabs, TabsProps, Image, Button, Overlay, ButtonProps, Scrim } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";
import Check from "../Icons/Play/Check";
import Clock from "../Icons/Play/Clock";
import VideoBox from "../VideoBox";
import PlayIcon from "../Icons/Play/Play";
import LockIcon from "../Icons/Play/Lock";

// sdk.embedProjectId("playground", "nextjs-2jqmx4", {
//   forceEmbedLayout: true,
//   openFile: "src/components/Query.tsx",
//   hideExplorer: true,
//   hideNavigation: true,
// });

const TutorialPage = () => {
  return (
    <>    
    <div className="w-full flex justify-start">
     {/* Title & Navigation */}
      <div className="w-[260px] bg-surface-900 h-[900px] flex flex-col gap-8 px-2 pt-6 pb-2 border-r-1 border-surface-800 justify-between">
        <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1 px-4">
         <Text className="text-xl" weight="bold">GQty Basics</Text>
         <Text className="text-sm text-surface-200">14 Tutorials</Text>
        </div>
        <Tabs variant="pills" direction="column">
         <Tabs.List className="align-top">
          <Tabs.Item value="0" icon={<PlayIcon/>}>Introduction</Tabs.Item>
          <Tabs.Item value="1" icon={<LockIcon/>}>GQty first Tutorials with very long title to test</Tabs.Item>
         </Tabs.List>
        </Tabs>
        </div>

         {/* Other Course  */}
        <div className="flex flex-col gap-4">
          {/* Subtitle */}
          <Text className="text-surface-200 text-sm pl-4">Other Course</Text>

          {/* Card */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-surface-700">
            <View aspectRatio={16/9} >
             <Image
            src="https://plus.unsplash.com/premium_photo-1684017835839-ccc0294ed572?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
             alt="Canyon rock"
             
             width="300px"
             height="100%"
             
           />
           </View>
           
           {/* Course Details */}
           <div className="flex flex-col p-4 bg-surface-800 gap-12">
             <div className="flex flex-col gap-1">
             <Text className="text-base" weight="bold">GQty + Svelte</Text>
             <Text className="text-xs text-surface-400" weight="medium">14 Tutorials</Text>
             </div>

             <Button color="white" rounded size="large" icon={<PlayIcon/>}>Start</Button>
            
           </div>
          </div>

        </div>
      </div>
     
     <div className="flex flex-col w-full">

      {/* Video Section */}
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
       
     </div>
     
  </div>
    </>

  );
};

export default TutorialPage;
