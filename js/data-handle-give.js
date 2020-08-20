var firebaseConfig = {
    apiKey: "AIzaSyDVHzkH2QWgzOUyT8gNQGk8jOVC5goWv6w",
    authDomain: "achimera-db.firebaseapp.com",
    databaseURL: "https://achimera-db.firebaseio.com",
    projectId: "achimera-db",
    storageBucket: "achimera-db.appspot.com",
    messagingSenderId: "586772640437",
    appId: "1:586772640437:web:ac6060ef1c27fe0c2204fc",
    measurementId: "G-ZM5ZZ1ZXEX"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.auth().signInAnonymously().catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// ...
	console.log(errorCode, errorMessage);
  });

  firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
	  // User is signed in.
	  var isAnonymous = user.isAnonymous;
	  var uid = user.uid;
	  // ...
	} else {
	  console.log("Error!");
	}
	// ...
  });
  firebase.analytics();
  var givehelp = firebase.firestore().collection("giveHelp");

var data = {
    countries: [
    {
        name: 'KG',
        childs: [
			{name: 'Ош',},
			{name: 'Бишкек',},
			{name: 'Чуйская область',}, 
			{name: 'Ошская область',},
			{name: 'Таласская область',},
			{name: 'Иссык-Кульская область',},
			{name: 'Нарынская область',},
			{name: 'Джалал-Абадская область',},
			{name: 'Баткенская область',},
		]
    }, 
    {
		name: 'KZ',
        childs: [
			{name: 'Город Нур-Султан',}, 
			{name: 'Город Алмата',},
			{name: 'Город Шымкент',},
			{name: 'Акмолинская область',},
			{name: 'Актюбинская область',},
			{name: 'Атырауская область',},
			{name: 'Восточно-Казахстанская область',},
			{name: 'Жамбылская область',},
			{name: 'Западно-Казахстанская область',}, 
			{name: 'Карагандинская область',},
			{name: 'Город Шымкент',},
			{name: 'Костанайская область',},
			{name: 'Кызылординская область',},
			{name: 'Мангистауская область',},
			{name: 'Туркестанская область',},
			{name: 'Северо-Казахстанская область',},
			{name: 'Павлодарская область',},
		]
    }, 
	
    {
		name: 'UZ',
        childs: [
			{name: 'Андижанская область',}, 
			{name: 'Бухарская область',},
			{name: 'Джизакская область',},
			{name: 'Кашкадарьинская область',},
			{name: 'Наманганская область',},
			{name: 'Навоийская область',},
			{name: 'Самаркандская область',},
			{name: 'Сурхандарьинская область',},
			{name: 'Сырдарьинская область',},
			{name: 'Ташкентская область',},
			{name: 'Ферганская область',},
			{name: 'Хорезмская область',},
			{name: 'Республика Каракалпакстан',},
		]
	},
	{
		name: 'RU',
		childs:[
			{name:'г. Москва'},
			{name:'Амурская область '},
			{name:'Алтайский край'},
			{name:'Амурская область'},
			{name:'Архангельская область'},
			{name:'Астраханская область'},
			{name:'Белгородская область'},
			{name:'Брянская область'},
			{name:'Владимирская область'},
			{name:'Волгоградская область'},
			{name:'Вологодская область'},
			{name:'Воронежская область'},
			{name:'Еврейская автономная область'},
			{name:'Забайкальский край'},
			{name:'Ивановская область'},
			{name:'Иные территории, включая город и космодром Байконур'},
			{name:'Иркутская область'},
			{name:'Кабардино-Балкарская Республика'},
			{name:'Калининградская область'},
			{name:'Калужская область'},
			{name:'Камчатский край'},
			{name:'Карачаево-Черкесская Республика'},
			{name:'Кемеровская область'},
			{name:'Кировская область'},
			{name:'Костромская область'},
			{name:'Краснодарский край'},
			{name:'Красноярский край'},
			{name:'Курганская область'},
			{name:'Курская область'},
			{name:'Ленинградская область'},
			{name:'Липецкая область'},
			{name:'Магаданская область'},
			{name:'Московская область'},
			{name:'Мурманская область'},
			{name:'Ненецкий автономный округ'},
			{name:'Нижегородская область'},
			{name:'Новгородская область'},
			{name:'Новосибирская область'},
			{name:'Омская область'},
			{name:'Оренбургская область'},
			{name:'Орловская область'},
			{name:'Пензенская область'},
			{name:'Пермский край'},
			{name:'Приморский край'},
			{name:'Псковская область'},
			{name:'Республика Адыгея (Адыгея)'},
			{name:'Республика Алтай'},
			{name:'Республика Башкортостан'},
			{name:'Республика Бурятия'},
			{name:'Республика Дагестан'},
			{name:'Республика Ингушетия'},
			{name:'Республика Калмыкия'},
			{name:'Республика Карелия'},
			{name:'Республика Коми'},
			{name:'Республика Крым'},
			{name:'Республика Марий Эл'},
			{name:'Республика Мордовия'},
			{name:'Республика Саха (Якутия)'},
			{name:'Республика Северная Осетия - Алания'},
			{name:'Республика Татарстан (Татарстан)'},
			{name:'Республика Тыва'},
			{name:'Республика Хакасия'},
			{name:'Ростовская область'},
			{name:'Рязанская область'},
			{name:'Самарская область'},
			{name:'Санкт-Петербург'},
			{name:'Саратовская область'},
			{name:'Сахалинская область'},
			{name:'Свердловская область'},
			{name:'Севастополь'},
			{name:'Смоленская область'},
			{name:'Ставропольский край'},
			{name:'Тамбовская область'},
			{name:'Тверская область'},
			{name:'Томская область'},
			{name:'Тульская область'},
			{name:'Тюменская область'},
			{name:'Удмуртская Республика'},
			{name:'Ульяновская область'},
			{name:'Хабаровский край'},
			{name:'Ханты-Мансийский автономный округ - Югра'},
			{name:'Челябинская область'},
			{name:'Чеченская Республика'},
			{name:'Чувашская Республика - Чувашия'},
			{name:'Чукотский автономный округ'},
			{name:'Ямало-Ненецкий автономный округ'},
			{name:'Ярославская область'},
		]
	},
	{
		name: 'UKR',
		childs: [
			{name:'Крым'},
			{name:'Винницкая область'},
			{name:'Волынская область'},
			{name:'Днепропетровская область'},
			{name:'Донецкая область'},
			{name:'Житомирская область'},
			{name:'Закарпатская область'},
			{name:'Запорожская область'},
			{name:'Ивано-Франковская область'},
			{name:'Киевская область'},
			{name:'Кировоградская область'},
			{name:'Луганская область'},
			{name:'Львовская область'},
			{name:'Николаевская область'},
			{name:'Одесская область'},
			{name:'Полтавская область'},
			{name:'Ровенская область'},
			{name:'Сумская область'},
			{name:'Тернопольская область'},
			{name:'Харьковская область'},
			{name:'Херсонская область'},
			{name:'Хмельницкая область'},
			{name:'Черкасская область'},
			{name:'Черниговская область'},
			{name:'Черновицкая область'},
		]
	},
	{
		name: 'GRU',
		childs:[
			{name:'Сухуми'},
			{name:'Самегрело-Земо Сванети'},
			{name:'Гурия'},
			{name:'Аджария'},
			{name:'Рача-Лечхуми '},
			{name:'Квемо Сванети'},
			{name:'Имеретия'},
			{name:'Самцхе-Джавахети'},
			{name:'Шида Картли'},
			{name:'Мцхета-Мтианети'},
			{name:'Квемо Картли'},
			{name:'Кахетия'},
			{name:'Тбилиси'},
		]
	},
	{
		name: 'AZ',
		childs:[
			{name:'Баку'},
			{name:'Ганджа'},
			{name:'Евлах'},
			{name:'Ленкорань'},
			{name:'Мингечевир'},
			{name:'Нафталан'},
			{name:'Нахичевань'},
			{name:'Степанкерт'},
			{name:'Сумгаит'},
			{name:'Шеки'},
			{name:'Ширван'},
			{name:'Шуша'},
		]
	},
	{
		name: 'ARM',
		childs:[
			{name:'Ереван'},
			{name:'Арагацонская область'},
			{name:'Араратская область'},
			{name:'Армавирская область'},
			{name:'Вайоцдзорская область'},
			{name:'Гехаркуникская область'},
			{name:'Котайкская область'},
			{name:'Лорийская область'},
			{name:'Сюникская область'},
			{name:'Тавушская область'},
			{name:'Ширканская область'},
		]
	},
	{
		name: 'TKM',
		childs:[
			{name:'Ашхабад'},
			{name:'Ахалский велаят'},
			{name:'Балканский велаят'},
			{name:'Дашогузский велаят'},
			{name:'Лебапский велаят '},
			{name:'Марыйский велаят '},
		]
	},
	{
		name: 'BLR',
		childs:[
			{name:'Брестская область'},
			{name:'Гомельская область '},
			{name:'Гродненская область'},
			{name:'Минская область'},
			{name:'Могилевская область'},
			{name:'Витебская область'},
		]
	},
	{
		name: 'MLD',
		childs:[
			{name:'Комрат'},
			{name:'Чадыр-Лунга'},
			{name:'Страшены'},
			{name:'Дрокия'},
			{name:'Единцы'},
			{name:'Кэушень'},
			{name:'Дурлешты'},
			{name:'Фалешты'},
			{name:'Хынчешты'},
			{name:'Вулканешты'},
		]
	},
	{
		name: 'TJK',
		childs:[
			{name:'Душанбе '},
			{name:'Горно-Бадахшанская автономная область'},
			{name:'Согдийская область'},
			{name:'Хатлонская область'},
			{name:'Районы республиканского подчинения'},
		]
	},
	]
  };

function buildSelect3(name, data, childs) {
    var div = $('<div>');
	div.addClass('hidden autoSelect col-md-12 ' + data.name + ' ' + name);
    var label = $('<label>');
	label.text(name);
	label.addClass('text-black mt-2 mb-1 text-uppercase');
	var select = $('<input list="reg-searching-give-'+data.name +'3" id="'+data.name+"-"+name+'3">');
	select.addClass('form-control');
	var dlist = $('<datalist id="reg-searching-give-'+data.name +'3">');
    var option = $('<option>');
    dlist.append(option);
    data.childs.forEach(function (child) {
       option = $('<option>');
       option.val(child.name);
       option.text(child.name);
       dlist.append(option);
	});
	select.append(dlist);
    //if (childs) select.on('change', updateCities);
	div.append(label);
	div.append(select);
	$('#location-list3').append(div);
}
  
  function buildForms(data) {
    data.countries.forEach(function (country) {
	   buildSelect3('регион', country, true);
    });
  }
  
  function hideAutoSelect (name) {
    $('div.autoSelect.'+name).addClass('hidden');
  }

  function updateStates() {
	var v = this.value;
    if (v) {
      hideAutoSelect('регион');
      hideAutoSelect('город');
      var div = $('div.autoSelect.'+v);
      div.removeClass('hidden');
	  var select = $('select', div);
	  if (select.val()) $('div.autoSelect.'+select.val()).removeClass('hidden');
    }
  }

  function updateCities() {
    var v = $(this).val();
    if (v) {
      hideAutoSelect('город');
      $('div.autoSelect.'+v).removeClass('hidden');
    }
  }

var showTableGive = function () {
	var cntr = document.getElementById("country3");
	var country = cntr.options[cntr.selectedIndex].value;
	var rgn = document.getElementById(country+'-регион3');
	var region = rgn.value;
	var documents = [];
	var item;
	if (region.length>=2){
		givehelp.doc(country).collection(region).get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				item = doc.data();
				var options = {
					day:'numeric', month:'numeric', year:'2-digit', hour: "2-digit", minute:'2-digit'
				}
				documents.push({
					"region": item.regionCity,
					"date":(new Date(item.timestamp.seconds*1000).toLocaleDateString('ru-RU', options)),
					"category": item.category,
					"description": item.description,
					"name":item.firstName,
					"contacts": '<span class="icon-whatsapp"></span> ' + item.whatsApp + '<br> <span class="icon-phone"></span> '+ item.phone,
				}
				);
			});
		}).then(function(docs){
			var $t_table = $('#table-give');
			console.log(documents);
			$('#give-placeholder').addClass('hidden');
			$t_table.bootstrapTable({
			locale: "ru-RU",
			exportTypes: ['json', 'excel'],
			columns: [
					{
						title: 'Дата',
						field: 'date',
						sortable: true,
						class: "w-16"
					}, {
						width: "300",
						unitWidth: "px",
						title: 'Категория',
						field: 'category',	
						filterControl: 'select',
						class: "w-16"
					}, {
						width: "350",
						unitWidth: "px",
						field: 'description',
						title: 'Описание',
						class: "w-25"
					}, {
						width: "150",
						unitWidth: "px",
						title: 'Регион',
						field: 'region',
						filterControl: 'select',
						class: "w-16 "
					}, {
						field: 'contacts',
						title: 'Контакты',
						class: "w-16 "
					}, {
						field: "name" ,
						title: 'Имя',
						class: "w-16"
					},
				]
			})
			if (documents.length==0){
				$t_table.bootstrapTable('load', documents);
			}
			else{
				$t_table.bootstrapTable('load', documents);
			}
		});
	}
	else{
		var d = data.countries.find( record => record.name === country);
		var i;
		d.childs.forEach(function (values) {
			givehelp.doc(country).collection(values.name).get().then(function(querySnapshot) {
				querySnapshot.forEach(function(doc) {
					item = doc.data();
					var options = {
						day:'numeric', month:'numeric', year:'2-digit', hour: "2-digit", minute:'2-digit'
					}
					documents.push({
						"region": item.regionCity,
						"date":(new Date(item.timestamp.seconds*1000).toLocaleDateString('ru-RU',options)),
						"category": item.category,
						"description": item.description,
						"name":item.firstName,
						"contacts": '<span class="icon-whatsapp"></span> ' + item.whatsApp + '<br> <span class="icon-phone"></span> '+ item.phone,
					}
					);
				});
			}).then(function(docs){
				var $t_table = $('#table-give');
				$('#give-placeholder').addClass('hidden');	
				$t_table.bootstrapTable({
				locale: "ru-RU",
				exportTypes: ['json', 'excel'],
				columns: [
						{
							title: 'Дата',
							field: 'date',
							sortable: true,
							class: "w-16"
						}, {
							width: "300",
							unitWidth: "px",
							title: 'Категория',
							field: 'category',	
							filterControl: 'select',
							class: "w-16"
						}, {
							width: "350",
							unitWidth: "px",
							field: 'description',
							title: 'Описание',
							class: "w-25"
						}, {
							width: "150",
							unitWidth: "px",
							title: 'Регион',
							field: 'region',
							filterControl: 'select',
							class: "w-16"
						}, {
							field: 'contacts',
							title: 'Контакты',
							class: "w-16"
						}, {
							field: "name" ,
							title: 'Имя',
							class: "w-16"
						},
					]
				})
			
				if (documents.length==0){
					$t_table.bootstrapTable('load', documents);
				}
				else{
					$t_table.bootstrapTable('load', documents);
				}
			});
		});
	}
}

jQuery(document).ready(function($) {
	$('#search-give').on('click', showTableGive);
	buildForms(data);
	$('#country3').on('change', updateStates);
});