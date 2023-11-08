import{_ as s,r as n,o,c as d,b as e,e as a,a as l,w as r,f as i}from"./app-8b881aec.js";const h={},c=i('<h1 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h1><h2 id="用户名" tabindex="-1"><a class="header-anchor" href="#用户名" aria-hidden="true">#</a> <strong>用户名</strong></h2><p>登录用户名</p><h2 id="密码" tabindex="-1"><a class="header-anchor" href="#密码" aria-hidden="true">#</a> <strong>密码</strong></h2><p>登录密码</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>密码对游客是无效的。</p></div><h2 id="基本路径" tabindex="-1"><a class="header-anchor" href="#基本路径" aria-hidden="true">#</a> <strong>基本路径</strong></h2><p>用户登录时看到的根路径</p><hr><p>Q：<strong>如何否允许一个用户可以看到多个文件夹路径?</strong></p>',10),u=i('<h2 id="允许" tabindex="-1"><a class="header-anchor" href="#允许" aria-hidden="true">#</a> <strong>允许</strong></h2><ul><li>可以看到隐藏：可以看到隐藏的文件和文件夹</li><li>无密码访问：无需密码即可访问</li><li>添加 aria2 任务：可以添加 aria2 任务</li><li>创建目录或上传：可以创建目录或上传文件</li><li>重命名：可以重命名文件和文件夹</li><li>移动：可以移动文件和文件夹</li><li>复制：可以复制文件和文件夹</li><li>删除：可以删除文件和文件夹</li><li>WebDAV 读取：可以使用 WebDAV 读取文件和文件夹</li><li>WebDAV 管理：可以使用 WebDAV 管理文件和文件夹</li></ul><h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> <strong>Tips</strong></h2>',3),p=e("strong",null,"点击查看这里如何设置",-1),E=i("<li><p><strong><code>Guest user is disabled, login please</code></strong>：为了保护您的Alist安全，游客访问权限关闭了，若需要游客访问自行打开</p><ul><li>后台 --&gt; 用户 --&gt; <code>guest</code> --&gt; 停用取消勾选</li></ul></li><li><p>关于 <strong><code>复制/上传</code></strong> 的问题</p><ul><li>如果你上传(含离线下载上传)很大的文件，或者上传文件很多（几百上千），不建议您使用AList来进行操作,请前往相应的网盘官网直接操作最后</li></ul></li>",2);function _(g,f){const t=n("RouterLink");return o(),d("div",null,[c,e("p",null,[a("A：可以新建一个"),l(t,{to:"/zh/guide/advanced/alias.html"},{default:r(()=>[a("别名")]),_:1}),a("存储,将你需要给用户展示的路径都添加到别名，然后在用户路径这里指向新建的别名存储")]),u,e("ol",null,[e("li",null,[e("p",null,[a("你是否在为游客能看到全部文件而发愁？"),l(t,{to:"/zh/faq/why.html#%E6%83%B3%E8%AE%A9%E6%B8%B8%E5%AE%A2%E7%99%BB%E5%BD%95%E5%90%8E%E6%89%8D%E8%83%BD%E7%9C%8B%E5%88%B0%E5%86%85%E5%AE%B9%E6%80%8E%E4%B9%88%E8%AE%BE%E7%BD%AE"},{default:r(()=>[p]),_:1})])]),E])])}const A=s(h,[["render",_],["__file","user.html.vue"]]);export{A as default};