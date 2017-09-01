
function definePlugin (){
var plugin = {};

plugin.info= {
	name: 'visualize-results',
	description:'This plugin makes your results more visually appealing!',
	parameters: {}

}

plugin.trial= function (display_element, trial) {




var p = document.createElement('p');
display_element.appendChild(p);
p.innerHTML="Hello World";




}
return plugin;
}

jsPsych.plugins['visualize-results'] = definePlugin() ;