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

    Text: styled.Text`
        color: #fff;
        font-size: 24px;
        font-family: TrainOne-Regular;
    `,

    BoxContentCarSale: styled.View`
        flex: 1;
        padding-top: 10px;
        padding-bottom: 20px;
        background-color: #d7d7d9;
    `,

    ScrollBoxCarSale: styled.ScrollView`
        padding-left: 15px;
        padding-right: 15px;
    `,

    InfoCarSaleNull: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 20%;
    `,

    TextCarSaleNull: styled.Text`
        font-family: Roboto-Medium;
        font-size: 22px;
        text-align: center;
        color: #8c2f1b;
    `,

    BoxCarSale: styled.TouchableOpacity`
        margin-bottom: 10px;
        width: 100%;
        height: 130px;
        border-radius: 10px;
        overflow: hidden;
    `,

    ImageCarSale: styled.Image`
        width: 100%;
        height: 100%;
    `,

    BoxTitle: styled.View`
        position: absolute;
        top: 5px;
        left: 5px;
        width: 85%;
        height: 35px;
        background-color: rgba(140, 47, 27, 0.85);
        border-top-right-radius: 30px;
        padding-left: 10px;
    `,

    TextTitle: styled.Text`
        font-family: Roboto-Medium;
        font-size: 18px;
        color: #fff;
    `,
};
