import { View, Text } from "reshaped/bundle";
import sdk from "@stackblitz/sdk";

// sdk.embedProjectId("playground", "nextjs-2jqmx4", {
//   forceEmbedLayout: true,
//   openFile: "src/components/Query.tsx",
//   hideExplorer: true,
//   hideNavigation: true,
// });

const Playground = () => {
  return (
    <View direction="column" align="center" gap={10}>
      <View>
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-6xl font-extrabold text-transparent">
          Play
        </span>
        <Text as="span" variant="display-2">
          ground
        </Text>
      </View>
      <iframe
        src="https://stackblitz.com/edit/nextjs-2jqmx4?embed=1&amp;file=src%2Fcomponents%2FQuery.tsx&amp;hideExplorer=1&amp;hideNavigation=1"
        id="playground"
        className="h-[600px] w-full rounded border-current opacity-90"
      ></iframe>
    </View>
  );
};

export default Playground;
