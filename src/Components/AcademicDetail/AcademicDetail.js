import React from 'react';
import { useParams } from 'react-router';

const AcademicDetail = () => {
    const {name} = useParams()
    console.log(name)
    return (
        <div>
            hei
        </div>
    );
};

export default AcademicDetail;