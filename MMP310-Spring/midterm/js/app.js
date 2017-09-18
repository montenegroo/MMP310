var head = document.getElementsByTagName('head')[0];
var body = document.getElementsByTagName('body')[0];

var JsonNav = document.createElement('script');
JsonNav.setAttribute('src', 'data/nav.json');
head.appendChild(JsonNav);

var JsonContent = document.createElement('script');
JsonContent.setAttribute('src', 'data/content.json');
head.appendChild(JsonContent);

function headerNav(navigation) {

  // References
  var header = document.getElementsByTagName('header')[0];
  var nav = document.getElementsByTagName('nav')[0];

  // Build up a string of HTML
  var navigation = '<ul>';

  //  <li><a href="#">Work</a></li>
  for (var i = 0; i < navigation.items.length; i++) {
    if (navigation.items[i].items.length > 0) {
      navigation += '<li><a href=" ' + navigation.items[i].url + ' ">';
      navigation += navigation.items[i].label + '</a>';

      navigation += '<ul>';
      for (var d = 0; d < navigation.items[i].items.length; d++) {
        navigation += '<li><a href=" ' + navigation.items[1].items[d].url + ' "> ';
        navigation += navigation.items[1].items[d].label + '</a></li>';
      }
      navigation += '</ul>';
      navigation += '</li>';

    } else {
      navigation += '<li><a href=" ' + navigation.items[i].url + ' "> ';
      navigation += navigation.items[i].label + '</a></li>';
    }
  }
  navigation += '</ul>';
  nav.innerHTML = navigation;
}

function content(generateContent) {
  var main = document.getElementsByTagName('main')[0];

  var h1 = document.getElementsByTagName('h1')[0];
  h1.innerHTML = generateContent.h1;

  var p = document.getElementsByTagName('p')[0];
  p.innerHTML = generateContent.p;

  var h2 = document.getElementsByTagName('h2')[0];
  h2.innerHTML = generateContent.h2;

  var blockquote = document.getElementsByTagName('blockquote')[0];
  blockquote.innerHTML = generateContent.blockquote;

  var h3 = document.getElementsByTagName('h3')[0];
  h3.innerHTML = generateContent.h3;generateContent

  var ul = main.getElementsByTagName('ul')[0];

  var listHTML = '';
  for (var a = 0; a < generateContent.list.length; a++) {
    listHTML += '<li>' + generateContent.list[a].content + '</li>';
    console.log(listHTML);
  }

  ul.innerHTML = listHTML;

}
//var h1 = {};
//$.getJSON("../data/content.json", function( data ) {
//    h1 = data;
//    
//    for (var i = 0; i < data.h1.length; i++) {
//        var h1 = data.h1[i];
//        var p = data.p;
//        var div = document.createElement("div");
//        var name = document.createElement("p");
//        var link = document.createElement("p");
//        var a = document.createElement("a");
//        name.innerHTML = stu.name;
//        a.href = stu.url;
//        a.innerHTML = stu.title;
//        link.appendChild(a);
//        div.appendChild(name);
//        div.appendChild(link);
//        document.body.appendChild(div);
//        
//    }
//});