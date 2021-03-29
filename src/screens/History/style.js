import styled from 'styled-components/native';

export default {
    Container: styled.View`
        flex: 1;
    `,

    BoxIndicator: styled.View`
        width: 100%;
        height: 60px;
        background-color: #bf8756;
        justify-content: center;
        align-items: center;
    `,

    TextIndicator: styled.Text`
        color: #fff;
        font-size: 24px;
        font-family: TrainOne-Regular;
    `,

    BoxContent: styled.View`
        flex: 1;
        background-color: #d7d7d9;
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 20px;
    `,

    BoxHistory: styled.View`
        background-color: #f5fffa;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
        height: 100%;
    `,

    BoxImageContent: styled.View`
        width: 100%;
        height: 140px;
        overflow: hidden;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    `,

    ImageContent: styled.Image`
        width: 100%;
        height: 100%;
    `,

    BoxTextHistory: styled.View`
        width: 100%;
        padding-left: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    `,

    TextHistory: styled.Text`
        color: #8c2f1b;
        font-size: 20px;
        font-family: TrainOne-Regular;
    `,

    Separator: styled.View`
        width: 85%;
        height: 3px;
        margin-top: 2px;
        margin-bottom: 15px;
        background-color: #8c2f1b;
    `,

    BoxTextHistoryDescription: styled.View`
        flex: 1;
        margin-bottom: 20px;
        padding-left: 10px;
        padding-right: 10px;
    `,

    ScrollViewHistoryDescription: styled.ScrollView`
        width: 100%;
        height: 100%;
        padding-right: 10px;
    `,

    TextDescriptionHistory: styled.Text`
        color: #8c2f1b;
        font-size: 18px;
        font-family: Roboto-Regular;
        text-align: justify;
    `,

    Text: styled.Text``,
};
