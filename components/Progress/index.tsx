import {
  View,
  Timeline,
  Text,
  Checkbox,
  Button,
  Radio,
  RadioGroup,
  Icon,
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
} from "reshaped";

const Progress = () => {
  return (
    <View direction="row" gap={5}>
      <View.Item columns={9}>
        <View direction="column" gap={12} width="100%">
          <Text variant="title-2">Our Roadmap</Text>
          <View direction="row" gap={5} width="100%">
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
      <View.Item columns={3}>
        <View
          backgroundColor="elevated"
          width="100%"
          direction="column"
          borderRadius="large"
          borderColor="neutral-faded"
          padding={5}
        >
          <View direction="row" align="stretch" height="320px">
            <View direction="column" gap={7}>
              <View direction="column" gap={1}>
                <Text variant="caption-1" color="neutral-faded">
                  Funding goal
                </Text>
                <Text variant="title-2">Working full time on GQty</Text>
              </View>
              <View direction="column" gap={2} width="100%">
                <Text variant="caption-1" color="neutral-faded">
                  Raised so far
                </Text>
                <View direction="column" width="100%">
                  <View direction="row" width="100%" align="baseline">
                    <View.Item columns={6}>
                      <Text variant="title-2">$250</Text>
                    </View.Item>
                    <View.Item columns={6}>
                      <View justify="end">
                        <Text
                          variant="body-strong-2"
                          color="neutral-faded"
                          align="end"
                        >
                          of $5000
                        </Text>
                      </View>
                    </View.Item>
                  </View>
                </View>
              </View>
            </View>
            <View
              direction="column"
              width="100%"
              gap={2}
              align="center"
              justify="end"
            >
              <Button
                color="white"
                size="xlarge"
                rounded={true}
                fullWidth={true}
              >
                Join Funding
              </Button>
              <View direction="row" gap={1} align="center">
                <Text variant="caption-1" align="center" color="neutral-faded">
                  13 people funded
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View.Item>
    </View>
  );
};

export default Progress;
