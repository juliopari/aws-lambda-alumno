const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
exports.handler = (e, cta, callback) => {
  var params = {
    Item: {
        id: "6",
        nombre: "julio",
        apellido: "pari"
    },
    TableName: 'alumno'
  };  
  docClient.put(params, function(err, data){
      if(err){
          callback(err,null);
      }else{
          callback(null, "Información guardada");
      }      
  });    
};