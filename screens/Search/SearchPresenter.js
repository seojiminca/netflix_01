//rsc
import React from 'react';
import styled from 'styled-components';

import Input from "../../components/Search/Input";

const Container = styled.ScrollView`
  background-color: black;
`

export default () => {
    return (
        <Container>
            <Input placeholder={"Write a keyword"} />
        </Container>
    );
};

