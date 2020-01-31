// XML2JSON
let xmlParser = require('xml2json');
const fs = require('fs'); 

var xmlContent;

//Charger le fichier
xmlContent = fs.readFileSync('./diagram.bpmn','utf8');

//console.log('JSON output', xmlParser.toJson(xmlContent));

// XML-JS
var convert = require('xml-js');

var result = convert.xml2json(xmlContent, {compact: true, spaces: 4});
//console.log(result);

//Camaro
const { transform } = require('camaro')

;(async function () {
    const result = await transform(xmlContent, {
        process: [
            '/definitions/process',
            {
                id: '@id',
                startEvent: ['startEvent', {
                    name: '@name',
                    id: '@id'
                }],
                task: ['task', {
                    id: '@id',
                    name: '@name'
                }],
                sequenceFlow: ['sequenceFlow', {
                    sourceRef: '@sourceRef',
                    targetRef: '@targetRef'
                }],
                endEvent: ['endEvent', {
                    name: '@name',
                    id: '@id'
                }],
            }
        ]
    })

    console.log(JSON.stringify(result, null, 2))
})()