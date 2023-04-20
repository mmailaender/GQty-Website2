import { View, Text, Avatar, Tooltip, TooltipProps } from "reshaped/bundle";
import type {
  TextProps,
  ViewProps,
  ViewItemProps,
  AvatarProps,
} from "reshaped";

const Members = () => {
  return (
    <View direction="column" align="center" gap={2} position="relative">
      {/* Status ring */}

      <View
        overflow="hidden"
        className="transform transition-all ease-in-out hover:-translate-y-1 hover:scale-110 rounded-full border bg-clip-border border-primaryPink  p-1"
      >
        {/* Avatar image */}
        <Avatar initials="MM" color="neutral" size={22} />
      </View>
      {/* <View paddingBottom={4}>
        <Text variant="body-medium-1" className="text-surface-200 ">
          Mike
        </Text>
      </View> */}
    </View>
  );
};

export default Members;
