var arr3 = [];
var vars3={};
function cat(city,index){
if(city.length<2){
  city="/";
}
//alert(city);
var propertyForRent=[{"title":" غرف للإيجار (مشاركة سكن)","href":"/ar/"+city+"/property-for-rent/rooms-for-rent/search/"},{"title":"شاليهات / شقق سياحية","href":"/ar/"+city+"/property-for-rent/vacation-rentals/search/"},{"title":"شقة للإيجار","href":"/ar/"+city+"/property-for-rent/apartments-for-rent/search/"},{"title":"عقار تجارى للإيجار","href":"/ar/"+city+"/property-for-rent/commercial-for-rent/search/"},{"title":"فيلا للإيجار","href":"/ar/"+city+"/property-for-rent/villas-for-rent/search/"},{"title":"مطلوب للإيجار","href":"/ar/"+city+"/property-for-rent/rentals-wanted/search/"}];
var carsFor=[{"title":"أستون مارتن","href":"/ar/"+city+"/cars/aston-martin/search/"},{"title":"أوبل","href":"/ar/"+city+"/cars/opel/search/"},{"title":"أودي","href":"/ar/"+city+"/cars/audi/search/"},{"title":"أوليوم","href":"/ar/"+city+"/cars/oullim/search/"},{"title":"إنفينيتي","href":"/ar/"+city+"/cars/infiniti/search/"},{"title":"اكورا","href":"/ar/"+city+"/cars/acura/search/"},{"title":"الفا روميو","href":"/ar/"+city+"/cars/alfa-romeo/search/"},{"title":"اللوتس","href":"/ar/"+city+"/cars/lotus/search/"},{"title":"ايسوزو","href":"/ar/"+city+"/cars/isuzu/search/"},{"title":"بروتون","href":"/ar/"+city+"/cars/proton/search/"},{"title":"بفوري","href":"/ar/"+city+"/cars/bufori/search/"},{"title":"بنتلي","href":"/ar/"+city+"/cars/bentley/search/"},{"title":"بوجاتي","href":"/ar/"+city+"/cars/bugatti/search/"},{"title":"بورشه","href":"/ar/"+city+"/cars/porsche/search/"},{"title":"بويك","href":"/ar/"+city+"/cars/buick/search/"},{"title":"بوينتك","href":"/ar/"+city+"/cars/pontiac/search/"},{"title":"بي ام دبليو","href":"/ar/"+city+"/cars/bmw/search/"},{"title":"بيجو","href":"/ar/"+city+"/cars/peugeot/search/"},{"title":"بيزاريني","href":"/ar/"+city+"/cars/bizzarrini/search/"},{"title":"تاتا","href":"/ar/"+city+"/cars/tata/search/"},{"title":"تويوتا","href":"/ar/"+city+"/cars/toyota/search/"},{"title":"جاجوار","href":"/ar/"+city+"/cars/jaguar/search/"},{"title":"جي ام سي","href":"/ar/"+city+"/cars/gmc/search/"},{"title":"جيب","href":"/ar/"+city+"/cars/jeep/search/"},{"title":"دايهاتسو","href":"/ar/"+city+"/cars/daihatsu/search/"},{"title":"دايو","href":"/ar/"+city+"/cars/daewoo/search/"},{"title":"دودج","href":"/ar/"+city+"/cars/dodge/search/"},{"title":"ي لوريان","href":"/ar/"+city+"/cars/delorean/search/"},{"title":"روفر","href":"/ar/"+city+"/cars/rover/search/"},{"title":"رولز رويس","href":"/ar/"+city+"/cars/rolls-royce/search/"},{"title":"رينو","href":"/ar/"+city+"/cars/renault/search/"},{"title":"ساب","href":"/ar/"+city+"/cars/saab/search/"},{"title":"سانج يونج","href":"/ar/"+city+"/cars/ssang-yong/search/"},{"title":"سبيرانزا","href":"/ar/"+city+"/cars/speranza/search/"},{"title":"سكودا","href":"/ar/"+city+"/cars/skoda/search/"},{"title":"سمارت","href":"/ar/"+city+"/cars/smart/search/"},{"title":"سوبارو","href":"/ar/"+city+"/cars/subaru/search/"},{"title":"سوزوكي","href":"/ar/"+city+"/cars/suzuki/search/"},{"title":"سي إم سي","href":"/ar/"+city+"/cars/cmc/search/"},{"title":"سيات","href":"/ar/"+city+"/cars/seat/search/"},{"title":"سيتروين","href":"/ar/"+city+"/cars/citroen/search/"},{"title":"شيفروليه","href":"/ar/"+city+"/cars/chevrolet/search/"},{"title":"فورد","href":"/ar/"+city+"/cars/ford/search/"},{"title":"فولفو","href":"/ar/"+city+"/cars/volvo/search/"},{"title":"فولكسفاغن","href":"/ar/"+city+"/cars/volkswagen/search/"},{"title":"فيات","href":"/ar/"+city+"/cars/fiat/search/"},{"title":"فيراري","href":"/ar/"+city+"/cars/ferrari/search/"},{"title":"كاديلاك","href":"/ar/"+city+"/cars/cadillac/search/"},{"title":"كرايسلر","href":"/ar/"+city+"/cars/chrysler/search/"},{"title":"كماليات السيارات","href":"/ar/"+city+"/cars/car-accessories/search/"},{"title":"كيا","href":"/ar/"+city+"/cars/kia/search/"},{"title":"لادا","href":"/ar/"+city+"/cars/lada/search/"},{"title":"لامبورغينى","href":"/ar/"+city+"/cars/lamborghini/search/"},{"title":"لاند روفر","href":"/ar/"+city+"/cars/land-rover/search/"},{"title":"لانسيا","href":"/ar/"+city+"/cars/lancia/search/"},{"title":"لكزس","href":"/ar/"+city+"/cars/lexus/search/"},{"title":"لينكولن","href":"/ar/"+city+"/cars/lincoln/search/"},{"title":"مازدا","href":"/ar/"+city+"/cars/mazda/search/"},{"title":"مازيراتي","href":"/ar/"+city+"/cars/maserati/search/"},{"title":"ماكلارين","href":"/ar/"+city+"/cars/mclaren/search/"},{"title":"مايباخ","href":"/ar/"+city+"/cars/maybach/search/"},{"title":"مرسيدس بنز","href":"/ar/"+city+"/cars/mercedes-benz/search/"},{"title":"ميتسوبيشي","href":"/ar/"+city+"/cars/mitsubishi/search/"},{"title":"ميركري","href":"/ar/"+city+"/cars/mercury/search/"},{"title":"ميني","href":"/ar/"+city+"/cars/mini/search/"},{"title":"نوع أخر","href":"/ar/"+city+"/cars/other-make/search/"},{"title":"نيسان","href":"/ar/"+city+"/cars/nissan/search/"},{"title":"هامر","href":"/ar/"+city+"/cars/hummer/search/"},{"title":"هوندا","href":"/ar/"+city+"/cars/honda/search/"},{"title":"هيونداي","href":"/ar/"+city+"/cars/hyundai/search/"}];
var itemsForSale=[{"title":"آلات موسيقية","href":"/ar/"+city+"/items-for-sale/musical-instruments/search/"},{"title":"أجهزة وألعاب فيديو","href":"/ar/"+city+"/items-for-sale/video-games-consoles/search/"},{"title":"أغراض مطلوبة","href":"/ar/"+city+"/items-for-sale/items-wanted/search/"},{"title":"أفلام وموسيقى","href":"/ar/"+city+"/items-for-sale/movies-music/search/"},{"title":"ألعاب ومقتنيات","href":"/ar/"+city+"/items-for-sale/toys-collectibles/search/"},{"title":"أي شيء آخر","href":"/ar/"+city+"/items-for-sale/everything-else/search/"},{"title":"إلكترونيات وأجهزة منزلية","href":"/ar/"+city+"/items-for-sale/electronics-home-appliances/search/"},{"title":"المنزل والحديقة","href":"/ar/"+city+"/items-for-sale/home-garden/search/"},{"title":"تجارة وصناعة","href":"/ar/"+city+"/items-for-sale/business-industrial/search/"},{"title":"تذاكر وقسائم","href":"/ar/"+city+"/items-for-sale/tickets-vouchers/search/"},{"title":"حيوانات أليفة","href":"/ar/"+city+"/items-for-sale/pets/search/"},{"title":"دراجات نارية","href":"/ar/"+city+"/items-for-sale/motorcycles/search/"},{"title":"قوارب","href":"/ar/"+city+"/items-for-sale/boats/search/"},{"title":"كاميرات وتصوير","href":"/ar/"+city+"/items-for-sale/cameras-imaging/search/"},{"title":"كتب","href":"/ar/"+city+"/items-for-sale/books/search/"},{"title":"كمبيوتر وتابلت","href":"/ar/"+city+"/items-for-sale/computers-tablets/search/"},{"title":"مجوهرات وساعات","href":"/ar/"+city+"/items-for-sale/jewelry-watches/search/"},{"title":"مستلزمات الأطفال","href":"/ar/"+city+"/items-for-sale/baby-items/search/"},{"title":"مستلزمات رياضة","href":"/ar/"+city+"/items-for-sale/sporting-goods/search/"},{"title":"ملابس واكسسوارات","href":"/ar/"+city+"/items-for-sale/clothing-accessories/search/"},{"title":"موبايلات وملحقاتها","href":"/ar/"+city+"/items-for-sale/mobile-phones-accessories/search/"}];
var propertyForSale=[{"title":"أرض للبيع","href":"/ar/"+city+"/property-for-sale/land-for-sale/search/"},{"title":"شقة للبيع","href":"/ar/"+city+"/property-for-sale/apartments-for-sale/search/"},{"title":"عقار تجاري للبيع","href":"/ar/"+city+"/property-for-sale/commercial-for-sale/search/"},{"title":"فيلا للبيع","href":"/ar/"+city+"/property-for-sale/villas-for-sale/search/"},{"title":"وحدات متعددة للبيع","href":"/ar/"+city+"/property-for-sale/multiple-units-for-sale/search/"}];
var jobsFor=[{"title":"إعلام","href":"/ar/"+city+"/jobs/media/search/"},{"title":"إنشاءات","href":"/ar/"+city+"/jobs/construction/search/"},{"title":"بنوك / مالية","href":"/ar/"+city+"/jobs/bankfinance/search/"},{"title":"تسوية / علاقات عامة","href":"/ar/"+city+"/jobs/marketingpr/search/"},{"title":"تطوير الأعمال","href":"/ar/"+city+"/jobs/business-development/search/"},{"title":"تعليم","href":"/ar/"+city+"/jobs/education/search/"},{"title":"تكنولوجيا المعلومات / إتصالات","href":"/ar/"+city+"/jobs/ittelecom/search/"},{"title":"توظيف / موارد بشرية","href":"/ar/"+city+"/jobs/hrrecruiting/search/"},{"title":"سكرتارية","href":"/ar/"+city+"/jobs/secretarial/search/"},{"title":"سياحة وفنادق وضيافة","href":"/ar/"+city+"/jobs/hospitality/search/"},{"title":"طب / صحة","href":"/ar/"+city+"/jobs/medicalhealth/search/"},{"title":"عمارة / هندسة","href":"/ar/"+city+"/jobs/architectureengineering/search/"},{"title":"عمل إداري","href":"/ar/"+city+"/jobs/executive/search/"},{"title":"عمل إستشاري","href":"/ar/"+city+"/jobs/consulting/search/"},{"title":"فنون / تصميم","href":"/ar/"+city+"/jobs/artdesign/search/"},{"title":"مبيعات","href":"/ar/"+city+"/jobs/sales/search/"},{"title":"محاسبة","href":"/ar/"+city+"/jobs/accounting/search/"},{"title":"محلات تجارية","href":"/ar/"+city+"/jobs/retail/search/"},{"title":"نفط / غاز","href":"/ar/"+city+"/jobs/oilgas/search/"},{"title":"وظائف اخرى","href":"/ar/"+city+"/jobs/other-jobs/search/"},{"title":"يبحث عن عمل","href":"/ar/"+city+"/jobs/jobs-wanted/search/"}];

vars3.data=city;
if(index==0){
arr3=carsFor;
}else if(index==1){
arr3=itemsForSale;
}else if(index==2){
arr3=propertyForRent;
}else if(index==3){
arr3=propertyForSale;
}else if(index==4){
arr3=jobsFor;
}
}
