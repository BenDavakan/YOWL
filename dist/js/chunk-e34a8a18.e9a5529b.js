(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e34a8a18"],{"73cf":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),o=function(e){return Object(r["v"])("data-v-79f4d035"),e=e(),Object(r["t"])(),e},i={id:"container"},a={id:"register"},c=o((function(){return Object(r["h"])("h1",{style:{color:"rgb(3, 19, 65)"}},"Registration",-1)})),s={style:{color:"rgb(0, 0, 0)"}},p=o((function(){return Object(r["h"])("a",null,"Fogot password",-1)})),u=Object(r["i"])(" |"),d=Object(r["i"])(" Sign In ");function l(e,t,n,o,l,b){var h=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["g"])("div",i,[Object(r["h"])("div",a,[c,Object(r["H"])(Object(r["h"])("input",{type:"text",id:"register-ip1",placeholder:"Name","onUpdate:modelValue":t[0]||(t[0]=function(e){return l.name=e})},null,512),[[r["E"],l.name]]),Object(r["H"])(Object(r["h"])("input",{type:"email",id:"register-ip2",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.email=e})},null,512),[[r["E"],l.email]]),Object(r["H"])(Object(r["h"])("input",{type:"number",id:"register-ip3",placeholder:"Age","onUpdate:modelValue":t[2]||(t[2]=function(e){return l.age=e})},null,512),[[r["E"],l.age]]),Object(r["H"])(Object(r["h"])("input",{type:"password",id:"register-ip4",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=function(e){return l.password=e})},null,512),[[r["E"],l.password]]),Object(r["H"])(Object(r["h"])("input",{type:"password",id:"register-ip5",placeholder:"Password Confirmation","onUpdate:modelValue":t[4]||(t[4]=function(e){return l.password_confirmation=e})},null,512),[[r["E"],l.password_confirmation]]),Object(r["h"])("button",{id:"register-button",onClick:t[5]||(t[5]=function(){return b.register&&b.register.apply(b,arguments)})},"Create"),Object(r["h"])("span",s,[p,u,Object(r["j"])(h,{to:"/login"},{default:Object(r["G"])((function(){return[d]})),_:1})])])])}n("e9c4"),n("d3b7");var b={name:"Register",data:function(){return{name:"",email:"",age:"",password:"",password_confirmation:""}},methods:{register:function(){var e={name:this.name,email:this.email,age:this.age,password:this.password,password_confirmation:this.password_confirmation},t="https://apiyowl.herokuapp.com/api/register",n={method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)};fetch(t,n).then((function(e){return e.json()})).then((function(e){localStorage.setItem("RTOKEN",e.token)})),this.$router.push("/login")}}},h=(n("74da"),n("6b0d")),f=n.n(h);const m=f()(b,[["render",l],["__scopeId","data-v-79f4d035"]]);t["default"]=m},"74da":function(e,t,n){"use strict";n("e330c")},e330c:function(e,t,n){}}]);
//# sourceMappingURL=chunk-e34a8a18.e9a5529b.js.map