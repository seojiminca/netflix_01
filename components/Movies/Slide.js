import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {Dimensions, TouchableOpacity} from 'react-native';
import {apiImage} from "../../api";
import Poster from "../../components/Poster";

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;

`;

const Votes = styled.Text`
  color: rgb(220,220,220);
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 600;
`;

const Overview = styled.Text`
  color: rgb(220,220,220);
  font-size: 12px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding:7px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({
                   id,
                   title,
                   backgroundImage,
                   votes,
                   overview,
                   poster
               }) => {
    return (
            <Container>
                {/*<BG source={{uri: apiImage(backgroundImage)}}/>*/}
                <Content>
                    <Poster url={apiImage(poster)}/>
                    <Data>
                        <Title>{title.length > 40 ? `${title.slice(0, 40)} ...` : title}</Title>
                        <Votes>⭐ {votes} / 10</Votes>
                        <Overview>{overview.slice(0, 110)}...</Overview>
                        <TouchableOpacity>
                            <Button>
                                <ButtonText>View details</ButtonText>
                            </Button>
                        </TouchableOpacity>
                    </Data>
                </Content>
            </Container>
    );
};

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    votes: PropTypes.number,
    overview: PropTypes.string,
    poster: PropTypes.string.isRequired
};

export default Slide;
