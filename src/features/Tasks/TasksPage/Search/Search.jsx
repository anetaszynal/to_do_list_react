import React from "react";
import {
    useQueryParameter,
    useReplaceQueryParameter,
} from "../queryParameters";
import {FormInput, Wrapper} from "../../Input/styled";
import searchQueryParamName from "../searchQueryParamName";

export const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({target}) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : "",
        });
    };

    return (
        <Wrapper>
            <FormInput
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};
