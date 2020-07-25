var data = {
    countries: [
    {
        name: 'KG',
        childs: [{
            name: 'Ош',
            childs: [{name: 'Kanpur'}, {name: 'Ghaziabad'}]
        }, {
            name: 'Бишкек',
            childs: [{name: 'Mumbai'}, {name: 'Pune'}]
        }]
    }, 
    
    {
      name: 'KZ',
      childs: [{
        name: 'Uttar',
        childs: [{name: 'Kanpur'}, {name: 'Ghaziabad'}]
      }, {
        name: 'Maharashtra',
        childs: [{name: 'Mumbai'}, {name: 'Pune'}]
      }]
    }, 
    
    {
      name: 'Узбекистан',
      childs: [{
        name: 'Washington',
        childs: [{name: 'Washington'}, {name: 'Seatle'}]
      }, {
        name: 'Florida',
        childs: [{name: 'Orlando'}, {name: 'Miamy'}]
      }]
    }]
  };
  
  function buildSelect(name, data, childs) {
    var div = $('<div>');
    div.addClass('hidden autoSelect ' + data.name + ' ' + name);
    var label = $('<label>');
    label.text(name);
    var div2 = $('<div>');
    div2.addClass('select-box select');
    var select = $(`<select id=${name}>`);
    var option = $('<option>');
    option.text('--');
    select.append(option);
    data.childs.forEach(function (child) {
       option = $('<option>');
       option.val(child.name);
       option.text(child.name);
       select.append(option);
    });
    if (childs) select.on('change', updateCities);
    div.append(label);
    div2.append(select);
    div.append(div2);
    $('.country').append(div);
  }
  
  function buildForms(data) {
    data.countries.forEach(function (country) {
       buildSelect('регион', country, true);
       country.childs.forEach(function (state) {
         buildSelect('город', state);
       });
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
  
  $(document).on('ready',function () {
    buildForms(data);
    $('[name=country]').on('change', updateStates);
  });