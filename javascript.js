var specMap1 = "./index_line.json";
var specMap2 = "./map1.json";
var specVis1 = "./scatter_index_talent.json";
var specVis2 = "./scatter_index_infrastructure.json";
var specVis3 = "./scatter_index_oe.json";
var specVis4 = "./scatter_index_research.json";
var specVis5 = "./scatter_index_development.json";
var specVis6 = "./scatter_index_commercial.json";
var specVis7 = "./scatter_index_gov.json";


vegaEmbed('#line_all', specMap1, {}).then(result => {}).catch(console.error);
vegaEmbed('#map', specMap2, {}).then(result => {}).catch(console.error);
vegaEmbed('#scatter-index-talent', specVis1).then(function (result) { }).catch(console.error);
vegaEmbed('#scatter-index-infrastructure', specVis2).then(function (result) { }).catch(console.error);
vegaEmbed('#scatter-index-oe', specVis3).then(function (result) { }).catch(console.error);
vegaEmbed('#scatter-index-research', specVis4).then(function (result) { }).catch(console.error);
vegaEmbed('#scatter-index-development', specVis5).then(function (result) { }).catch(console.error);
vegaEmbed('#scatter-index-commercial', specVis6).then(function (result) { }).catch(console.error);
vegaEmbed('#scatter-index-gov', specVis7).then(function (result) { }).catch(console.error);
