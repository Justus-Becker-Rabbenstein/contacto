/*
Author: Justus Becker-Rabbenstein
Date: 16.12.2022
Course: neuefische GmbH Web Dev

Function: this function simplifies the use of lottie-files json animation

Parameters: animationDataTransfer which uses the path of the lottie animation

Return: returns working object for lottie to start json svg animation

Examples of Usage: 
- React or Next.js
In the file, which uses the animation:
import animationData from "PATHTOYOURANIMATIONFILE.json";

in return: 
<Lottie options={lottieConfig(animationData)} [...]

*/
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
