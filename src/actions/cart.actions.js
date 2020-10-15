import {cartConstants} from '../constants';
import firebase from 'firebase';

export const cartActions = {
    sendOrder,
};

function sendOrder(user, goodsToSend){

    firebase.database().ref('UserInfo').set({
        name: user.name,
        surname: user.surname,
        address: user.address,
        phone: user.phone,
        goods: goodsToSend
    });

    localStorage.clear();

    return {
        type: cartConstants.SEND_ORDER,
        payload: {}
    }
}
