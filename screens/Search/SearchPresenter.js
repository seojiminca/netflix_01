//rsc
import React from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import Horizontal from '../../components/Horizontal'
import HorizontalSlider from '../../components/HorizontalSlider'

import Input from "../../components/Search/Input";

const Container = styled.ScrollView`
  background-color: black;
`
const Text = styled.Text`
  color: white;
`

export default ({movies, shows, keyword, onChange, onSubmit}) => (
    <Container>
        <Input
            placeholder={"Write a keyword"}
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        />
        <HorizontalSlider title={"Movie Results"}>
            {movies.map(movie => (
                <Horizontal/>
            ))}
        </HorizontalSlider>
        <HorizontalSlider title={"Tv Results"}>
            {shows.map(show => (
                <Horizontal/>
            ))}
        </HorizontalSlider>
    </Container>
);

