//rsc
import React from 'react';
import styled from 'styled-components/native'; //mobile에서는 native 를 붙여야 더 최적화된 것.
import Swiper from "react-native-web-swiper";
import {ActivityIndicator, ScrollView, View, Dimensions} from 'react-native';
import Slide from '../../components/Movies/Slide';
import Slide_popular from '../../components/Movies/Slide_popular';
import Upcoming from "../../components/Movies/Upcoming";
import Title from '../../components/Title';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

const SlideContainer = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 4}px;
    margin-bottom: 30px;
`

const Popular_Section = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 2.5}px;
    margin-bottom: 30px;
`

const Upcoming_section = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    margin-bottom: 30px;
`

const MoviesPresenter = ({loading, nowPlaying, popular, upcoming}) => {
    return (
        <ScrollView style={{backgroundColor: "black"}}
            contentContainerStyle={{
                justifyContent: loading ? "center" : "flex-start"
            }}
        >
            {loading ? (
                <ActivityIndicator color='white' size='large'/>
            ) : (
                <>
                    <SlideContainer>
                        <Swiper controlsEnabled={false} loop timeout={3}>
                            {nowPlaying.map(movie => (
                                <Slide
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.original_title}
                                    overview={movie.overview}
                                    votes={movie.vote_average}
                                    backgroundImage={movie.backdrop_path}
                                    poster={movie.poster_path}
                                />
                            ))}
                        </Swiper>
                    </SlideContainer>

                    <Popular_Section>
                        <Title title={"Popular Movies"}/>
                        <ScrollView horizontal>
                            {popular.map(movie => (
                                <Slide_popular
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.original_title}
                                    votes={movie.vote_average}
                                    backgroundImage={movie.backdrop_path}
                                    poster={movie.poster_path}
                                />
                            ))}
                        </ScrollView>
                    </Popular_Section>

                    <Upcoming_section>
                        <Title title={"Coming soon"}/>
                        <ScrollView alwaysBounceVertical>
                            {upcoming.map(movie => (
                                <Upcoming
                                    key={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.original_title}
                                    date={movie.release_date}
                                    overview={movie.overview}
                                />
                            ))}
                        </ScrollView>
                    </Upcoming_section>
                </>
            )}
        </ScrollView>
    );
};


export default MoviesPresenter;
