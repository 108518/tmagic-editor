System.register(["./useApp-legacy.d06aeb34.js","./index-legacy.1dc0be94.js"],(function(e,t){"use strict";var i,o;return{setters:[e=>{i=e.u},e=>{o=e._}],execute:function(){const t=Vue.defineComponent({props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(e){const t=Vue.ref(!1),o=i(e),n=o?.page?.getNode(e.config.id),c=()=>{t.value=!0,o&&o.emit("overlay:open",n)},r=()=>{t.value=!1,o&&o.emit("overlay:close",n)};return o?.on("editor:select",((t,i)=>{i.find((t=>t.id===e.config.id))?c():r()})),{visible:t,openOverlay:c,closeOverlay:r}}});e("default",o(t,[["render",function(e,t,i,o,n,c){const r=Vue.resolveComponent("magic-ui-container");return e.visible?(Vue.openBlock(),Vue.createBlock(r,{key:0,class:"magic-ui-overlay",config:{items:e.config.items}},{default:Vue.withCtx((()=>[Vue.renderSlot(e.$slots,"default")])),_:3},8,["config"])):Vue.createCommentVNode("v-if",!0)}],["__file","/parisma/github/tmagic-editor/packages/ui/src/overlay/src/index.vue"]]))}}}));
//# sourceMappingURL=index-legacy.5db67b5f.js.map