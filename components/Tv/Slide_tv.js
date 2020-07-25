import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {apiImage} from "../../api";
import Poster from "../../components/Poster";

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

const Container = styled.View`
    width: 5%;
    padding-left: 15px;
`;

const Data = styled.View`
    align-items: center;
    padding-left: 20px;

`;

const TvTitle = styled.Text`
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

const Slide_tv = ({
                          name,
                          votes,
                          poster
                      }) => {
    return (
        <Container>
            <>
                <Poster url={apiImage(poster)}/>
                <Data>
                    <TvTitle>{name.length > 10 ? `${name.slice(0, 10)} ...` : name}</TvTitle>
                    <Votes>⭐️ {votes} / 10</Votes>
                </Data>
            </>
        </Container>

    );
};

Slide_tv.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    votes: PropTypes.number,
    poster: PropTypes.string
};

export default Slide_tv;
