import React, { useState } from "react";
import { playerTypes } from "~/types/Unions";
import { nanoid } from "nanoid";
import styles from "./styles/styles.module.scss";
import { parseAttributesForView } from "~/helpers/parseAttributesForView";
import clsx from "clsx";
interface IProps {
  player: playerTypes;
  currentAttribute: string;
}

const Card: React.FC<IProps> = ({ player, currentAttribute }: IProps) => {
  const list: Array<JSX.Element> = [];
  if (player) {
    for (const [key, value] of Object.entries(player)) {
      list.push(
        <p className={styles.attributeRow} key={nanoid()}>
          <span className={styles.attribute}>
            {parseAttributesForView(key)} :
          </span>
          <span className={styles.value}>{value}</span>
          <span
            className={clsx(
              currentAttribute === key && styles.currentAttribute
            )}
          ></span>
        </p>
      );
    }
  }
  return <div className={styles.cardWrapper}>{list}</div>;
};

export default Card;
