var req= new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    let c=0;
    var country_data=JSON.parse(this.response);
    function curr(s){
        let temp=0;
        s.currencies.forEach(curr=>{
            if(curr.code==="USD")
                temp++;
        })
        if(temp>0)
            return true;
        else
            return false;
    }
    var countries_dollar=country_data.filter(curr);
    console.log("Countries which use US Dollars as Currency:")
    countries_dollar.forEach((s)=>{console.log(`${++c}.${s.name}`)});
}


