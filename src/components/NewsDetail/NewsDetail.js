import React from 'react';
import { useParams, useHistory } from 'react-router-dom';


export default function NewsDetail(props) {
    const { name } = useParams();
    const history = useHistory();

    return (
        <div>
            News {name};
            <br />
            <button onClick={() => {
                history.push('/news');
            }}>Back</button>
        </div>
    )
}