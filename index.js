!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t[t.BOOLEAN=2]="BOOLEAN",t[t.NUMBER=4]="NUMBER",t[t.STRING=8]="STRING",t[t.ARRAY=16]="ARRAY",t[t.DATE=32]="DATE",t[t.ANY=64]="ANY",t[t.PRIMARY=128]="PRIMARY"}(e.ColumnType||(e.ColumnType={}))},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,c)}a((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),u=n(0),c=function(){function t(t){this.objClass=t,this.gSql=new i.GenerateSql,this.__tableName=this.objClass.__table_name__,this.dbName=this.objClass.__db_name__,this.__columnsDef=this.objClass.__columns__,this.db=window.openDatabase(this.dbName,"1.0.0","",655360)}return t.prototype.fromSql=function(t,e){return r(this,void 0,void 0,function(){var n;return o(this,function(r){switch(r.label){case 0:return n=this,[4,this.init()];case 1:return r.sent(),[2,new Promise(function(r){n.db.transaction(function(o){o.executeSql(t,e,function(t,e){var o=[];if(null!=e.rows&&e.rows.length>0)for(var i=0;i<e.rows.length;i++){var u=e.rows[i];o.push(n.convertToMetadata(u))}r(o)},n.fail)})})]}})})},t.prototype.query=function(t){return r(this,void 0,void 0,function(){var e,n,r,i;return o(this,function(o){switch(o.label){case 0:return[4,this.init()];case 1:for(r in o.sent(),e="select * from `"+this.__tableName+"` where",n=[],t)t.hasOwnProperty(r)&&(i=t[r],e+=" "+r+"=? and",n.push(i));return e=e.substr(0,e.length-3),[4,this.fromSql(e,n)];case 2:return[2,o.sent()]}})})},t.prototype.exist=function(t){return r(this,void 0,void 0,function(){var e,n,r;return o(this,function(o){switch(o.label){case 0:return e=this,[4,this.init()];case 1:return o.sent(),n=this.__columnsDef.find(function(t){return(t.type&u.ColumnType.PRIMARY)==u.ColumnType.PRIMARY}),r="select * from `"+this.__tableName+"` where `"+n.name+"` = ? ;",[2,new Promise(function(n){e.db.transaction(function(o){o.executeSql(r,[t],function(t,e){n(null!=e.rows&&e.rows.length>0)},e.fail)})})]}})})},t.prototype.delete=function(t){return r(this,void 0,void 0,function(){var e,n,i,c=this;return o(this,function(a){switch(a.label){case 0:return e=this,[4,this.init()];case 1:return a.sent(),n=this.__columnsDef.find(function(t){return(t.type&u.ColumnType.PRIMARY)==u.ColumnType.PRIMARY}),i="delete from "+this.__tableName+" where "+n.name+" = ? ;",[2,new Promise(function(n){e.db.transaction(function(e){return r(c,void 0,void 0,function(){return o(this,function(r){return e.executeSql(i,[t],function(t,e){n(e.rowsAffected>0)},function(t,e){return n(!1),!0}),[2]})})})})]}})})},t.prototype.save=function(t){return r(this,void 0,void 0,function(){var e;return o(this,function(n){switch(n.label){case 0:return[4,this.init()];case 1:return n.sent(),e=this.__columnsDef.find(function(t){return(t.type&u.ColumnType.PRIMARY)==u.ColumnType.PRIMARY}),[4,this.exist(t[e.name])];case 2:return n.sent()?[2,this.update(t)]:[2,this.insert(t)]}})})},t.prototype.insert=function(t){return r(this,void 0,void 0,function(){var e,n,i,u,c,a,s=this;return o(this,function(l){switch(l.label){case 0:return e=this,[4,this.init()];case 1:if(l.sent(),!(t instanceof Array&&t.length>0))return[3,8];n=0,i=0,l.label=2;case 2:if(!(i<t.length))return[3,7];l.label=3;case 3:return l.trys.push([3,5,,6]),u=t[i],[4,e.insert(u)];case 4:return c=l.sent(),n+=c,[3,6];case 5:return a=l.sent(),console.error(a),[3,6];case 6:return i++,[3,2];case 7:return[2,n];case 8:return[2,new Promise(function(n){e.db.transaction(function(i){return r(s,void 0,void 0,function(){var r;return o(this,function(o){return r=e.gSql.gInsertSql(e.__tableName,e.objClass.__columns__,t),i.executeSql(r[0],r[1],function(t,e){n(e.rowsAffected)},function(t,r){return e.fail(t,r),n(0),!0}),[2]})})})})]}})})},t.prototype.update=function(t){return r(this,void 0,void 0,function(){var e,n,r;return o(this,function(o){switch(o.label){case 0:return e=this,[4,this.init()];case 1:return o.sent(),n=this.__columnsDef.find(function(t){return(t.type&u.ColumnType.PRIMARY)==u.ColumnType.PRIMARY}),r=this.gSql.gUpdateSql(this.__tableName,n.name,t[n.name],t),[2,new Promise(function(t){e.db.transaction(function(n){n.executeSql(r[0],r[1],function(e,n){t(n.rowsAffected)},function(n,r){return e.fail(n,r),t(0),!0})})})]}})})},t.prototype.execSql=function(t,e){return r(this,void 0,void 0,function(){var n;return o(this,function(r){switch(r.label){case 0:return n=this,[4,this.init()];case 1:return r.sent(),[2,new Promise(function(r){n.db.transaction(function(o){o.executeSql(t,e,function(t,e){r(e.rowsAffected)},n.fail)})})]}})})},t.prototype.fail=function(t,e){return console.error(e.message),!0},t.prototype.init=function(){return r(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,this.createTable(this.__columnsDef)];case 1:return t.sent(),[2]}})})},t.prototype.createTable=function(t){return r(this,void 0,void 0,function(){var e;return o(this,function(n){return e=this,[2,new Promise(function(n){e.db.transaction(function(r){r.executeSql(e.gSql.gCreateTableSql(e.__tableName,t),[],function(t,e){n(1==e.insertId)},function(t,r){return e.fail(t,r),n(!1),!0})})})]})})},t.prototype.convertToMetadata=function(t){var e=new this.objClass;e.__diff__={};var n,r=function(r){if(t.hasOwnProperty(r)){var i=t[r],u=e.__columnsDef.find(function(t){return t.name==r});n=o.convertToColType(i,u),e.__diff__[r]=n,e[r]=n}},o=this;for(var i in t)r(i);return e},t.prototype.convertToColType=function(t,e){try{if((e.type&u.ColumnType.NUMBER)===u.ColumnType.NUMBER)return parseFloat(t);if((e.type&u.ColumnType.ANY)===u.ColumnType.ANY)return"string"==typeof t?JSON.parse(t.toString()):t;if((e.type&u.ColumnType.BOOLEAN)===u.ColumnType.BOOLEAN){if(""==t||null==t)return null;if("true"===t)return!0;if("false"===t)return!1;if("number"==typeof t)return!!t}if((e.type&u.ColumnType.DATE)===u.ColumnType.DATE){if("string"==typeof t)return new Date(t.toString());if("number"==typeof t){var n=t.toString().length,r=t.toString();if(n<13)for(var o=0;o<13-n;o++)r+="0";return new Date(parseInt(r))}return null}if((e.type&u.ColumnType.STRING)===u.ColumnType.STRING)return null!=t?t.toString():null;if((e.type&u.ColumnType.ARRAY)===u.ColumnType.ARRAY)try{return JSON.parse(t.toString())}catch(t){return null}}catch(t){return console.error(t),null}},t}();e.DbContext=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(){function t(){}return t.prototype.gCreateTableSql=function(t,e){var n="CREATE TABLE IF NOT EXISTS `"+t+"`",o=[];if(e instanceof Array&&e.length>0)for(var i=0;i<e.length;i++){var u=e[i],c=void 0;c="TEXT",(u.type&r.ColumnType.STRING)===r.ColumnType.STRING&&(c="TEXT"),(u.type&r.ColumnType.NUMBER)===r.ColumnType.NUMBER&&(c="NUMERIC"),(u.type&r.ColumnType.BOOLEAN)===r.ColumnType.BOOLEAN&&(c="INTEGER"),(u.type&r.ColumnType.ARRAY)===r.ColumnType.ARRAY&&(c="TEXT"),(u.type&r.ColumnType.ANY)===r.ColumnType.ANY&&(c="TEXT"),(u.type&r.ColumnType.PRIMARY)===r.ColumnType.PRIMARY&&(c+=" PRIMARY KEY NOT NULL"),o.push("`"+u.name+"` "+c)}return n=n+" ("+o.join(", ")+")"},t.prototype.gInsertSql=function(t,e,n){var r="insert into `"+t+"` ",o=[],i=[];if(e instanceof Array&&e.length>0){for(var u=[],c=0;c<e.length;c++){var a=e[c];o.push("`"+a.name+"`"),i.push("?"),null!=n[a.name]?n[a.name]instanceof Date?u.push(n[a.name]):"object"==typeof n[a.name]?u.push(JSON.stringify(n[a.name])):u.push(n[a.name]):u.push(null)}return[r+=" ("+o.join(",")+") values ("+i.join(",")+")",u]}return null},t.prototype.gUpdateSql=function(t,e,n,r){var o="update "+t+" set ",i=[],u=[];if(null!=r)for(var c in r)if(r.hasOwnProperty(c)){if(c==e)continue;if("__columnsDef"==c||"__primaryColDef"==c||"__tableName"==c||"__tableName"==c||"__diff__"==c||"__refsDef"==c)continue;var a=r[c];i.push("`"+c+"`"),null!=a?a instanceof Date?u.push(a):"object"==typeof a?u.push(JSON.stringify(a)):u.push(a):u.push(null)}return o+=i.join(" = ? , ")+" = ? where "+e+" = ? ;",u.push(n),[o,u]},t}();e.GenerateSql=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.column=function(t){return function(e,n){var r={name:n,type:t},o=e.constructor;o.__columns__||(o.__columns__=new Array),o.__columns__.push(r)}},e.table=function(t){return void 0===t&&(t=null),console.warn("@table is about to be deprecated, please use @database(dbName) decorator instead. \r\n @table 即将废弃，请改用 @database(dbName) 装饰器"),function(e){e.__db_name__=t,e.__table_name__=e.name}},e.database=function(t){return function(e){e.__db_name__=t,e.__table_name__=e.name}},e.reference=function(t,e){return function(n,r){var o={refTableName:t,refKeyName:e,foreignKeyName:r},i=n.constructor;i.__references__||(i.__references__=new Array),i.__references__.push(o)}}},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,c)}a((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),u=n(1),c=n(2),a=function(){function t(){if(this.__columnsDef=this.constructor.__columns__,this.__primaryColDef=this.__columnsDef.find(function(t){return(t.type&i.ColumnType.PRIMARY)==i.ColumnType.PRIMARY}),this.__tableName=this.constructor.__table_name__,this.__refsDef=this.constructor.__references__,null==this.__primaryColDef)throw this.__tableName+" 实体未定义主键，\b\b每个实体必须定义一个主键，且只有一个，例如：@column(ColumnType.STRING | ColumnType.PRIMARY)"}return t.prototype.save=function(){return r(this,void 0,void 0,function(){var t,e,n,r,i;return o(this,function(o){switch(o.label){case 0:return t=this.queryChange(),[4,(e=new u.DbContext(this.constructor)).exist(this[this.__primaryColDef.name])];case 1:if((n=o.sent())&&null==t)throw"请调用 sqlite.formSql 等方法，从返回的值中修改相应的字段，再调用save()";return r=new c.GenerateSql,i=n&&null!=t?r.gUpdateSql(this.__tableName,this.__primaryColDef.name,this[this.__primaryColDef.name],t):r.gInsertSql(this.__tableName,this.__columnsDef,this),[4,e.execSql(i[0],i[1])];case 2:return[2,o.sent()>0]}})})},t.prototype.getRefData=function(t){return r(this,void 0,void 0,function(){var e,n,r,i,c,a,s;return o(this,function(o){switch(o.label){case 0:if(e=[],n=new u.DbContext(t.constructor),!(null!=(r=this.__refsDef.filter(function(e){return e.refTableName==t.__tableName}))&&r.length>1))return[3,5];i=0,o.label=1;case 1:return i<r.length?(c=r[i],(a={})[c.refKeyName]=this[c.foreignKeyName],[4,n.query(a)]):[3,4];case 2:s=o.sent(),e.push({name:c.foreignKeyName,data:s}),o.label=3;case 3:return i++,[3,1];case 4:return[3,9];case 5:if(null==r||1!=r.length)return[3,9];i=0,o.label=6;case 6:return i<r.length?(c=r[i],(a={})[c.refKeyName]=this[c.foreignKeyName],[4,n.query(a)]):[3,9];case 7:s=o.sent(),e.push.apply(e,s),o.label=8;case 8:return i++,[3,6];case 9:return[2,e]}})})},t.prototype.queryChange=function(){var t={},e=this.__diff__;if(null!=e){for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];this[n]!=r&&(t[n]=this[n])}return t}return null},t.prototype.checkColDef=function(){if(null!=this.__columnsDef&&this.__columnsDef.length>0)for(var t=0;t<this.__columnsDef.length;t++){var e=this.__columnsDef[t],n=this[e.name];if(null!=n){if((e.type&i.ColumnType.NUMBER)===i.ColumnType.NUMBER&&"number"!=typeof n)throw"表实体"+this.__tableName+"中的字段"+e.name+"类型与@column定义的不一致,应为number类型";if((e.type&i.ColumnType.BOOLEAN)===i.ColumnType.BOOLEAN&&"boolean"!=typeof n)throw"表实体"+this.__tableName+"中的字段"+e.name+"类型与@column定义的不一致,应为boolean类型";if((e.type&i.ColumnType.DATE)===i.ColumnType.DATE&&!(n instanceof Date))throw"表实体"+this.__tableName+"中的字段"+e.name+"类型与@column定义的不一致,应为Date类型";if((e.type&i.ColumnType.STRING)===i.ColumnType.STRING&&"string"!=typeof n)throw"表实体"+this.__tableName+"中的字段"+e.name+"类型与@column定义的不一致,应为string类型";if((e.type&i.ColumnType.ARRAY)===i.ColumnType.ARRAY&&!(n instanceof Array))throw"表实体"+this.__tableName+"中的字段"+e.name+"类型与@column定义的不一致,应为Array<T> 或 [] 类型"}}},t}();e.Table=a},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(3)),r(n(6)),r(n(7)),r(n(0)),r(n(1)),r(n(2)),r(n(4)),r(n(8)),r(n(9))},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,u=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(u=(i<3?o(u):i>3?o(e,n,u):o(e,n))||u);return i>3&&u&&Object.defineProperty(e,n,u),u},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var c=n(3),a=n(4),s=n(0),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),i([c.column(s.ColumnType.STRING|s.ColumnType.PRIMARY),u("design:type",String)],e.prototype,"cbf0eebae0e30afd50bc051d7d56e51e43fa323d8550e84b4b4f6702",void 0),i([c.column(s.ColumnType.STRING),u("design:type",String)],e.prototype,"a9dd99d4d4cfd5ab89cf6005caedb6e6307d4743c40953bf9abe0fdd",void 0),e=i([c.table("a4a87f28374792e6a550e84b71419e688e254741cedae57c8cb0fc0f0a895dbf")],e)}(a.Table);e.a4a87f28374792e6a550e84b71419e688e254741cedae57c8cb0fc0f0a895dbf=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return function(){}}();e.ColumnInfo=r},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,c)}a((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),u=function(){function t(){}return t.fromSql=function(t,e,n){return r(this,void 0,void 0,function(){return o(this,function(r){return[2,new i.DbContext(t.constructor).fromSql(e,n)]})})},t.fromSqlFirst=function(t,e,n){return r(this,void 0,void 0,function(){var r;return o(this,function(o){switch(o.label){case 0:return[4,new i.DbContext(t.constructor).fromSql(e,n)];case 1:return null!=(r=o.sent())&&r.length>0?[2,r[0]]:[2,null]}})})},t.exist=function(t,e){return r(this,void 0,void 0,function(){return o(this,function(n){return[2,new i.DbContext(t.constructor).exist(e)]})})},t.delete=function(t,e){return r(this,void 0,void 0,function(){return o(this,function(n){return[2,new i.DbContext(t.constructor).delete(e)]})})},t.insert=function(t){return r(this,void 0,void 0,function(){var e;return o(this,function(n){if(t instanceof Array&&t.length>0){for(e=0;e<t.length;e++)t[e].checkColDef();return[2,new i.DbContext(t[0].constructor).insert(t)]}return t.checkColDef(),[2,new i.DbContext(t.constructor).insert(t)]})})},t.update=function(t){return r(this,void 0,void 0,function(){return o(this,function(e){return t.checkColDef(),[2,new i.DbContext(t.constructor).update(t)]})})},t.execSql=function(t,e,n){return r(this,void 0,void 0,function(){return o(this,function(r){return[2,new i.DbContext(t.constructor).execSql(e,n)]})})},t.query=function(t,e){return r(this,void 0,void 0,function(){return o(this,function(n){return[2,new i.DbContext(t.constructor).query(e)]})})},t.queryFirst=function(t,e){return r(this,void 0,void 0,function(){var n;return o(this,function(r){switch(r.label){case 0:return[4,new i.DbContext(t.constructor).query(e)];case 1:return null!=(n=r.sent())?[2,n[0]]:[2,null]}})})},t.save=function(t){return r(this,void 0,void 0,function(){return o(this,function(e){return[2,new i.DbContext(t.constructor).save(t)]})})},t}();e.sqlite=u},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,c)}a((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),u=function(){function t(){}return t.prototype.fromSql=function(t,e,n){return new i.DbContext(t.constructor).fromSql(e,n)},t.prototype.fromSqlFirst=function(t,e,n){return r(this,void 0,void 0,function(){var r;return o(this,function(o){switch(o.label){case 0:return[4,new i.DbContext(t.constructor).fromSql(e,n)];case 1:return null!=(r=o.sent())&&r.length>0?[2,r[0]]:[2,null]}})})},t.prototype.exist=function(t,e){return r(this,void 0,void 0,function(){return o(this,function(n){return[2,new i.DbContext(t.constructor).exist(e)]})})},t.prototype.delete=function(t,e){return r(this,void 0,void 0,function(){return o(this,function(n){return[2,new i.DbContext(t.constructor).delete(e)]})})},t.prototype.insert=function(t){return r(this,void 0,void 0,function(){var e;return o(this,function(n){if(t instanceof Array&&t.length>0){for(e=0;e<t.length;e++)t[e].checkColDef();return[2,new i.DbContext(t[0].constructor).insert(t)]}return t.checkColDef(),[2,new i.DbContext(t.constructor).insert(t)]})})},t.prototype.update=function(t){return r(this,void 0,void 0,function(){return o(this,function(e){return t.checkColDef(),[2,new i.DbContext(t.constructor).update(t)]})})},t.prototype.execSql=function(t,e,n){return r(this,void 0,void 0,function(){return o(this,function(r){return[2,new i.DbContext(t.constructor).execSql(e,n)]})})},t.prototype.query=function(t,e){return r(this,void 0,void 0,function(){return o(this,function(n){return[2,new i.DbContext(t.constructor).query(e)]})})},t.prototype.queryFirst=function(t,e){return r(this,void 0,void 0,function(){var n;return o(this,function(r){switch(r.label){case 0:return[4,new i.DbContext(t.constructor).query(e)];case 1:return null!=(n=r.sent())?[2,n[0]]:[2,null]}})})},t.prototype.save=function(t){return r(this,void 0,void 0,function(){return o(this,function(e){return[2,new i.DbContext(t.constructor).save(t)]})})},t}();e.Sql=u}])});