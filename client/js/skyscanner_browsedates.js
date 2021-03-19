function browsedates(destination, origin, out, inb){
    console.log("HIIIIIIIJADL:SKJASLFH");
    var userMarket = "US";
    var currency = "USD"; 
    var locale = "en-US"; 
    var destiration = destination; 

    var departureDate = out; 
    var returnDate = inb; 

    var queryString = userMarket + '/' + currency + '/' + locale + '/' +
                 origin + '/' + destiration + '/' + departureDate + '/' + returnDate;
    
    unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/" + queryString)
    .header("x-rapidapi-key", "30ab466ff2msh071da4b43ba287dp1340ccjsn11eedacfad45")
    .header("x-rapidapi-host", "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com")
    .end(function (result) {
       result.body.Quotes.forEach(q => printFlightSearchResult(q, result.body))
      
    });

}

function printFlightSearchResult( quote, apiResponse)
{
   var places = apiResponse.Places;
   var carriers = apiResponse.Carriers;
   var origOut = places.find(p => p.PlaceId == quote.OutboundLeg.OriginId);
   var destOut = places.find(p => p.PlaceId == quote.OutboundLeg.DestinationId);
  
   var retOrig = places.find(p => p.PlaceId == quote.InboundLeg.OriginId);
   var retDest = places.find(p => p.PlaceId == quote.InboundLeg.DestinationId);
   var oneWayCarrier = carriers.find(c => c.CarrierId == quote.OutboundLeg.CarrierIds[0]);
   var returnCarrier = carriers.find(c => c.CarrierId == quote.InboundLeg.CarrierIds[0]);
   console.log(`The cheapest ${quote.Direct ? "" : "in"}direct flight is
   on ${quote.OutboundLeg.DepartureDate}
   from ${origOut.CityName} (${origOut.IataCode} - ${origOut.Name}) ` +
   `to ${destOut.CityName} (${destOut.IataCode} - ${destOut.Name})
   operated by ${oneWayCarrier.Name}
   and returning
  
   on ${quote.InboundLeg.DepartureDate}
   from ${retOrig.CityName} (${retOrig.IataCode} - ${retOrig.Name}) `+
   `to ${retDest.CityName} (${retDest.IataCode} - ${retDest.Name})
   operated by ${returnCarrier.Name}
   will cost you ${quote.MinPrice} ${apiResponse.Currencies[0].Code}
   `);
}
