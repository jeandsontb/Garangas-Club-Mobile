import styled from 'styled-components/native';

export default {
    Container: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: #d7d7d9;
    `,

    BoxImageContainer: styled.View`
        align-items: center;
        height: 140px;
        width: 100%;
        margin-bottom: 60px;
    `,

    BoxFormContainer: styled.View`
        width: 100%;
    `,

    BoxInput: styled.View`
        flex-direction: row;
        margin-left: 10%;
        width: 80%;
        height: 50px;
        margin-bottom: 10px;
    `,

    Logo: styled.Image`
        width: 150px;
        height: 140px;
    `,

    BoxFormInput: styled.View`
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #000;
        height: 115px;
        width: 100%;
        padding-left: 10%;
        padding-right: 10%;
    `,

    IconInput: styled.View`
        width: 30px;
        height: 50px;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background-color: #f5fffa;
    `,

    IconInputShowPasswordButton: styled.TouchableOpacity`
        width: 30px;
        height: 50px;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #f5fffa;
    `,

    InputLogin: styled.TextInput`
        flex: 1;
        height: 50px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #f5fffa;
        margin-bottom: 15px;
        padding-left: 5px;
        padding-right: 5px;
        font-family: Roboto-Regular;
        font-size: 16px;
        color: #8c2f1b;
    `,

    InputPassword: styled.TextInput`
        flex: 1;
        height: 50px;
        background-color: #f5fffa;
        margin-bottom: 15px;
        padding-left: 5px;
        padding-right: 5px;
        font-family: Roboto-Regular;
        font-size: 16px;
        color: #8c2f1b;
    `,

    ButtonSend: styled.TouchableOpacity`
        flex-direction: row;
        margin-left: 10%;
        width: 80%;
        height: 50px;
        background-color: #bf8756;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    `,

    TextButton: styled.Text`
        margin-right: 10px;
        color: #f5fffa;
        font-size: 18px;
        font-family: Roboto-Regular;
    `,

    BoxInformation: styled.View`
        width: 80%;
        margin-left: 10%;
        margin-top: 25px;
    `,

    TextStrong: styled.Text`
        font-weight: bold;
    `,

    TextInformation: styled.Text`
        font-family: Roboto-Regular;
        font-size: 12px;
        color: #8c2f1b;
        text-align: justify;
    `,

    BoxButtonBack: styled.TouchableOpacity`
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 15px;
        left: 15px;
        width: 100px;
        height: 36px;
        border-radius: 18px;
        background-color: #f5fffa;
    `,

    TextButtonBack: styled.Text`
        font-family: Roboto-Regular;
        margin-left: 10px;
        font-size: 14px;
        color: #8c2f1b;
    `,
};
