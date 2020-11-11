import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import Paper from '@material-ui/core/Paper';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '400px',
        margin: '0 auto',
    },
        paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        width: '100%',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const TransitionsModal = ({open, isLoading, data, closePopUp}) => {
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => closePopUp()}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    {!isLoading ?
                        <Card variant="outlined">
                            <CardMedia
                                component="img"
                                alt={data.name}
                                height="300"
                                image={`/img-characters/${data.name && data.name.split(' ').join('')}.jpg`}
                                title={data.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="h2">
                                    {data.name}
                                </Typography>
                                <Typography  variant="subtitle1">
                                    пол - {data.gender}
                                </Typography>
                                <Typography  variant="subtitle1" >
                                    Рост - {data.height}
                                </Typography>
                                <Typography  variant="subtitle1" >
                                    Масса - {data.mass}
                                </Typography>
                                <Typography  variant="subtitle1" >
                                    День рождения - {data.birth_year}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data.homeworld}
                                </Typography>
                            </CardContent>
                        </Card>
                        : 
                        <Paper className={classes.paper}>
                            <Grid item xs={12}>
                                <Skeleton variant="rect"  height={200} />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                                <Skeleton variant="text" />
                                <Skeleton variant="rect"  height={46} />
                            </Grid>
                        </Paper>
                    }
                </Fade>
            </Modal>
        </div>
    );
};

export default TransitionsModal;