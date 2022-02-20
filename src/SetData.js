import * as AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from "parse"



//Back4App code: 
const appID = "i2Bzkljfy7JFTljRNZnWPTX4sBvbG8lLKvorufyT";
const jsID = "m6Mosv3S7aWfoAx0iIz6hYuk04CbBPMz98ZUPPpC";

  Parse.setAsyncStorage(AsyncStorage); 

  Parse.initialize(appID, jsID);

  Parse.serverURL = 'https://parseapi.back4app.com/'


  async function SetData(data){
    
      //create a new Parse Object instance

      const newFAQ = new Parse.Object("FAQ");

      newFAQ.set("faq", data)
 
      await newFAQ.save()
      
      .then((user) =>{
        window.localStorage.setItem("userFAQ", user.id); 
        
     console.log("New object created using obj id: " + window.localStorage.getItem("userId"))          
        }, (error) => {
      console.log('Error saving new person: ', error.message);
    }); 

  }




module.exports = SetData;



