
function definePlugin (){
var plugin = {};

plugin.info= {
	name: 'visualize-results',
	description:'This plugin makes your results more visually appealing!',
	parameters: {
	text: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: undefined,
        no_function: false,
        description: 'This is the text that will go on the page.'
      }
	}
}

plugin.trial= function (display_element, trial) {




var p = document.createElement('p');
display_element.appendChild(p);
p.innerHTML=trial.text;




}
return plugin;
}

jsPsych.plugins['visualize-results'] = definePlugin() ;