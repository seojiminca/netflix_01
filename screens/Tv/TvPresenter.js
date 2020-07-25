//rsc
import React from 'react';
import styled from 'styled-components/native'; //mobile에서는 native 를 붙여야 더 최적화된 것.
import {ActivityIndicator, ScrollView, View, Dimensions} from 'react-native';
import Title from '../../components/Title';
import Slide_tv from "../../components/Tv/Slide_tv";

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

const Popular_Section = styled.View`
    width: ${WIDTH}px;
    height: ${HEIGHT / 2.3}px;
    margin-bottom: 30px;
`

const TvPresenter = ({loading, popular, topRated}) => {
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
                    <Popular_Section>
                        <Title title={"Popular Shows"}/>
                        <ScrollView horizontal>
                            {popular.map(tv => (
                                <Slide_tv
                                    key={tv.id}
                                    id={tv.id}
                                    name={tv.original_name}
                                    votes={tv.vote_average}
                                    poster={tv.poster_path}
                                />
                            ))}
                        </ScrollView>
                    </Popular_Section>

                    <Popular_Section>
                        <Title title={"Top Rated"}/>
                        <ScrollView horizontal>
                            {topRated.map(tv => (
                                <Slide_tv
                                    key={tv.id}
                                    id={tv.id}
                                    name={tv.original_name}
                                    votes={tv.vote_average}
                                    poster={tv.poster_path}
                                />
                            ))}
                        </ScrollView>
                    </Popular_Section>
                </>
            )}
        </ScrollView>
    );
};


export default TvPresenter
;
