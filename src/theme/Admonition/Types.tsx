import React from "react";
import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";

interface AdmonitionProps {
  title: string;
  children: React.ReactNode;
}

const Exposition: React.FC<AdmonitionProps> = ({ title, children }) => {
  const borderColor = "var(--ifm-color-secondary-gold)";
  const backgroundColor = "rgba(255, 215, 0, 0.1)";
  
  return (
    <div style={{ borderLeft: `5px solid ${borderColor}`, backgroundColor, padding: "1em", borderRadius: "5px", marginBottom: "1em" }}>
      <h5>{title ? title.toLocaleUpperCase() : ""}</h5>
      <div>{children}</div>
    </div>
  );
};

const Description: React.FC<AdmonitionProps> = ({ title, children }) => {
  const borderColor = "var(--ifm-color-secondary-purple)";
  const backgroundColor = "rgba(128, 0, 128, 0.1)";
  
  return (
    <div style={{ borderLeft: `5px solid ${borderColor}`, backgroundColor, padding: "1em", borderRadius: "5px", marginBottom: "1em" }}>
      <h5>{title ? title.toLocaleUpperCase() : "Beschrijving".toLocaleUpperCase()}</h5>
      <div>{children}</div>
    </div>
  );
};

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add custom admonitions here
  // Don't forget to add them to the 'admonitions' field in docusaurus.config.js!!!

  'exposition': Exposition,
  'description': Description
}

export default AdmonitionTypes;
