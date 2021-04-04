import React, {useState} from 'react';
import {Platform, Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchImageLibrary} from 'react-native-image-picker';

import Styled from './style';
import ImagesFake from '../../../../components/Skeleton/ImagesFake';
import GalleryFake from '../../../../components/Skeleton/GalleryFake';
import api from '../../../../services/api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [loadingCover, setLoadingCover] = useState(false);
    const [dataCoverTemp, setDataCoverTemp] = useState({});
    const [dataCover, setDataCover] = useState('');

    const [galleryloading, setGalleryLoading] = useState(false);
    const [dataGalleryTemp, setDataGalleryTemp] = useState({});
    const [galleryList, setGalleryList] = useState([]);

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('');

    const [loadingButton, setLoadingButton] = useState(false);

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

            let result = await api.addPhotoCarSale(data);
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

            let result = await api.addPhotoCarSale(data);
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

    //######################## -- ADICIONANDO UM VEÍCULO A VENDA NO BANCO -- #######################

    const handleSubmitFormCarSale = async () => {
        if (
            dataCover !== '' &&
            name !== '' &&
            title !== '' &&
            description !== ''
        ) {
            setLoadingButton(true);

            const result = await api.addCarSale(
                dataCover,
                galleryList,
                name,
                title,
                description,
                phone,
                price,
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
                setPhone('');
                setPrice('');

                navigation.goBack();
            } else {
                Alert.alert(
                    'Opss!',
                    'Erro ao enviar seu veículo, tente novamente mais tarde.',
                    // eslint-disable-next-line no-sparse-arrays
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
                );
            }
        } else {
            Alert.alert(
                'Opss!',
                'É obrigatório ter uma imagem de capa e preencher todos os campos!',
                // eslint-disable-next-line no-sparse-arrays
                [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
            );
        }
    };

    //################################# -- FUNÇÕES OPERACIONAIS -- #############################

    const handleBackView = () => {
        navigation.goBack();
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
                        ADICIONE O VEÍCULO
                    </Styled.TextInformation>
                </Styled.BoxTextInformation>
            </Styled.BoxIndicator>

            <Styled.ScrollFormCarSale>
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
                            {galleryList.map((url, index) => (
                                <Styled.Gallery
                                    key={index}
                                    source={{uri: url}}
                                />
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
                        <Styled.LabelInput>Veículo</Styled.LabelInput>
                        <Styled.InputText
                            value={title}
                            onChangeText={e => setTitle(e)}
                            placeholder="Digite o nome do veículo"
                            placeholderTextColor="rgba(191, 135, 86, 0.50)"
                        />
                    </Styled.BoxInput>

                    <Styled.BoxInput>
                        <Styled.LabelInput>
                            Detalhes do veículo
                        </Styled.LabelInput>
                        <Styled.InputText
                            description
                            value={description}
                            onChangeText={e => setDescription(e)}
                            multiline={true}
                            numberOfLines={5}
                            placeholder="Digite os detalhes do veículo"
                            placeholderTextColor="rgba(191, 135, 86, 0.50)"
                        />
                    </Styled.BoxInput>

                    <Styled.BoxInput>
                        <Styled.LabelInput>Telefone</Styled.LabelInput>
                        <Styled.InputText
                            value={phone}
                            onChangeText={e => setPhone(e)}
                            placeholder="Digite um telefone para contato"
                            placeholderTextColor="rgba(191, 135, 86, 0.50)"
                        />
                    </Styled.BoxInput>

                    <Styled.BoxInput>
                        <Styled.LabelInput>Valor</Styled.LabelInput>
                        <Styled.InputText
                            value={price}
                            onChangeText={e => setPrice(e)}
                            placeholder="Digite o valor "
                            placeholderTextColor="rgba(191, 135, 86, 0.50)"
                        />
                    </Styled.BoxInput>
                </Styled.BoxForm>

                <Styled.ButtonCarSaleSend onPress={handleSubmitFormCarSale}>
                    <Styled.TextButton>
                        {loadingButton
                            ? 'SALVANDO VEÍCULO ...'
                            : 'SALVAR VEÍCULO'}
                    </Styled.TextButton>
                </Styled.ButtonCarSaleSend>
            </Styled.ScrollFormCarSale>
        </Styled.Container>
    );
};
