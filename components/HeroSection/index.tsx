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
      <div className="flex flex-col bg-surface-900 w-full h-screen justify-between content-center">
        <View align="center" paddingTop={{ xl: 20, l: 20, m: 12, s: 8 }}>
          <Text variant="display-2" align="center">
            The No-GraphQL client
          </Text>
          <Text align="center">for TypeScript</Text>
        </View>

        {/* Mobile image */}
        <View
          direction="column"
          position="relative"
          align="center"
          paddingTop={28}
          gap={4}
        >
          {/* Image */}
          <View position="relative">
            <View paddingBottom={16}>
              <Image
                src="/before-after.png"
                width="700px"
                className="scale-150"
              />
            </View>
            <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-surface-900 via-surface-900"></div>
          </View>
        </View>
        {/* CTA */}
        <View
          direction="row"
          justify="center"
          align="center"
          gap={8}
          paddingBottom={24}
        >
          <Link
            onClick={handleCopyClick}
            color="inherit"
            variant="plain"
            icon={<Copy />}
          >
            npx @gqty/cli
          </Link>
          <View>
            <Button
              color="white"
              rounded
              size="xlarge"
              fullWidth
              href="/getting-started"
            >
              Get Started
            </Button>
          </View>
        </View>
      </div>
    </>
  );
}

{
  /* <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-surface-900 via-surface-900"></div> */
}
