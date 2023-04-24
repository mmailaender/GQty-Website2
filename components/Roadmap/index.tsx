import { Button, Progress, Text, Timeline, View } from "reshaped/bundle";
import Check from "../Icons/Play/Check";

const Roadmap = () => {
  return (
    <View
      direction="row"
      gap={12}
      align="stretch"
      width="100%"
      paddingBottom={24}
    >
      {/* Roadmap */}
      <a id="roadmap" className="absolute -top-20" />

      <View.Item columns={9} attributes={{ style: { position: "sticky" } }} >
        <View position="sticky" insetTop={16} backgroundColor="base" zIndex={1} >
          {/* Headline */}
          <View direction="column" gap={12} paddingStart={3}>
            <Text variant="title-2" as="h2">
              Our Roadmap
            </Text>
          </View>
          {/* Statuses */}
          <View direction="row" paddingTop={6} paddingBottom={6}>
            <View.Item columns={4}>
              <View paddingStart={3}>
                <Text variant="body-strong-1">Shipped</Text>
              </View>
            </View.Item>
            <View.Item columns={4}>
              <View paddingStart={3}>
                <Text variant="body-strong-1">In Progress</Text>
              </View>
            </View.Item>
            <View.Item columns={4}>
              <View paddingStart={3}>
                <Text variant="body-strong-1">To Do</Text>
              </View>
            </View.Item>
          </View>
        </View>

        {/* Sections */}
        <View direction="column" gap={2}>
          <View padding={3} className="border rounded-lg  border-surface-800">
            <View paddingBottom={2}>
              <Text variant="body-strong-2">GraphQL Functionality</Text>
            </View>

            {/* Tasks */}
            <View direction="row" paddingTop={4}>
              {/* Done */}
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
                      {/* <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text> */}
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View.Item>
              {/* In Progress */}
              <View.Item columns={4}>
                <Timeline>
                  {/* <Timeline.Item
                  markerSlot={
                    <View
                      borderRadius="circular"
                      direction="column"
                      align="center"
                      justify="center"
                      overflow="hidden"
                      className="border rounded-full border-warning"
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
                    <Text variant="body-medium-2">Scoped Query</Text>
                  </View>
                </Timeline.Item> */}
                </Timeline>
              </View.Item>
              {/* ToDo */}
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
                      <Text variant="body-medium-2">Custom Scalars</Text>
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View.Item>
            </View>
          </View>
          {/* Getting Started Experience */}
          <View padding={3} className="border rounded-lg  border-surface-800">
            <View paddingBottom={2}>
              <Text variant="body-strong-2">Getting Started Experience</Text>
            </View>

            {/* Tasks */}
            <View direction="row" paddingTop={4}>
              {/* Done */}
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
                      <Text variant="body-medium-2">Website Relaunch</Text>
                      {/* <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text> */}
                    </View>
                  </Timeline.Item>
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
                      <Text variant="body-medium-2">Interactive CLI</Text>
                      {/* <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text> */}
                    </View>
                  </Timeline.Item>
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
                      <Text variant="body-medium-2">Watch mode in CLI</Text>
                      {/* <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text> */}
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View.Item>
              {/* In Progress */}
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
                        className="border rounded-full border-warning"
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
                      <Text variant="body-medium-2">
                        Integration examples Grafbase, Hasura, Svelte...
                      </Text>
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View.Item>
              {/* ToDo */}
              <View.Item columns={4}>
                {/* <Timeline>
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
                      <Text variant="body-medium-2">Custom Scalars</Text>
                    </View>
                  </Timeline.Item>
                </Timeline> */}
              </View.Item>
            </View>
          </View>
          {/* Fetch DX */}
          <View padding={3} className="border rounded-lg  border-surface-800">
            <View paddingBottom={2}>
              <Text variant="body-strong-2">Fetch DX</Text>
            </View>

            {/* Tasks */}
            <View direction="row" paddingTop={4}>
              {/* Done */}
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
                      <Text variant="body-medium-2">
                        Add $refetch to useQuery
                      </Text>
                      {/* <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text> */}
                    </View>
                  </Timeline.Item>
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
                      <Text variant="body-medium-2">
                        Refetch on Window Focus in CLI
                      </Text>
                      {/* <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text> */}
                    </View>
                  </Timeline.Item>
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
                      <Text variant="body-medium-2">Refetch on Reconnect</Text>
                      {/* <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text> */}
                    </View>
                  </Timeline.Item>
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
                      <Text variant="body-medium-2">Refetch on Mount</Text>
                      {/* <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text> */}
                    </View>
                  </Timeline.Item>
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
                      <Text variant="body-medium-2">Support SSR, SSG, RSC</Text>
                      {/* <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text> */}
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View.Item>
              {/* In Progress */}
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
                        className="border rounded-full border-warning"
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
                      <Text variant="body-medium-2">Automatic Polling</Text>
                    </View>
                  </Timeline.Item>
                  <Timeline.Item
                    markerSlot={
                      <View
                        borderRadius="circular"
                        direction="column"
                        align="center"
                        justify="center"
                        overflow="hidden"
                        className="border rounded-full border-warning"
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
                      <Text variant="body-medium-2">
                        Cache with expiry and SWR
                      </Text>
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View.Item>
              {/* ToDo */}
              <View.Item columns={4}>
                {/* <Timeline>
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
                      <Text variant="body-medium-2">Custom Scalars</Text>
                    </View>
                  </Timeline.Item>
                </Timeline> */}
              </View.Item>
            </View>
          </View>
          {/* Streming */}
          <View padding={3} className="border rounded-lg  border-surface-800">
            <View paddingBottom={2}>
              <Text variant="body-strong-2">Streaming</Text>
            </View>

            {/* Tasks */}
            <View direction="row" paddingTop={4}>
              {/* Done */}
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
                      <Text variant="body-medium-2">
                        New subscription client
                      </Text>
                      {/* <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text> */}
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View.Item>
              {/* In Progress */}
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
                        className="border rounded-full border-warning"
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
                      <Text variant="body-medium-2">Streaming SSR</Text>
                    </View>
                  </Timeline.Item>
                  <Timeline.Item
                    markerSlot={
                      <View
                        borderRadius="circular"
                        direction="column"
                        align="center"
                        justify="center"
                        overflow="hidden"
                        className="border rounded-full border-warning"
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
                      <Text variant="body-medium-2">
                        Cache with expiry and SWR
                      </Text>
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View.Item>
              {/* ToDo */}
              <View.Item columns={4}>
                {/* <Timeline>
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
                      <Text variant="body-medium-2">Custom Scalars</Text>
                    </View>
                  </Timeline.Item>
                </Timeline> */}
              </View.Item>
            </View>
          </View>
          {/* Native JS Library Support */}
          <View padding={3} className="border rounded-lg  border-surface-800">
            <View paddingBottom={2}>
              <Text variant="body-strong-2">Native JS Library Support</Text>
            </View>

            {/* Tasks */}
            <View direction="row" paddingTop={4}>
              {/* Done */}
              <View.Item columns={4}>
                {/* <Timeline>
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
                      <Text variant="body-medium-2">
                        New subscription client
                      </Text>
                      <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text>
                    </View>
                  </Timeline.Item>
                </Timeline> */}
              </View.Item>
              {/* In Progress */}
              <View.Item columns={4}>
                {/* <Timeline>
                  <Timeline.Item
                    markerSlot={
                      <View
                        borderRadius="circular"
                        direction="column"
                        align="center"
                        justify="center"
                        overflow="hidden"
                        className="border rounded-full border-warning"
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
                      <Text variant="body-medium-2">Streaming SSR</Text>
                    </View>
                  </Timeline.Item>
                  <Timeline.Item
                    markerSlot={
                      <View
                        borderRadius="circular"
                        direction="column"
                        align="center"
                        justify="center"
                        overflow="hidden"
                        className="border rounded-full border-warning"
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
                      <Text variant="body-medium-2">
                        Cache with expiry and SWR
                      </Text>
                    </View>
                  </Timeline.Item>
                </Timeline> */}
              </View.Item>
              {/* ToDo */}
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
                      <Text variant="body-medium-2">React Native Hermes</Text>
                    </View>
                  </Timeline.Item>
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
                      <Text variant="body-medium-2">Svelte SvelteKit</Text>
                    </View>
                  </Timeline.Item>
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
                      <Text variant="body-medium-2">Preact with Signals</Text>
                    </View>
                  </Timeline.Item>
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
                      <Text variant="body-medium-2">Vue Nuxt</Text>
                    </View>
                  </Timeline.Item>
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
                      <Text variant="body-medium-2">Fresh</Text>
                    </View>
                  </Timeline.Item>
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
                      <Text variant="body-medium-2">Solid.js</Text>
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View.Item>
            </View>
          </View>
          {/* DIY Extension */}
          <View padding={3} className="border rounded-lg  border-surface-800">
            <View paddingBottom={2}>
              <Text variant="body-strong-2">Extend GQty By Yourself</Text>
            </View>

            {/* Tasks */}
            <View direction="row" paddingTop={4}>
              {/* Done */}
              <View.Item columns={4}>
                {/* <Timeline>
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
                      <Text variant="body-medium-2">
                        New subscription client
                      </Text>
                      <Text variant="caption-1" color="neutral-faded">
                        Jan 26, 2022
                      </Text>
                    </View>
                  </Timeline.Item>
                </Timeline> */}
              </View.Item>
              {/* In Progress */}
              <View.Item columns={4}>
                {/* <Timeline>
                  <Timeline.Item
                    markerSlot={
                      <View
                        borderRadius="circular"
                        direction="column"
                        align="center"
                        justify="center"
                        overflow="hidden"
                        className="border rounded-full border-warning"
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
                      <Text variant="body-medium-2">Streaming SSR</Text>
                    </View>
                  </Timeline.Item>
                  <Timeline.Item
                    markerSlot={
                      <View
                        borderRadius="circular"
                        direction="column"
                        align="center"
                        justify="center"
                        overflow="hidden"
                        className="border rounded-full border-warning"
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
                      <Text variant="body-medium-2">
                        Cache with expiry and SWR
                      </Text>
                    </View>
                  </Timeline.Item>
                </Timeline> */}
              </View.Item>
              {/* ToDo */}
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
                      <Text variant="body-medium-2">Plugin System</Text>
                    </View>
                  </Timeline.Item>
                </Timeline>
              </View.Item>
            </View>
          </View>
        </View>
      </View.Item>

      {/* Join Us Block*/}
      <View.Item columns={3} attributes={{ style: { position: "sticky", top: "64px", placeSelf: "flex-start" } }}>
        <View
          backgroundColor="neutral-faded"
          direction="column"
          borderRadius="large"
          className="bg-surface-800 border border-surface-700"
          padding={5}
        >
          <View.Item>
            <View height="100%" justify="start" gap={8}>
              {/* Card title */}
              <View direction="column" gap={1}>
                <Text variant="caption-1">Funding goal</Text>
                <Text variant="title-2">Working full time on GQty</Text>
              </View>

              {/* Progress section */}
              <View direction="column" paddingBottom={16}>
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

          <View.Item>
            <View height="100%" justify="end">
              {/* Call to action */}
              <View direction="column" gap={2}>
                <Button
                  color="white"
                  rounded={true}
                  size="xlarge"
                  fullWidth={true}
                  attributes={{ target: "_blank" }}
                  href="https://github.com/sponsors/gqty-dev"
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
