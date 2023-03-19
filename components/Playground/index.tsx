import { View, Text } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";

// sdk.embedProjectId("elementOrId", "nextjs-2jqmx4", {
//   forceEmbedLayout: true,
//   openFile: "src/components/Query.tsx",
//   hideExplorer: true,
//   hideNavigation: true,
// });

const Playground = () => {
  return (
    <View direction="column" align="center">
      <View>
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-6xl font-extrabold text-transparent">
          Play
        </span>
        <Text as="span" variant="display-2">
          ground
        </Text>
      </View>
      <View></View>
    </View>
  );
};

export default Playground;
