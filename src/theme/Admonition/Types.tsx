import React from "react";
import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faListOl, faAddressCard, faGem } from '@fortawesome/free-solid-svg-icons';

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

const Lore: React.FC<AdmonitionProps> = ({ title, children }) => {
  const borderColor = "var(--ifm-color-admonition-lore)";
  const backgroundColor = "var(--ifm-color-admonition-lore-bg)";
  
  return (
    <div style={{ borderLeft: `5px solid ${borderColor}`, backgroundColor, padding: "1em", borderRadius: "5px", marginBottom: "1em" }}>
      <h5>
        <FontAwesomeIcon icon={faBook} /> {title ? title.toLocaleUpperCase() : "Lore".toLocaleUpperCase()}
      </h5>
      <div>{children}</div>
    </div>
  );
};

const Narrative: React.FC<AdmonitionProps> = ({ title, children }) => {
  const borderColor = "var(--ifm-color-admonition-narrative)";
  const backgroundColor = "var(--ifm-color-admonition-narrative-bg)";
  
  return (
    <div style={{ borderLeft: `5px solid ${borderColor}`, backgroundColor, padding: "1em", borderRadius: "5px", marginBottom: "1em" }}>
      <h5>
        <FontAwesomeIcon icon={faListOl} /> {title ? title.toLocaleUpperCase() : "Narratief".toLocaleUpperCase()}
      </h5>
      <div>{children}</div>
    </div>
  );
};

const Profile: React.FC<AdmonitionProps> = ({ title, children }) => {
  const borderColor = "var(--ifm-color-admonition-profile)";
  const backgroundColor = "var(--ifm-color-admonition-profile-bg)";
  
  return (
    <div style={{ borderLeft: `5px solid ${borderColor}`, backgroundColor, padding: "1em", borderRadius: "5px", marginBottom: "1em" }}>
      <h5>
        <FontAwesomeIcon icon={faAddressCard} /> {title ? title.toLocaleUpperCase() : "Profiel".toLocaleUpperCase()}
      </h5>
      <div>{children}</div>
    </div>
  );
};

const Item: React.FC<AdmonitionProps> = ({ title, children }) => {
  const borderColor = "var(--ifm-color-admonition-item)";
  const backgroundColor = "var(--ifm-color-admonition-item-bg)";
  
  return (
    <div style={{ borderLeft: `5px solid ${borderColor}`, backgroundColor, padding: "1em", borderRadius: "5px", marginBottom: "1em" }}>
      <h5>
        <FontAwesomeIcon icon={faGem} /> {title ? title.toLocaleUpperCase() : "Item".toLocaleUpperCase()}
      </h5>
      <div>{children}</div>
    </div>
  );
};

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add custom admonitions here
  // Don't forget to add them to the 'admonitions' field in docusaurus.config.js!!!

  'exposition': Exposition,
  'description': Description,
  'lore': Lore,
  'narrative': Narrative,
  'profile': Profile,
  'item': Item,
}

export default AdmonitionTypes;
