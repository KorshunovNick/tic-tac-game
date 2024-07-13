import React, { FC } from "react";
import Field from "../Field/Field";
import { IField } from "../../types/Field";
import "./Row.css";

interface RowProps {
  fields: IField[];
}

const Row: FC<RowProps> = ({ fields }) => {
  return (
    <div className="row">
      {fields.map((field) => (
        <Field field={field} key={field.id} />
      ))}
    </div>
  );
};

export default Row;
