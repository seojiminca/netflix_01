import React from 'react';
import PropTypes from 'prop-types';

const getDate = ({releaseDate}) => {
    const data = releaseDate.split('-');
    return `${data[0]}년 ${data[1]}월 ${data[2]}일 `
}

getDate.propTypes = {
    date: PropTypes.string
}

export default getDate;
