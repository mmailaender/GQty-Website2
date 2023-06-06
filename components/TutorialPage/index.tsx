import { View, Text, Icon, IconProps,Tabs, TabsProps, Image, Button, Overlay, ButtonProps, Scrim } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";
import Check from "../Icons/Play/Check";
import Clock from "../Icons/Play/Clock";
import VideoBox from "../VideoBox";
import PlayIcon from "../Icons/Play/Play";
import LockIcon from "../Icons/Play/Lock";
import { Unlock } from "react-feather";
import Camera from "../Icons/Play/Camera";
import Infinity from "../Icons/Play/Infinity";
import User from "../Icons/Play/User";
import Chat from "../Icons/Play/Chat";
import Security from "../Icons/Play/Security";

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

      {/* Description section */}
      <div className="grid grid-cols-10 gap-6 w-full pb-16">
        <div className="col-start-3 col-span-6 w-full pt-10 auto-cols-min">

          <div className="flex flex-row justify-between gap-5">
            <div className="flex flex-col gap-12">
          {/* Decription  one*/}
          <div className="flex flex-col gap-6">
         <Text className="text-xl" weight="bold">What will you learn</Text>
         <div>
          <div className="pb-3">
            <Text className="text-base text-surface-200">Short description that will explain about what this course is to provide clarity for users</Text>
          </div>
         <ul className="list-disc"></ul>
         <li className="text-base text-surface-200">Point one</li>
         <li className="text-base text-surface-200">Point two</li>
         <li className="text-base text-surface-200">Point three</li>
         </div>
         </div>

         {/* Decription  two*/}
         <div className="flex flex-col gap-6">
         <Text className="text-xl" weight="bold">Couse Includes</Text>
         <div className="flex flex-col gap-1">
         <View direction="row" align="center" gap={2}>
          <Icon size={4} svg={<Camera/>}/> <Text className="text-base text-surface-200">2.5 hours Hight Quality Video Tutorials</Text>
         </View>
         <View direction="row" align="center" gap={2}>
          <Icon size={4} svg={<Infinity/>}/> <Text className="text-base text-surface-200">Full-time Access</Text>
         </View>
         <View direction="row" align="center" gap={2}>
          <Icon size={4} svg={<User/>}/> <Text className="text-base text-surface-200">1 hour call with Mentor</Text>
         </View>
         <View direction="row" align="center" gap={2}>
          <Icon size={4} svg={<Chat/>}/> <Text className="text-base text-surface-200">Access to Chat</Text>
         </View>
         <View direction="row" align="center" gap={2}>
          <Icon size={4} svg={<Security/>}/> <Text className="text-base text-surface-200">14 days money-back Guarantee</Text>
         </View>
         </div>
         </div>

         </div>
         {/* Actions */}
           <div className="flex flex-col gap-4">
             <Button icon={<LockIcon/>} color="white" size="large" rounded>Unlock Course</Button>
             <Text align="center" className="text-xl" weight="bold">$79.99</Text>
           </div>
         </div>
         
        </div>
      </div>
     </div>
    
       
  </div>

    </>

  );
};

export default TutorialPage;
