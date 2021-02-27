(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a){var u=e.name,c=e.link,s=e.likes,l=e.owner,f=e._id,p=e.userId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=u,this._img=c,this._alt=u,this._template=n,this._handleCardClick=r,this._ownerId=l._id,this._imageId=f,this._likes=s,this._userId=p,this._deleteHandler=o,this._addLike=i,this._removeLike=a,this._likeButton=this._likeButton.bind(this)}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".gallery__card").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._element.querySelector(".gallery__button-counter").textContent=this._likes.length,this._likes.forEach((function(t){t._id===e._userId&&e._element.querySelector(".gallery__button").classList.add("gallery__button_like")})),this._removeButton=this._element.querySelector(".gallery__button-delete"),this.checkId(),this._cardImage=this._element.querySelector(".gallery__image"),this._setEventListeners(),this._element.querySelector(".gallery__name").textContent=this._name,this._cardImage.src=this._img,this._cardImage.alt=this._alt,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".gallery__button").addEventListener("click",this._likeButton),this._removeButton.addEventListener("click",this._deleteHandler),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._img,e._alt)}))}},{key:"_likeButton",value:function(e){e.target.classList.contains("gallery__button_like")?(this._element.querySelector(".gallery__button").classList.remove("gallery__button_like"),this._removeLike()):(this._element.querySelector(".gallery__button").classList.add("gallery__button_like"),this._addLike())}},{key:"checkId",value:function(e){this._ownerId!==this._userId&&this._removeButton.remove()}},{key:"removeCard",value:function(){this._element.remove()}},{key:"returnCardId",value:function(){return this._imageId}},{key:"changeLikesCounter",value:function(e){this._element.querySelector(".gallery__button-counter").textContent=e}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._submitButton=n.querySelector(this._config.submitButtonSelector),this._inputList=n.querySelectorAll(this._config.inputSelector)}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._setEventListener(),this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setButtonState()}},{key:"_setButtonState",value:function(){this._form.checkValidity()?(this._submitButton.classList.remove(this._config.buttonInvalidClass),this._submitButton.disabled=!1):(this._submitButton.classList.add(this._config.buttonInvalidClass),this._submitButton.disabled=!0)}},{key:"_setEventListener",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(n){e._checkInputValidity(t),e._setButtonState(e._form.checkValidity())}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_showError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._config.inputInvalidClass)}},{key:"_hideError",value:function(e){this._form.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._config.inputInvalidClass)}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideError(t)})),this._setButtonState()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"render",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"setItem",value:function(e){this._container.append(e)}}])&&o(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._buttonClose=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this),this.close=this.close.bind(this),this.open=this.open.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){this._buttonClose.addEventListener("click",this.close),this._popup.addEventListener("click",this._handleOverlayClose)}}])&&a(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._titleFullsize=t._popup.querySelector(".popup__title-fullsize"),t._imageFullsize=t._popup.querySelector(".popup__image-fullsize"),t}return t=a,(n=[{key:"open",value:function(e,t,n){this._titleFullsize.textContent=e,this._imageFullsize.src=t,this._imageFullsize.alt=n,l(h(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),a}(u);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popup.querySelector(".popup__container_form"),n._formSubmit=t,n._formSubmitHandler=n._formSubmitHandler.bind(k(n)),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._form.querySelectorAll(".popup__input")),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"_formSubmitHandler",value:function(e){e.preventDefault(),this._formSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){this._form.addEventListener("submit",this._formSubmitHandler),v(g(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),v(g(a.prototype),"close",this).call(this)}}])&&y(t.prototype,n),a}(u);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setAvatar",value:function(e){this._avatar.src=""===e.input_link_profile?this._avatar.src:e.input_link_profile}},{key:"initUserInfo",value:function(e,t,n){this._name.textContent=e,this._job.textContent=t,this._avatar.src=n}},{key:"setUserId",value:function(e){this._userId=e}},{key:"returnUserId",value:function(){return this._userId}}])&&w(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"updateAvatarImage",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._checkResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}}])&&C(t.prototype,n),e}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupWithSubmitDelete=document.querySelector(".popup__submit_delete"),t}return t=a,(n=[{key:"setEventListeners",value:function(e){j(P(a.prototype),"setEventListeners",this).call(this),this._handleButtonSubmit=e,this._popupWithSubmitDelete.addEventListener("click",this._handleButtonSubmit)}},{key:"close",value:function(){j(P(a.prototype),"close",this).call(this),this._popupWithSubmitDelete.removeEventListener("click",this._handleButtonSubmit)}}])&&I(t.prototype,n),a}(u),B=document.querySelector(".profile__button-edit"),T=document.querySelector(".popup__profile-form"),x=document.querySelector(".popup__gallery-form"),V=document.querySelector(".popup__save-avatar-form"),D=document.querySelector(".profile__button-add"),z=(document.querySelector(".popup__name_gallery"),document.querySelector(".popup__link"),document.querySelector(".popup__name")),A=document.querySelector(".popup__job"),H=document.querySelector(".profile__avatar-button"),F=(document.querySelector(".popup_delete_card"),document.querySelector(".popup_profile_name")),N=document.querySelector(".popup_profile_job"),J={formSelector:".popup__container_form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inputInvalidClass:"popup__input_state_invalid",buttonInvalidClass:"popup__button_invalid"},W=new r(J,T);W.enableValidation();var M=new r(J,x);M.enableValidation();var G=new r(J,V);G.enableValidation();var K=new E({nameSelector:".profile__name",jobSelector:".profile__job",avatarSelector:".profile__avatar"}),Q=new L({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-20",headers:{authorization:"cb025162-3fd1-4801-ae0e-3ba5aa323c64","Content-Type":"application/json"}}),X=new _(".popup_fullsize_wrapper");X.setEventListeners();var Y=new S(".popup_profile",(function(){ne(".popup_profile",!0),Q.setUserInfo(F.value,N.value).then((function(e){K.initUserInfo(e.name,e.about,e.avatar),ne(".popup_profile",!1)})).catch((function(e){console.log(e)})),Y.close()}));Y.setEventListeners();var Z=new S(".popup_gallery",(function(e){ne(".popup_gallery",!0),Q.addCard(e.input_name_gallery,e.input_link_gallery).then((function(e){te.addItem(re(e)),ne(".popup_gallery",!1)})).catch((function(e){console.log(e)})),Z.close()}));Z.setEventListeners(),B.addEventListener("click",(function(){W.resetValidation();var e=K.getUserInfo();z.value=e.name,A.value=e.job,Y.open()})),D.addEventListener("click",(function(){M.resetValidation(),Z.open()}));var $=function(e,t,n){X.open(e,t,n)},ee=new U(".popup_delete_card"),te=new i((function(e){te.addItem(re(e))}),".gallery");function ne(e,t){document.querySelector(e).querySelector(".popup__submit").textContent=t?"Сохранение...":".popup_gallery"===e?"Создать":"Сохранить"}function re(e){var n=e.name,r=e.link,o=e.likes,i=e.owner,a=e._id,u=new t({name:n,link:r,likes:o,owner:i,_id:a,userId:K.returnUserId()},".template",$,(function(){ee.setEventListeners(function(e){return function(){Q.deleteCard(e.returnCardId()).then((function(t){ee.close(),e.removeCard()})).catch((function(e){console.log(e)}))}}(u)),ee.open()}),(function(){Q.addLike(u.returnCardId()).then((function(e){return u.changeLikesCounter(e.likes.length)}))}),(function(){Q.removeLike(u.returnCardId()).then((function(e){return u.changeLikesCounter(e.likes.length)}))}));return u.generateCard()}Q.getInitialCards().then((function(e){te.render(e)})).catch((function(e){console.log(e)})),Q.getUserInfo().then((function(e){K.initUserInfo(e.name,e.about,e.avatar),K.setUserId(e._id)})).catch((function(e){console.log(e)}));var oe=new S(".popup_save_avatar",(function(e){ne(".popup_save_avatar",!0),Q.updateAvatarImage(e.input_link_profile).then((function(t){K.setAvatar(e),ne(".popup_save_avatar",!1)})).catch((function(e){console.log(e)})),oe.close()}));oe.setEventListeners(),H.addEventListener("click",(function(){G.resetValidation(),oe.open()}))})();