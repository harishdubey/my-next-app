"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

type TabsProps = {
  tabs: {
    label: string;
    content: string;
  }[];
  activeTabIndex: number;
};

const tabs = [
  {
    label: "HTML",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    label: "CSS",
    content:
      "Normal distribution of letters, as opposed to using 'Content here, content",
  },
  {
    label: "Javascript",
    content:
      "It is a long established fact that a reader will be distracted by the readable",
  },
];

const Tabs = ({ tabs, activeTabIndex }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const selectTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <h1>Custom Tabs </h1>
      <div className={styles.tabNavs}>
        {tabs.map((item, index) => {
          return (
            <div
              className={`${styles.tab} ${
                index === activeTab ? styles.active : null
              }`}
              onClick={() => selectTab(index)}
              key={item.label}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      {tabs.map((item, index) => {
        return (
          <div
            className={
              index === activeTab
                ? styles.tabsContentActive
                : styles.tabsContent
            }
            key={item.label}
          >
            <h2>{item.label}</h2>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

const TabsContainer = () => {
  return (
    <div>
      <Tabs tabs={tabs} activeTabIndex={0} />
      <Link href={"/"}>Back to Home</Link>
    </div>
  );
};

export default TabsContainer;
