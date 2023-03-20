import PlayIcon from "../Icons/Play";
import { Button, View, Text, Image } from "reshaped/bundle";
import type {
  TextProps,
  ViewItemProps,
  ViewProps,
  ButtonProps,
  ImageProps,
} from "reshaped/bundle";

export default function HeroSection() {
  return (
    <>
      <View
        direction="column"
        backgroundColor="page"
        align="center"
        justify="start"
        gap={26}
        paddingTop={12}
      >
        <View direction="column" align="center" gap={12}>
          <View direction="row" gap={4}>
            <View.Item columns={2}></View.Item>
            <View.Item columns={8}>
              <Text variant="display-2" align="center">
                The first No-GraphQL GraphQL client
              </Text>
            </View.Item>
            <View.Item columns={2}></View.Item>
          </View>
          <Button
            startIcon={<PlayIcon />}
            size="large"
            rounded={true}
            color="neutral"
          >
            Playground
          </Button>
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
