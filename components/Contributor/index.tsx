import { View, Text, Avatar } from "reshaped/bundle";
import type {
  TextProps,
  ViewProps,
  ViewItemProps,
  AvatarProps,
} from "reshaped";

const Contributor = () => {
  return (
    <View gap={8}>
      <View align="center" justify="start">
        <Text variant="display-3" align="center">
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
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
              <Avatar size={20} color="primary" squared={false} />
            </View>
          </View.Item>
          <View.Item columns={1}></View.Item>
        </View>
      </View>
    </View>
  );
};

export default Contributor;
