(function(Vue,axiox){
    // 1.配置域名baseURL
    //2.将默认的返回数据 进行处理
    const Axios = axios.create({
        baseURL:"https://apimusic.linweiqin.com/",
        timeout:10000,
        //自定义请求头
        // 自定义的请求头
        // headers:{
        //  'X-Custom-Header': 'web0316'
        // }
        // 默认允许的请求头 Content-Type
        // headers:{
        //  'Content-Type': 'application/json'
        // }
    });
    //添加请求的拦截器
    Axios.interceptors.request.use(function(config){
        // console.log(config);
        //token
        // config.params["token"] = "web031620200608";
        // config.params["key"] = "web0316";
        //请求资源的是否表明在加载
        vm.musicLoad = true;
        return config;
    },function(error){
        return Promise.reject(error);
    });
    //返回拦截器
    Axios.interceptors.response.use(function(response){
        //只获取返回数据中的data部分
        // console.log(response);
        //响应的时候表明加载已完成
        vm.musicLoad = false;
        return response.data;
    },function(error){
        return Promise.reject(error);
    })
    window.Axios = Axios;
})(Vue, axios);