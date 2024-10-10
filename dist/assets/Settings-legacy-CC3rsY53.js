System.register(["./index-legacy-DLUyKrsR.js"],(function(t,e){"use strict";var n,s,i,a,o,r,d,c,u,g,l,m,h,b,v,p,f,x,k;return{setters:[function(t){n=t._,s=t.u,i=t.r,a=t.o,o=t.c,r=t.a,d=t.w,c=t.b,u=t.t,g=t.d,l=t.e,m=t.v,h=t.f,b=t.F,v=t.g,p=t.h,f=t.i,x=t.T,k=t.j}],execute:function(){var e=document.createElement("style");e.textContent=".shadow-box-settings[data-v-cb131a37]{padding:20px;min-height:calc(100vh - 155px)}footer[data-v-cb131a37]{color:#aaa;font-size:13px;margin-top:20px;padding-bottom:30px;text-align:center}.settings-menu a[data-v-cb131a37]{text-decoration:none!important}.settings-menu .menu-item[data-v-cb131a37]{border-radius:10px;margin:.5em;padding:.7em 1em;cursor:pointer;transition:all ease-in-out .1s}[dir=ltr] .settings-menu .menu-item[data-v-cb131a37]{border-left-width:0}[dir=rtl] .settings-menu .menu-item[data-v-cb131a37]{border-right-width:0}.settings-menu .menu-item[data-v-cb131a37]:hover{background:#e7faec}.dark .settings-menu .menu-item[data-v-cb131a37]:hover{background:#161b22}.settings-menu .active .menu-item[data-v-cb131a37]{background:#e7faec}[dir=ltr] .settings-menu .active .menu-item[data-v-cb131a37]{border-left:4px solid #5cdd8b;border-top-left-radius:0;border-bottom-left-radius:0}[dir=rtl] .settings-menu .active .menu-item[data-v-cb131a37]{border-right:4px solid #5cdd8b;border-top-right-radius:0;border-bottom-right-radius:0}.dark .settings-menu .active .menu-item[data-v-cb131a37]{background:#161b22}.settings-content .settings-content-header[data-v-cb131a37]{width:calc(100% + 20px);border-bottom:1px solid #dee2e6;margin-top:-20px;padding:12.5px 1em;font-size:26px}[dir=ltr] .settings-content .settings-content-header[data-v-cb131a37]{border-radius:0 10px 0 0;margin-right:-20px}[dir=rtl] .settings-content .settings-content-header[data-v-cb131a37]{border-radius:10px 0 0;margin-left:-20px}.dark .settings-content .settings-content-header[data-v-cb131a37]{background:#161b22;border-bottom:0}.mobile .settings-content .settings-content-header[data-v-cb131a37]{padding:15px 0 0}.dark .mobile .settings-content .settings-content-header[data-v-cb131a37]{background-color:transparent}.logout[data-v-cb131a37]{color:#dc3545!important}\n",document.head.appendChild(e);var $={key:0,class:"shadow-box mb-3"},y={class:"shadow-box shadow-box-settings"},P={class:"row"},w={key:0,class:"settings-menu col-lg-3 col-md-5"},S={class:"menu-item"},M={class:"menu-item"},D={class:"settings-content col-lg-9 col-md-7"},_={key:0,class:"settings-content-header"},E={class:"mx-3"};t("default",n({data:function(){return{show:!0,settings:{},settingsLoaded:!1}},computed:{currentPage:function(){var t=s().path.split("/"),e=t[t.length-1];return e&&"settings"!==e?e:null},showSubMenu:function(){return!this.$root.isMobile||!this.currentPage},subMenus:function(){return{general:{title:this.$t("General")},appearance:{title:this.$t("Appearance")},notifications:{title:this.$t("Notifications")},"reverse-proxy":{title:this.$t("Reverse Proxy")},tags:{title:this.$t("Tags")},"monitor-history":{title:this.$t("Monitor History")},"docker-hosts":{title:this.$t("Docker Hosts")},security:{title:this.$t("Security")},"api-keys":{title:this.$t("API Keys")},proxies:{title:this.$t("Proxies")},backup:{title:this.$t("Backup")},about:{title:this.$t("About")}}}},watch:{"$root.isMobile":function(){this.loadGeneralPage()}},mounted:function(){this.loadSettings(),this.loadGeneralPage()},methods:{loadGeneralPage:function(){this.currentPage||this.$root.isMobile||this.$router.push("/settings/general")},loadSettings:function(){var t=this;this.$root.getSocket().emit("getSettings",(function(e){t.settings=e.data,void 0===t.settings.checkUpdate&&(t.settings.checkUpdate=!0),void 0===t.settings.searchEngineIndex&&(t.settings.searchEngineIndex=!1),void 0===t.settings.entryPage&&(t.settings.entryPage="dashboard"),void 0===t.settings.nscd&&(t.settings.nscd=!0),void 0===t.settings.dnsCache&&(t.settings.dnsCache=!1),void 0===t.settings.keepDataPeriodDays&&(t.settings.keepDataPeriodDays=180),void 0===t.settings.tlsExpiryNotifyDays&&(t.settings.tlsExpiryNotifyDays=[7,14,21]),void 0===t.settings.trustProxy&&(t.settings.trustProxy=!1),t.settingsLoaded=!0}))},saveSettings:function(t,e){var n=this,s=this.validateSettings();s.success?this.$root.getSocket().emit("setSettings",this.settings,e,(function(e){n.$root.toastRes(e),n.loadSettings(),t&&t()})):this.$root.toastError(s.msg)},validateSettings:function(){return this.settings.keepDataPeriodDays<0?{success:!1,msg:this.$t("dataRetentionTimeError")}:{success:!0,msg:""}}}},[["render",function(t,e,n,s,C,I){var G=i("font-awesome-icon"),L=i("router-link"),A=i("router-view");return a(),o("div",null,[t.$root.isMobile?(a(),o("div",$,[r(L,{to:"/manage-status-page",class:"nav-link"},{default:d((function(){return[r(G,{icon:"stream"}),c(" "+u(t.$t("Status Pages")),1)]})),_:1}),r(L,{to:"/maintenance",class:"nav-link"},{default:d((function(){return[r(G,{icon:"wrench"}),c(" "+u(t.$t("Maintenance")),1)]})),_:1})])):g("",!0),l(h("h1",{class:"mb-3"},u(t.$t("Settings")),513),[[m,C.show]]),h("div",y,[h("div",P,[I.showSubMenu?(a(),o("div",w,[(a(!0),o(b,null,v(I.subMenus,(function(t,e){return a(),p(L,{key:e,to:"/settings/".concat(e)},{default:d((function(){return[h("div",S,u(t.title),1)]})),_:2},1032,["to"])})),128)),t.$root.isMobile&&t.$root.loggedIn&&"autoLogin"!==t.$root.socket.token?(a(),o("a",{key:0,class:"logout",onClick:e[0]||(e[0]=f((function(){var e;return t.$root.logout&&(e=t.$root).logout.apply(e,arguments)}),["prevent"]))},[h("div",M,[r(G,{icon:"sign-out-alt"}),c(" "+u(t.$t("Logout")),1)])])):g("",!0)])):g("",!0),h("div",D,[I.currentPage?(a(),o("div",_,u(I.subMenus[I.currentPage].title),1)):g("",!0),h("div",E,[r(A,null,{default:d((function(t){var e=t.Component;return[r(x,{name:"slide-fade",appear:""},{default:d((function(){return[(a(),p(k(e)))]})),_:2},1024)]})),_:1})])])])])])}],["__scopeId","data-v-cb131a37"]]))}}}));
