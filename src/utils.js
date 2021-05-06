export function getData() {
	return fetch("https://37v2u26hzl.execute-api.us-east-1.amazonaws.com/dev/dogecoin/price")
	.then(handleResponse);
}

export function getMarketCap() {
    return fetch("https://37v2u26hzl.execute-api.us-east-1.amazonaws.com/dev/coins/marketCap")
    .then(handleResponse);
}

export function getHistoricalData() {
    return fetch("https://37v2u26hzl.execute-api.us-east-1.amazonaws.com/dev/dogecoin/history")
    .then(handleResponse);
}

export function getDogeStories(){
    return fetch("https://37v2u26hzl.execute-api.us-east-1.amazonaws.com/dev/dogecoin/stories")
    .then(handleResponse);
}

export function getDogeExchanges(){
    return fetch("https://37v2u26hzl.execute-api.us-east-1.amazonaws.com/dev/dogecoin/exchanges")
    .then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}