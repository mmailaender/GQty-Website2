import Image from "next/image";
import { Text } from "reshaped/bundle";

export default function Read() {
  return (
    <>
      <div className="flex h-96 flex-row gap-4">
        <div className="grid basis-1/3 items-stretch">
          <div className="flex flex-col gap-6">
            <Text variant="title-1">Read</Text>
            <Text variant="body-1">
              Fetch data by writing simple type-based orientated code, and GQty
              creates the GraphQL query on the fly.
            </Text>
          </div>
          <div className="self-end pb-6 text-lg font-semibold">
            Try this feature →
          </div>
        </div>
        <div className="relative basis-2/3 rounded-3xl border-[1px] border-white border-opacity-10">
          <Image
            src="/Hexagon.svg"
            alt="Hexagon"
            width={55}
            height={55}
            className="absolute top-5 left-[-20px] rotate-12"
          />
          <Image
            src="/Hexagon.svg"
            alt="Hexagon"
            width={170}
            height={170}
            className="absolute bottom-[-85px] right-[-85px] rotate-45 blur-sm"
          />
        </div>
      </div>
    </>
  );
}
