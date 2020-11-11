import React, { useState, useEffect } from "react";
import {
    useParams,
    useHistory
} from "react-router-dom";

import Typography from '@material-ui/core/Typography';


const PlanetPage = () => {
    let { id } = useParams();
    const [planetData, setPlanetData] = useState({});

    let history = useHistory();

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${id}/`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPlanetData(data);
                // history.push(`/planets/${id}`);
                data.detail && data.detail === 'Not found' && history.push("/404");
            });
    },[history, id]);

    return (
        <>
            <Typography variant='h2'>{planetData && planetData.name}</Typography>
            <Typography variant='subtitle1'>Климат - {planetData && planetData.climate}</Typography>
            <Typography variant='subtitle1'>Гравитация - {planetData && planetData.gravity}</Typography>
            <Typography variant='subtitle1'>Уровнь Воды - {planetData && planetData.surface_water}</Typography>
            <Typography variant='subtitle1'>Популяция - {planetData && planetData.population}</Typography>
            <Typography variant='subtitle1'>Поверхность - {planetData && planetData.terrain}</Typography>
        </>
    );
}

export default PlanetPage;