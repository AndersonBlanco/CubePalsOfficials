import e from"postcss-selector-parser";function t(t){if(!t||!t.nodes)return;let s=[];const o=[...t.nodes];for(let t=0;t<o.length+1;t++){const r=o[t];if(r&&"combinator"!==r.type)s.push(r);else{if(s.length>1){const t=e.selector({value:""});s[0].replaceWith(t),s.slice(1).forEach((e=>{e.remove()})),s.forEach((e=>{t.append(e)})),n(t),t.replaceWith(...t.nodes)}s=[]}}}function n(e){e&&e.nodes&&e.nodes.sort(((e,t)=>{if("selector"===e.type&&"selector"===t.type&&e.nodes.length&&t.nodes.length){if(e.nodes[0].type===t.nodes[0].type)return 0;if(s[e.nodes[0].type]<s[t.nodes[0].type])return-1;if(s[e.nodes[0].type]>s[t.nodes[0].type])return 1}if("selector"===e.type&&e.nodes.length){if(e.nodes[0].type===t.type)return 0;if(s[e.nodes[0].type]<s[t.type])return-1;if(s[e.nodes[0].type]>s[t.type])return 1}if("selector"===t.type&&t.nodes.length){if(e.type===t.nodes[0].type)return 0;if(s[e.type]<s[t.nodes[0].type])return-1;if(s[e.type]>s[t.nodes[0].type])return 1}return e.type===t.type?0:s[e.type]<s[t.type]?-1:1}))}const s={universal:0,tag:1,id:2,class:3,attribute:4,pseudo:5,selector:7,string:8,root:9,comment:10},o=e().astSync(":link").nodes[0],r=e().astSync(":visited").nodes[0],l=e().astSync("area[href]").nodes[0];function c(n,s){let c=[];return e((e=>{let n=0;if(e.walkPseudos((e=>{":any-link"!==e.value||e.nodes&&e.nodes.length||n++})),!n)return;let p=[];for(let e=0;e<n;e++)s?p.push([o.clone(),r.clone(),l.clone()]):p.push([o.clone(),r.clone()]);(function(...e){const t=[],n=e.length-1;function s(o,r){for(let l=0,c=e[r].length;l<c;l++){const c=o.slice(0);c.push(e[r][l]),r==n?t.push(c):s(c,r+1)}}return s([],0),t})(...p).forEach((n=>{const s=e.clone();s.walkPseudos((e=>{":any-link"!==e.value||e.nodes&&e.nodes.length||e.replaceWith(...n.shift().nodes)})),s.walk((e=>{"nodes"in e&&(e.nodes.forEach((e=>{t(e)})),t(e))})),c.push(s.toString())}))})).processSync(n),c}const p=/:any-link/;function i(e){const t={preserve:!0,...e},n={areaHrefNeedsFixing:!1,...Object(t.subFeatures)};return{postcssPlugin:"postcss-pseudo-class-any-link",Rule(e,{result:s}){if(!p.test(e.selector))return;const o=e.raws.selector&&e.raws.selector.raw||e.selector;":"!==o[o.length-1]&&function(e,t,n,s){let o=[],r=[];try{for(let t=0;t<e.selectors.length;t++){const n=e.selectors[t],l=c(n,s);l.length?o.push(...l):r.push(n)}}catch(n){return void e.warn(t,`Failed to parse selector : ${e.selector}`)}o.length&&(e.cloneBefore({selectors:o}),n?r.length&&e.cloneBefore({selectors:r}):r.length?e.selectors=r:e.remove())}(e,s,t.preserve,n.areaHrefNeedsFixing)}}}i.postcss=!0;export{i as default};
