/*
# Google ToolBar 
# Author: Stefano Viola ---> Esteban Sannin
# Contact: stefanoviola [at] sanniolug [dot] org
# Licenze: GNU/GPL 
#
#
 */

// restituisce il testo scritto nella Label "searchtext"
function getLabel(){
  return document.getElementById("searchtext").value;
}

//ricerca pagine web
function websearch() { 
  var itasearch;
  document.getElementById("italiano").selected ? itasearch="lr%3Dlang_it" : itasearch="";
  var strsearch = "http://www.google.it/search?hl=it&q="+getLabel()+"&btnG=Cerca+con+Google&meta="+itasearch;
  window.content.document.location.href = strsearch;
}

//ricerca pdf con google dorks
function pdfsearch(){
  var itasearch;
  document.getElementById("italiano").selected ? itasearch="lr%3Dlang_it" : itasearch="";
  var strsearch = "http://www.google.it/search?hl=it&q=filetype%3Apdf+"+getLabel()+"&btnG=Cerca+con+Google&meta="+itasearch;
  window.content.document.location.href = strsearch;
}

//ricerca immagini
function imagesearch() {         
  var strsearch = "http://images.google.it/images?q="+getLabel()+"&hl=it&btnG=Cerca+con+Google";
  window.content.document.location.href = strsearch;
}

//ricerca nei newsgroup
function groupsearch() {            
  var itasearch;
  document.getElementById("italiano").selected ? itasearch="&meta=group%3Dit.*" : itasearch="";
  var strsearch = "http://groups.google.it/groups?q="+getLabel()+"&hl=it&btnG=Cerca+con+Google"+itasearch;
  window.content.document.location.href = strsearch;
}

//ricerca nelle directory
function directorysearch() {     
  var itasearch;
  document.getElementById("italiano").selected ? itasearch="%2FWorld%2FItaliano&hl=it" : itasearch="";
  var strsearch = "http://www.google.com/search?q="+getLabel()+"&btnG=Cerca+con+Google&hl=it&cat=gwd%2FTop"+itasearch;
  window.content.document.location.href = strsearch;
}

//ricerca nelle news
function newssearch() {          
  var itasearch;
  document.getElementById("italiano").selected ? itasearch="hl=it&ned=it" : itasearch="hl=en&ned=us";
  var strsearch = "http://news.google.com/news?"+itasearch+"&q="+getLabel()+"&btnG=Cerca+nelle+News";
  window.content.document.location.href = strsearch;
}

//stampa pagina about
function about() {
  window.openDialog("chrome://ingunisannio/content/about.xul");
}

