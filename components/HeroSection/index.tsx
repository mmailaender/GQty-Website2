import React from "react";
import { Button, Image, Link, Text, View, useToast } from "reshaped/bundle";
import CheckPink from "../Icons/Play/CheckPing";
import Copy from "../Icons/Play/Copy";

function copyToClipboard(textToCopy: string): void {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {})
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
}

export default function HeroSection() {
  const npmCommand = "npx @gqty/cli";
  const [color, setColor] = React.useState("inverted");
  const toast = useToast();
  const handleCopyClick = () => {
    copyToClipboard(npmCommand);
    toast.show({
      text: "Copied to clipboard",
      color: "neutral",
      icon: <CheckPink />,
    });
  };

  return (
    <>
      <View
        position="relative"
        direction="column"
        align="center"
        justify="start"
        gap={26}
        paddingTop={20}
      >
        <div className="absolute rounded-full aspect-square top-[-100px] filter blur-[200px] overflow-hidden z-0">
          <View width={90} height={40} className="bg-[#DA58B3] "></View>
        </div>
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
            <Button
              color="white"
              rounded
              size="large"
              fullWidth
              href="/getting-started"
            >
              Get Started
            </Button>
            <Link
              onClick={handleCopyClick}
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
            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-surface-900 via-surface-900"></div>
          </View>
        </div>
      </View>
    </>
  );
}
