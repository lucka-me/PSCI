(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"190a":function(t,e,n){"use strict";n("9f49")},"46b1":function(t,e,n){"use strict";n.r(e);var i=n("7a23");function s(t,e,n,s,r,o){const a=Object(i["x"])("material-icon-button"),d=Object(i["x"])("material-top-app-bar"),c=Object(i["x"])("material-top-app-bar-adjust"),l=Object(i["x"])("nomination-list-row"),u=Object(i["x"])("material-list");return Object(i["q"])(),Object(i["d"])(i["a"],null,[Object(i["h"])(d,{title:t.title,"navi-back":""},{default:Object(i["C"])(()=>[Object(i["h"])(a,{icon:"map",onClick:t.openMap},null,8,["onClick"])]),_:1},8,["title"]),Object(i["h"])(c),Object(i["h"])("main",null,[Object(i["h"])(u,{class:"nomination-list",leading:"image","two-line":""},{default:Object(i["C"])(()=>[(Object(i["q"])(!0),Object(i["d"])(i["a"],null,Object(i["v"])(t.nominations,e=>(Object(i["q"])(),Object(i["d"])(l,{key:e.id,nomination:e,onClick:n=>t.open(e.id)},null,8,["nomination","onClick"]))),128))]),_:1})])],64)}var r=n("9ab4"),o=n("ce1f"),a=n("a7a0"),d=n("ce89"),c=n("81dd");function l(t,e,n,s,r,o){return Object(i["q"])(),Object(i["d"])("ul",{class:t.className},[Object(i["w"])(t.$slots,"default")],2)}var u,h=n("8136"),I=n("d87f"),E={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},f={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"button:not(:disabled), a",FOCUSABLE_CHILD_ELEMENTS:'button:not(:disabled), a, input[type="radio"]:not(:disabled), input[type="checkbox"]:not(:disabled)',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},p={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},A=(u={},u[""+E.LIST_ITEM_ACTIVATED_CLASS]="mdc-evolution-list-item--activated",u[""+E.LIST_ITEM_CLASS]="mdc-evolution-list-item",u[""+E.LIST_ITEM_DISABLED_CLASS]="mdc-evolution-list-item--disabled",u[""+E.LIST_ITEM_SELECTED_CLASS]="mdc-evolution-list-item--selected",u[""+E.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-evolution-list-item__primary-text",u[""+E.ROOT]="mdc-evolution-list",u),_="evolution",x=n("6689"),m={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape"},S=new Set;S.add(m.BACKSPACE),S.add(m.ENTER),S.add(m.SPACEBAR),S.add(m.PAGE_UP),S.add(m.PAGE_DOWN),S.add(m.END),S.add(m.HOME),S.add(m.ARROW_LEFT),S.add(m.ARROW_UP),S.add(m.ARROW_RIGHT),S.add(m.ARROW_DOWN),S.add(m.DELETE),S.add(m.ESCAPE);var b={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27},C=new Map;C.set(b.BACKSPACE,m.BACKSPACE),C.set(b.ENTER,m.ENTER),C.set(b.SPACEBAR,m.SPACEBAR),C.set(b.PAGE_UP,m.PAGE_UP),C.set(b.PAGE_DOWN,m.PAGE_DOWN),C.set(b.END,m.END),C.set(b.HOME,m.HOME),C.set(b.ARROW_LEFT,m.ARROW_LEFT),C.set(b.ARROW_UP,m.ARROW_UP),C.set(b.ARROW_RIGHT,m.ARROW_RIGHT),C.set(b.ARROW_DOWN,m.ARROW_DOWN),C.set(b.DELETE,m.DELETE),C.set(b.ESCAPE,m.ESCAPE);var T=new Set;function y(t){var e=t.key;if(S.has(e))return e;var n=C.get(t.keyCode);return n||m.UNKNOWN}T.add(m.PAGE_UP),T.add(m.PAGE_DOWN),T.add(m.END),T.add(m.HOME),T.add(m.ARROW_LEFT),T.add(m.ARROW_UP),T.add(m.ARROW_RIGHT),T.add(m.ARROW_DOWN);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var O=["input","button","textarea","select"],L=function(t){var e=t.target;if(e){var n=(""+e.tagName).toLowerCase();-1===O.indexOf(n)&&t.preventDefault()}};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function v(){var t={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return t}function R(t,e){for(var n=new Map,i=0;i<t;i++){var s=e(i).trim();if(s){var r=s[0].toLowerCase();n.has(r)||n.set(r,[]),n.get(r).push({text:s.toLowerCase(),index:i})}}return n.forEach((function(t){t.sort((function(t,e){return t.index-e.index}))})),n}function g(t,e){var n,i=t.nextChar,s=t.focusItemAtIndex,r=t.sortedIndexByFirstChar,o=t.focusedItemIndex,a=t.skipFocus,d=t.isItemAtIndexDisabled;return clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout((function(){j(e)}),p.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+i,n=1===e.typeaheadBuffer.length?D(r,o,d,e):N(r,d,e),-1===n||a||s(n),n}function D(t,e,n,i){var s=i.typeaheadBuffer[0],r=t.get(s);if(!r)return-1;if(s===i.currentFirstChar&&r[i.sortedIndexCursor].index===e){i.sortedIndexCursor=(i.sortedIndexCursor+1)%r.length;var o=r[i.sortedIndexCursor].index;if(!n(o))return o}i.currentFirstChar=s;var a,d=-1;for(a=0;a<r.length;a++)if(!n(r[a].index)){d=a;break}for(;a<r.length;a++)if(r[a].index>e&&!n(r[a].index)){d=a;break}return-1!==d?(i.sortedIndexCursor=d,r[i.sortedIndexCursor].index):-1}function N(t,e,n){var i=n.typeaheadBuffer[0],s=t.get(i);if(!s)return-1;var r=s[n.sortedIndexCursor];if(0===r.text.lastIndexOf(n.typeaheadBuffer,0)&&!e(r.index))return r.index;var o=(n.sortedIndexCursor+1)%s.length,a=-1;while(o!==n.sortedIndexCursor){var d=s[o],c=0===d.text.lastIndexOf(n.typeaheadBuffer,0),l=!e(d.index);if(c&&l){a=o;break}o=(o+1)%s.length}return-1!==a?(n.sortedIndexCursor=a,s[n.sortedIndexCursor].index):-1}function F(t){return t.typeaheadBuffer.length>0}function j(t){t.typeaheadBuffer=""}function M(t,e){var n=t.event,i=t.isTargetListItem,s=t.focusedItemIndex,r=t.focusItemAtIndex,o=t.sortedIndexByFirstChar,a=t.isItemAtIndexDisabled,d="ArrowLeft"===y(n),c="ArrowUp"===y(n),l="ArrowRight"===y(n),u="ArrowDown"===y(n),h="Home"===y(n),I="End"===y(n),E="Enter"===y(n),f="Spacebar"===y(n);if(d||c||l||u||h||I||E)return-1;var p=!f&&1===n.key.length;if(p){L(n);var A={focusItemAtIndex:r,focusedItemIndex:s,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return g(A,e)}if(!f)return-1;i&&L(n);var _=i&&F(e);if(_){A={focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:o,skipFocus:!1,isItemAtIndexDisabled:a};return g(A,e)}return-1}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function k(t){return t instanceof Array}var B=function(t){function e(n){var i=t.call(this,Object(r["a"])(Object(r["a"])({},e.defaultAdapter),n))||this;return i.wrapFocus_=!1,i.isVertical_=!0,i.isSingleSelectionList_=!1,i.selectedIndex_=p.UNSET_INDEX,i.focusedItemIndex=p.UNSET_INDEX,i.useActivatedClass_=!1,i.useSelectedAttr_=!1,i.ariaCurrentAttrValue_=null,i.isCheckboxList_=!1,i.isRadioList_=!1,i.hasTypeahead=!1,i.typeaheadState=v(),i.sortedIndexByFirstChar=new Map,i}return Object(r["d"])(e,t),Object.defineProperty(e,"strings",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return E},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!0,configurable:!0}),e.prototype.layout=function(){0!==this.adapter.getListItemCount()&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList_=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList_=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.setWrapFocus=function(t){this.wrapFocus_=t},e.prototype.setVerticalOrientation=function(t){this.isVertical_=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList_=t,t&&this.maybeInitializeSingleSelection()},e.prototype.maybeInitializeSingleSelection=function(){for(var t=this.adapter.getListItemCount(),e=0;e<t;e++){var n=this.adapter.listItemAtIndexHasClass(e,E.LIST_ITEM_SELECTED_CLASS),i=this.adapter.listItemAtIndexHasClass(e,E.LIST_ITEM_ACTIVATED_CLASS);if(n||i)return i&&this.setUseActivatedClass(!0),this.isSingleSelectionList_=!0,void(this.selectedIndex_=e)}},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&F(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass_=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr_=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex_},e.prototype.setSelectedIndex=function(t){this.isIndexValid_(t)&&(this.isCheckboxList_?this.setCheckboxAtIndex_(t):this.isRadioList_?this.setRadioAtIndex_(t):this.setSingleSelectionAtIndex_(t))},e.prototype.handleFocusIn=function(t,e){e>=0&&(this.focusedItemIndex=e,this.adapter.setAttributeForElementIndex(e,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(e,"0"))},e.prototype.handleFocusOut=function(t,e){var n=this;e>=0&&(this.adapter.setAttributeForElementIndex(e,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(e,"-1")),setTimeout((function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedOrFocusedItem()}),0)},e.prototype.handleKeydown=function(t,e,n){var i=this,s="ArrowLeft"===y(t),r="ArrowUp"===y(t),o="ArrowRight"===y(t),a="ArrowDown"===y(t),d="Home"===y(t),c="End"===y(t),l="Enter"===y(t),u="Spacebar"===y(t),h="A"===t.key||"a"===t.key;if(this.adapter.isRootFocused()){if(r||c?(t.preventDefault(),this.focusLastElement()):(a||d)&&(t.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var I={event:t,focusItemAtIndex:function(t){i.focusItemAtIndex(t)},focusedItemIndex:-1,isTargetListItem:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(t){return i.adapter.listItemAtIndexHasClass(t,E.LIST_ITEM_DISABLED_CLASS)}};M(I,this.typeaheadState)}}else{var f=this.adapter.getFocusedElementIndex();if(!(-1===f&&(f=n,f<0))){if(this.isVertical_&&a||!this.isVertical_&&o)L(t),this.focusNextElement(f);else if(this.isVertical_&&r||!this.isVertical_&&s)L(t),this.focusPrevElement(f);else if(d)L(t),this.focusFirstElement();else if(c)L(t),this.focusLastElement();else if(h&&t.ctrlKey&&this.isCheckboxList_)t.preventDefault(),this.toggleAll(this.selectedIndex_===p.UNSET_INDEX?[]:this.selectedIndex_);else if((l||u)&&e){var A=t.target;if(A&&"A"===A.tagName&&l)return;if(L(t),this.adapter.listItemAtIndexHasClass(f,E.LIST_ITEM_DISABLED_CLASS))return;this.isTypeaheadInProgress()||(this.isSelectableList_()&&this.setSelectedIndexOnAction_(f),this.adapter.notifyAction(f))}if(this.hasTypeahead){I={event:t,focusItemAtIndex:function(t){i.focusItemAtIndex(t)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:e,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(t){return i.adapter.listItemAtIndexHasClass(t,E.LIST_ITEM_DISABLED_CLASS)}};M(I,this.typeaheadState)}}}},e.prototype.handleClick=function(t,e){t!==p.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(t,E.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList_()&&this.setSelectedIndexOnAction_(t,e),this.adapter.notifyAction(t)))},e.prototype.focusNextElement=function(t){var e=this.adapter.getListItemCount(),n=t+1;if(n>=e){if(!this.wrapFocus_)return t;n=0}return this.focusItemAtIndex(n),n},e.prototype.focusPrevElement=function(t){var e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter.getListItemCount()-1}return this.focusItemAtIndex(e),e},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var t=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(t),t},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,e){this.isIndexValid_(t)&&(e?(this.adapter.removeClassForElementIndex(t,E.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,f.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,E.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,f.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex_=function(t){if(this.selectedIndex_!==t){var e=E.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass_&&(e=E.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex_!==p.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex_,e),this.setAriaForSingleSelectionAtIndex_(t),this.setTabindexAtIndex(t),t!==p.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,e),this.selectedIndex_=t}},e.prototype.setAriaForSingleSelectionAtIndex_=function(t){this.selectedIndex_===p.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(t,f.ARIA_CURRENT));var e=null!==this.ariaCurrentAttrValue_,n=e?f.ARIA_CURRENT:f.ARIA_SELECTED;if(this.selectedIndex_!==p.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,n,"false"),t!==p.UNSET_INDEX){var i=e?this.ariaCurrentAttrValue_:"true";this.adapter.setAttributeForElementIndex(t,n,i)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr_?f.ARIA_SELECTED:f.ARIA_CHECKED},e.prototype.setRadioAtIndex_=function(t){var e=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex_!==p.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,e,"false"),this.adapter.setAttributeForElementIndex(t,e,"true"),this.selectedIndex_=t},e.prototype.setCheckboxAtIndex_=function(t){for(var e=this.getSelectionAttribute(),n=0;n<this.adapter.getListItemCount();n++){var i=!1;t.indexOf(n)>=0&&(i=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(n,i),this.adapter.setAttributeForElementIndex(n,e,i?"true":"false")}this.selectedIndex_=t},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===p.UNSET_INDEX&&0!==t?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),this.selectedIndex_ instanceof Array||this.selectedIndex_===t||this.adapter.setAttributeForElementIndex(this.selectedIndex_,"tabindex","-1"),t!==p.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList_=function(){return this.isSingleSelectionList_||this.isCheckboxList_||this.isRadioList_},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){var t=this.focusedItemIndex>=0?this.focusedItemIndex:0;return this.isSelectableList_()&&("number"===typeof this.selectedIndex_&&this.selectedIndex_!==p.UNSET_INDEX?t=this.selectedIndex_:k(this.selectedIndex_)&&this.selectedIndex_.length>0&&(t=this.selectedIndex_.reduce((function(t,e){return Math.min(t,e)})))),t},e.prototype.isIndexValid_=function(t){var e=this;if(t instanceof Array){if(!this.isCheckboxList_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===t.length||t.some((function(t){return e.isIndexInRange_(t)}))}if("number"===typeof t){if(this.isCheckboxList_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange_(t)||this.isSingleSelectionList_&&t===p.UNSET_INDEX}return!1},e.prototype.isIndexInRange_=function(t){var e=this.adapter.getListItemCount();return t>=0&&t<e},e.prototype.setSelectedIndexOnAction_=function(t,e){void 0===e&&(e=!0),this.isCheckboxList_?this.toggleCheckboxAtIndex_(t,e):this.setSelectedIndex(t)},e.prototype.toggleCheckboxAtIndex_=function(t,e){var n=this.getSelectionAttribute(),i=this.adapter.isCheckboxCheckedAtIndex(t);e&&(i=!i,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,i)),this.adapter.setAttributeForElementIndex(t,n,i?"true":"false");var s=this.selectedIndex_===p.UNSET_INDEX?[]:this.selectedIndex_.slice();i?s.push(t):s=s.filter((function(e){return e!==t})),this.selectedIndex_=s},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.toggleAll=function(t){var e=this.adapter.getListItemCount();if(t.length===e)this.setCheckboxAtIndex_([]);else{for(var n=[],i=0;i<e;i++)(!this.adapter.listItemAtIndexHasClass(i,E.LIST_ITEM_DISABLED_CLASS)||t.indexOf(i)>-1)&&n.push(i);this.setCheckboxAtIndex_(n)}},e.prototype.typeaheadMatchItem=function(t,e,n){var i=this;void 0===n&&(n=!1);var s={focusItemAtIndex:function(t){i.focusItemAtIndex(t)},focusedItemIndex:e||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:n,isItemAtIndexDisabled:function(t){return i.adapter.listItemAtIndexHasClass(t,E.LIST_ITEM_DISABLED_CLASS)}};return g(s,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return R(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){j(this.typeaheadState)},e}(x["a"]),P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r["d"])(e,t),Object.defineProperty(e.prototype,"vertical",{set:function(t){this.foundation.setVerticalOrientation(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[E.LIST_ITEM_CLASS]))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"wrapFocus",{set:function(t){this.foundation.setWrapFocus(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasTypeahead",{set:function(t){this.foundation.setHasTypeahead(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"singleSelection",{set:function(t){this.foundation.setSingleSelection(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(t){this.foundation.setSelectedIndex(t)},enumerable:!0,configurable:!0}),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled=_ in this.root.dataset,this.classNameMap=this.isEvolutionEnabled?A:Object.values(E).reduce((function(t,e){return t[e]=e,t}),{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},e.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},e.prototype.layout=function(){var t=this.root.getAttribute(f.ARIA_ORIENTATION);this.vertical=t!==f.ARIA_ORIENTATION_HORIZONTAL;var e="."+this.classNameMap[E.LIST_ITEM_CLASS]+":not([tabindex])",n="."+this.classNameMap[E.LIST_ITEM_CLASS]+" "+f.FOCUSABLE_CHILD_ELEMENTS;Array.prototype.forEach.call(this.root.querySelectorAll(e),(function(t){t.setAttribute("tabindex","-1")})),Array.prototype.forEach.call(this.root.querySelectorAll(n),(function(t){t.setAttribute("tabindex","-1")})),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},e.prototype.getPrimaryText=function(t){var e,n=t.querySelector("."+this.classNameMap[E.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||n)return null!==(e=null===n||void 0===n?void 0:n.textContent)&&void 0!==e?e:"";var i=t.querySelector("."+this.classNameMap[E.LIST_ITEM_TEXT_CLASS]);return i&&i.textContent||""},e.prototype.initializeListType=function(){var t=this;if(this.isInteractive=Object(I["c"])(this.root,f.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var e=Array.from(this.root.querySelectorAll(f.SELECTED_ITEM_SELECTOR),(function(e){return t.listElements.indexOf(e)}));Object(I["c"])(this.root,f.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=e:e.length>0&&(this.selectedIndex=e[0])}else{var n=this.root.querySelectorAll(f.ARIA_ROLE_CHECKBOX_SELECTOR),i=this.root.querySelector(f.ARIA_CHECKED_RADIO_SELECTOR);if(n.length){var s=this.root.querySelectorAll(f.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(s,(function(e){return t.listElements.indexOf(e)}))}else i&&(this.selectedIndex=this.listElements.indexOf(i))}},e.prototype.setEnabled=function(t,e){this.foundation.setEnabled(t,e)},e.prototype.typeaheadMatchItem=function(t,e){return this.foundation.typeaheadMatchItem(t,e,!0)},e.prototype.getDefaultFoundation=function(){var t=this,e={addClassForElementIndex:function(e,n){var i=t.listElements[e];i&&i.classList.add(t.classNameMap[n])},focusItemAtIndex:function(e){var n=t.listElements[e];n&&n.focus()},getAttributeForElementIndex:function(e,n){return t.listElements[e].getAttribute(n)},getFocusedElementIndex:function(){return t.listElements.indexOf(document.activeElement)},getListItemCount:function(){return t.listElements.length},getPrimaryTextAtIndex:function(e){return t.getPrimaryText(t.listElements[e])},hasCheckboxAtIndex:function(e){var n=t.listElements[e];return!!n.querySelector(f.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(e){var n=t.listElements[e];return!!n.querySelector(f.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(e){var n=t.listElements[e],i=n.querySelector(f.CHECKBOX_SELECTOR);return i.checked},isFocusInsideList:function(){return t.root!==document.activeElement&&t.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===t.root},listItemAtIndexHasClass:function(e,n){return t.listElements[e].classList.contains(t.classNameMap[n])},notifyAction:function(e){t.emit(f.ACTION_EVENT,{index:e},!0)},removeClassForElementIndex:function(e,n){var i=t.listElements[e];i&&i.classList.remove(t.classNameMap[n])},setAttributeForElementIndex:function(e,n,i){var s=t.listElements[e];s&&s.setAttribute(n,i)},setCheckedCheckboxOrRadioAtIndex:function(e,n){var i=t.listElements[e],s=i.querySelector(f.CHECKBOX_RADIO_SELECTOR);s.checked=n;var r=document.createEvent("Event");r.initEvent("change",!0,!0),s.dispatchEvent(r)},setTabIndexForListItemChildren:function(e,n){var i=t.listElements[e],s="."+t.classNameMap[E.LIST_ITEM_CLASS]+" "+f.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX;Array.prototype.forEach.call(i.querySelectorAll(s),(function(t){t.setAttribute("tabindex",n)}))}};return new B(e)},e.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[E.LIST_ITEM_CLASS]+'[tabindex="0"]')){var t=this.initialFocusIndex();-1!==t&&(this.listElements[t].tabIndex=0)}},e.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if("number"===typeof this.selectedIndex&&this.selectedIndex!==p.UNSET_INDEX)return this.selectedIndex;var t=this.root.querySelector("."+this.classNameMap[E.LIST_ITEM_CLASS]+":not(."+this.classNameMap[E.LIST_ITEM_DISABLED_CLASS]+")");return null===t?-1:this.getListItemIndex(t)},e.prototype.getListItemIndex=function(t){var e=Object(I["a"])(t,"."+this.classNameMap[E.LIST_ITEM_CLASS]+", ."+this.classNameMap[E.ROOT]);return e&&Object(I["c"])(e,"."+this.classNameMap[E.LIST_ITEM_CLASS])?this.listElements.indexOf(e):-1},e.prototype.handleFocusInEvent=function(t){var e=this.getListItemIndex(t.target);this.foundation.handleFocusIn(t,e)},e.prototype.handleFocusOutEvent=function(t){var e=this.getListItemIndex(t.target);this.foundation.handleFocusOut(t,e)},e.prototype.handleKeydownEvent=function(t){var e=this.getListItemIndex(t.target),n=t.target;this.foundation.handleKeydown(t,n.classList.contains(this.classNameMap[E.LIST_ITEM_CLASS]),e)},e.prototype.handleClickEvent=function(t){var e=this.getListItemIndex(t.target),n=t.target,i=!Object(I["c"])(n,f.CHECKBOX_RADIO_SELECTOR);this.foundation.handleClick(e,i)},e}(h["a"]),w=n("1b40");class U extends w["d"]{get className(){let t="mdc-list";return this.twoLine&&(t+=" mdc-list--two-line"),this.leading&&(t+=` mdc-list--${this.leading}-list`),t}mounted(){this.ctrl=P.attachTo(this.$el)}updated(){var t;null===(t=this.ctrl)||void 0===t||t.destroy(),this.ctrl=P.attachTo(this.$el)}unmounted(){var t;null===(t=this.ctrl)||void 0===t||t.destroy()}}Object(r["c"])([Object(w["c"])(Boolean)],U.prototype,"twoLine",void 0),Object(r["c"])([Object(w["c"])(String)],U.prototype,"leading",void 0);n("190a");U.render=l;var H=U,W=n("2281"),q=n("4892");function X(t,e,n,s,r,o){const a=Object(i["x"])("material-icon"),d=Object(i["x"])("material-list-item");return Object(i["q"])(),Object(i["d"])(d,{text:t.nomination.title,secondary:t.time},{leading:Object(i["C"])(()=>[Object(i["h"])("img",{src:t.nomination.imageUrl,loading:"lazy"},null,8,["src"])]),meta:Object(i["C"])(()=>[Object(i["h"])(a,{icon:t.nomination.statusData.icon,"fixed-width":""},null,8,["icon"])]),_:1},8,["text","secondary"])}var K=n("7e13");const V={class:"mdc-list-item"},$=Object(i["h"])("span",{class:"mdc-list-item__ripple"},null,-1),G={key:0,class:"mdc-list-item__graphic"},z={key:1,class:"mdc-list-item__text"},Y={class:"mdc-list-item__primary-text"},J={class:"mdc-list-item__secondary-text"},Z={key:2,class:"mdc-list-item__text"},Q={key:3,class:"mdc-list-item__meta"};function tt(t,e,n,s,r,o){return Object(i["q"])(),Object(i["d"])("li",V,[$,t.$slots.leading?(Object(i["q"])(),Object(i["d"])("span",G,[Object(i["w"])(t.$slots,"leading")])):Object(i["e"])("",!0),t.secondary?(Object(i["q"])(),Object(i["d"])("span",z,[Object(i["h"])("span",Y,Object(i["z"])(t.text),1),Object(i["h"])("span",J,Object(i["z"])(t.secondary),1)])):(Object(i["q"])(),Object(i["d"])("span",Z,Object(i["z"])(t.text),1)),t.$slots.meta?(Object(i["q"])(),Object(i["d"])("span",Q,[Object(i["w"])(t.$slots,"meta")])):Object(i["e"])("",!0)])}var et=n("40ff");class nt extends w["d"]{mounted(){this.ctrl=et["a"].attachTo(this.$el)}updated(){var t;null===(t=this.ctrl)||void 0===t||t.destroy(),this.ctrl=et["a"].attachTo(this.$el)}unmounted(){var t;null===(t=this.ctrl)||void 0===t||t.destroy()}}Object(r["c"])([Object(w["c"])(String)],nt.prototype,"text",void 0),Object(r["c"])([Object(w["c"])(String)],nt.prototype,"secondary",void 0),nt.render=tt;var it=nt;let st=class extends w["d"]{get time(){const t=this.nomination.status===d["a"].StatusCode.Pending?this.nomination.confirmedTime:this.nomination.resultTime;return new Date(t).toLocaleDateString()}};Object(r["c"])([Object(w["c"])(a["a"])],st.prototype,"nomination",void 0),st=Object(r["c"])([Object(w["b"])({components:{MaterialListItem:it,MaterialIcon:K["a"]}})],st);var rt=st;rt.render=X;var ot=rt;let at=class extends o["b"]{get title(){var t,e;return null!==(e=null===(t=this.commonSense)||void 0===t?void 0:t.title)&&void 0!==e?e:"All"}get nominations(){let t=this.$store.state.nominations;const e=this.commonSense;return e&&(t=t.filter(e.predicator)),t=t.sort(a["a"].comparatorByTime),t}get commonSense(){if(this.$route.query.status&&"string"===typeof this.$route.query.status){const t=parseInt(this.$route.query.status);return d["a"].status.get(t)||null}if(this.$route.query.reason&&"string"===typeof this.$route.query.reason){const t=parseInt(this.$route.query.reason);return d["a"].reason.get(t)||null}if(this.$route.query.scanner&&"string"===typeof this.$route.query.scanner){const t=parseInt(this.$route.query.scanner);return d["a"].scanner.get(t)||null}return null}openMap(){this.$router.push({path:"/map",query:this.$route.query})}open(t){this.$router.push({path:"/details",query:{id:t}})}};at=Object(r["c"])([Object(o["a"])({components:{MaterialTopAppBar:W["a"],MaterialTopAppBarAdjust:q["a"],MaterialIconButton:c["a"],MaterialList:H,NominationListRow:ot}})],at);var dt=at;n("b9c6");dt.render=s;e["default"]=dt},"67c1":function(t,e,n){},"7e13":function(t,e,n){"use strict";var i=n("7a23");function s(t,e,n,s,r,o){const a=Object(i["x"])("material-icon-raw");return Object(i["q"])(),Object(i["d"])("i",{class:t.className},[Object(i["h"])(a,{icon:t.icon},null,8,["icon"])],2)}var r=n("9ab4"),o=n("1b40"),a=n("bd16");let d=class extends o["d"]{get className(){let t="fa";return this.fixedWidth&&(t+=" fa-fw"),t}};Object(r["c"])([Object(o["c"])(String)],d.prototype,"icon",void 0),Object(r["c"])([Object(o["c"])(Boolean)],d.prototype,"fixedWidth",void 0),d=Object(r["c"])([Object(o["b"])({components:{MaterialIconRaw:a["a"]}})],d);var c=d;c.render=s;e["a"]=c},"9f49":function(t,e,n){},b9c6:function(t,e,n){"use strict";n("67c1")}}]);
//# sourceMappingURL=list.db1fd2a0.js.map