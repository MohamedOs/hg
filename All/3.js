
    
var arr3 = [];
var vars3={};
function cat(city,index){
//alert("fdg");
if(index==0){
var queryIndexCat='http://'+nation+'.dubizzle.com/ar/'+city+'/cars/search/';
	}else if(index==1){
var queryIndexCat='http://'+nation+'.dubizzle.com/ar/'+city+'/items-for-sale/search/';
	}else if(index==2){
var queryIndexCat='http://'+nation+'.dubizzle.com/ar/'+city+'/property-for-rent/search/';
	}else if(index==3){
var queryIndexCat='http://'+nation+'.dubizzle.com/ar/'+city+'/property-for-sale/search/';
	}else if(index==4){
var queryIndexCat='http://'+nation+'.dubizzle.com/ar/'+city+'/jobs/search/';
	}	

var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() { 
var select = soupselect.select;

var body=xhr.responseText;
var handler = new htmlparser.DefaultHandler(function(err, dom) {
	if (err) {
		alert('Error: ' + err);
	} else {
		vars3.data=select(dom,'ul.d-nav__cat.d-nav__cat--show .d-nav__item a');
		var listHref=select(dom,'ul.d-nav__cat.d-nav__cat--show .d-nav__item a');
         for(var i=2;i<listHref.length;i++){
         	arr3.push({
                 title:listHref[i].children[5].children[0].data,
                 href:listHref[i].attribs.href,
                  });
         }
         Ti.API.info(arr3);
	}
});
var parser = new htmlparser.Parser(handler);
parser.parseComplete(body);
};
xhr.onerror = function() {
    Titanium.API.info('error');
};
xhr.open("GET",queryIndexCat);
xhr.send();

}
