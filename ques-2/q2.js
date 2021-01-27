var req= new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    let c=0;
    var country_data=JSON.parse(this.response);
    var countries_asia=country_data.filter(s=>s.population<200000);
    console.log("Countries with less than 2L population:");
    countries_asia.forEach((s)=>console.log(`${++c}.${s.name},Population:${s.population}`));
    
}


