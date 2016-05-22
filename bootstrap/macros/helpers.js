
'use strict';require('earlgrey-runtime/6');let $targ$0;let accum$1;let accum$2;let accum$3;let accum$4;let accum$5;let accum$6;let accum$7;let accum$8;let $targ$12;let accum$9;let $targ$13;let accum$10;let $targ$14;let $targ$15;let $targ$16;let $targ$17;let $targ$18;let $targ$19;let $targ$20;let $targ$21;let $targ$22;let $targ$23;let $targ$24;let $targ$25;let $targ$26;let $targ$27;let $targ$28;let $targ$29;let $targ$30;let $targ$31;let $targ$32;let $targ$33;let $targ$34;let $targ$35;let $targ$36;let $targ$37;let $0$0;let __lt____lt____colon__$0;let $1$0;let Scope$0;let $2$0;let parse_clauses$0;let PatternCompiler$0;let $3$0;let Body$0;let camelCase$0;let mac1$0;let embed_location$0;let error_embed_location$0;let match_error$0;let drop_ctx$0;let expr_mac$0;let expr_mac2$0;let ctx_mac$0;let _default_proj$0;let value_mac$0;let overridable$0;let protected_value$0;let var_operator$0;let accum_flags$0;let build_loop$0;let partial_pattern$0;let make_assigner$0;let disregard_specials$0;let pattern_handlers$0;let named_statement_matcher$0;let grab_statements$0;let flatmacro$0;let AssignmentHandler$0;let qqstruct$0;let qq$0;let multimacro$0;let inject__minus__tools$0;$0$0=require("../location");__lt____lt____colon__$0=getProperty($0$0,"<<:","../location");$1$0=require("../expand");Scope$0=getProperty($1$0,"Scope","../expand");$2$0=require("../pattern");parse_clauses$0=getProperty($2$0,"parse_clauses","../pattern");PatternCompiler$0=getProperty($2$0,"PatternCompiler","../pattern");$3$0=require("../util");Body$0=getProperty($3$0,"Body","../util");camelCase$0=getProperty($3$0,"camelCase","../util");mac1$0=getProperty($3$0,"mac1","../util");if((typeof(Infinity)==="undefined")){$targ$0=undefined;(global["Infinity"]=$targ$0);(void 0);}embed_location$0=(function embed_location(ph$0$0){let other$0;let url$0;let start$0;let end$0;let t0$0;let t1$0;let t2$0;t0$0=ph$0$0;if((___hasprop(t0$0,"location")&&((t1$0=t0$0.location),(___hasprop(t1$0,"source")&&((t2$0=t1$0.source),(___hasprop(t2$0,"url")&&((url$0=t2$0.url),(___hasprop(t1$0,"start")&&((start$0=t1$0.start),___hasprop(t1$0,"end")))))))))){end$0=t1$0.end;return ["send",["send",["symbol","#"],["data",["void"],["symbol","location"]]],["data",["value",url$0],["value",start$0],["value",end$0]]];}else{other$0=ph$0$0;return ["send",["send",["symbol","#"],["data",["void"],["symbol","location"]]],["data",["symbol","null"],["value",0],["value",0]]];}});error_embed_location$0=(function error_embed_location(error$0,target$0){return ["send",["symbol","throw"],["send",["symbol","&:"],["data",error$0,["data",["send",["symbol","="],["data",["symbol","location"],embed_location$0(target$0)]]]]]];});match_error$0=(function match_error(){let location$0;let t0$2;let t1$1;let target$1;let ph$2$0;let t0$1;let m$0$0;m$0$0=arguments;t0$1=m$0$0.length;if(((t0$1>=1)&&(t0$1<=2))){target$1=m$0$0[0];if((1>=t0$1)){ph$2$0=null;}else{ph$2$0=m$0$0[1];}t0$2=ph$2$0;if((___hasprop(t0$2,"location")&&((t1$1=t0$2.location),(t1$1?true:false)))){location$0=t1$1;return __lt____lt____colon__$0(["send",["symbol","___match_error"],["data",target$1,["value",location$0.text()]]],target$1);}else{return __lt____lt____colon__$0(["send",["symbol","___match_error"],["data",target$1]],target$1);}}else{return ___match_error(m$0$0,"{target, match = null}");}});drop_ctx$0=(function drop_ctx(f$0){return (function(context$0,info$0,form$0,arg$0){let rval$0;rval$0=false;try{rval$0=f$0(context$0,info$0,form$0,arg$0);rval$0;}catch(excv$0){let t0$4;let e$0;let t0$3;let t1$2;let t2$1;let t3$0;let t4$0;t0$3=excv$0;if((getChecker(ErrorFactory(["match"]))(t0$3)&&(___hasprop(t0$3,"args")&&((t1$2=t0$3.args),(Array.isArray(t1$2)&&((t2$1=t1$2.length),((t2$1===1)&&((t3$0=t1$2[0]),(___hasprop(t3$0,"value")&&((t4$0=t3$0.value),((t4$0===context$0)&&(!(Array.isArray(t4$0)&&((t0$4=t4$0.length),((t0$4===2)&&((t4$0[0]==="expr")&&(t4$0[1]==="expr"))))))))))))))))){rval$0=["nostep",form$0];rval$0;}else{e$0=excv$0;throw e$0;rval$0;}}return rval$0;});});expr_mac$0=(function expr_mac(f$1){return (function(ph$3$0,info$1,form$1,arg$1){let t0$5;let t0$6;let otherwise$0;let bridge$$9379$0;bridge$$9379$0=ph$3$0;if(((Array.isArray(bridge$$9379$0)&&((t0$5=bridge$$9379$0.length),((t0$5===2)&&((bridge$$9379$0[0]==="expr")&&(bridge$$9379$0[1]==="expr")))))||(Array.isArray(bridge$$9379$0)&&((t0$6=bridge$$9379$0.length),((t0$6===2)&&((bridge$$9379$0[0]==="expr")&&(bridge$$9379$0[1]==="head"))))))){return f$1(info$1,form$1,arg$1);}else{otherwise$0=ph$3$0;return ["nostep",form$1];}});});expr_mac2$0=(function expr_mac2(mac$0){return (function(ph$4$0,info$2,f$2,e$1){let x$0;let mac3$0;let f$4;let x$3;let ph$5$0;let t0$7;let t1$3;t0$7=ph$4$0;t1$3=t0$7.length;if(((t1$3===2)&&(t0$7[0]==="project"))){ph$5$0=t0$7[1];if(((x$0=ph$5$0),((x$0 instanceof Array)&&(x$0[0]==="pattern")))){mac3$0=(function mac3(c$0,info$3,f$3,temp$0$0){let t0$8;let t1$4;let x$2;let env$0;let x$1;let t0$9;let t1$5;let ph$6$0;t0$8=temp$0$0;if((Array.isArray(t0$8)&&((t1$4=t0$8.length),((t1$4===2)&&(t0$8[0]==="data"))))){ph$6$0=t0$8[1];}else{___match_error(temp$0$0);}t0$9=ph$6$0;t1$5=t0$9.length;if(((t1$5===3)&&(t0$9[0]==="use"))){env$0=t0$9[1];x$1=t0$9[2];return ["use",env$0,mac$0.call(info$3,__lt____lt____colon__$0(["data",x$1],e$1))];}else{x$2=ph$6$0;return mac$0.call(info$3,__lt____lt____colon__$0(["data",x$2],x$2));}});return ["unconditional",["macro",mac3$0]];}else{f$4=(function f(_ctx$0,_info$0,_form$0,_e$0){return ["data",["value",true],mac$0.call(_info$0,_e$0)];});return ["nostep",["macro",f$4]];}}else{if(((x$3=ph$4$0),((x$3 instanceof Array)&&(x$3[0]==="expr")))){return mac$0.call(info$2,e$1);}else{return ___match_error(ph$4$0,"#expr");}}});});ctx_mac$0=(function ctx_mac(mac$1){return (function(ctx$0,info$4,f$5,e$2){return mac$1.call(info$4,ctx$0,e$2);});});_default_proj$0=(function _default_proj(name$0){return (function(x$4){return ["send",["symbol","throw"],["send",["send",["symbol","E"],["send",["symbol","."],["data",["void"],["symbol","project"]]]],["data",["send",["symbol","+"],["data",["send",["symbol","+"],["data",["value","Cannot project a value with '"],["value",name$0]]],["value","!'"]]]]]];});});value_mac$0=(function value_mac(){let name$1;let chk$0;let proj$0;let t0$10;let m$1$0;m$1$0=arguments;t0$10=m$1$0.length;if(((t0$10>=2)&&(t0$10<=3))){name$1=m$1$0[0];chk$0=m$1$0[1];if((2>=t0$10)){proj$0=_default_proj$0(name$1);}else{proj$0=m$1$0[2];}return (function(temp$1$0,temp$2$0,form$2,arg$2){let t0$11;let x$5;let m$2;let x$7;let m$4;let x$9;let m$6$0;let ctx$2;let ctx$1;let ph$7$0;t0$11=temp$1$0;ctx$1=t0$11;ph$7$0=t0$11;if(((x$5=ph$7$0),((x$5 instanceof Array)&&(x$5[0]==="check")))){m$2=(function m(){let x$6;let $$9573$0;let $$9574$0;let t0$13;let t1$6;let ph$9$0;let t0$12;let m$3$0;m$3$0=arguments;t0$12=m$3$0.length;if((t0$12>=1)){Array.prototype.slice.call(m$3$0,0,-1);ph$9$0=m$3$0[(t0$12-1)];t0$13=ph$9$0;t1$6=t0$13.length;if(((t1$6===1)&&(t0$13[0]==="void"))){return ["variable",name$1];}else{if(((t1$6===2)&&(t0$13[0]==="data"))){x$6=t0$13[1];return chk$0(x$6);}else{return ___match_error(ph$9$0,"#data{x}");}}}else{return ___match_error(m$3$0,"{*, match}");}});return ["nostep",["macro",m$2]];}else{if(((x$7=ph$7$0),((x$7 instanceof Array)&&(x$7[0]==="project")))){m$4=(function m(){let x$8;let $$9627$0;let $$9628$0;let t0$15;let t1$7;let ph$11$0;let t0$14;let m$5$0;m$5$0=arguments;t0$14=m$5$0.length;if((t0$14>=1)){Array.prototype.slice.call(m$5$0,0,-1);ph$11$0=m$5$0[(t0$14-1)];t0$15=ph$11$0;t1$7=t0$15.length;if(((t1$7===1)&&(t0$15[0]==="void"))){return ["variable",name$1];}else{if(((t1$7===2)&&(t0$15[0]==="data"))){x$8=t0$15[1];return proj$0(x$8);}else{return ___match_error(ph$11$0,"#data{x}");}}}else{return ___match_error(m$5$0,"{*, match}");}});return ["nostep",["macro",m$4]];}else{ctx$2=ph$7$0;m$6$0=arg$2;if(((x$9=m$6$0),((x$9 instanceof Array)&&(x$9[0]==="void")))){return ["variable",name$1];}else{return ["send",["variable",name$1],arg$2];}}}});}else{return ___match_error(m$1$0,"{name, chk, proj = _default_proj{name}}");}});overridable$0=(function overridable(f$6){return (function(temp$3$0,info$5,form$3,arg$3){let t0$16;let x$10;let other$1;let t0$17;let t1$8;let context$1;let ph$12$0;t0$16=temp$3$0;context$1=t0$16;ph$12$0=t0$16;if(((x$10=ph$12$0),((x$10 instanceof Array)&&(x$10[0]==="pattern")))){return ["nostep",form$3];}else{t0$17=ph$12$0;t1$8=t0$17.length;if(((t1$8===2)&&((t0$17[0]==="expr")&&(t0$17[1]==="multi")))){return ["nostep",form$3];}else{other$1=ph$12$0;return f$6(context$1,info$5,form$3,arg$3);}}});});protected_value$0=(function protected_value(name$2,value$0){return (function(ph$13$0,temp$4$0,form$4,arg$4){let x$11;let other$3;let t0$18;let m$7$0;let other$2;if(((x$11=ph$13$0),((x$11 instanceof Array)&&(x$11[0]==="pattern")))){throw ErrorFactory(["syntax","pattern"]).create((("'"+name$2)+"' is not a valid pattern and cannot be redeclared"));}else{other$2=ph$13$0;m$7$0=arg$4;if((Array.isArray(m$7$0)&&((t0$18=m$7$0.length),((t0$18===1)&&(m$7$0[0]==="void"))))){return ["value",value$0];}else{other$3=m$7$0;return ["send",["value",value$0],arg$4];}}});});var_operator$0=(function var_operator(name$3){return (function(ph$14$0,temp$5$0,form$5,expr$0){let t0$19;let x$12;let x$13;let sym$0;let x$14;let t0$21;let m$9$0;let x$15;let t0$24;let t1$11;let $targ$1;let args$0;let s$0;let $$9836$0;let $$9837$0;let t0$23;let t1$10;let expr$1;let ph$15$0;let $$9839$0;let $$9840$0;let t0$22;let t1$9;let m$8$0;let sym$1;let bridge$$9782$0;let t0$20;let env$1;t0$19=temp$5$0;if(___hasprop(t0$19,"env")){env$1=t0$19.env;}else{___match_error(temp$5$0);}bridge$$9782$0=ph$14$0;if((((x$12=bridge$$9782$0),((x$12 instanceof Array)&&(x$12[0]==="check")))||((x$13=bridge$$9782$0),((x$13 instanceof Array)&&(x$13[0]==="project"))))){return ["nostep",form$5];}else{t0$20=ph$14$0;if((___hasprop(t0$20,"fromop")&&(!t0$20.fromop))){sym$0=__amp__(["symbol",name$3],({"env":env$1}));return ["send",__lt____lt____colon__$0(sym$0,expr$0),expr$0];}else{sym$1=__lt____lt____colon__$0(__amp__(["symbol",name$3],({"env":env$1})),((m$9$0=form$5),((Array.isArray(m$9$0)&&((t0$21=m$9$0.length),((t0$21===3)&&(m$9$0[0]==="send"))))?((x$14=m$9$0[1]),m$9$0[2],x$14):form$5)));m$8$0=expr$0;if((($$9839$0=Array.isArray(m$8$0))&&((t0$22=m$8$0.length),((t0$22===1)&&(m$8$0[0]==="void"))))){return sym$1;}else{if(($$9839$0&&((t0$22===3)&&((m$8$0[0]==="data")&&((x$15=m$8$0[1]),((x$15 instanceof Array)&&(x$15[0]==="void"))))))){t1$9=m$8$0[2];expr$1=t1$9;ph$15$0=t1$9;t0$23=ph$15$0;if((($$9837$0=___hasprop(t0$23,"brackets"))&&(t0$23.brackets==="[]"))){return ["send",sym$1,expr$1];}else{if(($$9837$0&&(t0$23.brackets==="()"))){$targ$1=getProjector(["multi"])(expr$1)[1];t0$24=$targ$1;if((Array.isArray(t0$24)&&((t1$11=t0$24.length),((t1$11>=1)&&(t0$24[0]==="multi"))))){args$0=Array.prototype.slice.call(t0$24,1);}else{___match_error($targ$1,"#multi{*args}");}return ["send",sym$1,["data"].concat(args$0)];}else{if((Array.isArray(t0$23)&&((t1$10=t0$23.length),((t1$10===2)&&(t0$23[0]==="symbol"))))){s$0=t0$23[1];return ["send",sym$1,["value",camelCase$0(s$0)]];}else{return ["send",sym$1,expr$1];}}}}else{return ["send",sym$1,expr$0];}}}}});});accum_flags$0=(function accum_flags(){let make$0;let mac$2;let also_values$0;let t0$25;let m$10$0;m$10$0=arguments;t0$25=m$10$0.length;if(((t0$25>=1)&&(t0$25<=2))){mac$2=m$10$0[0];if((1>=t0$25)){also_values$0=true;}else{also_values$0=m$10$0[1];}make$0=(function make(flags$0){return (function(context$2,info$6,form$6,ph$16$0){let other$4;let flag$1;let flag$0;let $$9960$0;let t0$26;let t1$12;let t2$2;let t3$1;let t4$1;let t5$0;let t6$0;let t7$0;let t8$0;let t9$0;t0$26=ph$16$0;if((Array.isArray(t0$26)&&((t1$12=t0$26.length),((t1$12===2)&&((t0$26[0]==="value")&&((flag$0=t0$26[1]),also_values$0)))))){return ["macro",make$0(flags$0.concat([flag$0]))];}else{t1$12=t0$26.length;if(((t1$12===3)&&((t0$26[0]==="send")&&((t2$2=t0$26[1]),(Array.isArray(t2$2)&&((t3$1=t2$2.length),((t3$1===2)&&((t2$2[0]==="symbol")&&((t2$2[1]===".")&&((t4$1=t0$26[2]),(Array.isArray(t4$1)&&((t5$0=t4$1.length),((t5$0===3)&&((t4$1[0]==="data")&&((t6$0=t4$1[1]),(Array.isArray(t6$0)&&((t7$0=t6$0.length),((t7$0===1)&&((t6$0[0]==="void")&&((t8$0=t4$1[2]),(Array.isArray(t8$0)&&((t9$0=t8$0.length),((t9$0===2)&&(t8$0[0]==="symbol")))))))))))))))))))))))){flag$1=t8$0[1];return ["macro",make$0(flags$0.concat([flag$1]))];}else{other$4=ph$16$0;return mac$2(context$2,info$6,form$6,other$4,flags$0);}}});});return make$0([]);}else{return ___match_error(m$10$0,"{mac, also_values = true}");}});build_loop$0=(function build_loop(info$7,env$2,form$7,li$0,clauses$0,wrap$0,pre$0,post$0,opt$0){let t0$27;let t0$28;let accum$0;let lbl$0;let freshenv$0;let i$0;let len$0;let $targ$2;let first_mac$0;let $targ$3;let last_mac$0;let newscope$0;let m$11;if(env$2){lbl$0=__amp__(["value",info$7.gensym()],({"env":env$2}));}else{lbl$0=["value",info$7.gensym()];}freshenv$0=info$7.expander.mkenv();i$0=__amp__(["symbol","i"],({"env":freshenv$0}));len$0=__amp__(["symbol","len"],({"env":freshenv$0}));$targ$2=(function(temp$6$0,temp$7$0,form$8,subp$0){let x$16;if(((x$16=temp$6$0),((x$16 instanceof Array)&&(x$16[0]==="pattern")))){}else{___match_error(temp$6$0);}return ["test",["send",["symbol","==="],["data",i$0,["value",0]]],subp$0];});t0$27=getProjector(drop_ctx$0)($targ$2);if(t0$27[0]){first_mac$0=t0$27[1];}else{___match_error($targ$2,"drop_ctx! first_mac{#pattern, _, form, subp}");}$targ$3=(function(temp$8$0,temp$9$0,form$9,subp$1){let x$17;if(((x$17=temp$8$0),((x$17 instanceof Array)&&(x$17[0]==="pattern")))){}else{___match_error(temp$8$0);}return ["test",["send",["symbol","==="],["data",i$0,["send",["symbol","-"],["data",len$0,["value",1]]]]],subp$1];});t0$28=getProjector(drop_ctx$0)($targ$3);if(t0$28[0]){last_mac$0=t0$28[1];}else{___match_error($targ$3,"drop_ctx! last_mac{#pattern, _, form, subp}");}newscope$0=Scope$0(info$7.scope);env$2.bind(newscope$0,"first",["macro",first_mac$0]);env$2.bind(newscope$0,"last",["macro",last_mac$0]);m$11=__lt____lt____colon__$0(["symbol","m"],form$7);if(opt$0.forof){return ["multi",pre$0,["send",["send",["symbol","for"],lbl$0],["data",["send",["symbol","of"],["data",m$11,li$0]],parse_clauses$0(info$7.with_scope(newscope$0),m$11,clauses$0,__amp__(opt$0,({"wrap":wrap$0})))]],post$0];}else{return ["multi",pre$0,["send",["symbol","let"],["data",["multi",["send",["symbol","="],["data",["symbol","temp"],li$0]],["send",["symbol","="],["data",len$0,["send",["symbol","temp"],["send",["symbol","."],["data",["void"],["symbol","length"]]]]]]],["send",["send",["symbol","for"],lbl$0],["data",["multi",["send",["symbol","="],["data",["send",["symbol","var"],i$0],["value",0]]],["send",["symbol","<"],["data",i$0,len$0]],["send",["symbol","++"],["data",i$0,["void"]]]],["multi",["send",["symbol","="],["data",m$11,["send",["symbol","___js_fetch"],["data",["symbol","temp"],i$0]]]],parse_clauses$0(info$7.with_scope(newscope$0),m$11,clauses$0,__amp__(opt$0,((accum$0=({})),(accum$0["wrap"]=(function wrap(x$18){return wrap$0(x$18,i$0);})),accum$0)))]]]]],post$0];}});partial_pattern$0=(function partial_pattern(operator$0){let x$19;let m$12$0;let op$0;m$12$0=operator$0;if(((x$19=m$12$0),((x$19 instanceof Array)&&(x$19[0]==="symbol")))){op$0=operator$0;}else{if((typeof(m$12$0)==="string")){op$0=["variable",operator$0];}else{op$0=___match_error(m$12$0,"String? ");}}return (function(context$3,temp$10$0,form$10,expr$2){let x$20;let subp2$0;let m$14;let other$5;let subp$2;let val$0;let $$10156$0;let $$10157$0;let $$10158$0;let t0$29;let t1$13;let t2$3;let m$13$0;m$13$0=[context$3,expr$2];if((($$10156$0=Array.isArray(m$13$0))&&((t0$29=m$13$0.length),(($$10158$0=(t0$29===2))&&(((x$20=m$13$0[0]),((x$20 instanceof Array)&&(x$20[0]==="pattern")))&&((t1$13=m$13$0[1]),(Array.isArray(t1$13)&&((t2$3=t1$13.length),((t2$3===3)&&(t1$13[0]==="data")))))))))){subp$2=t1$13[1];val$0=t1$13[2];if(equal(subp$2,["void"])){subp2$0=["ignore"];}else{subp2$0=subp$2;}m$14=mac1$0((function(x$21){return ["send",op$0,["data",x$21,val$0]];}));return ["check",m$14,subp2$0];}else{if(($$10158$0&&(m$13$0[0],(t1$13=m$13$0[1]),(Array.isArray(t1$13)&&((t2$3=t1$13.length),((t2$3===1)&&(t1$13[0]==="void"))))))){return op$0;}else{other$5=m$13$0;return ["send",op$0,expr$2];}}});});make_assigner$0=(function make_assigner(op$1){return (function(context$4,temp$11$0,form$11,temp$12$0){let t0$30;let t1$14;let a$0;let b$0;t0$30=temp$12$0;if((Array.isArray(t0$30)&&((t1$14=t0$30.length),((t1$14===3)&&(t0$30[0]==="data"))))){a$0=t0$30[1];b$0=t0$30[2];}else{___match_error(temp$12$0);}return ["assign",a$0,["send",["symbol",op$1],["data",a$0,b$0]]];});});disregard_specials$0=(function disregard_specials(temp$13$0,value$1){let t0$31;let t1$15;let kind$0;let expr$3;t0$31=temp$13$0;if((Array.isArray(t0$31)&&((t1$15=t0$31.length),((t1$15===2)&&(t0$31[0]==="special"))))){kind$0=t0$31[1];expr$3=t0$31;}else{___match_error(temp$13$0);}throw ErrorFactory(["syntax","pattern","special"]).create("Special token cannot be used here",({"special":expr$3}));});pattern_handlers$0=({"declare_variables":__amp____colon__(({"allow_nested":true,"allow_arguments":true,"special":disregard_specials$0}),__amp____colon__(((accum$1=({})),(accum$1["assign"]=(function assign(temp$14$0,value$2){let t0$32;let v$1;let name$4;let t0$33;let t1$16;let v$0;let ph$17$0;t0$32=temp$14$0;v$0=t0$32;ph$17$0=t0$32;t0$33=ph$17$0;t1$16=t0$33.length;if(((t1$16===2)&&(t0$33[0]==="symbol"))){name$4=t0$33[1];return ["do",__lt____lt____colon__$0(["assign",v$0,__amp____colon__(value$2,({"name":camelCase$0(name$4)}))],v$0)];}else{v$1=ph$17$0;return ["do",__lt____lt____colon__$0(["assign",v$1,value$2],v$1)];}})),accum$1),__amp____colon__(({"tags":({"declare_mode":"unqualified"})}),__amp____colon__(((accum$2=({})),(accum$2["declare"]=(function declare(temp$15$0,vars$0){let m$15;let acc$0;let temp$16;acc$0=[];temp$16=null;m$15=null;$4:for(m$15 of vars$0){let m$16$0;let v$2;v$2=m$15;m$16$0=v$2.declare_mode;if((m$16$0==="set")){temp$16=["splice"];}else{if((m$16$0==="let")){temp$16=["declare",__amp__(v$2,({"mutable":false}))];}else{if((m$16$0==="var")){temp$16=["declare",__amp__(v$2,({"mutable":true}))];}else{if((m$16$0==="unqualified")){temp$16=["declare",__amp__(v$2,({"mutable":false,"use_previous":true}))];}else{temp$16=___match_error(m$16$0,".unqualified");}}}}acc$0.push(temp$16);}return acc$0;})),accum$2),__amp____colon__(((accum$3=({})),(accum$3["success"]=(function success(temp$17$0){return ["multi"];})),accum$3),__amp____colon__(((accum$4=({})),(accum$4["failure"]=(function failure(target$2,pattern$0){return match_error$0(target$2,pattern$0);})),accum$4),({"wrapOrder":0}))))))),"build_object":__amp____colon__(({"strings_as_variables":true,"allow_nested":true,"allow_arguments":true,"special":disregard_specials$0}),__amp____colon__(((accum$5=({})),(accum$5["assign"]=(function assign(temp$18$0,value$3,temp$19$0){let t0$34;let name$5;let t0$35;let t1$17;let t2$4;let v$3;let ph$18$0;t0$34=temp$18$0;v$3=t0$34;ph$18$0=t0$34;t0$35=ph$18$0;t1$17=t0$35.length;if(((t1$17===2)&&((t0$35[0]==="symbol")&&((t2$4=getProjector(camelCase$0)(t0$35[1])),t2$4[0])))){name$5=t2$4[1];return ["do",__lt____lt____colon__$0(["assign",["send",["symbol","accum"],["value",name$5]],value$3],v$3)];}else{return ["do",__lt____lt____colon__$0(["assign",["send",["symbol","accum"],v$3],value$3],v$3)];}})),accum$5),__amp____colon__(((accum$6=({})),(accum$6["declare"]=(function declare(temp$20$0,vars$1){return [["declare",["symbol","accum"],["data",["symbol","="]]]];})),accum$6),__amp____colon__(((accum$7=({})),(accum$7["success"]=(function success(temp$21$0){return ["symbol","accum"];})),accum$7),__amp____colon__(((accum$8=({})),(accum$8["failure"]=(function failure(target$3,pattern$1){return match_error$0(target$3,pattern$1);})),accum$8),({"wrapOrder":0}))))))});named_statement_matcher$0=(function named_statement_matcher(name$6){let t0$37;let $targ$4;let p$0;let $targ$5;$targ$4=(function(ph$19$0){let t0$36;let t1$18;let t2$5;let t3$2;t0$36=ph$19$0;t1$18=t0$36.length;if(((t1$18===3)&&((t0$36[0]==="send")&&((t2$5=t0$36[1]),(Array.isArray(t2$5)&&((t3$2=t2$5.length),((t3$2===2)&&((t2$5[0]==="symbol")&&(t2$5[1]===name$6))))))))){t0$36[2];return true;}else{return false;}});t0$37=getProjector(predicate)($targ$4);if(t0$37[0]){p$0=t0$37[1];}else{___match_error($targ$4,"predicate! p{match}");}$targ$5=(function(){return name$6;});(p$0["toString"]=$targ$5);return p$0;});grab_statements$0=(function grab_statements(){let stmt$0;let rest$0;let t0$40;let t1$21;let m$18$0;let m$19;let n$0;let bridge$$10611$0;let m$22$0;let matches$0;let rest$2;let t0$43;let t1$23;let t0$44;let t1$24;let $targ$7;let one$0;let rest1$0;let $targ$8;let two$0;let rest2$0;let pattern$4;let others$0;let pattern$3;let min$0;let max$0;let err$0;let opts$0;let pattern$2;let $$10505$0;let $$10506$0;let t0$39;let t1$20;let descr$0;let ph$21$0;let all$0;let transform$0;let t0$38;let t1$19;let m$17$0;m$17$0=arguments;t0$38=m$17$0.length;if(((t0$38>=2)&&(t0$38<=3))){t1$19=m$17$0[0];descr$0=t1$19;ph$21$0=t1$19;all$0=m$17$0[1];if((2>=t0$38)){transform$0=(function(x$22){return x$22;});}else{transform$0=m$17$0[2];}t0$39=ph$21$0;if((typeof(t0$39)==="function")){pattern$2=t0$39;m$18$0=all$0;if((Array.isArray(m$18$0)&&((t0$40=m$18$0.length),((t0$40>=1)&&((t1$21=m$18$0[0]),getChecker(pattern$2)(t1$21)))))){stmt$0=t1$21;rest$0=Array.prototype.slice.call(m$18$0,1);return [transform$0(stmt$0),rest$0];}else{return [null,all$0];}}else{t1$20=t0$39.length;if(((t1$20>=1)&&(t0$39[0]==="any"))){opts$0=Array.prototype.slice.call(t0$39,1);m$19=null;$5:for(m$19 of opts$0){let m$21;let rest$1;let $$10581$0;let $$10582$0;let $$10583$0;let t0$41;let m$20$0;let opt$1;opt$1=m$19;m$20$0=grab_statements$0(opt$1,all$0,transform$0);if((($$10581$0=Array.isArray(m$20$0))&&((t0$41=m$20$0.length),(($$10583$0=(t0$41===2))&&(m$20$0[0]===null))))){m$20$0[1];undefined;}else{if($$10583$0){m$21=m$20$0[0];rest$1=m$20$0[1];return [m$21,rest$1];}else{___match_error(m$20$0,"{m, rest}");}}}return [null,all$0];}else{if((((t1$20>=2)&&(t1$20<=5))&&(t0$39[0]==="multiple"))){pattern$3=t0$39[1];if((2>=t1$20)){min$0=0;}else{min$0=t0$39[2];}if((3>=t1$20)){max$0=Infinity;}else{max$0=t0$39[3];}if((4>=t1$20)){err$0=true;}else{err$0=t0$39[4];}matches$0=[];rest$2=all$0;$6:while(true){let t0$42;let t1$22;let $targ$6;let _matches$0;$targ$6=grab_statements$0(pattern$3,rest$2,transform$0);t0$42=$targ$6;if((Array.isArray(t0$42)&&((t1$22=t0$42.length),(t1$22===2)))){_matches$0=t0$42[0];rest$2=t0$42[1];}else{___match_error($targ$6,"{_matches, rest}");}[_matches$0,rest$2];if(equal(_matches$0,null)){break $6;}matches$0.push(_matches$0);if(equal(rest$2,[])){break $6;}}m$22$0=matches$0.length;n$0=m$22$0;bridge$$10611$0=m$22$0;if(((bridge$$10611$0<min$0)||(bridge$$10611$0>max$0))){if(err$0){throw ErrorFactory(["syntax","wrong_multiplicity"]).create(((((((((n$0+" instances of the pattern '")+pattern$3)+"' were found.")+" between ")+min$0)+" and ")+max$0)+" were expected."),({"pattern":pattern$3,"matches":matches$0}));}return [["multiple"],all$0];}else{return [["multiple"].concat(matches$0),rest$2];}}else{if(((t1$20===1)&&(t0$39[0]==="seq"))){return [["seq"],all$0];}else{if(((t1$20>=2)&&(t0$39[0]==="seq"))){pattern$4=t0$39[1];others$0=Array.prototype.slice.call(t0$39,2);$targ$7=grab_statements$0(pattern$4,all$0,transform$0);t0$43=$targ$7;if((Array.isArray(t0$43)&&((t1$23=t0$43.length),(t1$23===2)))){one$0=t0$43[0];rest1$0=t0$43[1];}else{___match_error($targ$7,"{one, rest1}");}[one$0,rest1$0];if((one$0===null)){return [null,all$0];}$targ$8=grab_statements$0(["seq"].concat(others$0),rest1$0,transform$0);t0$44=$targ$8;if((Array.isArray(t0$44)&&((t1$24=t0$44.length),(t1$24===2)))){two$0=t0$44[0];rest2$0=t0$44[1];}else{___match_error($targ$8,"{two, rest2}");}[two$0,rest2$0];if((two$0===null)){return [null,all$0];}return [["seq",one$0].concat(two$0.slice(1)),rest2$0];}else{throw ErrorFactory(["unknown_pattern"]).create(descr$0);}}}}}}else{return ___match_error(m$17$0,"{match descr, all, transform = {x} -> x}");}});flatmacro$0=(function flatmacro(pattern$5,assemble$0){return ["restmacro",(function(stmts$0){let t0$45;let t1$25;let $targ$9;let result$0;let rest$3;$targ$9=grab_statements$0(pattern$5,stmts$0);t0$45=$targ$9;if((Array.isArray(t0$45)&&((t1$25=t0$45.length),(t1$25===2)))){result$0=t0$45[0];rest$3=t0$45[1];}else{___match_error($targ$9,"{result, rest}");}[result$0,rest$3];return [assemble$0(result$0)].concat(rest$3);})];});AssignmentHandler$0=(function AssignmentHandler(temp$22$0,temp$23$0){let $targ$10;let __at___$0;if((!getChecker(AssignmentHandler$0)(this))){__at___$0=Object.create(AssignmentHandler$0.prototype);}else{__at___$0=this;}(__at___$0["subp"]=temp$22$0);(__at___$0["wrapPlaceholder"]=temp$23$0);$targ$10=1;(__at___$0["wrapAssignmentOrder"]=$targ$10);return __at___$0;});(AssignmentHandler$0.prototype["expand"]=(function expand(info$8){let $targ$11;let __at___$1;let self$0;__at___$1=this;self$0=this;$targ$11=info$8.env.mark(["symbol",info$8.gensym("$get")]);(__at___$1["placeholder"]=$targ$11);if(__at___$1.subp){return ["all",__at___$1.subp,__at___$1.placeholder];}else{return __at___$1.placeholder;}}));(AssignmentHandler$0.prototype["wrapAssignment"]=(function wrapAssignment(expr$4,info$9,opt$2){let __at___$2;let self$1;__at___$2=this;self$1=this;return ["splice",expr$4,__at___$2.wrapPlaceholder(__at___$2.placeholder)];}));__amp____colon__(AssignmentHandler$0,__amp____colon__((($targ$12="AssignmentHandler"),(accum$9=({})),(accum$9["::name"]=$targ$12),accum$9),(($targ$13=true),(accum$10=({})),(accum$10["::egclass"]=$targ$13),accum$10)));qqstruct$0=(function qqstruct(name$7,args$1){return ["data",["value",name$7]].concat(args$1);});qq$0=(function qq(){let m$24;let acc$1;let temp$24;let m$25;let acc$2;let temp$25;let m$26;let acc$3;let temp$26;let res$0;let name$8;let args$3;let ops$0;let args$2;let insert$2;let insert$1;let insert$0;let v$4;let s$2;let s$1;let $$10806$0;let $$10807$0;let $$10808$0;let $$10809$0;let $$10810$0;let $$10811$0;let $$10812$0;let $$10813$0;let $$10814$0;let t0$47;let t1$27;let t2$6;let t3$3;let t4$2;let t5$1;let t6$1;let t7$1;let expr$5;let ph$23$0;let annotate$0;let t0$46;let t1$26;let m$23$0;m$23$0=arguments;t0$46=m$23$0.length;if(((t0$46>=1)&&(t0$46<=2))){t1$26=m$23$0[0];expr$5=t1$26;ph$23$0=t1$26;if((1>=t0$46)){annotate$0=false;}else{annotate$0=m$23$0[1];}t0$47=ph$23$0;t1$27=t0$47.length;if((($$10808$0=(t1$27===2))&&(t0$47[0]==="symbol"))){s$1=t0$47[1];return qqstruct$0("symbol",[["value",s$1]]);}else{if(($$10808$0&&(t0$47[0]==="char"))){s$2=t0$47[1];return qqstruct$0("char",[["value",s$2]]);}else{if(((t1$27===1)&&(t0$47[0]==="void"))){return qqstruct$0("void",[]);}else{if(((t1$27===2)&&(t0$47[0]==="value"))){v$4=t0$47[1];return qqstruct$0("value",[expr$5]);}else{if((($$10808$0=(t1$27===3))&&(($$10809$0=(t0$47[0]==="send"))&&((t2$6=t0$47[1]),(($$10811$0=Array.isArray(t2$6))&&((t3$3=t2$6.length),(($$10813$0=(t3$3===2))&&(($$10814$0=(t2$6[0]==="symbol"))&&((t2$6[1]==="^")&&((t4$2=t0$47[2]),(Array.isArray(t4$2)&&((t5$1=t4$2.length),((t5$1===3)&&((t4$2[0]==="data")&&((t6$1=t4$2[1]),(Array.isArray(t6$1)&&((t7$1=t6$1.length),((t7$1===1)&&(t6$1[0]==="void"))))))))))))))))))){insert$0=t4$2[2];return insert$0;}else{if(($$10814$0&&((t2$6[1]==="^=")&&((t4$2=t0$47[2]),(Array.isArray(t4$2)&&((t5$1=t4$2.length),((t5$1===3)&&((t4$2[0]==="data")&&((t6$1=t4$2[1]),(Array.isArray(t6$1)&&((t7$1=t6$1.length),((t7$1===1)&&(t6$1[0]==="void"))))))))))))){insert$1=t4$2[2];return qqstruct$0("value",[insert$1]);}else{if(($$10814$0&&((t2$6[1]==="^*")&&((t4$2=t0$47[2]),(Array.isArray(t4$2)&&((t5$1=t4$2.length),((t5$1===3)&&((t4$2[0]==="data")&&((t6$1=t4$2[1]),(Array.isArray(t6$1)&&((t7$1=t6$1.length),((t7$1===1)&&(t6$1[0]==="void"))))))))))))){insert$2=t4$2[2];return ["send",["symbol","*"],["data",["void"],insert$2]];}else{if(((t1$27>=2)&&(t0$47[0]==="mismix"))){ops$0=t0$47[1];args$2=Array.prototype.slice.call(t0$47,2);return qqstruct$0("mismix",[["data"].concat(((acc$1=[]),(temp$24=null),(m$24=null),(function(){$7:for(m$24 of ops$0){let op$2;op$2=m$24;temp$24=qq$0(op$2,annotate$0);acc$1.push(temp$24);}})(),acc$1))].concat(((acc$2=[]),(temp$25=null),(m$25=null),(function(){$8:for(m$25 of args$2){let arg$5;arg$5=m$25;temp$25=qq$0(arg$5,annotate$0);acc$2.push(temp$25);}})(),acc$2)));}else{if((t1$27>=1)){name$8=t0$47[0];args$3=Array.prototype.slice.call(t0$47,1);res$0=qqstruct$0(name$8,((acc$3=[]),(temp$26=null),(m$26=null),(function(){$9:for(m$26 of args$3){let arg$6;arg$6=m$26;temp$26=qq$0(arg$6,annotate$0);acc$3.push(temp$26);}})(),acc$3));if((annotate$0&&expr$5.fromop)){return ["send",["symbol","&"],["data",res$0,["data",["send",["symbol","="],["data",["symbol","fromop"],["symbol","true"]]]]]];}else{return res$0;}}else{return ___match_error(ph$23$0,"{name, *args}");}}}}}}}}}}else{return ___match_error(m$23$0,"{match expr, annotate = false}");}});multimacro$0=(function multimacro(cases$0){return (function(temp$27$0,info$10,form$12,temp$28$0){let t0$48;let t0$49;let x$24;let x$25;let x$26;let x$27;let ph$26$0;let ph$25$0;let fallbacks$0;let ex$0;let projector$0;let $$11038$0;let $$11039$0;let $$11040$0;let t0$50;let t1$28;let context$5;let ph$24$0;let expr$6;let topexpr$0;t0$48=temp$27$0;context$5=t0$48;ph$24$0=t0$48;t0$49=temp$28$0;expr$6=t0$49;topexpr$0=t0$49;fallbacks$0=({"check":null,"clause":null,"decorate":"project","expr":null,"project":"expr"});ex$0=(function ex(){let case$1;let info$11;let expr$7;let orig$0;let t0$51;let m$27$0;m$27$0=arguments;t0$51=m$27$0.length;if(((t0$51>=3)&&(t0$51<=4))){case$1=m$27$0[0];info$11=m$27$0[1];expr$7=m$27$0[2];if((3>=t0$51)){orig$0=case$1;}else{orig$0=m$27$0[3];}if(send(cases$0,case$1)){return send(cases$0,case$1).call(info$11,expr$7);}else{if(send(fallbacks$0,case$1)){return ex$0(send(fallbacks$0,case$1),info$11,expr$7,orig$0);}else{throw send(send(ErrorFactory(["syntax","nomacro"]),"create", true),__amp____colon__([(("No macro for context: '"+orig$0)+"'")],({"expr":topexpr$0,"::objinsert":1})));}}}else{return ___match_error(m$27$0,"{case, info, expr, orig = case}");}});projector$0=(function projector(case$2){let mac$3;mac$3=(function mac(ctx$3,info$12,form$13,temp$29$0){let t0$52;let t1$29;let t2$7;let env$3;let x$23;let t0$53;let t1$30;let e$3;let ph$27$0;t0$52=temp$29$0;if((Array.isArray(t0$52)&&((t1$29=t0$52.length),((t1$29===2)&&(t0$52[0]==="data"))))){t2$7=t0$52[1];e$3=t2$7;ph$27$0=t2$7;}else{___match_error(temp$29$0);}t0$53=ph$27$0;t1$30=t0$53.length;if(((t1$30===3)&&(t0$53[0]==="use"))){env$3=t0$53[1];x$23=t0$53[2];return ["use",env$3,ex$0(case$2,info$12,x$23)];}else{return ex$0(case$2,info$12,e$3);}});return ["macro",mac$3];});if(((x$24=ph$24$0),((x$24 instanceof Array)&&(x$24[0]==="clause")))){return ex$0("clause",info$10,expr$6);}else{if(((x$25=ph$24$0),((x$25 instanceof Array)&&(x$25[0]==="pattern")))){if(cases$0.pattern){return ex$0("pattern",info$10,expr$6);}else{return ["project",projector$0("decorate"),expr$6,true];}}else{t0$50=ph$24$0;t1$28=t0$50.length;if((($$11040$0=(t1$28===2))&&(t0$50[0]==="check"))){ph$25$0=t0$50[1];if(((x$26=ph$25$0),((x$26 instanceof Array)&&(x$26[0]==="pattern")))){return ["send",["symbol","->"],["data",["data",["symbol","x"]],["send",projector$0("check"),["data",["symbol","x"]]]]];}else{return ["send",["symbol","->"],["data",["data",["symbol","x"]],["send",projector$0("check"),["data",["symbol","x"]]]]];}}else{if(($$11040$0&&(t0$50[0]==="project"))){ph$26$0=t0$50[1];if(((x$27=ph$26$0),((x$27 instanceof Array)&&(x$27[0]==="pattern")))){return ["unconditional",projector$0("project")];}else{return ["send",["symbol","->"],["data",["data",["symbol","x"]],["data",["symbol","true"],["send",projector$0("project"),["data",["symbol","x"]]]]]];}}else{return ex$0("expr",info$10,expr$6);}}}}});});inject__minus__tools$0=(function injectTools(info$13){let accum$11;return __amp____colon__(info$13,__amp____colon__(({"PatternCompiler":PatternCompiler$0,"pattern_handlers":pattern_handlers$0,"camelCase":camelCase$0}),__amp____colon__(((accum$11=({})),(accum$11["multimacro"]=(function multimacro(cases$1){return multimacro$0(cases$1)(info$13.context,info$13,info$13.form,info$13.arg);})),accum$11),({"transfer":__lt____lt____colon__$0}))));});$targ$14=embed_location$0;(exports["embed_location"]=$targ$14);$targ$15=error_embed_location$0;(exports["error_embed_location"]=$targ$15);$targ$16=match_error$0;(exports["match_error"]=$targ$16);$targ$17=drop_ctx$0;(exports["drop_ctx"]=$targ$17);$targ$18=expr_mac$0;(exports["expr_mac"]=$targ$18);$targ$19=expr_mac2$0;(exports["expr_mac2"]=$targ$19);$targ$20=ctx_mac$0;(exports["ctx_mac"]=$targ$20);$targ$21=value_mac$0;(exports["value_mac"]=$targ$21);$targ$22=overridable$0;(exports["overridable"]=$targ$22);$targ$23=protected_value$0;(exports["protected_value"]=$targ$23);$targ$24=var_operator$0;(exports["var_operator"]=$targ$24);$targ$25=accum_flags$0;(exports["accum_flags"]=$targ$25);$targ$26=build_loop$0;(exports["build_loop"]=$targ$26);$targ$27=partial_pattern$0;(exports["partial_pattern"]=$targ$27);$targ$28=make_assigner$0;(exports["make_assigner"]=$targ$28);$targ$29=pattern_handlers$0;(exports["pattern_handlers"]=$targ$29);$targ$30=Body$0;(exports["Body"]=$targ$30);$targ$31=named_statement_matcher$0;(exports["named_statement_matcher"]=$targ$31);$targ$32=grab_statements$0;(exports["grab_statements"]=$targ$32);$targ$33=flatmacro$0;(exports["flatmacro"]=$targ$33);$targ$34=AssignmentHandler$0;(exports["AssignmentHandler"]=$targ$34);$targ$35=qq$0;(exports["qq"]=$targ$35);$targ$36=multimacro$0;(exports["multimacro"]=$targ$36);$targ$37=inject__minus__tools$0;(exports["injectTools"]=$targ$37);(void 0);
//# sourceMappingURL=helpers.js.map

