function set_custom()
{
var container=document.getElementById('main_frame');
var width=document.getElementById('custom_width').value;
var height=document.getElementById('custom_height').value;
container.style.width = width;
container.style.height=height;
}
function add1(width,height){
var container=document.getElementById('main_frame');
container.style.width = width;
container.style.height=height;
}
 
function loadsite(){
var container=document.getElementById('main_frame');
var url=document.getElementById('url');
var url1="http://";
var url2=url1.concat(url.value);
container.src = url2;
 
}
 
