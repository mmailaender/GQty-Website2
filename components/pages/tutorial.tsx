import { View, Text, Icon, IconProps,Tabs, TabsProps, Image, Button, Overlay, ButtonProps, Scrim } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";
import Check from "../Icons/Play/Check";
import Clock from "../Icons/Play/Clock";
import VideoBox from "../VideoBox";
import PlayIcon from "../Icons/Play/Play";
import Lock from "../Icons/Play/Lock";
import { Unlock } from "react-feather";
import Camera from "../Icons/Play/Camera";
import Infinity from "../Icons/Play/Infinity";
import User from "../Icons/Play/User";
import Chat from "../Icons/Play/Chat";
import Security from "../Icons/Play/Security";
import VideoSectionPremium from "../VideoSectionPremium";
import TutorialNav from "../TutorialNav";

const tutorial = () => {
    return (
        <div>
             <div className="w-full flex justify-start">
     {/* Title & Navigation */}
    <TutorialNav/>
     
     <div className="flex flex-col w-full">

      {/* Video Section */}
     <VideoSectionPremium/>

      {/* Description section */}
      <div className="grid grid-cols-10 gap-6 w-full pb-16">
        {/* Content Area */}
        <div className="col-start-3 col-span-6 w-full pt-10">

          <div className="flex flex-row gap-10">

            <div className="flex flex-col gap-16 w-4/6">
              {/* Description one */}
              <div className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-4">
                  <Text className="text-2xl" weight="bold">You will learn</Text>
                  <Text className="text-base text-surface-200" >Very long description with to test how container will behave and how user will see it</Text>
                </div>

                {/* list */}
                <View>
                <div className="list-disc">
                   <li className="text-base text-surface-200">Point One</li>
                   <li className="text-base text-surface-200">Point Two</li>
                   <li className="text-base text-surface-200">Point Three</li>
                </div>
                </View>
                
              </div>

               {/* Description two */}
               <div className="flex flex-col gap-6 ">
                <div className="flex flex-col gap-4">
                  <Text className="text-2xl" weight="bold">Course Includes</Text>
                </div>

                {/* list */}
                
                <div className="flex flex-col gap-2">

                  <View direction="row" align="center" gap={3}>
                    <Icon svg={<Camera/>} size={4}/>
                    <Text className="text-base text-surface-200">2.5 hours Hight Quality Video Tutorials</Text>
                  </View>
                  <View direction="row" align="center" gap={3}>
                    <Icon svg={<Infinity/>} size={4}/>
                    <Text className="text-base text-surface-200">Full-time Access</Text>
                  </View>
                  <View direction="row" align="center" gap={3}>
                    <Icon svg={<User/>} size={4}/>
                    <Text className="text-base text-surface-200">1 hour call with Mentor</Text>
                  </View>
                  <View direction="row" align="center" gap={3}>
                    <Icon svg={<Chat/>} size={4}/>
                    <Text className="text-base text-surface-200">Access to Chat</Text>
                  </View>
                  <View direction="row" align="center" gap={3}>
                    <Icon svg={<Security/>} size={4}/>
                    <Text className="text-base text-surface-200">14 days money-back Guarantee</Text>
                  </View>

                </div>
                
              </div>

            </div>



            {/* CTA  */}
            <div className="flex flex-col w-[200px] min-w-min gap-2 ">
              <Button icon={<Lock/>} fullWidth color="white" size="large" rounded>Unlock Course</Button>
              <Text className="text-lg w-full text-center" weight="bold">$79.99</Text>
            </div>

          </div>

         
          
         
        </div>
      </div>
     </div>
    
       
  </div>
        </div>
    );
}

export default tutorial;