//rscp
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';


const TextInput = styled.TextInput`
  background-color: white;
`;

const Input = ({placeholder, value, onChange, onSubmit}) => (
    <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        onSubmit={onSubmit}
        returnKeyType={"Search"}
    />
);

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Input;
