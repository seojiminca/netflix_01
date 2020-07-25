//rsc
import React from 'react';
import styled from 'styled-components';
import Horizontal from '../../components/Horizontal'
import HorizontalSlider from '../../components/HorizontalSlider'
import Vertical from '../../components/Vertical'

import Input from "../../components/Search/Input";

const Container = styled.ScrollView`
  background-color: black;
`

export default ({movies, shows, keyword, onChange, onSubmit}) => (
    <Container
        contentContainerStyle={{
            paddingTop: 10
        }}
    >
        <Input
            placeholder={"Write a keyword"}
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        />
        {movies.length !== 0 && (
            <HorizontalSlider title={"Movie Results"}>
                {movies.map(movie => (
                    <Vertical
                        key={movie.id}
                        id={movie.id}
                        poster={movie.poster_path}
                        title={movie.original_title}
                        votes={movie.vote_average}
                    />
                ))}
            </HorizontalSlider>
        )}

        {shows.length !== 0 && (
            <HorizontalSlider title={"Show Results"}>
                {shows.map(tv => (
                    <Vertical
                        key={tv.id}
                        id={tv.id}
                        poster={tv.poster_path}
                        title={tv.original_name}
                        votes={tv.vote_average}
                    />
                ))}
            </HorizontalSlider>
        )}

        {/*<HorizontalSlider title={"Tv Results"}>*/}
        {/*    {shows.map(show => (*/}
        {/*        <Horizontal/>*/}
        {/*    ))}*/}
        {/*</HorizontalSlider>*/}
    </Container>
);

