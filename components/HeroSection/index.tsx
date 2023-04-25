import {
  Image,
  Text,
  View,
  Button,
  ButtonProps,
  Link,
  LinkProps,
  useToast,
  ToastProps,
  Hidden,
  HiddenProps,
} from "reshaped/bundle";
import Copy from "../Icons/Play/Copy";
import Play from "../Icons/Play/Play";
import React from "react";
import CheckPink from "../Icons/Play/CheckPing";

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
        paddingTop={20}
        className="h-screen"
      >
        <div className="absolute rounded-full aspect-square top-[-100px] filter blur-[200px] overflow-hidden z-0">
          <View width={90} height={40} className="bg-[#DA58B3] "></View>
        </div>
        <View
          direction="column"
          align="center"
          gap={{ l: 8, s: 4 }}
          width="100%"
          className="h-screen 2xl:h-16"
        >
          <View direction="column" align="center" gap={4} width="100%">
            <Text variant="display-2" align="center">
              The No-GraphQL client
            </Text>
            <Text variant="featured-2" align="center">
              for TypeScript
            </Text>
          </View>

          {/* Desktop CTA */}
          <Hidden hide={{ s: true, m: true, l: false, xl: false }}>
            <View
              paddingTop={4}
              paddingBottom={12}
              width="100%"
              maxWidth="240px"
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
          </Hidden>
        </View>
        {/* Images */}
        <div className="relative">
          {/* Desktop */}
          <Hidden hide={{ s: true, m: true, l: false }}>
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
          </Hidden>

          {/* Mobile */}
          <Hidden hide={{ s: false, m: false, l: true, xl: true }}>
            <View direction="row" gap={5} width="100%">
              <View paddingBottom={{ s: 24, m: 24, l: 8, xl: 8 }}>
                <Image
                  src="/before-after.png"
                  width="588px"
                  height="100%"
                ></Image>
              </View>

              <div className="absolute bottom-20 left-0 h-40 w-full bg-gradient-to-t from-surface-900 via-surface-900"></div>
            </View>
          </Hidden>
        </div>
        {/* Mob CTA */}
        <Hidden hide={{ s: false, m: false, l: true, xl: true }}>
          <View
            padding={[4, 8]}
            direction="row"
            align="center"
            justify="center"
            gap={6}
            width="100%"
            position="fixed"
            insetBottom={0}
            insetStart={0}
            zIndex={2}
            className="bg-surface-900 opacity-95 filter backdrop-blur-sm"
          >
            <View.Item grow>
              <Button
                color="white"
                rounded
                size="large"
                fullWidth
                href="/getting-started"
              >
                Get Started
              </Button>
            </View.Item>
            <View align="center">
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
        </Hidden>
      </View>
    </>
  );
}
