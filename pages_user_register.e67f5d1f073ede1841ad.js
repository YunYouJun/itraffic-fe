webpackJsonp([2],{"5/ZZ":function(e,r,t){var o=t("ck4r");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("31542f3d",o,!1,{sourceMap:!1})},"8dR4":function(e,r,t){var o=t("l/UK");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("7a9c0f42",o,!1,{sourceMap:!1})},LpBF:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("dbzE"),s=t("nsfm"),l=!1;var a=function(e){l||t("8dR4")},n=t("VU/8")(o.a,s.a,!1,a,null,null);n.options.__file="pages\\user\\register.vue",r.default=n.exports},Nk5L:function(e,r,t){"use strict";r.a={data:function(){var e=this;return{ruleForm:{pass:"",checkPass:""},rules:{pass:[{validator:function(r,t,o){""===t?o(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),o())},trigger:"blur"}],checkPass:[{validator:function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.ruleForm.pass?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}}},Rgv7:function(e,r,t){"use strict";var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-card",[t("el-row",[t("el-col",{attrs:{xs:24,md:{span:16,offset:4}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[t("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm.userName,callback:function(r){e.$set(e.ruleForm,"userName",r)},expression:"ruleForm.userName"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"pass"}},[t("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.pass,callback:function(r){e.$set(e.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm.checkPass,callback:function(r){e.$set(e.ruleForm,"checkPass",r)},expression:"ruleForm.checkPass"}})],1),t("el-form-item",{attrs:{label:"真实姓名",prop:"realName"}},[t("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm.realName,callback:function(r){e.$set(e.ruleForm,"realName",r)},expression:"ruleForm.realName"}})],1),t("el-form-item",{attrs:{label:"身份证号",prop:"identity"}},[t("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm.identity,callback:function(r){e.$set(e.ruleForm,"identity",r)},expression:"ruleForm.identity"}})],1),t("el-form-item",{attrs:{label:"联系方式",prop:"phone"}},[t("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm.phone,callback:function(r){e.$set(e.ruleForm,"phone",r)},expression:"ruleForm.phone"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("提交")]),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)],1)],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};r.a=s},a1p4:function(e,r,t){"use strict";var o=t("Nk5L"),s=t("Rgv7"),l=!1;var a=function(e){l||t("5/ZZ")},n=t("VU/8")(o.a,s.a,!1,a,null,null);n.options.__file="components\\user\\UserRegister.vue",r.a=n.exports},ck4r:function(e,r,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])},dbzE:function(e,r,t){"use strict";var o=t("a1p4");r.a={name:"Register",components:{UserRegister:o.a}}},"l/UK":function(e,r,t){(e.exports=t("FZ+f")(!1)).push([e.i,"",""])},nsfm:function(e,r,t){"use strict";var o=function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("user-register")],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};r.a=s}});