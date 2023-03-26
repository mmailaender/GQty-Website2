import { Image, Text, View } from "reshaped/bundle";

export default function HeroSection() {
  return (
    <>
      <View
        direction="column"
        align="center"
        justify="start"
        gap={26}
        paddingTop={12}
      >
        <View direction="column" align="center" gap={5}>
          <Text variant="display-2" align="center">
            The No-GraphQL client
          </Text>
          <Text variant="featured-1" align="center">
            for TypeScript
          </Text>
        </View>
        <div className="relative">
          <View direction="row" gap={5} width="100%">
            <View.Item columns={5}>
              <View>
                <Image src="/before.png" width="484px" height="100%"></Image>
              </View>
            </View.Item>
            <View.Item columns={2}>
              <View align="center">
                <Image src="/arrow.svg"></Image>
              </View>
            </View.Item>
            <View.Item columns={5}>
              <View>
                <Image src="/before.png" width="484px" height="100%"></Image>
              </View>
            </View.Item>
            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#0D1117] via-[#0D1117]"></div>
          </View>
        </div>
      </View>
    </>
  );
}
