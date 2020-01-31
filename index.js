const BpmnModdle = require('bpmn-moddle');
const fs = require('fs'); 

var moddle = BpmnModdle();
var xmlContent;

//Charger le fichier
xmlContent = fs.readFileSync('./diagram.bpmn','utf8');

moddle.fromXML(xmlContent, function(err, def, result) {
    console.log(err);
    console.log(def);
    console.log(result);


});