import Image from "next/image";
import Link from "next/link";
import { Skeleton, Text, View } from "reshaped/bundle";
import { Direction } from "reshaped/components/View/View.types";
import { Responsive } from "reshaped/types/global";

const USPRead = () => {
  return (
    <>
      <View direction="row" gap={15} align="stretch">
        <View.Item columns={4} grow>
          <View direction="column" height="100%">
            <View.Item grow>
              <View direction="column" paddingTop={5} gap={6}>
                <Text variant="title-1">Read</Text>
                <Text variant="body-1">
                  Fetch data by writing simple type-based orientated code, and
                  GQty creates the GraphQL query on the fly.
                </Text>
              </View>
            </View.Item>
            <View paddingBottom={8}>
              <Link href={"#playground"}>
                <Text variant="body-strong-1">Try this feature →</Text>
              </Link>
            </View>
          </View>
        </View.Item>
        <View.Item columns={8}>
          <View width="100%" height="100%" position="relative">
            <View
              position="relative"
              borderRadius="large"
              borderColor="neutral-faded"
              overflow="hidden"
            >
              <div className="w-full overflow-hidden">
                <Image
                  src="/usp_read_dark.gif"
                  width={600}
                  height={105}
                  alt="USP Read"
                  object-fit="contain"
                  className="w-full"
                />
              </div>
            </View>
            <Image
              src="/Hexagon.svg"
              alt="Hexagon"
              width={30}
              height={30}
              className="absolute top-24 left-[-16px] -rotate-45 opacity-80"
            />
            <Image
              src="/Hexagon.svg"
              alt="Hexagon"
              width={150}
              height={150}
              className="absolute bottom-[-90px] right-[-122px] -rotate-45 opacity-80 blur-sm"
            />
          </View>
        </View.Item>
      </View>
    </>
  );
};

export default USPRead;
