import { parse } from 'node-html-parser';
fetch("https://developer.chrome.com/docs/extensions/mv3/intro/").then(response => response.text()).then(html => {

	let root = parse(html);
	let pTags = root.getElementsByTagName('p');
	for (let i=0; i < pTags.length; i++){
		console.log(pTags[i].text);
	}


})


