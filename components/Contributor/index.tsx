import { View, Text, Avatar } from "reshaped/bundle";
import type {
  TextProps,
  ViewProps,
  ViewItemProps,
  AvatarProps,
} from "reshaped";

const Contributor = () => {
  return (
    <View gap={12}>
      <View align="center" justify="start">
        <Text variant="display-3" align="center" as="h2" attributes={{ id: "contributors" }}>
          Contributors
        </Text>
      </View>

      <View direction="column" gap={5} align="center">
        <View direction="row" gap={5}>
          <View.Item columns={1}></View.Item>
          <View.Item columns={10}>
            <View
              direction="row"
              wrap={true}
              gap={5}
              align="center"
              justify="center"
            >
              <Avatar size={20} initials="BK" squared={false} />
              <Avatar size={20} initials="MM" squared={false} />
              <Avatar size={20} initials="MK" squared={false} />
              <Avatar size={20} initials="AV" squared={false} />
              <Avatar size={20} initials="MB" squared={false} />
              <Avatar size={20} initials="MS" squared={false} />
              <Avatar size={20} initials="BK" squared={false} />
              <Avatar size={20} initials="MM" squared={false} />
              <Avatar size={20} initials="MK" squared={false} />
              <Avatar size={20} initials="AV" squared={false} />
              <Avatar size={20} initials="MB" squared={false} />
              <Avatar size={20} initials="MS" squared={false} />
              <Avatar size={20} initials="MS" squared={false} />
            </View>
          </View.Item>
          <View.Item columns={1}></View.Item>
        </View>
      </View>
    </View>
  );
};

export default Contributor;
