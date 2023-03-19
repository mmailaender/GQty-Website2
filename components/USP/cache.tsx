import Image from "next/image";
import { Direction } from "readline";
import { Skeleton, Text, View } from "reshaped/bundle";
import { Responsive } from "reshaped/types/global";

export default function Cache() {
  return (
    <>
      <View direction="row" gap={15}>
        <View.Item columns={4}>
          <View direction="column" paddingTop={5} gap={6}>
            <Text variant="title-1">Performance optimized</Text>
            <Text variant="body-1">
              Cache Built-In, which you can also use quite easily as state
              management!
            </Text>
          </View>
          <View direction="column" paddingBottom={8} justify="end">
            <Text variant="body-strong-1">Try this feature →</Text>
          </View>
        </View.Item>
        <View.Item columns={8}>
          <View direction="column">
            <Skeleton height={100} borderRadius="medium" />
            <Image
              src="/Hexagon.svg"
              alt="Hexagon"
              width={134}
              height={134}
              className="absolute bottom-8 left-[-67px] rotate-45 blur-[2px]"
            />
            <Image
              src="/Hexagon.svg"
              alt="Hexagon"
              width={36}
              height={36}
              className="absolute top-12 right-[-20px] rotate-12"
            />
          </View>
        </View.Item>
      </View>
    </>
  );
}
