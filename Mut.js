var MuT = (function(){
	var getNotEmpty = function(item, defaultText){
		if(!item) return defaultText;
		return item;
	};
	return{
		parse : function(template, data){
			var pattern = /{{\w+}}/g,
				matches = template.match(pattern)
			for (var i = 0; i < matches.length; i++) {
				template = template.replace(matches[i],getNotEmpty(data[matches[i].replace('{{','').replace('}}','')],''));
			};
			return template;
		}
	};
})();


var Product = {Name: 'Product', Code : '#22123', Price: 45.5, IsAvailable : true };

var start = Date.now();
for (var i = 0; i < 700000; i++) {
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

console.log(elapsed);