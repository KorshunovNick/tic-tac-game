import React, { FC } from "react";
import Tanya from "../../../../assets/tanya.webp";
import Nikita from "../../../../assets/sticker.webp";
import "./Field.css";
import { useStore } from "../../../../store/useStore";
import { IField } from "../../../../types/Field";

interface FieldProps {
  field: IField;
}

const Field: FC<FieldProps> = ({ field }) => {
  const { setMark, winner, reset } = useStore((state) => state);

  const handleClick = () => {
    if (winner) reset();
    field.value ? () => {} : setMark(field.id);
  };

  const viewMark =
    field.value === "X" ? (
      <img src={Tanya} width={40} height={40} />
    ) : (
      <img src={Nikita} width={50} height={50} />
    );

  return (
    <div className={`field id${field.id}`} onClick={handleClick}>
      {field.value && viewMark}
    </div>
  );
};

export default Field;
