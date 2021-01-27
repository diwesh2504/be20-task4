var req= new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    let sum=0;
    var country_data=JSON.parse(this.response);
    sum=country_data.reduce((acc,pop)=>acc+pop.population,0);
    console.log("Total population of countries:",sum);
    
}


