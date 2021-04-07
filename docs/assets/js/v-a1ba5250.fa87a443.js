(self.webpackChunkpotori_docs=self.webpackChunkpotori_docs||[]).push([[779],{1736:(t,o,e)=>{"use strict";e.r(o),e.d(o,{data:()=>i});const i={key:"v-a1ba5250",path:"/zh/guide/mails.html",title:"处理邮件",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"获取邮件",slug:"获取邮件",children:[]},{level:2,title:"提取信息",slug:"提取信息",children:[]},{level:2,title:"获取邮件",slug:"获取邮件-1",children:[]},{level:2,title:"提取信息",slug:"提取信息-1",children:[]},{level:2,title:"手动匹配",slug:"手动匹配",children:[]}],filePathRelative:"zh/guide/mails.md",git:{updatedTime:1617765594e3,contributors:[]}}},2166:(t,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>f});var i=e(6252);const l=(0,i.uE)('<h1 id="处理邮件"><a class="header-anchor" href="#处理邮件">#</a> 处理邮件</h1><p>与能量塔提名相关的邮件的主题和内容由一些模版产生，一些关键词可用于筛选邮件和提取信息。</p><h2 id="获取邮件"><a class="header-anchor" href="#获取邮件">#</a> 获取邮件</h2><p>Potori将利用以下筛选器获取邮件：</p><ul><li><strong>确认邮件</strong><ul><li><code>from:ingress-support@nianticlabs.com Portal submission confirmation -edit -photo</code></li><li><code>from:nominations@portals.ingress.com subject:(&quot;能量塔提交確認&quot; OR &quot;Portal申請の受領確認&quot; OR &quot;Portal submission confirmation&quot;) -AP</code></li></ul></li><li><strong>批准邮件</strong><ul><li><code>from:ingress-support@nianticlabs.com Portal review complete now available -edit -photo</code></li><li><code>from:nominations@portals.ingress.com Intel Map AP</code></li></ul></li><li><strong>拒绝邮件</strong><ul><li><code>from:ingress-support@nianticlabs.com Portal review complete reviewed -edit -photo</code></li><li><code>from:nominations@portals.ingress.com subject:(&quot;能量塔審查完畢&quot; OR &quot;Portal審査の完了&quot; OR &quot;Portal review complete&quot;) -AP</code></li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>您可以使用这些筛选器在您的Gmail中创建规则以自动分类您的邮件。</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Ingress Prime使用了本地化的模版，这给确定筛选器带来了挑战，我们正在尝试解决这个问题。</p></div><h2 id="提取信息"><a class="header-anchor" href="#提取信息">#</a> 提取信息</h2>',8),s=(0,i.Uk)("邮件内容将被用于提取提名信息，详情请见"),r=(0,i.Uk)("数据使用"),a=(0,i.Uk)("部分。"),n=(0,i.uE)('<p>对于拒绝邮件，有几种不同的模版分别对应不同的拒绝原因，可以通过以下关键词来识别：</p><table><thead><tr><th style="text-align:left;">原因</th><th style="text-align:left;">关键词</th></tr></thead><tbody><tr><td style="text-align:left;">重复</td><td style="text-align:left;"><code>duplicate of either an existing Portal</code></td></tr><tr><td style="text-align:left;">过近</td><td style="text-align:left;"><code>too close to an existing Portal</code> <code>能量塔過近</code></td></tr><tr><td style="text-align:left;">未指明</td><td style="text-align:left;">（不匹配以上任何关键词）</td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Ingress Prime使用了本地化的模版，这给确定关键词带来了挑战，我们正在尝试解决这个问题。</p></div><h1 id="process-mails"><a class="header-anchor" href="#process-mails">#</a> Process Mails</h1><p>与能量塔提名相关的邮件的主题和内容由一些模版产生，Potori使用一些查询语句来获取邮件，并使用关键词提取信息。</p>',5),c={class:"custom-container warning"},u=(0,i.Wm)("p",{class:"custom-container-title"},"WARNING",-1),d=(0,i.Uk)("以下查询语句和关键词可能不是最新的。Potori使用的最新版本以及相关资源在"),p={href:"https://github.com/lucka-me/potori-umi",target:"_blank",rel:"noopener noreferrer"},m=(0,i.Uk)("这个仓库中"),h=(0,i.Uk)("。"),g=(0,i.uE)('<h2 id="获取邮件-1"><a class="header-anchor" href="#获取邮件-1">#</a> 获取邮件</h2><p>Potori将利用以下查询语句获取邮件：</p><ul><li><strong>确认邮件</strong><ul><li><code>{from:ingress-support@nianticlabs.com from:ingress-support@google.com} {subject:&quot;Portal submission confirmation&quot; subject:&quot;Ingress Portal Submitted&quot;} -edit -photo</code></li><li><code>from:nominations@portals.ingress.com subject:(&quot;能量塔提交確認&quot; OR &quot;Portal申請の受領確認&quot; OR &quot;Portal submission confirmation&quot;) -AP</code></li></ul></li><li><strong>批准邮件</strong><ul><li><code>{from:ingress-support@nianticlabs.com from:ingress-support@google.com} {subject:&quot;Portal review complete&quot; subject:&quot;Ingress Portal Live&quot;} {&quot;now available&quot; &quot;will be enabled&quot;} -edit -photo</code></li><li><code>from:nominations@portals.ingress.com Intel Map AP</code></li></ul></li><li><strong>拒绝邮件</strong><ul><li><code>{from:ingress-support@nianticlabs.com from:ingress-support@google.com} subject:{&quot;Portal review complete&quot; &quot;Ingress Portal Rejected&quot; &quot;Ingress Portal Duplicate&quot;} {reviewed duplicate} -edit -photo -AP</code></li><li><code>from:nominations@portals.ingress.com subject:(&quot;能量塔審查完畢&quot; OR &quot;Portal審査の完了&quot; OR &quot;Portal review complete&quot;) -AP</code></li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>您可以使用这些查询语句在您的Gmail中创建规则以自动分类您的邮件。</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Ingress Prime使用了本地化的模版，这给确定筛选器带来了挑战，我们正在尝试解决这个问题。</p></div><h2 id="提取信息-1"><a class="header-anchor" href="#提取信息-1">#</a> 提取信息</h2><p>邮件内容会被用于提取信息：</p><ul><li>邮件标题：提名标题</li><li>邮件体：图片（和ID）、位置和拒绝理由</li></ul><h2 id="手动匹配"><a class="header-anchor" href="#手动匹配">#</a> 手动匹配</h2><p>2018年发出的部分部分邮件缺少了图片链接。Potori要使用图片链接为每个提名生成唯一ID，因此您必须手动匹配确认邮件。如果匹配按钮出现在仪表盘中，轻触它以开始匹配。</p>',10),f={render:function(t,o){const e=(0,i.up)("RouterLink"),f=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.j4)(i.HY,null,[l,(0,i.Wm)("p",null,[s,(0,i.Wm)(e,{to:"/zh/privacy/#%E6%95%B0%E6%8D%AE%E4%BD%BF%E7%94%A8"},{default:(0,i.w5)((()=>[r])),_:1}),a]),n,(0,i.Wm)("div",c,[u,(0,i.Wm)("p",null,[d,(0,i.Wm)("a",p,[m,(0,i.Wm)(f)]),h])]),g],64)}}}}]);