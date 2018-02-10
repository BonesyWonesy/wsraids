import React, { Component } from "react";
import RaidReport from "./RaidReport.js";
import RaidInfo from "./RaidInfo.js";

export default function Content(props) {
  if (props.type == "submit") {
    return <RaidReport />;
  }

  return <RaidInfo />;
}
