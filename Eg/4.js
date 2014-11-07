var arr4 = [];
var vars4={};
function pri4(priv7,pageNumber){
var url="http://egypt.dubizzle.com"+priv7+"?page="+pageNumber;
//activityIndicatorCatt.show();
vars4.city=priv7;
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function () {
var select = soupselect.select;
var body=xhr.responseText;
var handler = new htmlparser.DefaultHandler(function(err, dom) {
if (err) {
alert('Error: ' + err);
} else {
vars4.data=select(dom,'a.d-listing__name');
var ds4 = vars4.data;
var photos=select(dom,'img.u-img__img');
//Ti.API.info(photos[0].attribs.src);
var titles=select(dom,'a.d-listing__name');
//Ti.API.info(titles[0].children[0].data);
var prices=select(dom,'div.d-listing__amount');
//Ti.API.info(prices[0].children[0].data);
var hrefs=select(dom,'a.d-listing__name');
//Ti.API.info(hrefs[0].attribs.href);
var places=select(dom,'div.d-listing__meta');
//Ti.API.info(places[0].children[1].children[0].data+' - '+places[0].children[3].children[0].data);
var dates=select(dom,'span.d-listing__date');
//Ti.API.info(dates[0].children[0].data);
for (var i=0;i<titles.length;i++) {
var imageVar,priceVar,titleVar,hrefVar,placeVar,dateVar;
titleVar=titles[i].children[0].data;
titleVar=titleVar.trim();
hrefVar=hrefs[i].attribs.href;
hrefVar=hrefVar.trim();
if(photos[i].attribs){
imageVar=photos[i].attribs.src;
imageVar=imageVar.trim();
}else{
imageVar="photos[0].attribs.src";
imageVar=imageVar.trim();
}
if(prices[i]){
priceVar=prices[i].children[0].data;
priceVar=priceVar.trim();
}else{
priceVar="-";
priceVar=priceVar.trim();
}
placeVar=places[i].children[1].children[0].data+' - '+places[i].children[3].children[0].data;
placeVar=placeVar.trim();
dateVar=dates[i].children[0].data;
dateVar=dateVar.trim();
arr4.push({
image:imageVar,
title:titleVar,
href:hrefVar,
price:priceVar,
place:placeVar,
date:dateVar
});
//
}
Ti.API.info(arr4);
// activityIndicatorCatt.hide();
}
});
var parser = new htmlparser.Parser(handler);
parser.parseComplete(body);
// Titanium.API.info(xhr.responseText);
};
xhr.onerror = function() {
Titanium.API.info('errorfhgdfgdf'+url);
};
//var url="http://qatar.dubizzle.com/ar/"+priv7+"/search/?page="+pageNumber;
xhr.open("GET",url);
xhr.send();
}
