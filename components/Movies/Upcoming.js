import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import {apiImage} from "../../api";
import Poster from "../Poster";
import Date from '../Date';

const Container = styled.View`
    padding-left: 15px;
`;

const Section = styled.View`
    position: absolute;
    padding-left: 180px;
    padding-top: 20px;
`;

const Title = styled.Text`
    color: white;
    font-weight: bold;
`;

const Overview = styled.Text`
    color: white;
`;

const ReleaseDate = styled.Text`
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Upcoming = ({ poster, title, date, overview }) => (
    <Container>
        <Poster url={apiImage(poster)}/>
        <Section>
            <Title>{title}</Title>
            <ReleaseDate>
                <Date releaseDate={date} />
            </ReleaseDate>
            <Overview>{overview.length > 10 ? `${overview.slice(0,70)} ...` : overview}</Overview>
        </Section>
    </Container>
);

Upcoming.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired
};

export default Upcoming;
