 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

 var firebaseConfig = {
	apiKey: "AIzaSyB8rQLBtyQi_o6qLF0LZ6lxRYp1-HILn0I",
	authDomain: "achimera-01.firebaseapp.com",
	databaseURL: "https://achimera-01.firebaseio.com",
	projectId: "achimera-01",
	storageBucket: "achimera-01.appspot.com",
	messagingSenderId: "963188416835",
	appId: "1:963188416835:web:f628acab42db0356c1cff6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
	// Reference to the recommendations object in your Firebase database
	var needhelp = firebase.firestore().collection("needHelp");
	var givehelp = firebase.firestore().collection("giveHelp");
	// Save a new recommendation to the database, using the input in the form
	function help(ch) {
	  // Get input values from each of the form elements
	  var cntr, country, address, cat, category, f_name, l_name, description, whatsapp, phone, nUser, rgn, region, time;
	  if (ch===1){
		cntr = document.getElementById("country");
		country = cntr.options[cntr.selectedIndex].value;
		cat = document.getElementById("category");
		category = cat.options[cat.selectedIndex].innerHTML;
		f_name = $('#first_name').val();
		l_name = $('#last_name').val();
		description = $('#description').val();
		whatsapp = $('#whatsapp').val();
		phone = $('#phone').val();
		rgn = document.getElementById("регион");
		region = rgn.options[rgn.selectedIndex].innerHTML;
		nUser = needhelp.doc(country).collection(region);
	  }
	  else if (ch===0){
		cntr = document.getElementById("country2");
		country = cntr.options[cntr.selectedIndex].value;
		cat = document.getElementById("category2");
		category = cat.options[cat.selectedIndex].innerHTML;
		f_name = $('#first_name2').val();
		l_name = $('#last_name2').val();
		description = $('#description2').val();
		whatsapp = $('#whatsapp2').val();
		phone = $('#phone2').val();
		rgn = document.getElementById("регион2");
		region = rgn.options[rgn.selectedIndex].innerHTML;
		nUser = givehelp.doc(country).collection(region);
	  }
	  nUser.add({
		"country": country,
		"regionCity": region,
		"description": description,
		"category": category,
		"firstName": f_name,
		"lastName": l_name,
		"whatsApp": whatsapp,
		"phone":phone,
		"timestamp":firebase.firestore.Timestamp.now()
	  });
	};



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
	}]
  };
  
  function buildSelect(name, data, childs) {
    var div = $('<div>');
	div.addClass('hidden autoSelect col-md-12 ' + data.name + ' ' + name);
    var label = $('<label>');
	label.text(name);
	label.addClass('text-white mt-2 mb-1 text-uppercase');
	var select = $(`<select id=${name}>`);
	select.addClass('form-control');
    var option = $('<option>');
    select.append(option);
    data.childs.forEach(function (child) {
       option = $('<option>');
       option.val(child.name);
       option.text(child.name);
       select.append(option);
    });
    if (childs) select.on('change', updateCities);
	div.append(label);
	div.append(select);
	$('#location-list').append(div);
}
function buildSelect2(name, data, childs) {
    var div = $('<div>');
	div.addClass('hidden autoSelect col-md-12 ' + data.name + ' ' + name);
    var label = $('<label>');
	label.text(name);
	label.addClass('text-white mt-2 mb-1 text-uppercase');
	var select = $(`<select id=${name}2>`);
	select.addClass('form-control');
    var option = $('<option>');
    select.append(option);
    data.childs.forEach(function (child) {
       option = $('<option>');
       option.val(child.name);
       option.text(child.name);
       select.append(option);
    });
    //if (childs) select.on('change', updateCities);
	div.append(label);
	div.append(select);
	$('#location-list2').append(div);
}
function buildSelect3(name, data, childs) {
    var div = $('<div>');
	div.addClass('hidden autoSelect col-md-12 ' + data.name + ' ' + name);
    var label = $('<label>');
	label.text(name);
	label.addClass('text-black mt-2 mb-1 text-uppercase');
	var select = $(`<select id=${name}3>`);
	select.addClass('form-control');
    var option = $('<option>');
    select.append(option);
    data.childs.forEach(function (child) {
       option = $('<option>');
       option.val(child.name);
       option.text(child.name);
       select.append(option);
    });
    //if (childs) select.on('change', updateCities);
	div.append(label);
	div.append(select);
	$('#location-list3').append(div);
}
  
  function buildForms(data) {
    data.countries.forEach(function (country) {
	   buildSelect('регион', country, true);
	   buildSelect2('регион', country, true);
	   buildSelect3('регион', country, true);
    //    country.childs.forEach(function (state) {
    //      buildSelect('город', state);
    //    });
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
////////////////////////////////////////////////////////////////////
function textFormatter(value) {
	return '<span style="word-wrap: break-word;">'+value+'</span>';
}


var showTable = function () {
	var cntr = document.getElementById("country3");
	var country = cntr.options[cntr.selectedIndex].value;
	var rgn = document.getElementById("регион3");
	var region = rgn.options[rgn.selectedIndex].innerHTML;
	var documents = [];
	var item;
	var $t_table = $('#table-give');
	if (region.length>=2){
		givehelp.doc(country).collection(region).get().then(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {
				item = doc.data();
				documents.push({
					"region": item.regionCity,
					"date":(new Date(item.timestamp.seconds*1000).toLocaleDateString()),
					"category": item.category,
					"description": item.description,
					"name":item.firstName + " "+item.lastName,
					"contacts": '<span class="icon-whatsapp"></span> ' + item.whatsApp + '<br> <span class="icon-phone"></span> '+ item.phone,
				}
				);
			});
		}).then(function(docs){
			if (documents.length!==0){
				console.log(documents);
				var initTable = function() {
					$('#give-placeholder').addClass('hidden');
					$t_table.bootstrapTable({
					data: documents,
					locale: "ru-RU",
					exportTypes: ['json', 'excel'],
					columns: [
							{
								width: "150",
								unitWidth: "px",
								title: 'Регион',
								field: 'region',
								filterControl: 'select',
								valign: 'middle',
							}, {
								title: 'Дата',
								field: 'date',
								align: 'center',
								valign: 'middle',
								sortable: true,
							}, {
								width: "300",
								unitWidth: "px",
								title: 'Категория',
								field: 'category',	
								filterControl: 'select',
								valign: 'middle',
							}, {
								width: "350",
								unitWidth: "px",
								field: 'description',
								title: 'Описание',
								formatter: textFormatter
							}, {
								field: 'contacts',
								title: 'Контакты',
							}, {
								field: "name" ,
								title: 'Имя',
							},
						]
					})
				  }
				initTable();
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
					documents.push({
						"region": item.regionCity,
						"date":(new Date(item.timestamp.seconds*1000).toLocaleDateString()),
						"category": item.category,
						"description": item.description,
						"name":item.firstName + " "+item.lastName,
						"contacts": '<span class="icon-whatsapp"></span> ' + item.whatsApp + '<br> <span class="icon-phone"></span> '+ item.phone,
					}
					);
				});
			}).then(function(docs){
				console.log(documents);
				if (documents.length!==0){
					$('#give-placeholder').addClass('hidden');
					var initTable = function() {
						$t_table.bootstrapTable({
						data: documents,
						locale: "ru-RU",
						exportTypes: ['json', 'excel'],
						columns: [
								{
									width: "150",
									unitWidth: "px",
									title: 'Регион',
									field: 'region',
									filterControl: 'select',
									valign: 'middle',
								}, {
									title: 'Дата',
									field: 'date',
									align: 'center',
									valign: 'middle',
									sortable: true,
								}, {
									width: "300",
									unitWidth: "px",
									title: 'Категория',
									field: 'category',	
									filterControl: 'select',
									valign: 'middle',
								}, {
									width: "350",
									unitWidth: "px",
									field: 'description',
									title: 'Описание',
									formatter: textFormatter
								}, {
									field: 'contacts',
									title: 'Контакты',
								}, {
									field: "name" ,
									title: 'Имя',
								},
							]
						})
					  }
					initTable();
				}
			});
		});
	}
}
  


//////////////////////////////////////////////////////////////////

jQuery(document).ready(function($) {
	$('#search-give').on('click', showTable);
	
	buildForms(data);
    $('#country').on('change', updateStates);
	$('#country2').on('change', updateStates);
	$('#country3').on('change', updateStates);
		
	"use strict";
	
	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1500,
	    autoplay: true,
	    pauseOnHover: false,
	    dots: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });
	};
	siteCarousel();

	

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	// siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	// siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');

   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top - 50
      }, 600, function() {
        // window.location.hash = hash;

      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();


  var counter = function() {
		
		$('#about-section, .counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$(this.element).find('.number > span').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


});

