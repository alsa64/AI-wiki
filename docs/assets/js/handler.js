/* eslint-disable no-console */
"use strict";

/*
TODO: Editing for any loaded file needs to be done before writing to the page. 
*/


/********************
* Vars
********************/
const
    markedOpt = {
    pedantic: false,
    gfm: true,
    breaks: true,
    smartLists: true,
    smartypants: false,
    xhtml: false
    },
    sanitizeOptContent = {
		// FORBID_TAGS: ['input']
    },
    sanitizeOptDirectory = {
		FORBID_TAGS: ['input'],
    }
;
let
	directoryBox,
	directoryWrap,
	directoryH1,
    xhttpMDFile = xhttpAssign(),
	xhttpWikiDir = xhttpAssign()
;


/********************
* File Operations
********************/
function xhttpAssign() {
    if (!window.XMLHttpRequest) return new ActiveXObject("Microsoft.XMLHTTP");
    return new XMLHttpRequest();
}
function xhttpStatus(request) {
	if (request.readyState === 4 && request.status === 200) return true;
	return false;
}
function xhttpReady(resource, type) {
	let elementID = document.getElementById(type);
    if (xhttpStatus(resource)) {
        if (type === "content") {
			console.log("\n\n------------------------------\nxhttpReady:Content Initialization\n------------------------------");
			elementID.innerHTML = marked(DOMPurify.sanitize(resource.response, sanitizeOptContent), markedOpt);
			console.log("~ elementID ID:\n" + elementID.id);
			// console.log("~ elementID Content:\n" + elementID.innerHTML);
			console.log("------------------------------\nxhttpReady:Content Terminate\n------------------------------\n\n");
		}
		if (type === "directory") {
			console.log("\n\n------------------------------\nxhttpReady:Directory Initialization\n------------------------------");
			console.log("------------------------------\nxhttpReady:Directory Write Begin\n------------------------------");
			elementID.innerHTML = DOMPurify.sanitize(resource.response, sanitizeOptDirectory);
			console.log("~ elementID ID:\n" + elementID.id);
			// console.log("~ elementID Content:" + elementID.innerHTML);
			console.log("------------------------------\nxhttpReady:Directory Write End\n------------------------------");
			directoryAssign();
			console.log("------------------------------\nxhttpReady:Directory Terminate\n------------------------------\n\n");
		}
	}
}
function wikiContentWrite(call, resource, type) {
    call.open("GET", resource, true);
    call.onreadystatechange = function() { xhttpReady(this, type); };
	call.send();
	// if (type === "directory") {
	// 	if (document.readyState !== "loading") return directoryPresence();
	// 	if (document.addEventListener) return document.addEventListener("DOMContentLoaded", directoryPresence);
	// }
	// return null;
}


/********************
* Content Editing
********************/
// function directoryPresence() {
// 	let i = 0;
// 	do {
// 		i++;
// 		setTimeout(directoryAssign, (i * 1000));
// 	}
// 	while (i < 10 && (directoryBox === undefined || directoryBox.length === 0));
// }
function directoryAssign() {
	console.log("------------------------------\ndirectoryAssign Begin\n------------------------------");
	directoryBox = document.querySelector("#directory");
	directoryWrap = directoryBox.querySelector("#wrapper");
	directoryH1 = directoryWrap.querySelector("H1");
	console.log("~ directoryBox ID:\n" + directoryBox.id);
	// console.log("~ directoryBox Content:" + directoryBox.innerHTML);
	console.log("~ directoryWrap ID:\n" + directoryWrap.id);
	// console.log("~ directoryWrap Content:" + directoryWrap.innerHTML);
	console.log("~ directoryH1 ID:\n" + directoryH1.tagName);
	console.log("~ directoryH1 Content:\n" + directoryH1.innerHTML);
	console.log("------------------------------\ndirectoryAssign End\n------------------------------");
}
// function directoryH1Correct() {
// 	// do nothing for now
// }


/********************
* Init Operations
********************/
wikiContentWrite(xhttpWikiDir, "wikimd/", "directory");
wikiContentWrite(xhttpMDFile, "README.md", "content");
// directoryH1Correct();
