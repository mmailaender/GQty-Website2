import Image from "next/image";
import Link from "next/link";
import { Skeleton, Text, View } from "reshaped/bundle";
import { Direction } from "reshaped/components/View/View.types";
import { Responsive } from "reshaped/types/global";

interface WriteProps {
  direction: Responsive<Direction>;
  title: string;
  content: string;
}

const USP = ({ direction, title, content }: WriteProps) => {
  return (
    <>
      <View direction={direction} gap={15} align="stretch">
        <View.Item columns={4} grow>
          <View direction="column" height="100%">
            <View.Item grow>
              <View direction="column" paddingTop={5} gap={6}>
                <Text variant="title-1">{title}</Text>
                <Text variant="body-1">{content}</Text>
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
          <View width="100%" height="100%">
            <Skeleton height={100} borderRadius="medium" />
            <Image
              src="/Hexagon.svg"
              alt="Hexagon"
              width={85}
              height={85}
              className="absolute top-24 left-[-40px] -rotate-45 opacity-80"
            />
            <Image
              src="/Hexagon.svg"
              alt="Hexagon"
              width={150}
              height={150}
              className="absolute bottom-[-30px] right-[-30px] -rotate-45 opacity-80 blur-[1px]"
            />
          </View>
        </View.Item>
      </View>
    </>
  );
};

export default USP;
