import React, {useState, useEffect} from 'react';
import {Platform, Alert, BackHandler} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';

import Styled from './style';
import ImagesFake from '../../../../components/Skeleton/ImagesFake';
import GalleryFake from '../../../../components/Skeleton/GalleryFake';
import api, {URLImageThumb} from '../../../../services/api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const urlImageThumb = URLImageThumb.URLImage;

    const [loadingCover, setLoadingCover] = useState(false);
    const [dataCoverTemp, setDataCoverTemp] = useState({});
    const [dataCover, setDataCover] = useState('');

    const [galleryloading, setGalleryLoading] = useState(false);
    const [dataGalleryTemp, setDataGalleryTemp] = useState({});
    const [galleryList, setGalleryList] = useState([]);

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [futureProjects, setFutureProjects] = useState('');

    const [loadingButton, setLoadingButton] = useState(false);

    useEffect(() => {
        let cancelEffect = true;

        if (cancelEffect) {
            BackHandler.addEventListener('hardwareBackPress', () => {
                setDataCover('');
                setGalleryList([]);
                setName('');
                setTitle('');
                setDescription('');
                setFutureProjects('');
            });

            setDataCover(route.params.data.cover);
            setName(route.params.data.name);
            setTitle(route.params.data.title);
            setDescription(route.params.data.description);
            setFutureProjects(route.params.data.futureprojects);
            populateThumbImagesProject();
        }

        return () => (cancelEffect = false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation, route]);

    //função para preencher a url certa para as imagens
    const populateThumbImagesProject = () => {
        let list = [...galleryList];
        for (let i = 0; i < route.params.data.photos.length; i++) {
            list.push(`${urlImageThumb}${route.params.data.photos[i]}`);
        }
        setGalleryList(list);
    };

    //################################# -- ADICIONAR A FOTO DA CAPA -- #######################

    const handleAddPhotoCover = async data => {
        if (data.didCancel) {
            return;
        }

        if (data.error) {
            Alert.alert(
                'Opss!',
                'Ocorreu um problema com a imagem, tente novamente mais tarde!',
                // eslint-disable-next-line no-sparse-arrays
                [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
            );
        }

        if (!data.uri) {
            return;
        }

        if (data.uri) {
            setDataCoverTemp(data);
            setLoadingCover(true);

            let result = await api.addPhotoProject(data);
            if (result.error === '') {
                setDataCoverTemp({});
                setLoadingCover(false);
                setDataCover(result.photo);
            } else {
                Alert.alert(
                    'Opss!',
                    'Ocorreu um problema com a imagem, tente novamente mais tarde!',
                    // eslint-disable-next-line no-sparse-arrays
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
                );
            }
        }
    };

    //################################# -- ADICIONAR A FOTO DA GALERIA -- #######################

    const handleAddPhotosGallery = async data => {
        if (data.didCancel) {
            return;
        }

        if (data.error) {
            Alert.alert(
                'Opss!',
                'Ocorreu um problema com a imagem, tente novamente mais tarde!',
                // eslint-disable-next-line no-sparse-arrays
                [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
            );
        }

        if (!data.uri) {
            return;
        }

        if (data.uri) {
            setDataGalleryTemp(data);
            setGalleryLoading(true);

            let result = await api.addPhotoProject(data);
            if (result.error === '') {
                let list = [...galleryList];
                list.push(result.photo);
                setGalleryList(list);
                setGalleryLoading(false);
                setDataGalleryTemp({});
            } else {
                Alert.alert(
                    'Opss!',
                    'Ocorreu um problema com a imagem, tente novamente mais tarde!',
                    // eslint-disable-next-line no-sparse-arrays
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
                );
            }
        }
    };

    //################################# -- ADICIONANDO O PROJETO NO BANCO -- #######################

    const handleSubmitEditFormProject = async () => {
        if (
            dataCover !== '' &&
            name !== '' &&
            title !== '' &&
            description !== ''
        ) {
            setLoadingButton(true);
            const result = await api.editProject(
                route.params.data.id,
                dataCover,
                galleryList,
                name,
                title,
                description,
                futureProjects,
            );
            setLoadingButton(false);
            if (result.error === '') {
                setDataCover('');
                setDataCoverTemp({});
                setDataGalleryTemp({});
                setGalleryList([]);
                setName('');
                setTitle('');
                setDescription('');
                setFutureProjects('');
                navigation.goBack();
            } else {
                Alert.alert(
                    'Opss!',
                    'Erro ao enviar projeto, tente novamente mais tarde.',
                    // eslint-disable-next-line no-sparse-arrays
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
                );
            }
        } else {
            Alert.alert(
                'Opss!',
                'É obrigatório tem uma imagem de capa e preencher todos os campos!',
                // eslint-disable-next-line no-sparse-arrays
                [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
            );
        }
    };

    //################################# -- FUNÇÕES OPERACIONAIS -- #############################

    const handleBackView = () => {
        navigation.goBack();
        setDataCover('');
        setGalleryList([]);
        setName('');
        setTitle('');
        setDescription('');
        setFutureProjects('');
    };

    const handlePhotoSelectedRemove = url => {
        let list = [...galleryList];
        list = list.filter(urls => urls !== url);
        setGalleryList(list);
    };

    return (
        <Styled.Container
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={100}>
            <Styled.BoxIndicator>
                <Styled.BoxDrawer onPress={handleBackView}>
                    <Icon name="arrow-left" size={20} color="#FFF" />
                </Styled.BoxDrawer>
                <Styled.BoxTextInformation>
                    <Styled.TextInformation>
                        ADICIONE UM PROJETO
                    </Styled.TextInformation>
                </Styled.BoxTextInformation>
            </Styled.BoxIndicator>

            <Styled.ScrollFormProject>
                <Styled.BoxPhotoCover>
                    <Styled.ButtonImg
                        onPress={() =>
                            launchImageLibrary(
                                {
                                    maxWidth: 1280,
                                },
                                handleAddPhotoCover,
                            )
                        }>
                        <Icon name="plus" size={20} color="#8c4f2b" />
                        <Styled.TextButtonImg>
                            Adicione a imagem da capa
                        </Styled.TextButtonImg>
                    </Styled.ButtonImg>

                    <Styled.BoxCover>
                        {loadingCover && dataCoverTemp?.uri && (
                            <>
                                <Styled.ImageCover
                                    source={{uri: dataCoverTemp?.uri}}
                                />
                                <ImagesFake />
                                {/* ImagesFake Vem do componente criado */}
                            </>
                        )}

                        {!loadingCover && dataCover.length > 0 && (
                            <Styled.ImageCover source={{uri: dataCover}} />
                        )}
                    </Styled.BoxCover>
                </Styled.BoxPhotoCover>

                <Styled.BoxPhotoThumb>
                    <Styled.ButtonImg
                        onPress={() =>
                            launchImageLibrary(
                                {
                                    maxWidth: 1280,
                                },
                                handleAddPhotosGallery,
                            )
                        }>
                        <Icon name="plus" size={20} color="#8c4f2b" />
                        <Styled.TextButtonImg>
                            Adicione as Imagens
                        </Styled.TextButtonImg>
                    </Styled.ButtonImg>

                    <Styled.BoxScrollImages>
                        <Styled.ScrollImages horizontal={true}>
                            {galleryList.length > 0 &&
                                galleryList.map((url, index) => (
                                    <Styled.GalleryThumbImagesEdit key={index}>
                                        <Styled.Gallery source={{uri: url}} />

                                        <Styled.ButtonRemovePhotoGallery
                                            onPress={() =>
                                                handlePhotoSelectedRemove(url)
                                            }>
                                            <Icon
                                                name="minus"
                                                size={20}
                                                color="#FFF"
                                            />
                                        </Styled.ButtonRemovePhotoGallery>
                                    </Styled.GalleryThumbImagesEdit>
                                ))}

                            {galleryloading && dataGalleryTemp?.uri && (
                                <>
                                    <Styled.ImageCover
                                        source={{uri: dataGalleryTemp?.uri}}
                                    />
                                    <GalleryFake />
                                    {/* ImagesFake Vem do componente criado */}
                                </>
                            )}
                        </Styled.ScrollImages>
                    </Styled.BoxScrollImages>
                </Styled.BoxPhotoThumb>

                <Styled.BoxForm>
                    <Styled.BoxInput>
                        <Styled.LabelInput>Proprietário</Styled.LabelInput>
                        <Styled.InputText
                            value={name}
                            onChangeText={e => setName(e)}
                            placeholder="Digite o seu nome"
                            placeholderTextColor="rgba(191, 135, 86, 0.50)"
                        />
                    </Styled.BoxInput>

                    <Styled.BoxInput>
                        <Styled.LabelInput>Projeto</Styled.LabelInput>
                        <Styled.InputText
                            value={title}
                            onChangeText={e => setTitle(e)}
                            placeholder="Digite um nome para o projeto"
                            placeholderTextColor="rgba(191, 135, 86, 0.50)"
                        />
                    </Styled.BoxInput>

                    <Styled.BoxInput>
                        <Styled.LabelInput>
                            Descrição do Projeto
                        </Styled.LabelInput>
                        <Styled.InputText
                            description
                            value={description}
                            onChangeText={e => setDescription(e)}
                            multiline={true}
                            numberOfLines={5}
                            placeholder="Digite os detalhes do projeto"
                            placeholderTextColor="rgba(191, 135, 86, 0.50)"
                        />
                    </Styled.BoxInput>

                    <Styled.BoxInput>
                        <Styled.LabelInput>Upgrades Futuros</Styled.LabelInput>
                        <Styled.InputText
                            value={futureProjects}
                            onChangeText={e => setFutureProjects(e)}
                            placeholder="Digite os futuros ítens para esse projeto"
                            placeholderTextColor="rgba(191, 135, 86, 0.50)"
                        />
                    </Styled.BoxInput>
                </Styled.BoxForm>

                <Styled.ButtonProjectSend onPress={handleSubmitEditFormProject}>
                    <Styled.TextButton>
                        {loadingButton
                            ? 'ALTERANDO PROJETO ...'
                            : 'ALTERAR PROJETO'}
                    </Styled.TextButton>
                </Styled.ButtonProjectSend>
            </Styled.ScrollFormProject>
        </Styled.Container>
    );
};
