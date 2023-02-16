"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[563],{563:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a=n(434),r=n(791),s=n(916),c=function(e){return e.contacts.contacts},i=function(e){return e.contacts.filter},o=function(e){return e.contacts.isLoading},l=(0,s.P1)([c,i],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),u=n(52),m="Wrapper_wrapper__VNn5c",d="Wrapper_title__qFmYF",_=n(184);function h(e){var t=e.title,n=e.children;return(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("h2",{className:d,children:t}),n]})}var f=n(439),p=n(984),b="ContactForm_form__dhl+T",x="ContactForm_label__-cVXI",v="ContactForm_input__Bl93P",j="ContactForm_button__eSwX9";function C(){var e=(0,a.I0)(),t=(0,a.v9)(c),n=(0,r.useState)(""),s=(0,f.Z)(n,2),i=s[0],o=s[1],l=(0,r.useState)(""),m=(0,f.Z)(l,2),d=m[0],h=m[1],C=(0,p.x0)(),N=(0,p.x0)(),w=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":h(a);break;default:return}},F=function(){o(""),h("")};return(0,_.jsxs)("form",{className:b,action:"",onSubmit:function(n){n.preventDefault();var a={name:i,number:d},r=t.find((function(e){return e.name.toLowerCase()===a.name.toLowerCase()}));r?alert(" ".concat(r.name," is already in contacts.")):e((0,u.uK)(a)),F()},children:[(0,_.jsxs)("label",{className:x,htmlFor:C,children:["Name",(0,_.jsx)("input",{className:v,id:C,type:"text",name:"name",value:i,onChange:w,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{className:x,htmlFor:N,children:["Number",(0,_.jsx)("input",{className:v,id:N,type:"tel",name:"number",value:d,onChange:w,pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("button",{className:j,type:"submit",children:"Add contact"})]})}var N=n(538),w="Filter_label__vEd1E",F="Filter_input__N7T3z";function g(){var e=(0,a.I0)(),t=(0,a.v9)(i),n=(0,p.x0)();return(0,_.jsxs)("label",{className:w,htmlFor:n,children:[" ","Find contacts by name",(0,_.jsx)("input",{className:F,id:n,type:"text",value:t,onChange:function(t){e((0,N.M)(t.currentTarget.value))}})]})}var L=n(691),k="Loader_wrapper__2YrQT";function y(){return(0,_.jsx)("div",{className:k,children:(0,_.jsx)(L.Rf,{color:"#b6e0e0",width:"100",visible:!0,ariaLabel:"falling-lines-loading"})})}var A="ContactList_list__csErn",Z="ContactList_item__EZYHO",z="ContactList_text__+NWAW",E="ContactList_button__7kL4l";function I(){var e=(0,a.I0)(),t=(0,a.v9)(l);return(0,_.jsx)("ul",{className:A,children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,_.jsxs)("li",{className:Z,children:[(0,_.jsxs)("p",{className:z,children:[a,": ",r]}),(0,_.jsx)("button",{className:E,type:"button",onClick:function(){return e((0,u.GK)(n))},children:"Delete"})]},n)}))})}function P(){var e=(0,a.I0)(),t=(0,a.v9)(o);return(0,r.useEffect)((function(){e((0,u.yF)())}),[e]),(0,_.jsxs)("section",{children:[(0,_.jsx)(h,{title:"Phonebook",children:(0,_.jsx)(C,{})}),(0,_.jsxs)(h,{title:"Contacts",children:[(0,_.jsx)(g,{}),t&&(0,_.jsx)(y,{}),(0,_.jsx)(I,{})]})]})}}}]);
//# sourceMappingURL=563.5ece741c.chunk.js.map