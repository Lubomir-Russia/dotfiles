
(function(){var g=null,h=(new Date).getTime();var i=this,aa=function(a,b){var c=a.split("."),d=i;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==void 0?d[e]=b:d=d[e]?d[e]:d[e]={}},ba=function(a){return a.call.apply(a.bind,arguments)},ca=function(a,b){var c=b||i;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}else return function(){return a.apply(c,arguments)}},
j=function(){j=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ba:ca;return j.apply(g,arguments)};var da=/&/g,ea=/</g,fa=/>/g,ha=/\"/g,k={"\0":"\\0","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\x0B",'"':'\\"',"\\":"\\\\"},n={"'":"\\'"},r=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var s,t,u,x,z=function(){return i.navigator?i.navigator.userAgent:g};x=u=t=s=!1;var A;if(A=z()){var ia=i.navigator;s=A.indexOf("Opera")==0;t=!s&&A.indexOf("MSIE")!=-1;u=!s&&A.indexOf("WebKit")!=-1;x=!s&&!u&&ia.product=="Gecko"}var B=t,D=x,ja=u,E;
a:{var F="",G;if(s&&i.opera)var H=i.opera.version,F=typeof H=="function"?H():H;else if(D?G=/rv\:([^\);]+)(\)|;)/:B?G=/MSIE\s+([^\);]+)(\)|;)/:ja&&(G=/WebKit\/(\S+)/),G)var ka=G.exec(z()),F=ka?ka[1]:"";if(B){var I,la=i.document;I=la?la.documentMode:void 0;if(I>parseFloat(F)){E=String(I);break a}}E=F}
var ma=E,na={},J=function(a){var b;if(!(b=na[a])){b=0;for(var c=String(ma).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;b==0&&f<e;f++){var ra=c[f]||"",q=d[f]||"",l=RegExp("(\\d*)(\\D*)","g"),y=RegExp("(\\d*)(\\D*)","g");do{var o=l.exec(ra)||["","",""],m=y.exec(q)||["","",""];if(o[0].length==0&&m[0].length==0)break;b=r(o[1].length==0?0:parseInt(o[1],10),m[1].length==0?0:parseInt(m[1],10))||r(o[2].length==
0,m[2].length==0)||r(o[2],m[2])}while(b==0)}b=na[a]=b>=0}return b};var K,L;L=K=!1;var M=z();M&&(M.indexOf("Firefox")!=-1?K=!0:M.indexOf("Camino")!=-1||M.indexOf("iPhone")!=-1||M.indexOf("iPod")!=-1||M.indexOf("iPad")!=-1||M.indexOf("Android")!=-1||M.indexOf("Chrome")!=-1&&(L=!0));var oa=K,pa=L;var qa=document,N=window;var O=function(a){a=parseFloat(a);return isNaN(a)||a>1||a<0?0:a},P=function(a){if(a=="true")return!0;return!1},sa=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,Q=function(a){if(!a)return"pagead2.googlesyndication.com";return(a=a.match(sa))?a[0]:"pagead2.googlesyndication.com"};var ta=O("0"),ua=O("0"),va=O("1"),wa=O("0.2");var xa=P("false"),ya=P("false"),za=P("false");var Aa=function(){return Q("")};!B||J("9");!D&&!B||B&&J("9")||D&&J("1.9.1");B&&J("9");Q("");var R=function(a){return!!a&&typeof a=="function"&&!!a.call},Ba=function(a){if(!(arguments.length<2))for(var b=1,c=arguments.length;b<c;++b)a.push(arguments[b])};function S(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function Ca(a,b){a.attachEvent?a.attachEvent("onload",b):a.addEventListener&&a.addEventListener("load",b,!1)}
function Da(a,b){if(!(Math.random()<1.0E-4)){var c=Math.random();if(c<b)return a[Math.floor(c/b*a.length)]}return""};aa("google_protectAndRun",function(a,b,c){a=j(b,i,a);b=window.onerror;window.onerror=a;try{c()}catch(d){var c=d.toString(),e="";d.fileName&&(e=d.fileName);var f=-1;if(d.lineNumber)f=d.lineNumber;if(!a(c,e,f))throw d;}window.onerror=b});
aa("google_handleError",function(a,b,c,d){if(Math.random()<0.01)a=["http://",Aa(),"/pagead/gen_204","?id=jserror","&jscb=",xa?1:0,"&jscd=",ya?1:0,"&context=",S(a),"&msg=",S(b),"&file=",S(c),"&line=",S(d.toString()),"&url=",S(qa.URL.substring(0,512)),"&ref=",S(qa.referrer.substring(0,512))],a.push(["&client=",S(N.google_ad_client),"&format=",S(N.google_ad_format),"&slotname=",S(N.google_ad_slot),"&output=",S(N.google_ad_output),"&ad_type=",S(N.google_ad_type)].join("")),a=a.join(""),N.google_image_requests||
(N.google_image_requests=[]),b=new Image,b.src=a,N.google_image_requests.push(b);return!za});var Fa=function(a){try{var b=a.google_test;a.google_test=!b;if(a.google_test===!b)return a.google_test=b,!0}catch(c){}return!1},Ga=g,Ha=function(){if(!Ga){for(var a=window;a!=a.parent&&Fa(a.parent);)a=a.parent;Ga=a}return Ga};var T,U=function(a){this.c=[];this.b=a||window;this.a=0;this.d=g},Ia=function(a,b){this.k=a;this.i=b};U.prototype.m=function(a,b){this.a==0&&this.c.length==0&&(!b||b==window)?(this.a=2,this.f(new Ia(a,window))):this.h(a,b)};U.prototype.h=function(a,b){this.c.push(new Ia(a,b||this.b));Ja(this)};U.prototype.n=function(a){this.a=1;if(a)this.d=this.b.setTimeout(j(this.g,this),a)};U.prototype.g=function(){if(this.a==1){if(this.d!=g)this.b.clearTimeout(this.d),this.d=g;this.a=0}Ja(this)};
U.prototype.o=function(){return!0};U.prototype.nq=U.prototype.m;U.prototype.nqa=U.prototype.h;U.prototype.al=U.prototype.n;U.prototype.rl=U.prototype.g;U.prototype.sz=U.prototype.o;var Ja=function(a){a.b.setTimeout(j(a.l,a),0)};U.prototype.l=function(){if(this.a==0&&this.c.length){var a=this.c.shift();this.a=2;a.i.setTimeout(j(this.f,this,a),0);Ja(this)}};U.prototype.f=function(a){this.a=0;a.k()};
var Ka=function(a){try{return a.sz()}catch(b){return!1}},La=function(a){return!!a&&(typeof a=="object"||typeof a=="function")&&Ka(a)&&R(a.nq)&&R(a.nqa)&&R(a.al)&&R(a.rl)},Ma=function(){if(T&&Ka(T))return T;var a=Ha(),b=a.google_jobrunner;if(La(b))return T=b;return a.google_jobrunner=T=new U(a)},Na=function(a,b){Ma().nq(a,b)},Oa=function(a,b){Ma().nqa(a,b)};var Pa=function(a,b,c){var d=["<iframe"],e;for(e in a)a.hasOwnProperty(e)&&Ba(d,e+"="+a[e]);d.push('style="left:0;position:absolute;top:0;"');d.push("></iframe>");b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px";return['<ins style="display:inline-table;',b,'"><ins id="',a.id+"_anchor",'" style="display:block;',b,'">',d.join(" "),"</ins></ins>"].join("")};var Qa=function(){},Sa=function(a,b,c){switch(typeof b){case "string":Ra(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==g){c.push("null");break}if(b instanceof Array){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),Sa(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)b.hasOwnProperty(e)&&(f=b[e],typeof f!="function"&&(c.push(d),Ra(e,c),c.push(":"),Sa(a,f,c),d=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},Ta={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},Ua=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ra=function(a,b){b.push('"');b.push(a.replace(Ua,function(a){if(a in Ta)return Ta[a];var b=a.charCodeAt(0),e="\\u";b<16?e+="000":b<256?e+="00":b<4096&&(e+="0");return Ta[a]=e+b.toString(16)}));b.push('"')};var V=["google_ad_block","google_ad_channel","google_ad_client","google_ad_format","google_ad_height","google_ad_host","google_ad_host_channel","google_ad_host_tier_id","google_ad_output","google_ad_override","google_ad_region","google_ad_section","google_ad_slot","google_ad_type","google_ad_width","google_adtest","google_allow_expandable_ads","google_alternate_ad_url","google_alternate_color","google_analytics_domain_name","google_analytics_uacct","google_bid","google_city","google_color_bg","google_color_border",
"google_color_line","google_color_link","google_color_text","google_color_url","google_container_id","google_contents","google_country","google_cpm","google_ctr_threshold","google_cust_age","google_cust_ch","google_cust_gender","google_cust_id","google_cust_interests","google_cust_job","google_cust_l","google_cust_lh","google_cust_u_url","google_disable_video_autoplay","google_ed","google_eids","google_enable_osd","google_encoding","google_font_face","google_font_size","google_frame_id","google_gl",
"google_hints","google_image_size","google_kw","google_kw_type","google_language","google_max_num_ads","google_max_radlink_len","google_num_radlinks","google_num_radlinks_per_unit","google_num_slots_to_rotate","google_only_ads_with_video","google_only_pyv_ads","google_only_userchoice_ads","google_override_format","google_page_url","google_referrer_url","google_region","google_reuse_colors","google_rl_dest_url","google_rl_filtering","google_rl_mode","google_rt","google_safe","google_skip","google_tag_info",
"google_targeting","google_ui_features","google_ui_version","google_video_doc_id","google_video_product_type","google_with_pyv_ads"];var Va=function(a){this.b=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},log:[],img:Math.random()<0.01?[]:g});this.e=a.google_iframe_oncopy;a.setTimeout(j(this.j,this),3E4)},Wa;var W="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){i+='.call';setTimeout(h,0)}else if(h.match){i+='.nav';w.location.replace(h)}s.log&&s.log.push(i)}";
/[&<>\"]/.test(W)&&(W.indexOf("&")!=-1&&(W=W.replace(da,"&amp;")),W.indexOf("<")!=-1&&(W=W.replace(ea,"&lt;")),W.indexOf(">")!=-1&&(W=W.replace(fa,"&gt;")),W.indexOf('"')!=-1&&(W=W.replace(ha,"&quot;")));Wa=W;Va.prototype.set=function(a,b){this.e.handlers[a]=b};
Va.prototype.j=function(){if(this.e.img){var a=this.e.log,b=this.b.document;if(a.length)b=["http://",Aa(),"/pagead/gen_204?id=iframecopy&log=",S(a.join("-")),"&url=",S(b.URL.substring(0,512)),"&ref=",S(b.referrer.substring(0,512))].join(""),a.length=0,a=new Image,this.e.img.push(a),a.src=b}};var Xa=function(){var a="script";return["<",a,' src="http://',Q(""),'/pagead/js/r20110414/r20110415/show_ads_impl.js"></',a,">"].join("")},Ya=function(a,b,c,d){return function(){var e=!1;d&&Ma().al(3E4);try{var f;try{f=!!a.document.getElementById(b).contentWindow.document}catch(ra){f=!1}if(f){var q=a.document.getElementById(b).contentWindow,
l=q.document;if(!l.body||!l.body.firstChild)l.open(),q.google_async_iframe_close=!0,l.write(c)}else{var y=a.document.getElementById(b).contentWindow,o;f=c;f=String(f);if(f.quote)o=f.quote();else{q=['"'];for(l=0;l<f.length;l++){var m=f.charAt(l),Ea=m.charCodeAt(0),mb=q,nb=l+1,ga;if(!(ga=k[m])){var C;if(Ea>31&&Ea<127)C=m;else{var p=m;if(p in n)C=n[p];else if(p in k)C=n[p]=k[p];else{var v=p,w=p.charCodeAt(0);if(w>31&&w<127)v=p;else{if(w<256){if(v="\\x",w<16||w>256)v+="0"}else v="\\u",w<4096&&(v+="0");
v+=w.toString(16).toUpperCase()}C=n[p]=v}}ga=C}mb[nb]=ga}q.push('"');o=q.join("")}y.location.replace("javascript:"+o)}e=!0}catch(tb){y=Ha().google_jobrunner,La(y)&&y.rl()}e&&(new Va(a)).set(b,Ya(a,b,c,!1))}},Za=function(){return ta&&ua/ta||typeof window.google_hash_ratio=="number"&&window.google_hash_ratio||g};window.google_loader_used=!0;(function(a){if(!("google_onload_fired"in a))a.google_onload_fired=!1,Ca(a,function(){a.google_onload_fired=!0})})(window);if(!window.google_loader_experiment)window.google_loader_experiment=Da(["async1_all","block1"],wa)||Da(["launch"],va)||"none";var $a,ab=window.google_loader_experiment;
if($a=window.google_enable_async===!0||ab=="launch"||ab=="async1_all")$a=window.google_enable_async===!1?!1:(B&&/MSIE 8/.test(navigator.userAgent)||pa||oa&&!!window.document.body)&&!window.google_container_id&&(!window.google_ad_output||window.google_ad_output=="html");
if($a){var bb=window;bb.google_unique_id?++bb.google_unique_id:bb.google_unique_id=1;for(var X=window,_script$$inline_198="script",Y,Z={allowtransparency:'"true"',frameborder:'"0"',height:'"'+X.google_ad_height+'"',hspace:'"0"',marginwidth:'"0"',marginheight:'"0"',onload:'"'+Wa+'"',scrolling:'"no"',vspace:'"0"',width:'"'+X.google_ad_width+'"'},cb=X.document,$=Z.id,db=0;!$||X.document.getElementById($);)$="aswift_"+db++;Z.id=$;Z.name=$;cb.write(Pa(Z,X.google_ad_width,X.google_ad_height));Y=$;var eb;
X.google_page_url&&(X.google_page_url=String(X.google_page_url));for(var fb=[],gb=0,hb=V.length;gb<hb;gb++){var ib=V[gb];if(X[ib]!=g){var jb;try{var kb=[];Sa(new Qa,X[ib],kb);jb=kb.join("")}catch(lb){}jb&&Ba(fb,ib,"=",jb,";")}}eb=fb.join("");for(var ob=0,pb=V.length;ob<pb;ob++)X[V[ob]]=g;var qb=(new Date).getTime(),rb=Za(),sb=window.google_loader_experiment,ub=["<!doctype html><html><body><",_script$$inline_198,">",eb,"google_show_ads_impl=true;google_unique_id=",X.google_unique_id,';google_async_iframe_id="',
Y,'";google_start_time=',h,";",rb?"google_hash_ratio="+rb+";":"",sb?'google_loader_experiment="'+sb+'";':"","google_bpp=",qb>h?qb-h:1,";</",_script$$inline_198,">",Xa(),"</body></html>"].join("");(X.document.getElementById(Y)?Na:Oa)(Ya(X,Y,ub,!0))}else window.google_start_time=h,window.google_hash_ratio=Za(),document.write(Xa());})();
