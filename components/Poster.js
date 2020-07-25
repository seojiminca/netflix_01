//rscp
import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components/native";

const Image = styled.Image`
  width: 120px;
  height: 160px;
  border-radius: 4px;
  margin-left: 20px;
  margin-bottom: 30px;
`;

const Poster = ({url}) => <Image source={{uri: url}}/>;

Poster.propTypes = {
    url: PropTypes.string.isRequired
};

export default Poster;
