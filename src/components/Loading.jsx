import React from "react";
import { useLottie } from "lottie-react";
import loading from "../assets/Loading.json";

export default function Loading() {
      const options = {
            animationData: loading,
            loop: true
      };
      const { View } = useLottie(options);
      return (<div style={{ width: "150px" }}>{View}</div>);
};
