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