import React, {useEffect, useState} from 'react'; // //RN의 lifecycle 함수. componentDidmount 같은 것.
import {View, Text, Button} from 'react-native';
import {movieAPI} from "../../api";
import MoviesPresenter from "./MoviesPresenter";

const MoviesContainer = ({navigation}) => {

    //Hook -> Data Handling.
    //1. 상태값 선언. class형은 Error occurred
    const [movies, setMovies] = useState({
        loading: true,
        nowPlaying: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        popularError: null,
        upcomingError: null
    });

    //2. Networking.
    const getData = async () => {
        const [nowPlaying, nowPlayingError] = await movieAPI.nowPlaying();
        const [popular, popularError] = await movieAPI.popular();
        const [upcoming, upcomingError] = await movieAPI.upcoming();
        setMovies({
            loading: false,
            nowPlaying,
            popular,
            upcoming,
            nowPlayingError,
            popularError,
            upcomingError
        });
    }

    //3. lifecycle
    useEffect(() => {
        getData();
    }, []);

    //return 없어도 됨.
    return (
        <MoviesPresenter {...movies}/>
    );
};

export default MoviesContainer;
