import styled from 'styled-components/native';

export default {
    Container: styled.KeyboardAvoidingView`
        flex: 1;
    `,

    ScrollFormProject: styled.ScrollView`
        flex: 1;
    `,

    BoxIndicator: styled.View`
        flex-direction: row;
        width: 100%;
        height: 60px;
        background-color: #bf8756;
        align-items: center;
    `,

    BoxDrawer: styled.TouchableOpacity`
        width: 60px;
        height: 60px;
        justify-content: center;
        align-items: center;
    `,

    BoxTextInformation: styled.View`
        flex: 1;
        align-items: center;
        margin-left: -60px;
    `,

    TextInformation: styled.Text`
        color: #fff;
        font-size: 18px;
        font-family: TrainOne-Regular;
    `,

    BoxPhotoCover: styled.View`
        flex-direction: row;
        width: 100%;
        margin-top: 10px;
        padding-left: 10px;
    `,

    ButtonImg: styled.TouchableOpacity`
        width: 70px;
        height: 70px;
        background-color: #f5fffa;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        padding: 5px;
    `,

    TextButtonImg: styled.Text`
        text-align: center;
        font-size: 9px;
        color: #8c4f2b;
    `,

    BoxCover: styled.View`
        margin-left: 10px;
    `,

    ImageCover: styled.Image`
        width: 70px;
        height: 70px;
        border-radius: 5px;
    `,

    BoxPhotoThumb: styled.View`
        flex-direction: row;
        width: 100%;
        margin-top: 10px;
        padding-left: 10px;
        height: 70px;
    `,

    BoxScrollImages: styled.View`
        flex: 1;
        margin-left: 10px;
    `,

    ScrollImages: styled.ScrollView`
        height: 70px;
    `,

    GalleryThumbImagesEdit: styled.View`
        width: 70px;
        height: 70px;
        margin-right: 4px;
        border-radius: 5px;
        overflow: hidden;
    `,

    Gallery: styled.Image`
        width: 100%;
        height: 100%;
    `,

    ButtonRemovePhotoGallery: styled.TouchableOpacity`
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 26px;
        height: 26px;
        top: 4px;
        right: 4px;
        border-radius: 18px;
        background-color: #ff0000;
    `,

    BoxForm: styled.View`
        margin-top: 25px;
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
    `,

    BoxInput: styled.View`
        margin-bottom: 10px;
    `,

    LabelInput: styled.Text`
        font-size: 11px;
        font-family: Roboto-Regular;
        color: #bf8756;
    `,

    InputText: styled.TextInput`
        width: 100%;
        height: ${props => (props.description ? 150 : 50)}px;
        border-radius: 5px;
        background-color: #f5fffa;
        margin-top: 3px;
        color: #8c4f2b;
        font-size: 16px;
    `,

    ButtonProjectSend: styled.TouchableOpacity`
        margin-top: 15px;
        width: 90%;
        margin-left: 5%;
        background-color: #8c4f2b;
        border-radius: 5px;
        height: 50px;
        justify-content: center;
        align-items: center;
    `,

    TextButton: styled.Text`
        font-family: TrainOne-Regular;
        color: #fff;
        font-size: 16px;
    `,
};
