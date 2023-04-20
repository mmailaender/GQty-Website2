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
    <View direction="column" align="center" gap={10} width="100%">
      <View direction="row" align="baseline">
        <Text
          variant="display-3"
          className="text-gradients from-[#AB087A] to-[#F937BF]"
        >
          Play
        </Text>
        <Text as="span" variant="display-3">
          ground
        </Text>
      </View>
      <View
        className="p-px rounded-2xl bg-gradient-to-b  from-[#E82FB0] to-15%"
        width="100%"
        overflow="hidden"
      >
        <View
          width="100%"
          overflow="hidden"
          className="rounded-2xl bg-surface-900  opacity-[97%] filter backdrop-blur-xl"
        >
          <iframe
            src="https://stackblitz.com/edit/nextjs-2jqmx4?embed=1&amp;file=src%2Fcomponents%2FQuery.tsx&amp;hideExplorer=1&amp;hideNavigation=1"
            id="playground"
            className="h-[600px] w-full rounded border-current filter  mix-blend-lighten"
          ></iframe>
        </View>
      </View>
    </View>
  );
};

export default Playground;
