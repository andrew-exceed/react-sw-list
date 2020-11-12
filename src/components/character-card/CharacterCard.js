import React from 'react';
import { Typography, Button, CardMedia, CardContent, CardActions, CardActionArea, Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#edf2f1'
    },
}); 

const CharacterCard = ({openPopUp, url, name}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea onClick={() => openPopUp(url)}>
                <CardMedia
                    component="img"
                    alt={name}
                    height="200"
                    image={`/img-characters/${name && name.split(' ').join('')}.jpg`}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {url}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => openPopUp(url)}> 
                    more...
                </Button>
            </CardActions>
        </Card>
    );
}

export default CharacterCard;