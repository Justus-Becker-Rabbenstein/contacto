export default function lottieConfig(animationDataTransfer) {
  // Lottie config object
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationDataTransfer,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return defaultOptions;
}
