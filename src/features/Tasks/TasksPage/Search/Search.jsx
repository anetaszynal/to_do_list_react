import React from "react";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";
import { FormInput, FormContener } from "../../Input/styled";
import searchQueryParamName from "../searchQueryParamName";

export const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    console.log(target.value);

    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : "",
    });
  };

  return (
    <FormContener as="div">
      <FormInput
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </FormContener>
  );
};
