'use strict';

console.log('Cargando funcion');
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});
exports.handler = (e, cta, callback) => {
  var params = {
    TableName : 'alumno'
  }; 
  docClient.scan(params, function(err, data){
      if(err){
          callback(err,null);
      }else{
          callback(null, data);
      }      
  });    
};