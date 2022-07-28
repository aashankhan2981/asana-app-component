


let counter = 0
var personalAccessToken = '1/1202007597862425:7def826ae4e33fb6fc08c114406d969d';
const updateTask = async (item,index,custom_fields,Config)=>{


    let indexofobj
    let rankObj =  custom_fields.find((item,index)=>{ 
        if(item.name=='rank'){
        indexofobj = index}
        return item.name=='rank'
     })
    let rankValue = rankObj?.number_value
    if (typeof rankValue =='number' && rankValue>0){
        rankObj['number_value'] = counter
        custom_fields[indexofobj] = rankObj
        item['custom_fields'] = custom_fields
        counter= counter + 1
          
          
          const response = await fetch(`https://app.asana.com/api/1.0/tasks/${item.gid}?opt_pretty=true`, Config('put',JSON.stringify({
            "data": {
                "custom_fields": {
                    "1202416272004866": counter,
                  },
            }
          }))  )

        const data =  await response.json()
        console.log(data.data.custom_fields,'here si resposehs');

        
        
       
        
      
       
        
    }
  

  

}



var oldList
const ranking = function(asana,Config){
    console.log(asana,'old list');

    var client = asana.Client.create().useAccessToken(personalAccessToken);
    counter = 0
    console.log(client,'old list');

    client.tasks.getTasksForProject('1202007546376636', {param: "value", param: "value", opt_pretty: true,opt_fields:'custom_fields'})
    .then((result) => {
          
          oldList  = result.data
          oldList.map((item,index)=>{
        
          console.log(oldList,'old list');

           updateTask(item,index,item?.custom_fields,Config)
          
        
    
          })
     




   
         
    }).catch((e)=>{
        console.log(e,'error throw')
    })
     
   
  
    
}
module.exports = {
    ranking
}

