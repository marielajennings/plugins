
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
p.innerHTML="Your score: 7/32"
var div= document.createElement('div');
div.setAttribute('style','background-color:#ddd; width: 100%; height:40px; border-radius: 25px;');
display_element.appendChild(div);
var div2 = document.createElement('div');
div2.setAttribute ('style','width:50%; background-color:#00bcd4; border:00a5bb; text-align: right; padding-right: 20px; line-height: 40px; color: white; height:40px; border-radius: 25px;');
div.appendChild(div2);





}
return plugin;
}

jsPsych.plugins['visualize-results'] = definePlugin() ;

