(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798],{7223:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[docType]",function(){return t(1569)}])},5619:function(n,r,t){"use strict";t.d(r,{Z:function(){return s}});var e=t(6042),i=t(9396),c=t(9534),o=t(5893),a=t(8527),u=t(9583);function s(n){var r=n.date,t=(0,c.Z)(n,["date"]);return(0,o.jsxs)(a.Kq,(0,i.Z)((0,e.Z)({direction:"row",spacing:4,align:"center"},t),{children:[(0,o.jsx)(u.IiJ,{}),(0,o.jsx)(a.Kq,{direction:"column",spacing:0,fontSize:"sm",children:(0,o.jsx)(a.xv,{color:"gray.500",children:r})})]}))}},2274:function(n,r,t){"use strict";t.d(r,{Z:function(){return s}});var e=t(5893),i=t(8527),c=t(894),o=t(5675),a=t.n(o),u=t(4197);function s(n){var r=n.image,t=n.tags;if(r)return(0,e.jsx)(a(),{src:r,alt:"Post Image",layout:"fill"});var o=(0,u.q)(t);return o?(0,e.jsxs)(i.M5,{children:[" ",(0,e.jsx)(c.JO,{w:"210px",h:"100%",as:o})]}):(0,e.jsx)(e.Fragment,{})}},1009:function(n,r,t){"use strict";t.d(r,{Z:function(){return s}});var e=t(6042),i=t(9396),c=t(5893),o=t(6356),a=t(894),u=t(4197);function s(n){var r=n.tag,t=(0,u.K)(r),s={color:"brand.500",textTransform:"uppercase",fontWeight:"800",fontSize:"xs",letterSpacing:"1.1"};return(0,c.jsxs)(o.Vp,{children:[(0,c.jsx)(o.Sn,(0,i.Z)((0,e.Z)({},s),{display:{base:"none",md:"flex"},children:(0,c.jsxs)(c.Fragment,{children:[t?(0,c.jsx)(a.JO,{as:t}):null,r]})})),(0,c.jsx)(o.Sn,(0,i.Z)((0,e.Z)({display:{base:"flex",md:"none"}},s),{children:t?(0,c.jsx)(a.JO,{as:t}):r}))]},r)}},1569:function(n,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return g},default:function(){return h}});var e=t(6042),i=t(5893),c=t(8527),o=t(949),a=t(1664),u=t.n(a),s=t(5619),f=t(2274),l=t(1009);function d(n){var r=n.image,t=n.tags,e=n.href,a=n.title,d=n.description,x=n.date;return(0,i.jsx)(u(),{href:e,children:(0,i.jsx)("a",{children:(0,i.jsx)(c.M5,{py:6,children:(0,i.jsxs)(c.xu,{maxW:"445px",w:"full",bg:(0,o.ff)("white","gray.900"),boxShadow:"2xl",rounded:"md",p:6,overflow:"hidden",children:[(0,i.jsx)(c.xu,{h:"210px",bg:(0,o.ff)("gray.100","gray.700"),mt:-6,mx:-6,mb:6,pos:"relative",children:(0,i.jsx)(f.Z,{image:r,tags:t})}),(0,i.jsxs)(c.Kq,{children:[(0,i.jsx)(c.X6,{color:(0,o.ff)("gray.700","white"),fontSize:"2xl",fontFamily:"body",children:a}),(0,i.jsx)(c.Ug,{children:t.map((function(n,r){return(0,i.jsx)(l.Z,{tag:n},r)}))}),(0,i.jsx)(c.xv,{color:"gray.500",children:d})]}),(0,i.jsx)(s.Z,{mt:6,date:x})]})})})})}var x=t(3290),p=t(2109),g=!0;function h(n){return(0,i.jsx)(c.W2,{maxWidth:"7xl",children:(0,i.jsx)(c.MI,{columns:{sm:1,md:2,lg:3},spacing:10,children:n.posts.map((function(n,r){var t=n.name,c=n.doc,o=n.docType,a="".concat(o,"/").concat(t),u=(0,p.mT)(c)?(0,x.QC)(c):c;return(0,i.jsx)(d,(0,e.Z)({href:a},u),r)}))})})}},3290:function(n,r,t){"use strict";t.d(r,{QC:function(){return u}});var e=t(4924),i=t(6042),c=t(9396),o=t(2109);function a(n){var r=n.contents,t=r.filter((function(n){return"string"!==typeof n}));return t.concat(t.map((function(n){return a(n)})).reduce((function(n,r){return n.concat(r)}),[]))}function u(n){var r=function(n){var r={},t=!0,e=!1,i=void 0;try{for(var c,u=a(n)[Symbol.iterator]();!(t=(c=u.next()).done);t=!0){var s=c.value;if("type"in s&&s.type==o.Jq.KEYWORD){var f=s;r[f.properties.key]=f.properties.value}}}catch(l){e=!0,i=l}finally{try{t||null==u.return||u.return()}finally{if(e)throw i}}return r}(n),t={icon:r.ICON,title:r.TITLE,author:r.AUTHOR,image:r.IMAGE,description:r.DESCRIPTION,category:r.CATEGORY,date:r.DATE,tags:n.properties.filetags};return Object.keys(t).filter((function(n){return void 0!==t[n]})).reduce((function(n,r){return(0,c.Z)((0,i.Z)({},n),(0,e.Z)({},r,t[r]))}),{author:"Michael McFarland",authorImage:"https://placekitten.com/200/300"})}},2109:function(n,r,t){"use strict";t.d(r,{Jq:function(){return i},mT:function(){return c}});var e,i;function c(n){return n.$$data_type===e.ORG_DOCUMENT}!function(n){n.ASSET="asset-document",n.ORG_NODE="org-node",n.ORG_DOCUMENT="org-document"}(e||(e={})),function(n){n.SECTION="section",n.KEYWORD="keyword",n.PARAGRAPH="paragraph",n.HEADLINE="headline",n.ITEM="item",n.PLAIN_LIST="plain-list",n.VERBATIM_BLOCK="verbatim",n.SRC_BLOCK="src-block",n.LINK="link",n.BOLD="bold",n.ITALIC="italic",n.EXAMPLE_BLOCK="example-block"}(i||(i={}))},4197:function(n,r,t){"use strict";t.d(r,{K:function(){return u},q:function(){return a}});var e=t(603),i=t(9583),c=t(859),o=[[/javascript|js/gi,c.Fi5],[/java?!script/gi,i.zEo],[/scala/gi,c.kNg],[/code/gi,i.FEF],[/unity(3d)/gi,c.Zkn],[/sql/gi,c.NDG],[/node/gi,i.jPo]];function a(n){return n.map((function(n){return u(n)})).find((function(n){return void 0!==n}))}function u(n){var r=(0,e.Z)(o.find((function(r){var t=(0,e.Z)(r,2),i=t[0];t[1];return n.match(i)}))||[],2);r[0];return r[1]}}},function(n){n.O(0,[921,101,774,888,179],(function(){return r=7223,n(n.s=r);var r}));var r=n.O();_N_E=r}]);