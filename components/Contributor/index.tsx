import {
  View,
  Text,
  Avatar,
  Tooltip,
  TooltipProps,
  Button,
} from "reshaped/bundle";
import type {
  TextProps,
  ViewProps,
  ViewItemProps,
  AvatarProps,
} from "reshaped";
import Member from "../Member";

const Contributor = () => {
  return (
    <View gap={12}>
      <View align="center" justify="start">
        <Text
          variant="display-3"
          align="center"
          as="h2"
          attributes={{ id: "contributors" }}
        >
          Contributors
        </Text>
      </View>

      <View direction="column" gap={4} align="center">
        <View direction="column" align="center">
          {/* 1st row */}
          <View direction="row" align="center" justify="center" gap={5}>
            <Tooltip text="Vicary" position="top">
              {(attributes) => (
                <Member
                  image="/vicary.jpeg"
                  name="Vicary"
                  link="https://github.com/vicary"
                  attributes={attributes}
                />
              )}
            </Tooltip>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Contributor;
