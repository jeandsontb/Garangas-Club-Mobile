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
    const [uniqueCoverTemp, setUniqueCoverTemp] = useState('');

    const [galleryloading, setGalleryLoading] = useState(false);
    const [dataGalleryTemp, setDataGalleryTemp] = useState({});
    const [galleryList, setGalleryList] = useState([]);
    const [galleryListTemp, setGalleryListTemp] = useState([]);

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [loadingButton, setLoadingButton] = useState(false);

    useEffect(() => {
        let cancelEffect = true;

        if (cancelEffect) {
            BackHandler.addEventListener('hardwareBackPress', () => {
                setDataCover('');
                setUniqueCoverTemp('');
                setGalleryList([]);
                setGalleryListTemp([]);
                setName('');
                setTitle('');
                setDescription('');
            });

            setDataCover(route.params.data.cover);
            setUniqueCoverTemp(route.params.data.cover);
            setName(route.params.data.name);
            setTitle(route.params.data.title);
            setDescription(route.params.data.description);
            populateThumbImagesMember();
            populateThumbImagesProjectTemp();
        }

        return () => (cancelEffect = false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation, route]);

    //função para preencher a url certa para as imagens
    const populateThumbImagesMember = () => {
        let list = [...galleryList];
        for (let i = 0; i < route.params.data.photos.length; i++) {
            list.push(`${urlImageThumb}${route.params.data.photos[i]}`);
        }
        setGalleryList(list);
    };

    const populateThumbImagesProjectTemp = () => {
        let listTemp = [...galleryListTemp];
        for (let i = 0; i < route.params.data.photos.length; i++) {
            listTemp.push(`${urlImageThumb}${route.params.data.photos[i]}`);
        }
        setGalleryListTemp(listTemp);
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
                setUniqueCoverTemp(data.uri);
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

                let listTemp = [...galleryListTemp];
                listTemp.push(data.uri);
                setGalleryListTemp(listTemp);

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

    const handleSubmitEditFormMember = async () => {
        if (
            dataCover !== '' &&
            name !== '' &&
            title !== '' &&
            description !== ''
        ) {
            setLoadingButton(true);
            const result = await api.editMember(
                route.params.data.id,
                dataCover,
                galleryList,
                name,
                title,
                description,
            );
            setLoadingButton(false);
            if (result.error === '') {
                setDataCover('');
                setUniqueCoverTemp('');
                setDataCoverTemp({});
                setDataGalleryTemp({});
                setGalleryList([]);
                setGalleryListTemp([]);
                setName('');
                setTitle('');
                setDescription('');
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
        setUniqueCoverTemp('');
        setGalleryList([]);
        setGalleryListTemp([]);
        setName('');
        setTitle('');
        setDescription('');
    };

    const handlePhotoSelectedRemove = url => {
        let list = [...galleryList];
        list = list.filter(urls => urls !== url);
        setGalleryList(list);

        let listTemp = [...galleryListTemp];
        listTemp = listTemp.filter(urls => urls !== url);
        setGalleryListTemp(listTemp);
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
                        EDITE O PERFIL
                    </Styled.TextInformation>
                </Styled.BoxTextInformation>
            </Styled.BoxIndicator>

            <Styled.ScrollFormMember>
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
                            <Styled.ImageCover
                                source={{uri: uniqueCoverTemp}}
                            />
                        )}
                    </Styled.BoxCover>
                </Styled.BoxPhotoCover>

                <Styled.BoxPhotoThumb>
                    {galleryloading && (
                        // eslint-disable-next-line react-native/no-inline-styles
                        <Styled.ButtonImg style={{opacity: 0.5}}>
                            <Icon name="plus" size={20} color="#8c4f2b" />
                            <Styled.TextButtonImg>
                                Adicione as Imagens
                            </Styled.TextButtonImg>
                        </Styled.ButtonImg>
                    )}

                    {!galleryloading && (
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
                    )}

                    <Styled.BoxScrollImages>
                        <Styled.ScrollImages horizontal={true}>
                            {galleryListTemp.length > 0 &&
                                galleryListTemp.map((url, index) => (
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
                        <Styled.LabelInput>Nome</Styled.LabelInput>
                        <Styled.InputText
                            value={name}
                            onChangeText={e => setName(e)}
                            placeholder="Digite o seu nome"
                            placeholderTextColor="rgba(191, 135, 86, 0.50)"
                        />
                    </Styled.BoxInput>

                    <Styled.BoxInput>
                        <Styled.LabelInput>Título</Styled.LabelInput>
                        <Styled.InputText
                            value={title}
                            onChangeText={e => setTitle(e)}
                            placeholder="Digite titulo ou apelido "
                            placeholderTextColor="rgba(191, 135, 86, 0.50)"
                        />
                    </Styled.BoxInput>

                    <Styled.BoxInput>
                        <Styled.LabelInput>
                            Descrição / Paixão pelos antigos
                        </Styled.LabelInput>
                        <Styled.InputText
                            description
                            value={description}
                            onChangeText={e => setDescription(e)}
                            multiline={true}
                            numberOfLines={5}
                            placeholder="Digite os detalhes para ser Garangas"
                            placeholderTextColor="rgba(191, 135, 86, 0.50)"
                        />
                    </Styled.BoxInput>
                </Styled.BoxForm>

                <Styled.ButtonMemberSend onPress={handleSubmitEditFormMember}>
                    <Styled.TextButton>
                        {loadingButton
                            ? 'ALTERANDO PERFIL ...'
                            : 'ALTERAR PERFIL'}
                    </Styled.TextButton>
                </Styled.ButtonMemberSend>
            </Styled.ScrollFormMember>
        </Styled.Container>
    );
};
