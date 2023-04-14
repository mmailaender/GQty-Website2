import {
  Image,
  Text,
  View,
  Button,
  ButtonProps,
  Link,
  LinkProps,
} from "reshaped/bundle";
import Copy from "../Icons/Play/Copy";

function copyToClipboard(textToCopy: string): void {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
}

export default function HeroSection() {
  const npmCommand = "npx @gqty/cli";
  return (
    <>
      <View
        direction="column"
        align="center"
        justify="start"
        gap={26}
        paddingTop={20}
      >
        <View direction="column" align="center" gap={8}>
          <View direction="column" align="center" gap={4}>
            <Text variant="display-2" align="center">
              The No-GraphQL client
            </Text>
            <Text variant="featured-2" align="center">
              for TypeScript
            </Text>
          </View>
          <View
            paddingTop={4}
            paddingBottom={12}
            width="100%"
            maxWidth="160px"
            direction="column"
            align="center"
            gap={3}
          >
            <Button color="white" rounded size="large" fullWidth>
              Get Started
            </Button>
            <Link
              onClick={() => copyToClipboard(npmCommand)}
              color="inherit"
              variant="plain"
              icon={<Copy />}
            >
              npx @gqty/cli
            </Link>
          </View>
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
                <Image src="/after.png" width="484px" height="100%"></Image>
              </View>
            </View.Item>
            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#111111] via-[#111111]"></div>
          </View>
        </div>
      </View>
    </>
  );
}
