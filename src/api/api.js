
import axios from 'axios';

let base = 'http://localhost:8090';

axios.defaults.headers = {
    'lang': 'cn', 
    'content-type': 'application/json',
    'legalTende': 1,
    'applicationId': 2,
    'applicationClientType': 1
}

export const exchangeList = params => { return axios.get(`/api/market-rest/exchange-market-info`, {params: params}).then((res) => {console.log(res)})};