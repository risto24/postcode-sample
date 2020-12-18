const axios = require('axios');

// http://zipcloud.ibsnet.co.jp/doc/apiを使用
axios.get('https://zipcloud.ibsnet.co.jp/api/search', {
  params: {
    zipcode: 1410021
  }
}).then((res) => {
  console.log(res.data.results[0]);
}).catch((err) => {
  console.log(err);
});
