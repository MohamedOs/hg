var vars5={};
var arr5 = [];
var arrImg5=[];
var arrContent5=[];
function singlePost5(link){
var contentVars5="";
var adInfoVars5="";
//activityIndicator.show();

var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
	 
var select = soupselect.select;

var body=xhr.responseText;
var handler = new htmlparser.DefaultHandler(function(err, dom) {
	if (err) {
		alert('Error: ' + err);
	} else {
		vars5.data=select(dom,'div.u-c.u-c--12o12.u-helper--margin-v-large div p');
		var image,content,phone,content2,content3;
		image=select(dom,'.rsImg');
		//Ti.API.info(image);
		if(image !="null"){
		for(var i=0;i<image.length;i++){
			arrImg5.push(image[i].attribs.src);
		//	Ti.API.info(image[i].attribs.src);
		}
		}
		content=select(dom,'div.u-c.u-c--12o12.u-helper--margin-v-large div p');
		//Ti.API.info(content[0].children[0].data);
		phone=select(dom,'span.contact-number');
		//Ti.API.info(phone[0].children[0].data);
		content2=select(dom,'.u-ml__lbl');
		content3=select(dom,'.u-ml__val');
		for(var i=0;i<content2.length;i++){
			arrContent5.push(content2[i].children[0].data+" : "+content3[i].children[0].data +"<br>");
		}
		if(phone){
			if(phone[0]){
				if(phone[0].children){
					if(phone[0].children[0]){
						var phoneVar=phone[0].children[0].data;		
					}else{
						var phoneVar="00";	
					}
				}else{
					var phoneVar="00";		
				}
		
			}else{
			var phoneVar="00";		
			}
		
		}else{
		var phoneVar="00";	
		}
		
	        arr5.push({
                image:arrImg5,
                content:content[0].children[0].data,
                phone:phoneVar,
                content2:arrContent5
                  });
                Ti.API.info(arr5[0]);
                //activityIndicator.hide();
	}
});
 
var parser = new htmlparser.Parser(handler);
parser.parseComplete(body);


};
xhr.onerror = function() {
    Titanium.API.info('error');
};
var url2="http://tunisie.dubizzle.com"+link;
xhr.open("GET",url2);
xhr.send();
}
