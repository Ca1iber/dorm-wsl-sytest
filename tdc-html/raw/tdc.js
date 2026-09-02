/* The following '${<name>}' variables are resolved on publishing this file:
 * bundle.symbolic.name: com.verigy.itee.help.smartest.ui.7.10.3
 * title:                SmarTest 7.10.3 Documentation
 * version:              7.10.3
 */
function init() {
  var root = 'https://www.advantest.com/V93000/help';
  var base = '/com.verigy.itee.help.smartest.ui.7.10.3/';
  var baseStart = document.URL.lastIndexOf(base);
  var pathStart = baseStart < 0
                  ? document.URL.lastIndexOf('/') + 1
                  : baseStart + base.length;
  var isLinux =    navigator.platform
                && navigator.platform.indexOf('Linux')>=0
                && (   navigator.platform.indexOf('x86_64')>=0
                    || navigator.platform.indexOf('i686')>=0);
  var file = document.URL.substring(pathStart).split("?")[0];
  var link = root + '/topic/com.verigy.itee.help.smartest.ui.7.10.3/' + file;
  var latestLink = root + '/topic/com.verigy.itee.help.smartest.ui.latest/' + file;
  if (document.URL.indexOf('.advantest.com/V93000/help')>=0 ||
      document.URL.indexOf("127.")>=0 ||
      document.URL.indexOf("file:")>=0) {
      link += ' (requires login)' + (latestLink.indexOf('${') > 0 ? '' : '%0A%0ALatest version: ' + latestLink + ' (requires login)');
  } else {
      link =   'Online TDC (requires login):%0A' + link
             + (latestLink.indexOf('${') > 0 ? '' : '%0A%0AOnline TDC latest version (requires login):%0A' + latestLink)
             + '%0A%0AInternal Online TDC:%0A'
             + document.URL.split("?")[0]
             + (latestLink.indexOf('${') > 0 ? '' : '%0A%0AInternal Online TDC latest version:%0A' + document.URL.split("?")[0].replace('/com.verigy.itee.help.smartest.ui.7.10.3/', '/com.verigy.itee.help.smartest.ui.latest/'));
  }
  if (pathStart < 0) pathStart = 0;
  if (document.getElementById('sl') && !isLinux) {
    document.getElementById('sl').innerHTML =
        '<a href="mailto:?Subject=Link to online TDC topic: '
      + escape(tt)
      + '&Body=%0A'
      + escape(tt)
      + '%0A%0A' + link
      + '%0A%0A">Send Link</a>';
  }
  if (document.getElementById('sf')) {
    function getOS() {
      if (navigator.appVersion.indexOf('Linux')>=0)return'Linux';
      if (navigator.appVersion.indexOf('X11')>=0)return'UNIX';
      if (navigator.appVersion.indexOf('Mac')>=0)return'macOS';
      if (navigator.appVersion.indexOf('Win')>=0)return'Windows';
      if (navigator.appVersion.indexOf('Android')>=0)return'Android';
      if (navigator.platform.indexOf('iPhone')>=0)return'iOS';
      if (navigator.platform.indexOf('iPad')>=0)return'iPadOS';
      return'Unknown OS';
    }
    function getBrowserVersion() {
      var fullVersion = ''+parseFloat(navigator.appVersion);
      var browserName = navigator.appName;
      var nVer = navigator.appVersion;
      var nAgt = navigator.userAgent;
      var majorVersion = parseInt(navigator.appVersion,10);
      var nameOffset,verOffset,ix;
      if ((verOffset=nAgt.indexOf('MSIE'))!=-1) {
        browserName = 'Microsoft Internet Explorer';
        fullVersion = nAgt.substring(verOffset+5);
      } else if ((verOffset=nAgt.indexOf('Opera'))!=-1) {
        browserName = 'Opera';
        fullVersion = nAgt.substring(verOffset+6);
      } else if ((verOffset=nAgt.indexOf('Chrome'))!=-1) {
        browserName = 'Chrome';
        fullVersion = nAgt.substring(verOffset+7);
      } else if ((verOffset=nAgt.indexOf('Safari'))!=-1) {
        browserName = 'Safari';
        fullVersion = nAgt.substring(verOffset+7);
      } else if ((verOffset=nAgt.indexOf('Firefox'))!=-1) {
        browserName = 'Firefox';
        fullVersion = nAgt.substring(verOffset+8);
      } else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
        browserName = nAgt.substring(nameOffset,verOffset);
        fullVersion = nAgt.substring(verOffset+1);
        if (browserName.toLowerCase()==browserName.toUpperCase()) {
          browserName = navigator.appName;
        }
      }
      if ((ix=fullVersion.indexOf(';'))!=-1) fullVersion=fullVersion.substring(0,ix);
      if ((ix=fullVersion.indexOf(' '))!=-1) fullVersion=fullVersion.substring(0,ix);
      majorVersion = parseInt(''+fullVersion,10);
      if (isNaN(majorVersion)) {
        fullVersion  = ''+parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion,10);
      }
      return browserName + ' ' + fullVersion;
    }
    document.getElementById('sf').innerHTML =
        '<a href="'
      + (isLinux
         ? (pathStart == 0
            ? '../com.verigy.itee.help.smartest.ui.7.10.3/104296.htm'
            : (document.URL.substring(0, pathStart) + '104296.htm'))
         : ( 'mailto:PDL-V93000-Docs@advantest.com'
            + '?Subject='
            + escape(tt)
            + ' (Topic '
            + ti
            + ') SmarTest 7.10.3 Documentation'
            + '&Body=Documentation feedback on topic '
            + ti
            + ' '
            + escape(tt)
            + '%0A%0AVersion: SmarTest 7.10.3 Documentation'
            + '%0ALocation: '
            + ((document.URL.indexOf("127.") != -1) || (document.URL.indexOf("file:") != -1)
               ? 'Local TDC installation'
               : document.URL.split("?")[0])
            + '%0ASystem: '
            + getOS()
            + ' using '
            + getBrowserVersion()
            + '%0A%0AEnter detailed description here:%0A%0A'))
      + '">Send Feedback</a>';
  }
  if (document.getElementById('st')) {
    var st = document.getElementById('st');
    var stChildren = st.childNodes;
    for (i = 0; i < stChildren.length; i++) {
      if (stChildren[i].tagName == 'OL') {
        var input = newFilterField('input', function(elem) {
          var newStFilter = elem.className == 'off' ? '' : elem.value.toLowerCase();
          if (stFilter == newStFilter) return;
          stFilter = newStFilter;
          var stChildren = document.getElementById('st').childNodes;
          for (i = 0; i < stChildren.length; i++) {
            if (stChildren[i].tagName == 'OL') {
              var olChildren = stChildren[i].childNodes;
              for (j = 0; j < olChildren.length; j++) {
                if (olChildren[j].childNodes.length > 0)
                  olChildren[j].style.display =
                    stFilter != '' && plainText(olChildren[j].childNodes[0]).toLowerCase().indexOf(stFilter) < 0
                    ? 'none'
                    : '';
              }
            }
          }
        }, []);
        input.setAttribute('id', 'stfilter');
        input.setAttribute('name', 'search');
        input.setAttribute('size', '6');
        input.setAttribute('autocomplete', 'off');
        st.insertBefore(input, stChildren[i]);
        break;
      }
    }
  }

  // syntax highlighting + jump to code line
  prettyPrint();
  var selectedLine = null;
  var handleHashChange = function() {
  if (   selectedLine != null
      && ' selected'==selectedLine.className.substring(selectedLine.className.length - 9))
       selectedLine.className = selectedLine.className.substring(0, selectedLine.className.length - 9);
    if (!/^#\d+$/.test(location.hash)) return;
  var jumpToCodeLine = location.hash.substring(1) - 1;
  var ols = document.getElementsByTagName('ol');
  for (var i = 0; i < ols.length; i++) {
    if (   'linenums'==ols[i].className
      && (typeof ols[i].scrollIntoView === 'function')) {
    var lis = ols[i].getElementsByTagName('li');
    if (jumpToCodeLine >= 0 && lis.length > jumpToCodeLine) {
      selectedLine = lis[jumpToCodeLine];
      selectedLine.scrollIntoView(true);
      selectedLine.className+=' selected';
      break;
    }
    }
  }
  }
  handleHashChange();
  if ('onhashchange' in window) window.onhashchange = handleHashChange;

  // sort/filter-able tables
  // TODO table filter: width and heigth  of 'filter-select'
  // TODO table filter: support complex queries, e. g. 'foo bar' should match 'foo_lorem_bar'
  // TODO sortable table: support IE <= 8?
  var tables = document.getElementsByTagName('table');
  for (var i = 0; i < tables.length; i++) {
    var classes = ' ' + tables[i].className + ' ';
    var sortable = classes.indexOf(' sortable ') >= 0;
    var filterable = classes.indexOf(' filter ') >= 0;
    if (!sortable && !filterable) continue;
    function getColumnValues(table, columnNumber) {
      var columnValues = [];
      var children1 = table.childNodes;
      for (var j = 0; j < children1.length; j++) {
        if (children1[j].tagName == 'TBODY') {
          var children2 = children1[j].childNodes;
          for (var k = 0; k < children2.length; k++) {
            if (children2[k].tagName == 'TR') {
              var children3 = children2[k].childNodes;
              var columnNr = -1;
              tds: for (var l = 0; l < children3.length; l++) {
                if (children3[l].tagName == 'TD') {
                  columnNr++;
                  if (columnNumber == columnNr) {
                    var value = trim(children3[l].textContent || children3[l].innerText);
                    if (value!='') {
                      for (var m = 0; m < columnValues.length; m++) {
                        if (value == columnValues[m]) break tds;
                      }
                      columnValues.push(value);
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return columnValues;
    }
    var filterTable = function(table) {
      var children1 = table.childNodes;
      for (var j = 0; j < children1.length; j++) {
        if (children1[j].tagName == 'TBODY') {
          var children2 = children1[j].childNodes;
          for (var k = 0; k < children2.length; k++) {
            if (children2[k].tagName == 'TR') {
              var showRow = true;
              var children3 = children2[k].childNodes;
              var columnNr = -1;
              for (var l = 0; l < children3.length; l++) {
                if (children3[l].tagName == 'TD') {
                  columnNr++;
                  if (   columnNr < table.filter.length
                      && !table.filter[columnNr](plainText(children3[l]))) {
                    showRow = false;
                    break;
                  }
                }
              }
              children2[k].style.display = showRow ? '' : 'none';
            }
          }
        }
      }
    }
    if (filterable) tables[i].filter = [];
    var children1 = tables[i].childNodes;
    for (var j = 0; j < children1.length; j++) {
      if (children1[j].tagName == 'THEAD') {
        var children2 = children1[j].childNodes;
        for (var k = 0; k < children2.length; k++) {
          if (children2[k].tagName == 'TR') {
            var columnNr = -1;
            var children3 = children2[k].childNodes;
            for (var l = 0; l < children3.length; l++) {
              if (children3[l].tagName == 'TH') {
                columnNr++;
                var thClasses = ' ' + children3[l].className + ' ';
                var noSort = thClasses.indexOf(' no-sort ') >= 0;
                var noFilter = thClasses.indexOf(' no-filter ') >= 0;
                if (noSort) children3[l].setAttribute('data-sort-method', 'none');

                //children3[l].className += ' -th';
                if (sortable && !noSort) children3[l].className += ' -s';
                if (filterable && !noFilter) children3[l].className += ' -f';

                // <div class="-w">...</div>
                var wrapElement = document.createElement('div');
                wrapElement.className = '-w';
                wrapElement.innerHTML = children3[l].innerHTML;
                children3[l].innerHTML = '';
                children3[l].appendChild(wrapElement);

                // <div class="-s"></div>
                if (sortable && !noSort) {
                  var sortElement = document.createElement('div');
                  sortElement.className = '-s';
                  children3[l].appendChild(sortElement);
                }

                // <div class="-f"><div><input class="off" type="text" value="Filter" name="foo2"></div></div>
                if (filterable) {
                  if (noFilter) {
                    tables[i].filter.push(function(s) {return true});
                  } else {
                    var filterElement = document.createElement('div');
                    filterElement.className = '-f';
                    if (sortable) addEvent(filterElement, 'click', function(e) {
                      if (e.stopPropagation) e.stopPropagation();
                      else e.cancelBubble = true;
                    });
                    var filterElementInner = document.createElement('div');
                    filterElement.appendChild(filterElementInner);
                    var isTextField = (' ' + children3[l].className + ' ').indexOf(' filter-select ') < 0;
                    var filterWidget = newFilterField(isTextField ? 'input' : 'select',
                                                      applyOn(tables[i], filterTable),
                                                      isTextField ? [] : getColumnValues(tables[i], columnNr));
                    tables[i].filter.push(newFilter(filterWidget));
                    filterElementInner.appendChild(filterWidget);
                    children3[l].appendChild(filterElement);
                  }
                }
              }
            }
          }
        }
      }
    }
    if (sortable) new Tablesort(tables[i]);
  }

  // add copy button to copyable elements
  var copySvg = '<svg viewBox="0 0 1000 1000" height="20" width="20" xmlns="http://www.w3.org/2000/svg" role="img"><path d="M704 896H64V320h640v192h64V192c0-35-29-64-64-64H512C512 57 455 0 384 0S256 57 256 128H64c-35 0-64 29-64 64v704c0 35 29 64 64 64h640c35 0 64-29 64-64V768h-64v128zM192 192h64s64-29 64-64 29-64 64-64 64 29 64 64 32 64 64 64h64s64 29 64 64H128c0-39 28-64 64-64zm-64 512h128v-64H128v64zm448-128V448L320 640l256 192V704h320V576H576zM128 832h192v-64H128v64zm320-448H128v64h320v-64zM256 512H128v64h128v-64z" style="fill:#666"/></svg>';
  for (var i=0; i<3; i++) {
    var copyable = document.getElementsByClassName(i?(i==1?'ti':'tj'):'copyable');
    for (var j=0; copyable && j<copyable.length; j++) {
    var b = document.createElement('button');
    b.title = 'Copy to clipboard';
    b.innerHTML = copySvg;
      b.className = '-copy';
      copyable[j].insertBefore(b, copyable[j].firstChild);
    }
  }
  new ClipboardJS('.-copy', { text: function(b){ return b.parentNode.innerText; } })
    .on('success', function(e){ e.clearSelection(); e.trigger.innerHTML=''; e.trigger.className = '-copy -copied'; setTimeout(function(){e.trigger.className = '-copy'; e.trigger.innerHTML=copySvg;}, 2000);});

  // add elements to zoomable image
  var zoom = document.getElementsByClassName('zoomable');
  var closeSvg = '<svg viewBox="0 0 24 24" width="24" height="24" class=""><path fill="#666" d="M19.8 5.8l-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z"></path></svg>';
  for(var i=0; i<zoom.length; i++) {
    zoom[i].id = 'zoomable-' + i;
    var d = document.createElement('div');
    d.className = 'zoomable-body';
    d.id = 'zoomable-body-' + i;
    zoom[i].parentNode.insertBefore(d, zoom[i].nextSibling);
    var s = document.createElement('span');
    s.className = 'close';
    s.innerHTML = closeSvg;
    d.appendChild(s, zoom[i].firstChild);
    var img = document.createElement('img');
    img.className = 'zoomable-content';
    img.id = 'zoomable-image-' + i;
    d.appendChild(img, zoom[i].firstChild);
    var dc = document.createElement('div');
    dc.className = 'caption';
    dc.id = 'caption-' + i;
    d.appendChild(dc, zoom[i].firstChild);

    // Get the image and insert it inside the zoomable - use its "alt" text as a caption
    zoom[i].onclick = function(){
      d.style.display = "block";
      img.src = this.src;
      dc.innerHTML = this.alt;
    }
    // When the user clicks on <span> (x), close the zoomable
    s.onclick = function() {
      d.style.display = "none";
    }
    // When the user clicks on <div> dialog, close the zoomable
    d.onclick = function() {
      d.style.display = "none";
    }
    // When the user hits Escape key, close the zoomable
    document.addEventListener('keydown', function(event){
      if(event.key === "Escape"){
        d.style.display = "none";
      }
    });
  }

}
var stFilter = '';
function trim(s) { return s.replace(/^\s+|\s+$/gm,'') }
function norm(s) { return trim(s.toLowerCase()) }
function plainText(elem) { return elem.textContent || elem.innerText }
function addEvent(elem, evnt, func) {
  if (elem.addEventListener)  // W3C
    elem.addEventListener(evnt, func, false);
  else if (elem.attachEvent) // IE < 9
    elem.attachEvent('on'+(evnt=='input'?'propertychange':evnt), func);
  else elem[evnt] = func;
}
function applyOn(elem, func) { return function() { func(elem) } }
function newElem(tag, classes) {
  var elem = document.createElement(tag);
  if (classes) elem.className = classes;
  return elem;
}
function newFilter(elem) {
  return function(s) {
    if (elem.className == 'off') return true;
    return elem.tagName == 'SELECT'
           ? norm(s) == norm(elem.value)
           : s.toLowerCase().indexOf(elem.value.toLowerCase()) >= 0;
  }
}
function newFilterField(tag, func, options) {
  var elem = newElem(tag, 'off');
  if (tag.toLowerCase() == 'select') {
    var o = newElem('option');
    o.value = '';
    elem.appendChild(o);
    for (var i = 0; i < options.length; i++) {
      var o = newElem('option');
      o.value = options[i];
      o.innerHTML = options[i].replace(/"/g, '&amp;quot;').replace(/</g, '&amp;lt;');
      elem.appendChild(o);
    }
  } else if (tag.toLowerCase() == 'input') {
    elem.value = 'Filter';
    elem.setAttribute('type', 'text');
  }
  addEvent(elem, 'focusin', applyOn(elem, function(e) {
    if (e.className == 'off') {
      e.className = 'on';
      e.value = '';
    }
  }));
  addEvent(elem, 'focusout', applyOn(elem, function(e) {
    if (e.value == '') {
      e.className = 'off';
      if (e.tagName!=='SELECT') e.value = 'Filter';
    }
  }));
  addEvent(elem, tag == 'select' ? 'change' : 'input',
    applyOn(elem, tag == 'select' ? function(e) {e.className = e.selectedIndex == 0 ? 'off' : 'on'; func(); } : func));
  return elem;
}
if (!window.tdcInit) {
  window.tdcInit = 1;
  var wol=window.onload;window.onload=(typeof wol!='function')||!wol?init:function(){wol();init()};
}


// code below from https://github.com/google/code-prettify
// (download from https://cdn.rawgit.com/google/code-prettify/master/loader/prettify.js)
// add "prettyPrint()" to init
!function(){/*

 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function T(a){function d(e){var b=e.charCodeAt(0);if(92!==b)return b;var a=e.charAt(1);return(b=w[a])?b:"0"<=a&&"7">=a?parseInt(e.substring(1),8):"u"===a||"x"===a?parseInt(e.substring(2),16):e.charCodeAt(1)}function f(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e}function b(e){var b=e.substring(1,e.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);e=
[];var a="^"===b[0],c=["["];a&&c.push("^");for(var a=a?1:0,g=b.length;a<g;++a){var h=b[a];if(/\\[bdsw]/i.test(h))c.push(h);else{var h=d(h),k;a+2<g&&"-"===b[a+1]?(k=d(b[a+2]),a+=2):k=h;e.push([h,k]);65>k||122<h||(65>k||90<h||e.push([Math.max(65,h)|32,Math.min(k,90)|32]),97>k||122<h||e.push([Math.max(97,h)&-33,Math.min(k,122)&-33]))}}e.sort(function(e,a){return e[0]-a[0]||a[1]-e[1]});b=[];g=[];for(a=0;a<e.length;++a)h=e[a],h[0]<=g[1]+1?g[1]=Math.max(g[1],h[1]):b.push(g=h);for(a=0;a<b.length;++a)h=b[a],
c.push(f(h[0])),h[1]>h[0]&&(h[1]+1>h[0]&&c.push("-"),c.push(f(h[1])));c.push("]");return c.join("")}function v(e){for(var a=e.source.match(/(?:\[(?:[^\x5C\x5D]|\\[\s\S])*\]|\\u[A-Fa-f0-9]{4}|\\x[A-Fa-f0-9]{2}|\\[0-9]+|\\[^ux0-9]|\(\?[:!=]|[\(\)\^]|[^\x5B\x5C\(\)\^]+)/g),c=a.length,d=[],g=0,h=0;g<c;++g){var k=a[g];"("===k?++h:"\\"===k.charAt(0)&&(k=+k.substring(1))&&(k<=h?d[k]=-1:a[g]=f(k))}for(g=1;g<d.length;++g)-1===d[g]&&(d[g]=++A);for(h=g=0;g<c;++g)k=a[g],"("===k?(++h,d[h]||(a[g]="(?:")):"\\"===
k.charAt(0)&&(k=+k.substring(1))&&k<=h&&(a[g]="\\"+d[k]);for(g=0;g<c;++g)"^"===a[g]&&"^"!==a[g+1]&&(a[g]="");if(e.ignoreCase&&n)for(g=0;g<c;++g)k=a[g],e=k.charAt(0),2<=k.length&&"["===e?a[g]=b(k):"\\"!==e&&(a[g]=k.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var A=0,n=!1,l=!1,m=0,c=a.length;m<c;++m){var p=a[m];if(p.ignoreCase)l=!0;else if(/[a-z]/i.test(p.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){n=!0;
l=!1;break}}for(var w={b:8,t:9,n:10,v:11,f:12,r:13},r=[],m=0,c=a.length;m<c;++m){p=a[m];if(p.global||p.multiline)throw Error(""+p);r.push("(?:"+v(p)+")")}return new RegExp(r.join("|"),l?"gi":"g")}function U(a,d){function f(a){var c=a.nodeType;if(1==c){if(!b.test(a.className)){for(c=a.firstChild;c;c=c.nextSibling)f(c);c=a.nodeName.toLowerCase();if("br"===c||"li"===c)v[l]="\n",n[l<<1]=A++,n[l++<<1|1]=a}}else if(3==c||4==c)c=a.nodeValue,c.length&&(c=d?c.replace(/\r\n?/g,"\n"):c.replace(/[ \t\r\n]+/g,
" "),v[l]=c,n[l<<1]=A,A+=c.length,n[l++<<1|1]=a)}var b=/(?:^|\s)nocode(?:\s|$)/,v=[],A=0,n=[],l=0;f(a);return{a:v.join("").replace(/\n$/,""),c:n}}function J(a,d,f,b,v){f&&(a={h:a,l:1,j:null,m:null,a:f,c:null,i:d,g:null},b(a),v.push.apply(v,a.g))}function V(a){for(var d=void 0,f=a.firstChild;f;f=f.nextSibling)var b=f.nodeType,d=1===b?d?a:f:3===b?W.test(f.nodeValue)?a:d:d;return d===a?void 0:d}function G(a,d){function f(a){for(var l=a.i,m=a.h,c=[l,"pln"],p=0,w=a.a.match(v)||[],r={},e=0,t=w.length;e<
t;++e){var z=w[e],q=r[z],g=void 0,h;if("string"===typeof q)h=!1;else{var k=b[z.charAt(0)];if(k)g=z.match(k[1]),q=k[0];else{for(h=0;h<A;++h)if(k=d[h],g=z.match(k[1])){q=k[0];break}g||(q="pln")}!(h=5<=q.length&&"lang-"===q.substring(0,5))||g&&"string"===typeof g[1]||(h=!1,q="src");h||(r[z]=q)}k=p;p+=z.length;if(h){h=g[1];var B=z.indexOf(h),D=B+h.length;g[2]&&(D=z.length-g[2].length,B=D-h.length);q=q.substring(5);J(m,l+k,z.substring(0,B),f,c);J(m,l+k+B,h,K(q,h),c);J(m,l+k+D,z.substring(D),f,c)}else c.push(l+
k,q)}a.g=c}var b={},v;(function(){for(var f=a.concat(d),l=[],m={},c=0,p=f.length;c<p;++c){var w=f[c],r=w[3];if(r)for(var e=r.length;0<=--e;)b[r.charAt(e)]=w;w=w[1];r=""+w;m.hasOwnProperty(r)||(l.push(w),m[r]=null)}l.push(/[\0-\uffff]/);v=T(l)})();var A=d.length;return f}function y(a){var d=[],f=[];a.tripleQuotedStrings?d.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
null,"'\""]):a.multiLineStrings?d.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):d.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);a.verbatimStrings&&f.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var b=a.hashComments;b&&(a.cStyleComments?(1<b?d.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):d.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
null,"#"]),f.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):d.push(["com",/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(f.push(["com",/^\/\/[^\r\n]*/,null]),f.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));if(b=a.regexLiterals){var v=(b=1<b?"":"\n\r")?".":"[\\S\\s]";f.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+
("/(?=[^/*"+b+"])(?:[^/\\x5B\\x5C"+b+"]|\\x5C"+v+"|\\x5B(?:[^\\x5C\\x5D"+b+"]|\\x5C"+v+")*(?:\\x5D|$))+/")+")")])}(b=a.types)&&f.push(["typ",b]);b=(""+a.keywords).replace(/^ | $/g,"");b.length&&f.push(["kwd",new RegExp("^(?:"+b.replace(/[\s,]+/g,"|")+")\\b"),null]);d.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);b="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(b+="(?!s*/)");f.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,
null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(b),null]);return G(d,f)}function L(a,d,f){function b(a){var c=a.nodeType;if(1==c&&!A.test(a.className))if("br"===a.nodeName)v(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)b(a);else if((3==c||4==c)&&f){var d=a.nodeValue,q=d.match(n);q&&(c=d.substring(0,q.index),a.nodeValue=c,(d=d.substring(q.index+q[0].length))&&
a.parentNode.insertBefore(l.createTextNode(d),a.nextSibling),v(a),c||a.parentNode.removeChild(a))}}function v(a){function b(a,c){var d=c?a.cloneNode(!1):a,k=a.parentNode;if(k){var k=b(k,1),e=a.nextSibling;k.appendChild(d);for(var f=e;f;f=e)e=f.nextSibling,k.appendChild(f)}return d}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;a=b(a.nextSibling,0);for(var d;(d=a.parentNode)&&1===d.nodeType;)a=d;c.push(a)}for(var A=/(?:^|\s)nocode(?:\s|$)/,n=/\r\n?|\n/,l=a.ownerDocument,m=l.createElement("li");a.firstChild;)m.appendChild(a.firstChild);
for(var c=[m],p=0;p<c.length;++p)b(c[p]);d===(d|0)&&c[0].setAttribute("value",d);var w=l.createElement("ol");w.className="linenums";d=Math.max(0,d-1|0)||0;for(var p=0,r=c.length;p<r;++p)m=c[p],m.className="L"+(p+d)%10,m.firstChild||m.appendChild(l.createTextNode("\u00a0")),w.appendChild(m);a.appendChild(w)}function t(a,d){for(var f=d.length;0<=--f;){var b=d[f];I.hasOwnProperty(b)?E.console&&console.warn("cannot override language handler %s",b):I[b]=a}}function K(a,d){a&&I.hasOwnProperty(a)||(a=/^\s*</.test(d)?
"default-markup":"default-code");return I[a]}function M(a){var d=a.j;try{var f=U(a.h,a.l),b=f.a;a.a=b;a.c=f.c;a.i=0;K(d,b)(a);var v=/\bMSIE\s(\d+)/.exec(navigator.userAgent),v=v&&8>=+v[1],d=/\n/g,A=a.a,n=A.length,f=0,l=a.c,m=l.length,b=0,c=a.g,p=c.length,w=0;c[p]=n;var r,e;for(e=r=0;e<p;)c[e]!==c[e+2]?(c[r++]=c[e++],c[r++]=c[e++]):e+=2;p=r;for(e=r=0;e<p;){for(var t=c[e],z=c[e+1],q=e+2;q+2<=p&&c[q+1]===z;)q+=2;c[r++]=t;c[r++]=z;e=q}c.length=r;var g=a.h;a="";g&&(a=g.style.display,g.style.display="none");
try{for(;b<m;){var h=l[b+2]||n,k=c[w+2]||n,q=Math.min(h,k),B=l[b+1],D;if(1!==B.nodeType&&(D=A.substring(f,q))){v&&(D=D.replace(d,"\r"));B.nodeValue=D;var N=B.ownerDocument,u=N.createElement("span");u.className=c[w+1];var y=B.parentNode;y.replaceChild(u,B);u.appendChild(B);f<h&&(l[b+1]=B=N.createTextNode(A.substring(q,h)),y.insertBefore(B,u.nextSibling))}f=q;f>=h&&(b+=2);f>=k&&(w+=2)}}finally{g&&(g.style.display=a)}}catch(x){E.console&&console.log(x&&x.stack||x)}}var E=window,C=["break,continue,do,else,for,if,return,while"],
F=[[C,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],H=[F,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
O=[F,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],P=[F,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],F=[F,"debugger,eval,export,function,get,instanceof,null,set,undefined,var,with,Infinity,NaN"],
Q=[C,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],R=[C,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],C=[C,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],S=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
W=/\S/,X=y({keywords:[H,P,O,F,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",Q,R,C],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),I={};t(X,["default-code"]);t(G([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));t(G([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);t(G([],[["atv",/^[\s\S]+/]]),["uq.val"]);t(y({keywords:H,hashComments:!0,cStyleComments:!0,types:S}),"c cc cpp cxx cyc m".split(" "));t(y({keywords:"null,true,false"}),["json"]);t(y({keywords:P,hashComments:!0,cStyleComments:!0,
verbatimStrings:!0,types:S}),["cs"]);t(y({keywords:O,cStyleComments:!0}),["java"]);t(y({keywords:C,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);t(y({keywords:Q,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);t(y({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),
["perl","pl","pm"]);t(y({keywords:R,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);t(y({keywords:F,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);t(y({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);t(G([],[["str",/^[\s\S]+/]]),["regex"]);
var Y=E.PR={createSimpleLexer:G,registerLangHandler:t,sourceDecorator:y,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:E.prettyPrintOne=function(a,d,f){f=f||!1;d=d||null;var b=document.createElement("div");b.innerHTML="<pre>"+a+"</pre>";b=b.firstChild;f&&L(b,f,!0);M({j:d,m:f,h:b,l:1,a:null,i:null,c:null,
g:null});return b.innerHTML},prettyPrint:E.prettyPrint=function(a,d){function f(){for(var b=E.PR_SHOULD_USE_CONTINUATION?c.now()+250:Infinity;p<t.length&&c.now()<b;p++){for(var d=t[p],l=g,m=d;m=m.previousSibling;){var n=m.nodeType,u=(7===n||8===n)&&m.nodeValue;if(u?!/^\??prettify\b/.test(u):3!==n||/\S/.test(m.nodeValue))break;if(u){l={};u.replace(/\b(\w+)=([\w:.%+-]+)/g,function(a,b,c){l[b]=c});break}}m=d.className;if((l!==g||r.test(m))&&!e.test(m)){n=!1;for(u=d.parentNode;u;u=u.parentNode)if(q.test(u.tagName)&&
u.className&&r.test(u.className)){n=!0;break}if(!n){d.className+=" prettyprinted";n=l.lang;if(!n){var n=m.match(w),C;!n&&(C=V(d))&&z.test(C.tagName)&&(n=C.className.match(w));n&&(n=n[1])}if(y.test(d.tagName))u=1;else var u=d.currentStyle,x=v.defaultView,u=(u=u?u.whiteSpace:x&&x.getComputedStyle?x.getComputedStyle(d,null).getPropertyValue("white-space"):0)&&"pre"===u.substring(0,3);x=l.linenums;(x="true"===x||+x)||(x=(x=m.match(/\blinenums\b(?::(\d+))?/))?x[1]&&x[1].length?+x[1]:!0:!1);x&&L(d,x,u);
M({j:n,h:d,m:x,l:u,a:null,i:null,c:null,g:null})}}}p<t.length?E.setTimeout(f,250):"function"===typeof a&&a()}for(var b=d||document.body,v=b.ownerDocument||document,b=[b.getElementsByTagName("pre"),b.getElementsByTagName("code"),b.getElementsByTagName("xmp")],t=[],n=0;n<b.length;++n)for(var l=0,m=b[n].length;l<m;++l)t.push(b[n][l]);var b=null,c=Date;c.now||(c={now:function(){return+new Date}});var p=0,w=/\blang(?:uage)?-([\w.]+)(?!\S)/,r=/\bprettyprint\b/,e=/\bprettyprinted\b/,y=/pre|xmp/i,z=/^code$/i,
q=/^(?:pre|code|xmp)$/i,g={};f()}},H=E.define;"function"===typeof H&&H.amd&&H("google-code-prettify",[],function(){return Y})})();}()

// code below from https://github.com/tristen/tablesort/blob/gh-pages/src/tablesort.js
/* Copyright (c) Tristen Brown

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. */
;(function() {
  function Tablesort(el, options) {
    if (!(this instanceof Tablesort)) return new Tablesort(el, options);

    if (!el || el.tagName !== 'TABLE') {
      throw new Error('Element must be a table');
    }
    this.init(el, options || {});
  }

  var sortOptions = [];

  var createEvent = function(name) {
    var evt;

    if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(name, false, false, undefined);
    } else {
      evt = new CustomEvent(name);
    }

    return evt;
  };

  var getInnerText = function(el) {
    return el.getAttribute('data-sort') || el.textContent || el.innerText || '';
  };

  // Default sort method if no better sort method is found
  var caseInsensitiveSort = function(a, b) {
    a = a.trim().toLowerCase();
    b = b.trim().toLowerCase();

    if (a === b) return 0;
    if (a < b) return 1;

    return -1;
  };

  // Stable sort function
  // If two elements are equal under the original sort function,
  // then there relative order is reversed
  var stabilize = function(sort, antiStabilize) {
    return function(a, b) {
      var unstableResult = sort(a.td, b.td);

      if (unstableResult === 0) {
        if (antiStabilize) return b.index - a.index;
        return a.index - b.index;
      }

      return unstableResult;
    };
  };

  Tablesort.extend = function(name, pattern, sort) {
    if (typeof pattern !== 'function' || typeof sort !== 'function') {
      throw new Error('Pattern and sort must be a function');
    }

    sortOptions.push({
      name: name,
      pattern: pattern,
      sort: sort
    });
  };

  Tablesort.prototype = {

    init: function(el, options) {
      var that = this,
          firstRow,
          defaultSort,
          i,
          cell;

      that.table = el;
      that.thead = false;
      that.options = options;

      if (el.rows && el.rows.length > 0) {
        if (el.tHead && el.tHead.rows.length > 0) {
          for (i = 0; i < el.tHead.rows.length; i++) {
            if (el.tHead.rows[i].getAttribute('data-sort-method') === 'thead') {
              firstRow = el.tHead.rows[i];
              break;
            }
          }
          if (!firstRow) {
            firstRow = el.tHead.rows[el.tHead.rows.length - 1];
          }
          that.thead = true;
        } else {
          firstRow = el.rows[0];
        }
      }

      if (!firstRow) return;

      var onClick = function() {
        if (that.current && that.current !== this) {
          that.current.removeAttribute('aria-sort');
        }

        that.current = this;
        that.sortTable(this);
      };

      // Assume first row is the header and attach a click handler to each.
      for (i = 0; i < firstRow.cells.length; i++) {
        cell = firstRow.cells[i];
        cell.setAttribute('role','columnheader');
        if (cell.getAttribute('data-sort-method') !== 'none') {
          cell.tabindex = 0;

          // TODO contribute for IE 9
          //cell.addEventListener('click', onClick, false);
          addEvent(cell, 'click', onClick);

          if (cell.getAttribute('data-sort-default') !== null) {
            defaultSort = cell;
          }
        }
      }

      if (defaultSort) {
        that.current = defaultSort;
        that.sortTable(defaultSort);
      }
    },

    sortTable: function(header, update) {

      // TODO try-catch as fail-safe for IE <=8
      try {
      var that = this,
          column = header.cellIndex,
          sortFunction = caseInsensitiveSort,
          item = '',
          items = [],
          i = that.thead ? 0 : 1,
          sortMethod = header.getAttribute('data-sort-method'),
          sortOrder = header.getAttribute('aria-sort');

      that.table.dispatchEvent(createEvent('beforeSort'));

      // If updating an existing sort, direction should remain unchanged.
      if (!update) {
        if (sortOrder === 'ascending') {
          sortOrder = 'descending';
        } else if (sortOrder === 'descending') {
          sortOrder = 'ascending';
        } else {
          sortOrder = that.options.descending ? 'descending' : 'ascending';
        }

        header.setAttribute('aria-sort', sortOrder);
      }

      if (that.table.rows.length < 2) return;

      // If we force a sort method, it is not necessary to check rows
      if (!sortMethod) {
        while (items.length < 3 && i < that.table.tBodies[0].rows.length) {
          item = getInnerText(that.table.tBodies[0].rows[i].cells[column]);
          item = item.trim();

          if (item.length > 0) {
            items.push(item);
          }

          i++;
        }

        if (!items) return;
      }

      for (i = 0; i < sortOptions.length; i++) {
        item = sortOptions[i];

        if (sortMethod) {
          if (item.name === sortMethod) {
            sortFunction = item.sort;
            break;
          }
        } else if (items.every(item.pattern)) {
          sortFunction = item.sort;
          break;
        }
      }

      that.col = column;

      for (i = 0; i < that.table.tBodies.length; i++) {
        var newRows = [],
            noSorts = {},
            j,
            totalRows = 0,
            noSortsSoFar = 0;

        if (that.table.tBodies[i].rows.length < 2) continue;

        for (j = 0; j < that.table.tBodies[i].rows.length; j++) {
          item = that.table.tBodies[i].rows[j];
          if (item.getAttribute('data-sort-method') === 'none') {
            // keep no-sorts in separate list to be able to insert
            // them back at their original position later
            noSorts[totalRows] = item;
          } else {
            // Save the index for stable sorting
            newRows.push({
              tr: item,
              td: getInnerText(item.cells[that.col]),
              index: totalRows
            });
          }
          totalRows++;
        }
        // Before we append should we reverse the new array or not?
        // If we reverse, the sort needs to be `anti-stable` so that
        // the double negatives cancel out
        if (sortOrder === 'descending') {
          newRows.sort(stabilize(sortFunction, true));
        } else {
          newRows.sort(stabilize(sortFunction, false));
          newRows.reverse();
        }

        // append rows that already exist rather than creating new ones
        for (j = 0; j < totalRows; j++) {
          if (noSorts[j]) {
            // We have a no-sort row for this position, insert it here.
            item = noSorts[j];
            noSortsSoFar++;
          } else {
            item = newRows[j - noSortsSoFar].tr;
          }

          // appendChild(x) moves x if already present somewhere else in the DOM
          that.table.tBodies[i].appendChild(item);
        }
      }

      that.table.dispatchEvent(createEvent('afterSort'));

    // TODO try-catch as fail-safe for IE <=8
    } catch(e) {}
    },

    refresh: function() {
      if (this.current !== undefined) {
        this.sortTable(this.current, true);
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Tablesort;
  } else {
    window.Tablesort = Tablesort;
  }
})();

// https://github.com/tristen/tablesort/blob/gh-pages/src/sorts/tablesort.number.js
(function(){
  var cleanNumber = function(i) {
    return i.replace(/[^\-?0-9.]/g, '');
  },

  compareNumber = function(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    a = isNaN(a) ? 0 : a;
    b = isNaN(b) ? 0 : b;

    return a - b;
  };

  Tablesort.extend('number', function(item) {
    return item.match(/^[-+]?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/) || // Prefixed currency
      item.match(/^[-+]?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/) || // Suffixed currency
      item.match(/^[-+]?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/); // Number
  }, function(a, b) {
    a = cleanNumber(a);
    b = cleanNumber(b);

    return compareNumber(b, a);
  });
}());

// https://github.com/tristen/tablesort/blob/gh-pages/src/sorts/tablesort.dotsep.js
//Dot separated values. E.g. IP addresses or version numbers.
Tablesort.extend('dotsep', function(item) {
  return /^(\d+\.)+\d+$/.test(item);
}, function(a, b) {
  a = a.split('.');
  b = b.split('.');

  for (var i = 0, len = a.length, ai, bi; i < len; i++) {
    ai = parseInt(a[i], 10);
    bi = parseInt(b[i], 10);

    if (ai === bi) continue;
    if (ai > bi) return -1;
    if (ai < bi) return 1;
  }

  return 0;
});
function copyText(code) {
   var range, selection, worked;
   var c = document.getElementById(code);

   if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(c);
      range.select();
   } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(c);
      selection.removeAllRanges();
      selection.addRange(range);
   }

   try {
      document.execCommand('copy');
      var copycode = document.getElementById("cbt_" + code);
      copycode.innerHTML = "Copied!";
   }
   catch (err) {
      //alert('unable to copy text');
    }
}
function copyTextToolTip(code) {
  var tooltip = document.getElementById("cbt_" + code);
  tooltip.innerHTML = "Copy to clipboard";
}

/*!
 * clipboard.js v2.0.8 (via https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js)
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return n={134:function(t,e,n){"use strict";n.d(e,{default:function(){return r}});var e=n(279),i=n.n(e),e=n(370),a=n.n(e),e=n(817),o=n.n(e);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function e(t){!function(t){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this.resolveOptions(t),this.initSelection()}var t,n,r;return t=e,(n=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";t=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(t,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=o()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==c(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}])&&u(t.prototype,n),r&&u(t,r),e}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=p(n);return t=r?(t=p(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),e=this,!(t=t)||"object"!==s(t)&&"function"!=typeof t?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){t="data-clipboard-".concat(t);if(e.hasAttribute(t))return e.getAttribute(t)}var r=function(){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(o,i());var t,e,n,r=d(o);function o(t,e){var n;return function(t){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(n=r.call(this)).resolveOptions(e),n.listenClick(t),n}return t=o,n=[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof t?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],(e=[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===s(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){t=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(t){return y("action",t)}},{key:"defaultTarget",value:function(t){t=y("target",t);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(t){return y("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}])&&f(t.prototype,e),n&&f(t,n),o}()},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var a=n(828);function i(t,e,n,r,o){var i=function(e,n,t,r){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&r.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}t.exports=function(t,e,n,r,o){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,r,o)}))}},879:function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var l=n(879),s=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!l.string(e))throw new TypeError("Second argument must be a String");if(!l.fn(n))throw new TypeError("Third argument must be a Function");if(l.node(t))return c=e,u=n,(a=t).addEventListener(c,u),{destroy:function(){a.removeEventListener(c,u)}};if(l.nodeList(t))return r=t,o=e,i=n,Array.prototype.forEach.call(r,function(t){t.addEventListener(o,i)}),{destroy:function(){Array.prototype.forEach.call(r,function(t){t.removeEventListener(o,i)})}};if(l.string(t))return t=t,e=e,n=n,s(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var r,o,i,a,c,u}},817:function(t){t.exports=function(t){var e,n="SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),n=window.getSelection(),(e=document.createRange()).selectNodeContents(t),n.removeAllRanges(),n.addRange(e),n.toString());return n}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},o={},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r(134).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={exports:{}};return n[t](e,e.exports,r),e.exports}var n,o});
