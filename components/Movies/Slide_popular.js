import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {Dimensions, TouchableOpacity} from 'react-native';
import {apiImage} from "../../api";
import Poster from "../../components/Poster";
import Swiper from "react-native-web-swiper";

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

const Container = styled.View`
    width: 5%;
    padding-left: 15px;
`;

const Data = styled.View`
    align-items: center;
    padding-left: 20px;
`;

const MovieTitle = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 5px;
`;

const Votes = styled.Text`
    color: rgb(220,220,220);
    margin-bottom: 7px;
    font-size: 12px;
    font-weight: 600;
`;

const Slide_popular = ({
                           title,
                           votes,
                           poster
                       }) => {
    return (
        <Container>
            <>
                <Poster url={apiImage(poster)}/>
                <Data>
                    <MovieTitle>{title.length > 10 ? `${title.slice(0, 10)} ...` : title}</MovieTitle>
                    <Votes>⭐️ {votes} / 10</Votes>
                </Data>
            </>
        </Container>
    );
};

Slide_popular.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number,
    overview: PropTypes.string,
    poster: PropTypes.string
};

export default Slide_popular;
