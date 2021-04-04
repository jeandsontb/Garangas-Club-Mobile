import styled from 'styled-components/native';

export default {
    Container: styled.View`
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
    `,

    TextInformation: styled.Text`
        color: #fff;
        font-size: 20px;
        font-family: TrainOne-Regular;
    `,

    ButtonAdd: styled.TouchableOpacity`
        width: 60px;
        height: 60px;
        justify-content: center;
        align-items: center;
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

    BoxCarSaleMember: styled.View`
        margin-top: 10px;
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

    BoxButtonsOptions: styled.View`
        flex-direction: row;
        width: 100%;
        height: 50px;
        margin-top: -60px;
        align-items: flex-start;
        justify-content: flex-end;
    `,

    ButtonImageDelete: styled.TouchableOpacity`
        background-color: #ff0000;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        align-items: center;
        margin-right: 10px;
        justify-content: center;
    `,

    ButtonImageEdit: styled.TouchableOpacity`
        background-color: #0000ff;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        align-items: center;
        margin-right: 10px;
        justify-content: center;
    `,
};
