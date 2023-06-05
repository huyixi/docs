import{_ as c,a as g,b as y,c as h,d as x,e as _,f as p,g as u}from"./nas-fd8b9ab1.js";import{_ as f,r as i,o as b,c as m,b as t,e,a as n,w as r,f as w}from"./app-1a024f9e.js";const v={},k=w('<h1 id="webdav" tabindex="-1"><a class="header-anchor" href="#webdav" aria-hidden="true">#</a> WebDav</h1><h3 id="webdav-config" tabindex="-1"><a class="header-anchor" href="#webdav-config" aria-hidden="true">#</a> <strong>WebDAV config</strong></h3><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>Url</td><td>http[s]://domain:port/dav/</td></tr><tr><td>Host</td><td>domain</td></tr><tr><td>Path</td><td>dav</td></tr><tr><td>Scheme</td><td>http/https</td></tr><tr><td>Port</td><td>Same as web port</td></tr><tr><td>Username</td><td>Same as web username</td></tr><tr><td>Password</td><td>Same as web password</td></tr></tbody></table><h3 id="webdav-support" tabindex="-1"><a class="header-anchor" href="#webdav-support" aria-hidden="true">#</a> <strong>WebDav Support</strong></h3><table><thead><tr><th>Storage strategy</th><th style="text-align:center;">list</th><th style="text-align:center;">download</th><th style="text-align:center;">mkdir</th><th style="text-align:center;">rename</th><th style="text-align:center;">move</th><th style="text-align:center;">copy</th><th style="text-align:center;">upload</th></tr></thead><tbody><tr><td>LocalStorage</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>AliyunDirve</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Onedrive</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>189Cloud</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>GoogleDrive</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>123pan</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>FTP</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>SFTP</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">❌</td><td style="text-align:center;">✅</td></tr><tr><td>PikPak</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>S3</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>USS</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>WebDAV</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Teambition</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Mediatrack</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>139yun</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>YandexDisk</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>BaiduNetdisk</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr><tr><td>Quark</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td><td style="text-align:center;">✅</td></tr></tbody></table><h2 id="software-that-can-be-used-to-mount-webdav" tabindex="-1"><a class="header-anchor" href="#software-that-can-be-used-to-mount-webdav" aria-hidden="true">#</a> <strong>Software that can be used to mount WebDav</strong></h2>',6),A=t("strong",null,"Windows",-1),S={href:"https://potplayer.daum.net/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},N={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.onecommander.com/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://mountainduck.io/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.netdrive.net/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"},W=t("strong",null,"Android",-1),U={href:"https://www.aliyundrive.com/s/cf3p39UXkxa",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},M={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8e0027b7473f82cc64bbb9be0a34794c32c07",target:"_blank",rel:"noopener noreferrer"},X=t("strong",null,"IOS",-1),B={href:"https://www.kmplayer.com/home",target:"_blank",rel:"noopener noreferrer"},C=t("strong",null,"电视TV",-1),O={href:"https://www.aliyundrive.com/s/cf3p39UXkxa",target:"_blank",rel:"noopener noreferrer"},G={href:"https://kodi.tv/download",target:"_blank",rel:"noopener noreferrer"},H={href:"https://www.aliyundrive.com/s/cf3p39UXkxa/folder/63e8dcc229204583fff34f8cbd53dfcd6a86f526",target:"_blank",rel:"noopener noreferrer"},Q=t("li",null,[e("If you only look at Ali, you can use Ali's official cooperation "),t("ul",null,[t("li",null,"Huanshi store-Alibaba cloud disk TV version, online disk player-Alibaba cloud disk TV version")])],-1),R=t("strong",null,"Mac",-1),Y={href:"https://mountainduck.io/",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.netdrive.net/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"},z=t("strong",null,"Linux",-1),J={href:"https://rclone.org/",target:"_blank",rel:"noopener noreferrer"},K=t("p",null,"If there is a suitable addition, please add~",-1),Z=t("h3",{id:"webdav-fill-in-example",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#webdav-fill-in-example","aria-hidden":"true"},"#"),e(),t("strong",null,"WebDav fill-in example")],-1),$=t("p",null,[e("Give a few examples of filling in "),t("strong",null,[t("code",null,"WebDav")]),e(", the account password is the account password of your AList user")],-1),tt=t("p",null,[e("This is basically the way of writing, and the way of writing may be different for different software. If there is no separate path option, it is normal to add the "),t("code",null,"/dav"),e(" option after the site")],-1),et=t("p",null,[t("img",{src:c,alt:"webdav"})],-1),nt=t("p",null,[t("img",{src:g,alt:"webdav"})],-1),lt=t("div",{class:"image-preview"},[t("img",{src:y}),t("img",{src:h})],-1),rt=t("p",null,[t("img",{src:x,alt:"webdav"})],-1),dt=t("p",null,[t("img",{src:_,alt:"webdav"})],-1),at=t("p",null,[t("img",{src:p,alt:"webdav"})],-1),st=t("p",null,[t("img",{src:u,alt:"webdav"})],-1),it=t("p",null,null,-1);function ot(ct,gt){const l=i("ExternalLinkIcon"),o=i("Tabs");return b(),m("div",null,[k,t("ol",null,[t("li",null,[A,t("ul",null,[t("li",null,[t("a",S,[e("Potplayer"),n(l)]),e("，"),t("a",D,[e("kmplayer"),n(l)]),e("，RaiDrive，"),t("a",N,[e("kodi"),n(l)]),e("，"),t("a",T,[e("OneCommander"),n(l)]),e("，"),t("a",V,[e("Mountain Duck"),n(l)]),e("，"),t("a",I,[e("netdrive"),n(l)]),e("❌，"),t("a",P,[e("rclone"),n(l)])])])]),t("li",null,[W,t("ul",null,[t("li",null,[t("a",U,[e("Nplayer"),n(l)]),e("，"),t("a",F,[e("kmplayer"),n(l)]),e("，ES File Manager，"),t("a",M,[e("kodi"),n(l)]),e("，"),t("a",E,[e("nova nova magic change"),n(l)]),e("，"),t("a",L,[e("reex"),n(l)]),e("，cx File Manager，Solid Expore")])])]),t("li",null,[X,t("ul",null,[t("li",null,[e("Nplayer，"),t("a",B,[e("kmplayer"),n(l)]),e("，infuse，Fileball File Manager")])])]),t("li",null,[C,t("ul",null,[t("li",null,[t("a",O,[e("Nplayer"),n(l)]),e("，"),t("a",G,[e("kodi"),n(l)]),e("，"),t("a",H,[e("nova nova magic change"),n(l)])]),Q])]),t("li",null,[R,t("ul",null,[t("li",null,[e("IINA，"),t("a",Y,[e("Mountain Duck"),n(l)]),e("，infuse，"),t("a",j,[e("netdrive"),n(l)]),e("，"),t("a",q,[e("rclone"),n(l)])])])]),t("li",null,[z,t("ul",null,[t("li",null,[e("davfs2，"),t("a",J,[e("rclone"),n(l)])])])])]),K,Z,$,tt,n(o,{id:"680",data:[{title:"Nplayer"},{title:"reex"},{title:"ES"},{title:"Infuse"},{title:"Fileball"},{title:"Potplayer"},{title:"nas"}],"tab-id":"WebDav"},{tab0:r(({title:d,value:a,isActive:s})=>[et]),tab1:r(({title:d,value:a,isActive:s})=>[nt]),tab2:r(({title:d,value:a,isActive:s})=>[lt]),tab3:r(({title:d,value:a,isActive:s})=>[rt]),tab4:r(({title:d,value:a,isActive:s})=>[dt]),tab5:r(({title:d,value:a,isActive:s})=>[at]),tab6:r(({title:d,value:a,isActive:s})=>[st,it]),_:1})])}const xt=f(v,[["render",ot],["__file","webdav.html.vue"]]);export{xt as default};