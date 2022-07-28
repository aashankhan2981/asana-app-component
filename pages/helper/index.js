const baseUrl = 'https://app.asana.com/api/1.0/'
exports.Config = function (method,data){
    var config
   if(!data) { config = {
        method: method, 
    headers: new Headers({
        'Authorization': ' Bearer 1/1202007597862425:7def826ae4e33fb6fc08c114406d969d', 
        'Content-Type': 'application/json'
    }), 
    
    }}
    else{
         config = {
            method: method, 
        headers: new Headers({
            'Authorization': ' Bearer 1/1202007597862425:7def826ae4e33fb6fc08c114406d969d', 
            'Content-Type': 'application/json'
        }), 
        body: data
        }
    }
    return config


}