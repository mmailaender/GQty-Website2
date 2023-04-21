import {
  View,
  Text,
  Avatar,
  Tooltip,
  TooltipProps,
  Actionable,
  ActionableProps,
} from "reshaped/bundle";
import type * as G from "reshaped/types/global";

interface MyComponentProps {
  name: string;
  image: string;
  link: string;
  attributes?: G.Attributes<"div">;
}

const Members = ({ name, image, link, attributes }) => {
  return (
    <Actionable
      href={link}
      attributes={{ ...attributes, role: "button", target: "_blank" }}
    >
      <View direction="column" align="center" gap={2} position="relative">
        {/* Status ring */}

        <View
          overflow="hidden"
          className="transform transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-full  bg-clip-border bg-gradient-to-tr from-[#AB087A] to-[#F937BF]   p-px"
        >
          {/* Avatar image */}
          <Avatar
            src={image}
            color="neutral"
            size={28}
            className="border-4  border-surface-900"
          />
        </View>
        {/* <View paddingBottom={4}>
          <Text variant="body-medium-1" className="text-surface-200 ">
          {name}
          </Text>
        </View> */}
        <View
          position="absolute"
          width="100%"
          height="100%"
          backgroundColor="critical"
          className="hover:visible"
        >
          Vicary
        </View>
      </View>
    </Actionable>
  );
};

export default Members;
