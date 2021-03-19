function browseDates(dest, source, out, inb){
    var unirest = require("unirest");
    console.log(dest); 
    response = unirest.post("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0",
      headers={
        "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "30ab466ff2msh071da4b43ba287dp1340ccjsn11eedacfad45",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      params={
        "inboundDate": "2021-09-10",
        "cabinClass": "business",
        "children": 0,
        "infants": 0,
        "country": "US",
        "currency": "USD",
        "locale": "en-US",
        "originPlace": "SFO-sky",
        "destinationPlace": "LHR-sky",
        "outboundDate": "2021-09-01",
        "adults": 1
      }
    )

    var req = unirest("GET", "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/"+ source+"/"+ dest+"/" + out);
    console.log("working"); 
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


