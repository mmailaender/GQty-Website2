import PlayIcon from "../Icons/Play";

export default function TestComponent() {
  return (
    <>
      <div class="flex flex-col gap-y-28 bg-surface-light-50">
        <div class="flex flex-col items-center gap-y-12">
          <h1 class="text-center text-6xl font-bold text-surface-light-900">
            The first No-GraphQL GraphQL client
          </h1>
          <button class="flex-inline flex items-center gap-x-2 rounded-full bg-surface-light-100 py-4 px-5 text-lg font-semibold text-surface-light-900 transition duration-300 hover:bg-surface-light-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.73358 20C7.41844 20 7.1295 19.92 6.86679 19.7866C6.34151 19.4667 6 18.9066 6 18.24V5.78663C6 5.17334 6.34152 4.53329 6.86679 4.23996C7.39207 3.92001 8.10131 3.92001 8.62664 4.23996L19.1332 10.4533C19.6585 10.7732 20 11.3333 20 12C20 12.6666 19.6585 13.1999 19.1332 13.5466L8.62664 19.76C8.3377 19.9199 8.04878 19.9999 7.73363 19.9999L7.73358 20Z"
                fill="currentColor"
              />
            </svg>
            Playground
          </button>
        </div>
        <div class="grid grid-cols-12">
          <div class="col-span-5">
            <img class="aspect-[1/1] w-full" src="before.png"></img>
          </div>

          <div class="col-span-2 bg-surface-light-200 text-center">2</div>
          <div class="col-span-5 bg-primary-light text-center">3</div>
        </div>
      </div>
    </>
  );
}
