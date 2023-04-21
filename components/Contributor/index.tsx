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
            <Member
              image="/vicary.jpeg"
              name="Vicary"
              link="https://github.com/vicary"
            />
            <Member
              image="/pablo.png"
              name="Pablo"
              link="https://github.com/PabloSzx"
            />
            <Member
              image="/sam.jpeg"
              name="Sam Denty"
              link="https://github.com/samdenty"
            />
            <Member
              image="/blake.jpeg"
              name="Blake Wilson"
              link="https://github.com/blakewilson"
            />
            <Member
              image="/nate.jpeg"
              name="Nate Wienert"
              link="https://github.com/natew"
            />
            <Member
              image="/benjamin.png"
              name="Benjamin Kniffler"
              link="https://github.com/bkniffler"
            />
            <Member
              image="/niclas.png"
              name="Niclas Overby"
              link="https://github.com/noverby"
            />
            <Member
              image="/redbaron.png"
              name="redbar0n"
              link="https://github.com/redbar0n"
            />
            <Member
              image="/ricardo.jpeg"
              name="Ricardo Valero"
              link="https://github.com/RicardoValero95"
            />
            <Member
              image="/ualtinok.png"
              name="ismeth"
              link="https://github.com/ualtinok"
            />
            <Member
              image="/liam.jpeg"
              name="Liam Martens"
              link="https://github.com/LiamMartens"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Contributor;
