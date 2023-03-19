import Read from "./read";
import Write from "./write";
import Cache from "./cache";

export default function USP() {
  return (
    <>
      <div className="flex flex-col gap-52 pt-6">
        <Read />
        <Write />
        <Cache />
      </div>
    </>
  );
}
