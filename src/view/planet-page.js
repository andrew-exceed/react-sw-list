import React, { useState, useEffect } from "react";
import {
    useParams,
    useHistory
} from "react-router-dom";

import Typography from '@material-ui/core/Typography';


const PlanetPage = () => {
    let { id } = useParams();
    const [planetData, setPlanetData] = useState({});
    const [planetImage, setPlanetImage] = useState();
    let history = useHistory();

    
    useEffect(() => {

        //TODO Это все вынесу отдлельно в запросы и редакс, для быстроты все пока писал тут
        // а еще тут нет визуализации загрузки никакой
        fetch(`https://swapi.dev/api/planets/${id}/`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPlanetData(data);

                // кастомный гугл запрос, 100 запросов в день
                fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyD5k_BKuzP7Z2dQbrgEhhcr4kjTb8o6UKo&cx=f0f1da42e6e8587e5&q=${data.name}&searchType=image&fileType=jpg&imgSize=xlarge&alt=json`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data)
                    data.items && data.items[0] && setPlanetImage(data.items[0].link)
                });

                data.detail && data.detail === 'Not found' && history.push("/404");
            });




    },[history, id]);

    return (
        <>  
            <div className="myImg">
                {planetImage ? 
                <img src={planetImage}/>
                :
                <div className='error'>Ждем картинку...,<br />ну или закончились запросы к гуглу</div>
                }
            </div>
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