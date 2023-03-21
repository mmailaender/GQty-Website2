import {
  View,
  Timeline,
  Text,
  Checkbox,
  Button,
  Radio,
  RadioGroup,
  Icon,
  Progress,
} from "reshaped/bundle";
import type {
  TimelineProps,
  TimelineItemProps,
  ViewItemProps,
  ViewProps,
  TextProps,
  CheckboxProps,
  RadioProps,
  RadioGroupProps,
  ProgressProps,
} from "reshaped";

const Roadmap = () => {
  return (
    <View direction="row" gap={5} align="stretch">
      <View.Item columns={9}>
        <View direction="column" gap={12}>
          <Text variant="title-2">Our Roadmap</Text>
          <View direction="row" gap={5}>
            <View.Item columns={4}>
              <View direction="column" gap={8}>
                <Text variant="title-3">Shipped</Text>
                <Timeline>
                  <Timeline.Item
                    markerSlot={
                      <View borderRadius="circular" overflow="hidden">
                        <Checkbox defaultChecked={true}></Checkbox>
                      </View>
                    }
                  >
                    <View direction="column" gap={1} width="100%">
                      <Text variant="body-medium-2">
                        Shipped feature by GQty
                      </Text>
                      <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text>
                    </View>
                  </Timeline.Item>
                  <Timeline.Item
                    markerSlot={
                      <View borderRadius="circular" overflow="hidden">
                        <Checkbox defaultChecked={true}></Checkbox>
                      </View>
                    }
                  >
                    <View direction="column" gap={1} width="100%">
                      <Text variant="body-medium-2">
                        Shipped feature by GQty
                      </Text>
                      <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text>
                    </View>
                  </Timeline.Item>
                  <Timeline.Item
                    markerSlot={
                      <View borderRadius="circular" overflow="hidden">
                        <Checkbox defaultChecked={true}></Checkbox>
                      </View>
                    }
                  >
                    <View direction="column" gap={1} width="100%">
                      <Text variant="body-medium-2">
                        Shipped feature by GQty
                      </Text>
                      <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text>
                    </View>
                  </Timeline.Item>
                </Timeline>
                <View>
                  <Button rounded={true} fullWidth={false}>
                    Show more
                  </Button>
                </View>
              </View>
            </View.Item>
            <View.Item columns={4}>
              <View direction="column" gap={8}>
                <Text variant="title-3">In Progress</Text>
                <Timeline>
                  <Timeline.Item
                    markerSlot={
                      <View overflow="hidden">
                        <Radio hasError={true} defaultChecked={false}></Radio>
                      </View>
                    }
                  >
                    <View direction="column" gap={1} width="100%">
                      <Text variant="body-medium-2">Operation names</Text>
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View>
            </View.Item>
            <View.Item columns={4}>
              <View direction="column" gap={8}>
                <Text variant="title-3">Backlog</Text>
                <Timeline>
                  <Timeline.Item
                    markerSlot={
                      <View overflow="hidden">
                        <Radio defaultChecked={false}></Radio>
                      </View>
                    }
                  >
                    <View direction="column" gap={1} width="100%">
                      <Text variant="body-medium-2">Development mode</Text>
                    </View>
                  </Timeline.Item>
                  <Timeline.Item
                    markerSlot={
                      <View overflow="hidden">
                        <Radio defaultChecked={false}></Radio>
                      </View>
                    }
                  >
                    <View direction="column" gap={1} width="100%">
                      <Text variant="body-medium-2">Future feature</Text>
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View>
            </View.Item>
          </View>
        </View>
      </View.Item>
      <View.Item columns={3} grow={true}>
        <View
          backgroundColor="neutral-faded"
          height="100%"
          direction="column"
          borderRadius="large"
          borderColor="neutral-faded"
          padding={5}
        >
          <View.Item grow={true}>
            <View height="100%" justify="start" gap={8}>
              {/* Card title */}
              <View direction="column" gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  Funding goal
                </Text>
                <Text variant="title-2">Working full time on GQty</Text>
              </View>

              {/* Progress section */}
              <View direction="column">
                <Text variant="caption-1" color="neutral-faded">
                  Raised so far
                </Text>

                {/* from to */}
                <View direction="row" gap={1} align="baseline" paddingTop={3}>
                  <View.Item columns={6}>
                    <View>
                      <Text variant="title-2">$250</Text>
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
                  color="primary"
                  rounded={true}
                  size="xlarge"
                  fullWidth={true}
                >
                  Join Funding
                </Button>
                <Text variant="caption-1" color="neutral-faded" align="center">
                  13 people funded
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
