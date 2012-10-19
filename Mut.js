var MuT = (function(){
	var getNotEmpty = function(item, defaultText){
		if(!item) return defaultText;
		else return item;
	};
	return{
		regexParse : function(template, data){
			var pattern = /{{\w+}}/g,
				matches = template.match(pattern),
				clearPatterns = [];
			for(match in matches){
				template = template.replace(match,getNotEmpty(data[match.replace('{{','').replace('}}','')],''));
			}
			return template;
		},

		parse: function(template, data){
			var keys = Object.keys(data)
			for(key in keys){
				template = template.replace(key,getNotEmpty(data['{{'+key+'}}','']),'');
			}
			return template
		}
	};
})();


var Product = {Name: 'Product', Code : '#22123', Price: 45.5, IsAvailable : true };

var start = Date.now();
for (var j = 0; j < 700000; j++) {
	MuT.parse('<div style="display: none;">'+
  '<%-- Templates --%>' +
  '<%-- Template for stuff list --%>'+
  '<div id="divStuffListTemplate">'+
   '<div>'+
    '<table class="tableList">'+
     '<tr> '+
      '<td>Name</td>'+
     ' <td>Code</td>'+
      '<td>Description</td>'+
      '<td>Price</td>'+
      '<td>Is available</td>'+
     '</tr> '+
     '<!--data-->'+
     '<tr> '+
      '<td>{{Name}}</td>'+
      '<td>{{Code}}</td>'+
      '<td>{{Description}}</td>'+
      '<td>${{Price}}</td>'+
      '<td>{{IsAvailable}}</td>'+
     '</tr> '+
     '<!--data-->'+
    '</table>'+
   '</div>'+
  '</div>'+
'</div>',Product);
};

var end = Date.now();
var elapsed = (end - start)+'ms';

console.log("parse: " + elapsed);