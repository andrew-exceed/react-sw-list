import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import Pagination from '@material-ui/lab/Pagination';

import CharacterCard from '../character-card/CharacterCard'
import TransitionsModal from '../popup/PopUp'

import * as actionsCharactersList from "../../actions/characters-list-actions"


const CharactersList = ({
    getCharactersList, 
    charactersListInfo, 
    loading, 
    error,
    getCharacterInfo,
    characterData,
    loadingPopUp,
    errorPopUp,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    

    React.useEffect(() => {
        getCharactersList(1);
    },[getCharactersList]);

    // состояние модалки
    const changeModalInfo = (url) =>{
        getCharacterInfo(url);
        handleModalShow();
    }
    const handleModalShow = () => {
        setIsOpen(!isOpen)
    }

    // пилим пагинаци
    // работает, если апи будет выдавать по 10 штук и дальше
    let pagCount = 9;
    const toPage = (number) => {
        getCharactersList(number);
    }

    // скелет для загрузки
    const PlugCard = Array.apply(null, Array(10)).map((data, i) => {
        return (
            <Grid key={i} item xs={12} sm={6} md={3}>
                <Skeleton variant="rect"  height={200} />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="rect"  height={46} />
            </Grid>
        )
    });

    // карточка с персонажем
    const List = charactersListInfo.results.map((data, i) => {
        let {url, name} = data;
        return (
            <React.Fragment key={i} >
                <Grid item xs={12} sm={6} md={3}>
                    <CharacterCard
                        openPopUp={changeModalInfo}
                        url={url}
                        name={name}
                    />
                </Grid>
            </React.Fragment>
        )
    });

    return (
        <Grid container spacing={2}>
            {loading && !error && PlugCard}
            {!loading && List}

            <Grid item container xs={12}>
                <div className='pag'>
                    <Pagination disabled={loading} onChange={(event, index) => toPage(index)} count={pagCount} size="large" />
                </div>
            </Grid>

            <TransitionsModal
                isLoading={loadingPopUp}
                open={isOpen}
                data={characterData}
                closePopUp={handleModalShow}
            />
            
        </Grid>
    );
}

const mapStateToProps = (state) => state.charactersListReducer;
const mapDispatchToProps = (dispatch) =>  bindActionCreators(actionsCharactersList, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);