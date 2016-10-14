var axios = require('axios');
var api_base_url = 'http://api.steveking.info/wp-json/wp/v2/';

var service = {
    getPost : function(type, slug){
        return axios
                .get(api_base_url + type + '?filter[name]='+slug)
                .then(function(response){
                    return response.data[0];
                });
    },
    getPosts: function(type){
        return axios
                .get(api_base_url + type + '')
                .then(function(response){
                    return response.data;
                });
    }
};

module.exports = service;
