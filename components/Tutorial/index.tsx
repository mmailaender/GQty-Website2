import { View, Text, Icon, IconProps } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";
import Check from "../Icons/Play/Check";
import Clock from "../Icons/Play/Clock";
import VideoBox from "../VideoBox";

// sdk.embedProjectId("playground", "nextjs-2jqmx4", {
//   forceEmbedLayout: true,
//   openFile: "src/components/Query.tsx",
//   hideExplorer: true,
//   hideNavigation: true,
// });

const Tutorial = () => {
  return (
    <>    
    <div className="grid grid-cols-8 gap-6 pt-6 ">
      {/* video */}
      <div className="col-start-1 col-span-3">
        <VideoBox/>
      </div>

      {/* info */}
      <div className="col-start-4 col-span-5 h-full py-2">
        <div className="flex flex-col justify-between h-full">
          {/* upper part */}
          <div className="flex flex-col gap-1">
            <View direction="row" align="center" gap={2}>
            <Text variant="caption-1" weight="medium" className="text-surface-200">JUNE 5</Text>
            <View height={1} width={1} borderRadius="circular" className="bg-surface-400"></View>
            <Text variant="caption-1" weight="medium" className="text-surface-200">445 VIEWS</Text>
            </View>
            <View>
              <Text className="lg:text-xl md:text-lg sm:text-lg" weight="bold">Guide how to implement GQty in your project</Text>
            </View>
          </div>

          {/* lower part */}
          <div>
            <View direction="row" align="center" gap={1} >
              <Icon svg={<Clock/>} size={4}/>
              <Text  weight="bold" className="text-surface-200 text-sm">2 mins</Text>
            </View>
          </div>
        </div>
      </div>

    </div>

   
    
    </>

  );
};

export default Tutorial;
