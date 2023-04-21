import {
  Button,
  Checkbox,
  Progress,
  Radio,
  Text,
  Timeline,
  View,
} from "reshaped/bundle";
import Check from "../Icons/Play/Check";

const Roadmap = () => {
  return (
    <View
      direction="row"
      gap={4}
      align="stretch"
      width="100%"
      paddingBottom={24}
    >
      {/* Roadmap */}

      <View.Item columns={9}>
        {/* Headline */}
        <View direction="column" gap={12}>
          <Text variant="title-2" as="h2" attributes={{ id: "roadmap" }}>
            Our Roadmap
          </Text>
        </View>
        {/* Statuses */}
        <View direction="row" paddingTop={6} paddingBottom={6}>
          <View.Item columns={4}>
            <Text variant="title-3">Shipped</Text>
          </View.Item>
          <View.Item columns={4}>
            <Text variant="title-3">In Progress</Text>
          </View.Item>
          <View.Item columns={4}>
            <Text variant="title-3">To Do</Text>
          </View.Item>
        </View>

        {/* Section topic */}
        <View
          padding={3}
          className="border rounded-lg bg-surface-800 border-surface-700"
        >
          <View>
            <Text variant="body-strong-2">GraphQL Functionality</Text>
          </View>
          {/* Tasks */}
          <View direction="row" paddingTop={4}>
            <View.Item columns={4}>
              <Timeline>
                <Timeline.Item
                  markerSlot={
                    <View
                      borderRadius="circular"
                      direction="column"
                      align="center"
                      justify="center"
                      overflow="hidden"
                      backgroundColor="primary"
                      width={5}
                      height={5}
                    >
                      <Check />
                    </View>
                  }
                >
                  <View
                    direction="column"
                    gap={1}
                    width="100%"
                    paddingBottom={2}
                  >
                    <Text variant="body-medium-2">Scoped Query</Text>
                    <Text variant="caption-1" color="neutral-faded">
                      Jan 26, 2022
                    </Text>
                  </View>
                </Timeline.Item>
              </Timeline>
            </View.Item>
            <View.Item columns={4}>
              <Text variant="title-3">In Progress</Text>
            </View.Item>
            <View.Item columns={4}>
              <Timeline>
                <Timeline.Item
                  markerSlot={
                    <View
                      borderRadius="circular"
                      direction="column"
                      align="center"
                      justify="center"
                      overflow="hidden"
                      className="bg-surface-800 border rounded-full border-surface-500"
                      width={5}
                      height={5}
                    ></View>
                  }
                >
                  <View
                    direction="column"
                    gap={1}
                    width="100%"
                    paddingBottom={2}
                  >
                    <Text variant="body-medium-2">Directives</Text>
                  </View>
                </Timeline.Item>
              </Timeline>
            </View.Item>
          </View>
        </View>
      </View.Item>

      {/* Join Us Blockl*/}
      <View.Item columns={3} grow={true}>
        <View
          backgroundColor="neutral-faded"
          height="100%"
          direction="column"
          borderRadius="large"
          className="bg-surface-800 border border-surface-700"
          padding={5}
        >
          <View.Item grow={true}>
            <View height="100%" justify="start" gap={8}>
              {/* Card title */}
              <View direction="column" gap={1}>
                <Text variant="caption-1">Funding goal</Text>
                <Text variant="title-2">Working full time on GQty</Text>
              </View>

              {/* Progress section */}
              <View direction="column">
                {/* from to */}
                <View direction="row" gap={1} align="baseline" paddingTop={3}>
                  <View.Item columns={6}>
                    <View>
                      <Text variant="title-2">$214</Text>
                    </View>
                  </View.Item>
                  <View.Item columns={6}>
                    <View justify="end">
                      <Text
                        variant="caption-1"
                        color="neutral-faded"
                        align="end"
                      >
                        of $5000
                      </Text>
                    </View>
                  </View.Item>
                </View>

                {/* Progress indicator */}
                <View paddingTop={1}>
                  <Progress value={20} color="white" size="small" />
                </View>
              </View>
            </View>
          </View.Item>

          <View.Item grow={true}>
            <View height="100%" justify="end">
              {/* Call to action */}
              <View direction="column" gap={2}>
                <Button
                  color="white"
                  rounded={true}
                  size="xlarge"
                  fullWidth={true}
                >
                  Join Us
                </Button>
                <Text variant="caption-1" color="neutral-faded" align="center">
                  3 people funded
                </Text>
              </View>
            </View>
          </View.Item>
        </View>
      </View.Item>
    </View>
  );
};

export default Roadmap;
