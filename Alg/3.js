

var arr3 = [];
var vars3={};
function cat(city,index){
	
  
var propertyForRent=[
          {
          href : "/ar/"+city+"/property-for-rent/rooms-for-rent/search/",
          title : " \U063a\U0631\U0641 \U0644\U0644\U0625\U064a\U062c\U0627\U0631 (\U0645\U0634\U0627\U0631\U0643\U0629 \U0633\U0643\U0646)",
      },
          {
          href : "/ar/"+city+"/property-for-rent/vacation-rentals/search/",
          title : "\U0634\U0627\U0644\U064a\U0647\U0627\U062a / \U0634\U0642\U0642 \U0633\U064a\U0627\U062d\U064a\U0629",
      },
          {
          href : "/ar/"+city+"/property-for-rent/apartments-for-rent/search/",
          title : "\U0634\U0642\U0629 \U0644\U0644\U0625\U064a\U062c\U0627\U0631",
      },
          {
          href : "/ar/"+city+"/property-for-rent/commercial-for-rent/search/",
          title : "\U0639\U0642\U0627\U0631 \U062a\U062c\U0627\U0631\U064a \U0644\U0644\U0625\U064a\U062c\U0627\U0631",
      },
          {
          href : "/ar/"+city+"/property-for-rent/villas-for-rent/search/",
          title : "\U0641\U064a\U0644\U0627 \U0644\U0644\U0625\U064a\U062c\U0627\U0631",
      },
          {
          href : "/ar/"+city+"/property-for-rent/rentals-wanted/search/",
          title : "\U0645\U0637\U0644\U0648\U0628 \U0644\U0644\U0625\U064a\U062c\U0627\U0631",
      }
 ];
 
var carsFor=[
          {
          href : "/ar/"+city+"/cars/aston-martin/search/",
          title : "\U0623\U0633\U062a\U0648\U0646 \U0645\U0627\U0631\U062a\U0646",
      },
          {
          href : "/ar/"+city+"/cars/opel/search/",
          title : "\U0623\U0648\U0628\U0644",
      },
          {
          href : "/ar/"+city+"/cars/audi/search/",
          title : "\U0623\U0648\U062f\U064a",
      },
          {
          href : "/ar/"+city+"/cars/oullim/search/",
          title : "\U0623\U0648\U0644\U064a\U0648\U0645",
      },
          {
          href : "/ar/"+city+"/cars/infiniti/search/",
          title : "\U0625\U0646\U0641\U064a\U0646\U064a\U062a\U064a",
      },
          {
          href : "/ar/"+city+"/cars/acura/search/",
          title : "\U0627\U0643\U0648\U0631\U0627",
      },
          {
          href : "/ar/"+city+"/cars/alfa-romeo/search/",
          title : "\U0627\U0644\U0641\U0627 \U0631\U0648\U0645\U064a\U0648",
      },
          {
          href : "/ar/"+city+"/cars/lotus/search/",
          title : "\U0627\U0644\U0644\U0648\U062a\U0633",
      },
          {
          href : "/ar/"+city+"/cars/isuzu/search/",
          title : "\U0627\U064a\U0633\U0648\U0632\U0648",
      },
          {
          href : "/ar/"+city+"/cars/proton/search/",
          title : "\U0628\U0631\U0648\U062a\U0648\U0646",
      },
          {
          href : "/ar/"+city+"/cars/bufori/search/",
          title : "\U0628\U0641\U0648\U0631\U064a",
      },
          {
          href : "/ar/"+city+"/cars/bentley/search/",
          title : "\U0628\U0646\U062a\U0644\U064a",
      },
          {
          href : "/ar/"+city+"/cars/bugatti/search/",
          title : "\U0628\U0648\U062c\U0627\U062a\U064a",
      },
          {
          href : "/ar/"+city+"/cars/porsche/search/",
          title : "\U0628\U0648\U0631\U0634\U0647",
      },
          {
          href : "/ar/"+city+"/cars/buick/search/",
          title : "\U0628\U0648\U064a\U0643",
      },
          {
          href : "/ar/"+city+"/cars/pontiac/search/",
          title : "\U0628\U0648\U064a\U0646\U062a\U0643",
      },
          {
          href : "/ar/"+city+"/cars/bmw/search/",
          title : "\U0628\U064a \U0627\U0645 \U062f\U0628\U0644\U064a\U0648",
      },
          {
          href : "/ar/"+city+"/cars/peugeot/search/",
          title : "\U0628\U064a\U062c\U0648",
      },
          {
          href : "/ar/"+city+"/cars/bizzarrini/search/",
          title : "\U0628\U064a\U0632\U0627\U0631\U064a\U0646\U064a",
      },
          {
          href : "/ar/"+city+"/cars/tata/search/",
          title : "\U062a\U0627\U062a\U0627",
      },
          {
          href : "/ar/"+city+"/cars/toyota/search/",
          title : "\U062a\U0648\U064a\U0648\U062a\U0627",
      },
          {
          href : "/ar/"+city+"/cars/jaguar/search/",
          title : "\U062c\U0627\U0643\U0648\U0627\U0631",
      },
          {
          href : "/ar/"+city+"/cars/gmc/search/",
          title : "\U062c\U064a \U0627\U0645 \U0633\U064a",
      },
          {
          href : "/ar/"+city+"/cars/jeep/search/",
          title : "\U062c\U064a\U0628",
      },
          {
          href : "/ar/"+city+"/cars/daihatsu/search/",
          title : "\U062f\U0627\U064a\U0647\U0627\U062a\U0633\U0648",
      },
          {
          href : "/ar/"+city+"/cars/daewoo/search/",
          title : "\U062f\U0627\U064a\U0648",
      },
          {
          href : "/ar/"+city+"/cars/dodge/search/",
          title : "\U062f\U0648\U062f\U062c",
      },
          {
          href : "/ar/"+city+"/cars/delorean/search/",
          title : "\U062f\U064a \U0644\U0648\U0631\U064a\U0627\U0646",
      },
          {
          href : "/ar/"+city+"/cars/rover/search/",
          title : "\U0631\U0648\U0641\U0631",
      },
          {
          href : "/ar/"+city+"/cars/rolls-royce/search/",
          title : "\U0631\U0648\U0644\U0632 \U0631\U0648\U064a\U0633",
      },
          {
          href : "/ar/"+city+"/cars/renault/search/",
          title : "\U0631\U064a\U0646\U0648",
      },
          {
          href : "/ar/"+city+"/cars/saab/search/",
          title : "\U0633\U0627\U0628",
      },
          {
          href : "/ar/"+city+"/cars/ssang-yong/search/",
          title : "\U0633\U0627\U0646\U062c \U064a\U0648\U0646\U063a",
      },
          {
          href : "/ar/"+city+"/cars/speranza/search/",
          title : "\U0633\U0628\U064a\U0631\U0627\U0646\U0632\U0627",
      },
          {
          href : "/ar/"+city+"/cars/skoda/search/",
          title : "\U0633\U0643\U0648\U062f\U0627",
      },
          {
          href : "/ar/"+city+"/cars/smart/search/",
          title : "\U0633\U0645\U0627\U0631\U062a",
      },
          {
          href : "/ar/"+city+"/cars/subaru/search/",
          title : "\U0633\U0648\U0628\U0627\U0631\U0648",
      },
          {
          href : "/ar/"+city+"/cars/suzuki/search/",
          title : "\U0633\U0648\U0632\U0648\U0643\U064a",
      },
          {
          href : "/ar/"+city+"/cars/cmc/search/",
          title : "\U0633\U064a \U0625\U0645 \U0633\U064a",
      },
          {
          href : "/ar/"+city+"/cars/seat/search/",
          title : "\U0633\U064a\U0627\U062a",
      },
          {
          href : "/ar/"+city+"/cars/citroen/search/",
          title : "\U0633\U064a\U062a\U0631\U0648\U064a\U0646",
      },
          {
          href : "/ar/"+city+"/cars/chevrolet/search/",
          title : "\U0634\U064a\U0641\U0631\U0648\U0644\U064a\U0647",
      },
          {
          href : "/ar/"+city+"/cars/ford/search/",
          title : "\U0641\U0648\U0631\U062f",
      },
          {
          href : "/ar/"+city+"/cars/volvo/search/",
          title : "\U0641\U0648\U0644\U0641\U0648",
      },
          {
          href : "/ar/"+city+"/cars/volkswagen/search/",
          title : "\U0641\U0648\U0644\U0643\U0633\U0641\U0627\U063a\U0646",
      },
          {
          href : "/ar/"+city+"/cars/fiat/search/",
          title : "\U0641\U064a\U0627\U062a",
      },
          {
          href : "/ar/"+city+"/cars/ferrari/search/",
          title : "\U0641\U064a\U0631\U0627\U0631\U064a",
      },
          {
          href : "/ar/"+city+"/cars/cadillac/search/",
          title : "\U0643\U0627\U062f\U064a\U0644\U0627\U0643",
      },
          {
          href : "/ar/"+city+"/cars/chrysler/search/",
          title : "\U0643\U0631\U0627\U064a\U0633\U0644\U0631",
      },
          {
          href : "/ar/"+city+"/cars/car-accessories/search/",
          title : "\U0643\U0645\U0627\U0644\U064a\U0627\U062a \U0627\U0644\U0633\U064a\U0627\U0631\U0627\U062a",
      },
          {
          href : "/ar/"+city+"/cars/kia/search/",
          title : "\U0643\U064a\U0627",
      },
          {
          href : "/ar/"+city+"/cars/lada/search/",
          title : "\U0644\U0627\U062f\U0627",
      },
          {
          href : "/ar/"+city+"/cars/lamborghini/search/",
          title : "\U0644\U0627\U0645\U0628\U0648\U0631\U063a\U064a\U0646\U064a",
      },
          {
          href : "/ar/"+city+"/cars/land-rover/search/",
          title : "\U0644\U0627\U0646\U062f \U0631\U0648\U0641\U0631",
      },
          {
          href : "/ar/"+city+"/cars/lancia/search/",
          title : "\U0644\U0627\U0646\U0633\U064a\U0627",
      },
          {
          href : "/ar/"+city+"/cars/lexus/search/",
          title : "\U0644\U0643\U0632\U0633",
      },
          {
          href : "/ar/"+city+"/cars/lincoln/search/",
          title : "\U0644\U064a\U0646\U0643\U0648\U0644\U0646",
      },
          {
          href : "/ar/"+city+"/cars/mazda/search/",
          title : "\U0645\U0627\U0632\U062f\U0627",
      },
          {
          href : "/ar/"+city+"/cars/maserati/search/",
          title : "\U0645\U0627\U0632\U064a\U0631\U0627\U062a\U064a",
      },
          {
          href : "/ar/"+city+"/cars/mclaren/search/",
          title : "\U0645\U0627\U0643\U0644\U0627\U0631\U064a\U0646",
      },
          {
          href : "/ar/"+city+"/cars/maybach/search/",
          title : "\U0645\U0627\U064a\U0628\U0627\U062e",
      },
          {
          href : "/ar/"+city+"/cars/mercedes-benz/search/",
          title : "\U0645\U0631\U0633\U064a\U062f\U0633 \U0628\U0646\U0632",
      },
          {
          href : "/ar/"+city+"/cars/mitsubishi/search/",
          title : "\U0645\U064a\U062a\U0633\U0648\U0628\U064a\U0634\U064a",
      },
          {
          href : "/ar/"+city+"/cars/mercury/search/",
          title : "\U0645\U064a\U0631\U0643\U0631\U064a",
      },
          {
          href : "/ar/"+city+"/cars/mini/search/",
          title : "\U0645\U064a\U0646\U064a",
      },
          {
          href : "/ar/"+city+"/cars/other-make/search/",
          title : "\U0646\U0648\U0639 \U0623\U062e\U0631",
      },
          {
          href : "/ar/"+city+"/cars/nissan/search/",
          title : "\U0646\U064a\U0633\U0627\U0646",
      },
          {
          href : "/ar/"+city+"/cars/hummer/search/",
          title : "\U0647\U0627\U0645\U0631",
      },
          {
          href : "/ar/"+city+"/cars/honda/search/",
          title : "\U0647\U0648\U0646\U062f\U0627",
      },
          {
          href : "/ar/"+city+"/cars/hyundai/search/",
          title : "\U0647\U064a\U0648\U0646\U062f\U0627\U064a",
      }
  ];


var itemsForSale=[
          {
          href : "/ar/"+city+"/items-for-sale/musical-instruments/search/",
          title : "\U0622\U0644\U0627\U062a \U0645\U0648\U0633\U064a\U0642\U064a\U0629",
      },
          {
          href : "/ar/"+city+"/items-for-sale/video-games-consoles/search/",
          title : "\U0623\U062c\U0647\U0632\U0629 \U0648\U0623\U0644\U0639\U0627\U0628 \U0641\U064a\U062f\U064a\U0648",
      },
          {
          href : "/ar/"+city+"/items-for-sale/items-wanted/search/",
          title : "\U0623\U063a\U0631\U0627\U0636 \U0645\U0637\U0644\U0648\U0628\U0629",
      },
          {
          href : "/ar/"+city+"/items-for-sale/movies-music/search/",
          title : "\U0623\U0641\U0644\U0627\U0645 \U0648\U0645\U0648\U0633\U064a\U0642\U0649",
      },
          {
          href : "/ar/"+city+"/items-for-sale/toys-collectibles/search/",
          title : "\U0623\U0644\U0639\U0627\U0628 \U0648\U0645\U0642\U062a\U0646\U064a\U0627\U062a",
      },
          {
          href : "/ar/"+city+"/items-for-sale/everything-else/search/",
          title : "\U0623\U064a \U0634\U064a\U0621 \U0622\U062e\U0631",
      },
          {
          href : "/ar/"+city+"/items-for-sale/electronics-home-appliances/search/",
          title : "\U0625\U0644\U0643\U062a\U0631\U0648\U0646\U064a\U0627\U062a \U0648\U0623\U062c\U0647\U0632\U0629 \U0645\U0646\U0632\U0644\U064a\U0629",
      },
          {
          href : "/ar/"+city+"/items-for-sale/home-garden/search/",
          title : "\U0627\U0644\U0645\U0646\U0632\U0644 \U0648\U0627\U0644\U062d\U062f\U064a\U0642\U0629",
      },
          {
          href : "/ar/"+city+"/items-for-sale/business-industrial/search/",
          title : "\U062a\U062c\U0627\U0631\U0629 \U0648\U0635\U0646\U0627\U0639\U0629",
      },
          {
          href : "/ar/"+city+"/items-for-sale/tickets-vouchers/search/",
          title : "\U062a\U0630\U0627\U0643\U0631 \U0648\U0642\U0633\U0627\U0626\U0645",
      },
          {
          href : "/ar/"+city+"/items-for-sale/pets/search/",
          title : "\U062d\U064a\U0648\U0627\U0646\U0627\U062a \U0623\U0644\U064a\U0641\U0629",
      },
          {
          href : "/ar/"+city+"/items-for-sale/motorcycles/search/",
          title : "\U062f\U0631\U0627\U062c\U0627\U062a \U0646\U0627\U0631\U064a\U0629",
      },
          {
          href : "/ar/"+city+"/items-for-sale/boats/search/",
          title : "\U0642\U0648\U0627\U0631\U0628",
      },
          {
          href : "/ar/"+city+"/items-for-sale/cameras-imaging/search/",
          title : "\U0643\U0627\U0645\U064a\U0631\U0627\U062a \U0648\U062a\U0635\U0648\U064a\U0631",
      },
          {
          href : "/ar/"+city+"/items-for-sale/books/search/",
          title : "\U0643\U062a\U0628",
      },
          {
          href : "/ar/"+city+"/items-for-sale/computers-tablets/search/",
          title : "\U0643\U0645\U0628\U064a\U0648\U062a\U0631 \U0648\U062a\U0627\U0628\U0644\U062a",
      },
          {
          href : "/ar/"+city+"/items-for-sale/jewelry-watches/search/",
          title : "\U0645\U062c\U0648\U0647\U0631\U0627\U062a \U0648\U0633\U0627\U0639\U0627\U062a",
      },
          {
          href : "/ar/"+city+"/items-for-sale/baby-items/search/",
          title : "\U0645\U0633\U062a\U0644\U0632\U0645\U0627\U062a \U0627\U0644\U0623\U0637\U0641\U0627\U0644",
      },
          {
          href : "/ar/"+city+"/items-for-sale/sporting-goods/search/",
          title : "\U0645\U0633\U062a\U0644\U0632\U0645\U0627\U062a \U0631\U064a\U0627\U0636\U0629",
      },
          {
          href : "/ar/"+city+"/items-for-sale/clothing-accessories/search/",
          title : "\U0645\U0644\U0627\U0628\U0633 \U0648\U0627\U0643\U0633\U0633\U0648\U0627\U0631\U0627\U062a",
      },
          {
          href : "/ar/"+city+"/items-for-sale/mobile-phones-accessories/search/",
          title : "\U0645\U0648\U0628\U0627\U064a\U0644\U0627\U062a \U0648\U0645\U0644\U062d\U0642\U0627\U062a\U0647\U0627",
      }
 ];
 
 var propertyForSale=[
          {
          href : "/ar/"+city+"/property-for-sale/land-for-sale/search/",
          title : "\U0623\U0631\U0636 \U0644\U0644\U0628\U064a\U0639",
      },
          {
          href : "/ar/"+city+"/property-for-sale/apartments-for-sale/search/",
          title : "\U0634\U0642\U0629 \U0644\U0644\U0628\U064a\U0639",
      },
          {
          href : "/ar/"+city+"/property-for-sale/commercial-for-sale/search/",
          title : "\U0639\U0642\U0627\U0631 \U062a\U062c\U0627\U0631\U064a \U0644\U0644\U0628\U064a\U0639",
      },
          {
          href : "/ar/"+city+"/property-for-sale/villas-for-sale/search/",
          title : "\U0641\U064a\U0644\U0627 \U0644\U0644\U0628\U064a\U0639",
      },
          {
          href : "/ar/"+city+"/property-for-sale/multiple-units-for-sale/search/",
          title : "\U0648\U062d\U062f\U0627\U062a \U0645\U062a\U0639\U062f\U062f\U0629 \U0644\U0644\U0628\U064a\U0639",
      }
 ];
 
 var jobsFor=[
          {
          href : "/ar/"+city+"/jobs/media/search/",
          title : "\U0625\U0639\U0644\U0627\U0645",
      },
          {
          href : "/ar/"+city+"/jobs/construction/search/",
          title : "\U0625\U0646\U0634\U0627\U0621\U0627\U062a",
      },
          {
          href : "/ar/"+city+"/jobs/bankfinance/search/",
          title : "\U0628\U0646\U0648\U0643 / \U0645\U0627\U0644\U064a\U0629",
      },
          {
          href : "/ar/"+city+"/jobs/marketingpr/search/",
          title : "\U062a\U0633\U0648\U064a\U0642 / \U0639\U0644\U0627\U0642\U0627\U062a \U0639\U0627\U0645\U0629",
      },
          {
          href : "/ar/"+city+"/jobs/business-development/search/",
          title : "\U062a\U0637\U0648\U064a\U0631 \U0627\U0644\U0623\U0639\U0645\U0627\U0644",
      },
          {
          href : "/ar/"+city+"/jobs/education/search/",
          title : "\U062a\U0639\U0644\U064a\U0645",
      },
          {
          href : "/ar/"+city+"/jobs/ittelecom/search/",
          title : "\U062a\U0643\U0646\U0648\U0644\U0648\U062c\U064a\U0627 \U0627\U0644\U0645\U0639\U0644\U0648\U0645\U0627\U062a / \U0625\U062a\U0635\U0627\U0644\U0627\U062a",
      },
          {
          href : "/ar/"+city+"/jobs/hrrecruiting/search/",
          title : "\U062a\U0648\U0638\U064a\U0641 / \U0645\U0648\U0627\U0631\U062f \U0628\U0634\U0631\U064a\U0629",
      },
          {
          href : "/ar/"+city+"/jobs/secretarial/search/",
          title : "\U0633\U0643\U0631\U062a\U0627\U0631\U064a\U0629",
      },
          {
          href : "/ar/"+city+"/jobs/hospitality/search/",
          title : "\U0633\U064a\U0627\U062d\U0629 \U0648\U0641\U0646\U0627\U062f\U0642 \U0648\U0636\U064a\U0627\U0641\U0629",
      },
          {
          href : "/ar/"+city+"/jobs/medicalhealth/search/",
          title : "\U0637\U0628 / \U0635\U062d\U0629",
      },
          {
          href : "/ar/"+city+"/jobs/architectureengineering/search/",
          title : "\U0639\U0645\U0627\U0631\U0629 / \U0647\U0646\U062f\U0633\U0629",
      },
          {
          href : "/ar/"+city+"/jobs/executive/search/",
          title : "\U0639\U0645\U0644 \U0625\U062f\U0627\U0631\U064a",
      },
          {
          href : "/ar/"+city+"/jobs/consulting/search/",
          title : "\U0639\U0645\U0644 \U0625\U0633\U062a\U0634\U0627\U0631\U064a",
      },
          {
          href : "/ar/"+city+"/jobs/artdesign/search/",
          title : "\U0641\U0646\U0648\U0646 / \U062a\U0635\U0645\U064a\U0645",
      },
          {
          href : "/ar/"+city+"/jobs/sales/search/",
          title : "\U0645\U0628\U064a\U0639\U0627\U062a",
      },
          {
          href : "/ar/"+city+"/jobs/accounting/search/",
          title : "\U0645\U062d\U0627\U0633\U0628\U0629",
      },
          {
          href : "/ar/"+city+"/jobs/retail/search/",
          title : "\U0645\U062d\U0644\U0627\U062a \U062a\U062c\U0627\U0631\U064a\U0629",
      },
          {
          href : "/ar/"+city+"/jobs/oilgas/search/",
          title : "\U0646\U0641\U0637 / \U063a\U0627\U0632",
      },
          {
          href : "/ar/"+city+"/jobs/other-jobs/search/",
          title : "\U0648\U0638\U0627\U0626\U0641 \U0627\U062e\U0631\U0649",
      },
          {
          href : "/ar/"+city+"/jobs/jobs-wanted/search/",
          title : "\U064a\U0628\U062d\U062b \U0639\U0646 \U0639\U0645\U0644",
      }
 ];

	
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
