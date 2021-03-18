function browseDates(dest, source, out, inb){
    var unirest = require("unirest");

    var req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/"+ source+"/"+ dest+"/" + out);

    req.query({
        "inboundpartialdate": inb
    });

    req.headers({
        "x-rapidapi-key": "30ab466ff2msh071da4b43ba287dp1340ccjsn11eedacfad45",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "useQueryString": true
    });


    req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
        return res.body; 
    });


}
