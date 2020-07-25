import React, {useEffect, useState} from 'react'; // //RN의 lifecycle 함수. componentDidmount 같은 것.
import {tvAPI} from "../../api";
import TvPresenter from "./TvPresenter";

const TvContainer = ({navigation}) => {

    //Hook -> Data Handling.
    //1. 상태값 선언. class형은 Error occurred
    const [tv, setTv] = useState({
        loading: true,
        topRated: [],
        popular: [],
        topRatedError: null,
        popularError: null
    });

    //2. Networking.
    const getData = async () => {
        const [topRated, topRatedError] = await tvAPI.topRated();
        const [popular, popularError] = await tvAPI.popular();
        setTv({
            loading: false,
            topRated,
            popular,
            topRatedError,
            popularError
        });
    }

    //3. lifecycle
    useEffect(() => {
        getData();
    }, []);

    //return 없어도 됨.
    return (
        <TvPresenter {...tv}/>
    );
};

export default TvContainer;
