import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Styled from './style';
import {useStateValue} from '../../contexts/StateContext';
import ModalMovie from '../../components/Modal/ModalMovie';
import ModalEvent from '../../components/Modal/ModalEvent';
import HeaderMovieFake from '../../components/Skeleton/HeaderMovieFake';
import EventsFake from '../../components/Skeleton/EventsFake';
import ProjectsFake from '../../components/Skeleton/ProjectsFake';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [showModalMovie, setShowModalMovie] = useState(false);
    const [showModalEvent, setShowModalEvent] = useState(false);

    //*************************************************/
    const [loadingLink, setLoadingLink] = useState(false);
    const [textMovie, setTextMovie] = useState('');
    const [urlMovie, setUrlMovie] = useState('');

    const [loadingEvent, setLoadingEvent] = useState(false);
    const [dataEvent, setDataEvent] = useState({});

    const [loadingProject, setLoadingProject] = useState(false);
    const [dataProject, setDataProject] = useState({});
    const [eventSelected, setEventSelected] = useState({});

    //############################################### PEGANDO OS RESULTADOS DA API ###############

    useEffect(() => {
        let cancelPromise = true;

        if (cancelPromise) {
            getDataLinkYoutube();
            getDataEvent();
            getDataProject();
        }

        return () => (cancelPromise = false);
    }, []);

    //************* INFORMAÇÃO DOS LINKS *******/
    const getDataLinkYoutube = async () => {
        setTextMovie('');
        setUrlMovie('');
        setLoadingLink(true);
        const result = await api.getUrlLink();
        setLoadingLink(false);
        if (result.error === '') {
            setTextMovie(result.data[0].title);
            setUrlMovie(result.data[0].url);
        } else {
            // eslint-disable-next-line no-alert
            alert(result.error);
        }
    };

    //********* INFORMAÇÃO DOS EVENTOS *******/
    const getDataEvent = async () => {
        setDataEvent({});
        setLoadingEvent(true);
        const result = await api.getEvent();
        setLoadingEvent(false);
        if (result.error === '') {
            setDataEvent(result.data);
        } else {
            // eslint-disable-next-line no-alert
            alert(result.error);
        }
    };

    //********* INFORMAÇÃO DOS PROJETOS *******/
    const getDataProject = async () => {
        setDataProject({});
        setLoadingProject(true);
        const result = await api.getProjects();
        setLoadingProject(false);
        if (result.error === '') {
            setDataProject(result.data);
        } else {
            // eslint-disable-next-line no-alert
            alert(result.error);
        }
    };

    //########################################## PEGA A URL DO LINK E URL DO VÍDEO ###############

    const url = urlMovie;

    function getYouTubeId(youtubeURL) {
        return youtubeURL.replace(
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
            '$7',
        );
    }

    const youTubeID = getYouTubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
    const movieUrl = youTubeID;
    // const movieUrl = `https://www.youtube.com/embed/${youTubeID}`;

    //########################################## INÍCIO DAS FUNÇÕES DA OPERACIONAIS ###############

    const handleOpenEventSelected = data => {
        setShowModalEvent(true);
        setEventSelected(data);
    };

    const handleOpenBoxMovie = () => {
        setShowModalMovie(true);
    };

    return (
        <Styled.Container>
            <StatusBar barStyle="light-content" backgroundColor="#8c4f2b" />

            <ModalMovie
                onVisible={showModalMovie}
                visibleAction={setShowModalMovie}
                movie={movieUrl}
            />

            <ModalEvent
                onEventVisible={showModalEvent}
                visibleEventAction={setShowModalEvent}
                dataEvent={eventSelected}
            />

            <Styled.BoxButtonDrawer>
                <Styled.ButtonDrawer
                    onPress={() =>
                        navigation.dispatch(DrawerActions.openDrawer())
                    }>
                    <Styled.IconButtonOpenDraw
                        source={require('../../assets/iconDraw.png')}
                    />
                </Styled.ButtonDrawer>
            </Styled.BoxButtonDrawer>

            <Styled.ImageTop
                source={require('../../assets/fusca.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{resizeMode: 'cover'}}
            />
            <Styled.BoxTop />

            <Styled.BoxHeaderImageLogo>
                <Styled.HeaderImageLogo
                    source={require('../../assets/logo.png')}
                />
            </Styled.BoxHeaderImageLogo>

            {/* ##################################################################### - BOX HEADER */}

            <Styled.BoxHeader>
                {loadingLink && <HeaderMovieFake />}

                {!loadingLink && bgUrl.length > 0 && (
                    <>
                        <Styled.HeaderText>{textMovie}</Styled.HeaderText>

                        <Styled.BoxHeaderImage
                            onPress={() => handleOpenBoxMovie()}
                            underlayColor="transparent">
                            <>
                                <Styled.HeaderBorderImage>
                                    <Styled.HeaderImage
                                        // eslint-disable-next-line react-native/no-inline-styles
                                        style={{resizeMode: 'cover'}}
                                        source={{
                                            uri: bgUrl,
                                        }}
                                    />
                                </Styled.HeaderBorderImage>
                                <Styled.BoxHeaderImagePlay>
                                    <Icon
                                        name="play-circle"
                                        size={30}
                                        color="#FFF"
                                    />
                                </Styled.BoxHeaderImagePlay>
                            </>
                        </Styled.BoxHeaderImage>
                    </>
                )}
            </Styled.BoxHeader>

            {/* ##################################################################### - BOX EVENTOS */}

            <Styled.BoxContent>
                <Styled.ContentText>Eventos e Passeios</Styled.ContentText>
                <Styled.ContentTextLine />

                <Styled.BoxEvents>
                    {loadingEvent && (
                        <>
                            <EventsFake />
                            <EventsFake />
                        </>
                    )}

                    {!loadingEvent &&
                        dataEvent.length > 0 &&
                        dataEvent.map(data => (
                            <Styled.BoxEventsDetail
                                key={data.id}
                                onPress={() => handleOpenEventSelected(data)}>
                                <Styled.EventImage source={{uri: data.img}} />
                                <Styled.BoxRightEvents>
                                    <Styled.ContentTitle>
                                        {data.title}
                                    </Styled.ContentTitle>
                                    <Styled.ContentDate>
                                        {data.date}
                                    </Styled.ContentDate>
                                </Styled.BoxRightEvents>
                            </Styled.BoxEventsDetail>
                        ))}

                    {/* ############################################################ - BOX PROJETOS */}

                    <Styled.BoxProject>
                        <Styled.ContentText>Projetos</Styled.ContentText>
                        <Styled.ContentTextLine />

                        <Styled.BoxScrollProjects horizontal={true}>
                            {loadingProject && (
                                <>
                                    <ProjectsFake />
                                    <ProjectsFake />
                                    <ProjectsFake />
                                    <ProjectsFake />
                                </>
                            )}

                            {!loadingProject &&
                                dataProject.length > 0 &&
                                dataProject.map(data => (
                                    <Styled.BoxCoverProject
                                        key={data.id}
                                        onPress={() =>
                                            navigation.navigate(
                                                'ItensProject',
                                                {data, id: data.id},
                                            )
                                        }>
                                        <>
                                            <Styled.CoverProject
                                                // eslint-disable-next-line react-native/no-inline-styles
                                                style={{resizeMode: 'cover'}}
                                                source={{uri: data.cover}}
                                            />
                                            <Styled.BoxNameProject>
                                                <Styled.NameProject>
                                                    {data.name}
                                                </Styled.NameProject>
                                            </Styled.BoxNameProject>
                                        </>
                                    </Styled.BoxCoverProject>
                                ))}
                        </Styled.BoxScrollProjects>
                    </Styled.BoxProject>
                </Styled.BoxEvents>
            </Styled.BoxContent>
        </Styled.Container>
    );
};
