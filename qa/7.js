var arr = [];
var vars={};
function pri(priv,pageNumber){
vars.city=priv;
var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function () {
var select = soupselect.select;
var body=xhr.responseText;
var handler = new htmlparser.DefaultHandler(function(err, dom) {
	if (err) {
		alert('Error: ' + err);
	} else {
		}
	}
});
var parser = new htmlparser.Parser(handler);
parser.parseComplete(body);
};
xhr.onerror = function() {
    Titanium.API.info('error');
};
var url="https://mobile.twitter.com/search?q=tahrirnews&s=hash";
xhr.open("GET",url);
xhr.send();
}
