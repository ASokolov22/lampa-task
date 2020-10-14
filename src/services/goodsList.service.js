import axios from 'axios';

export const goodsListService = {
    getAllGoods
};

function getAllGoods(){
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=6`,
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.error(error);
                reject();
            })
    })
}