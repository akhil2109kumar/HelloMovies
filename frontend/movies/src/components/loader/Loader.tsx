const Loader = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2">
            <svg
              width="80"
              height="80"
              viewBox="0 0 105 105"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <circle cx="12.5" cy="12.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="12.5" cy="52.5" r="12.5" fillOpacity=".5">
                <animate
                  attributeName="fill-opacity"
                  begin="100ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="52.5" cy="12.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="300ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="52.5" cy="52.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="600ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="92.5" cy="12.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="800ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="92.5" cy="52.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="400ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="12.5" cy="92.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="700ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="52.5" cy="92.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="500ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="92.5" cy="92.5" r="12.5">
                <animate
                  attributeName="fill-opacity"
                  begin="200ms"
                  dur="1s"
                  values="1;.2;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
          <p className="text-amber-400 text-sm mt-4">
            Searching in HelloMovie's...
          </p>
        </div>
      </div>
    </>
  );
};

export default Loader;
