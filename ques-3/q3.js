var req= new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    let c=0;
    var country_data=JSON.parse(this.response);
    country_data.forEach((country)=>{
        console.log(`${++c}.Name:${country.name},Capital:${country.capital}`)
        console.log("Flag:",country.flag)
        
    })
    
    
}

