
'use strict';require('earlgrey-runtime/6');let $targ$1;let $targ$0;let $0$0;let expr_mac$0;let expr_mac2$0;let AssignmentHandler$0;$0$0=require("./helpers");expr_mac$0=getProperty($0$0,"expr_mac","./helpers");expr_mac2$0=getProperty($0$0,"expr_mac2","./helpers");AssignmentHandler$0=getProperty($0$0,"AssignmentHandler","./helpers");if((typeof(module)==="undefined")){$targ$1=undefined;(global["module"]=$targ$1);(void 0);}$targ$0=(function(mac$0){let t0$3;let t0$7;let t0$13;let t0$20;let t0$21;let t0$28;let $targ$2;let yield_mac$0;let $targ$3;let await_mac$0;let $targ$4;let gen_mac$0;let $targ$5;let async_mac$0;let $targ$6;let eager_await_mac$0;let $targ$7;let eager_async_mac$0;let exports$0;exports$0=({});$targ$2=(function(ph$0$0,temp$0$0,form$0,arg$0){let x$0;let subp$0;let w$0;let t0$0;let t0$1;let arg$2;let arg$1;let t0$2;let t1$0;let t2$0;let m$0$0;let otherwise$0;let bridge$$5750$0;if(((x$0=ph$0$0),((x$0 instanceof Array)&&(x$0[0]==="pattern")))){if(equal(arg$0,["void"])){subp$0=null;}else{subp$0=arg$0;}w$0=(function w(ph$1){return ["send",["symbol","yield"],ph$1];});return ["special",AssignmentHandler$0(subp$0,w$0)];}else{bridge$$5750$0=ph$0$0;if(((Array.isArray(bridge$$5750$0)&&((t0$0=bridge$$5750$0.length),((t0$0===2)&&((bridge$$5750$0[0]==="expr")&&(bridge$$5750$0[1]==="expr")))))||(Array.isArray(bridge$$5750$0)&&((t0$1=bridge$$5750$0.length),((t0$1===2)&&((bridge$$5750$0[0]==="expr")&&(bridge$$5750$0[1]==="head"))))))){m$0$0=arg$0;if((Array.isArray(m$0$0)&&((t0$2=m$0$0.length),((t0$2===3)&&((m$0$0[0]==="send")&&((t1$0=m$0$0[1]),(Array.isArray(t1$0)&&((t2$0=t1$0.length),((t2$0===2)&&((t1$0[0]==="symbol")&&(t1$0[1]==="all"))))))))))){arg$1=m$0$0[2];return ["js_yield",arg$1,["value",true]];}else{arg$2=m$0$0;return ["js_yield",arg$2,["value",false]];}}else{otherwise$0=ph$0$0;return ["nostep",form$0];}}});t0$3=getProjector(mac$0("yield"))($targ$2);if(t0$3[0]){yield_mac$0=t0$3[1];}else{___match_error($targ$2,"mac{\"yield\"}! yield_mac{match, _, form, arg}");}$targ$3=(function(ph$2$0,temp$1$0,form$1,arg$3){let x$1;let subp$1;let w$1;let t0$4;let t0$5;let arg$6;let arg$5;let arg$4;let $$5891$0;let $$5892$0;let $$5893$0;let $$5894$0;let $$5895$0;let $$5896$0;let $$5897$0;let $$5898$0;let $$5899$0;let t0$6;let t1$1;let t2$1;let m$1$0;let otherwise$1;let bridge$$5840$0;if(((x$1=ph$2$0),((x$1 instanceof Array)&&(x$1[0]==="pattern")))){if(equal(arg$3,["void"])){subp$1=null;}else{subp$1=arg$3;}w$1=(function w(ph$3){return ["send",["symbol","await"],ph$3];});return ["special",AssignmentHandler$0(subp$1,w$1)];}else{bridge$$5840$0=ph$2$0;if(((Array.isArray(bridge$$5840$0)&&((t0$4=bridge$$5840$0.length),((t0$4===2)&&((bridge$$5840$0[0]==="expr")&&(bridge$$5840$0[1]==="expr")))))||(Array.isArray(bridge$$5840$0)&&((t0$5=bridge$$5840$0.length),((t0$5===2)&&((bridge$$5840$0[0]==="expr")&&(bridge$$5840$0[1]==="head"))))))){m$1$0=arg$3;if((($$5891$0=Array.isArray(m$1$0))&&((t0$6=m$1$0.length),(($$5893$0=(t0$6===3))&&(($$5894$0=(m$1$0[0]==="send"))&&((t1$1=m$1$0[1]),(($$5896$0=Array.isArray(t1$1))&&((t2$1=t1$1.length),(($$5898$0=(t2$1===2))&&(($$5899$0=(t1$1[0]==="symbol"))&&(t1$1[1]==="all"))))))))))){arg$4=m$1$0[2];return ["js_yield",["send",["send",["symbol","Promise"],["send",["symbol","."],["data",["void"],["symbol","all"]]]],["data",arg$4]],["value",false]];}else{if(($$5899$0&&(t1$1[1]==="any"))){arg$5=m$1$0[2];return ["js_yield",["send",["send",["symbol","Promise"],["send",["symbol","."],["data",["void"],["symbol","race"]]]],["data",arg$5]],["value",false]];}else{arg$6=m$1$0;return ["js_yield",arg$6,["value",false]];}}}else{otherwise$1=ph$2$0;return ["nostep",form$1];}}});t0$7=getProjector(mac$0("await"))($targ$3);if(t0$7[0]){await_mac$0=t0$7[1];}else{___match_error($targ$3,"mac{\"await\"}! await_mac{match, _, form, arg}");}$targ$4=(function(ph$4$0,info$0,form$2,expr$0){let x$2;let mac$1;let t0$11;let t1$5;let t2$5;let t3$3;let t4$2;let t5$2;let t6$1;let t0$12;let t1$6;let t2$6;let t3$4;let t4$3;let arg$10;let pre$1;let body$3;let post$1;let arg$9;let body$2;let bridge$$5945$0;let t0$10;let t1$4;let t2$4;let t3$2;let t4$1;let t5$1;let t6$0;let t7$0;let ph$5$0;if(equal(expr$0,["void"])){return ["nostep",form$2];}else{if(((x$2=ph$4$0),((x$2 instanceof Array)&&(x$2[0]==="pattern")))){mac$1=(function mac(){let arg$8;let pre$0;let body$1;let post$0;let arg$7;let body$0;let env$0;let x$3;let $$5974$0;let $$5975$0;let $$5976$0;let $$5977$0;let $$5978$0;let $$5979$0;let $$5980$0;let $$5981$0;let $$5982$0;let t0$9;let t1$3;let t2$3;let t3$1;let t4$0;let t5$0;let e$0;let ph$7$0;let blah$0;let t0$8;let t1$2;let t2$2;let t3$0;let m$2$0;m$2$0=arguments;t0$8=m$2$0.length;if(((t0$8>=1)&&((blah$0=Array.prototype.slice.call(m$2$0,0,-1)),(t1$2=m$2$0[(t0$8-1)]),(Array.isArray(t1$2)&&((t2$2=t1$2.length),((t2$2===2)&&(t1$2[0]==="data"))))))){t3$0=t1$2[1];e$0=t3$0;ph$7$0=t3$0;t0$9=ph$7$0;t1$3=t0$9.length;if((($$5976$0=(t1$3===3))&&(t0$9[0]==="use"))){env$0=t0$9[1];x$3=t0$9[2];return ["use",env$0,mac$1.call(this,["data",x$3])];}else{if(($$5976$0&&(($$5977$0=(t0$9[0]==="send"))&&((t2$3=t0$9[1]),(($$5979$0=Array.isArray(t2$3))&&((t3$1=t2$3.length),(($$5981$0=(t3$1===2))&&(($$5982$0=(t2$3[0]==="symbol"))&&((t2$3[1]==="->")&&((t4$0=t0$9[2]),(Array.isArray(t4$0)&&((t5$0=t4$0.length),((t5$0===3)&&(t4$0[0]==="data")))))))))))))){arg$7=t4$0[1];body$0=t4$0[2];return ["send",["symbol","*->"],["data",arg$7,body$0]];}else{if(($$5982$0&&((t2$3[1]==="_lambda")&&((t4$0=t0$9[2]),(Array.isArray(t4$0)&&((t5$0=t4$0.length),((t5$0===6)&&(t4$0[0]==="data")))))))){arg$8=t4$0[1];pre$0=t4$0[2];body$1=t4$0[3];post$0=t4$0[4];t4$0[5];return ["send",["symbol","_lambda"],["data",arg$8,pre$0,body$1,post$0,["value",true]]];}else{throw ErrorFactory(["syntax","gen"]).create("gen must decorate a function",({"node":e$0}));}}}}else{return ___match_error(m$2$0,"{*blah, #data{match e}}");}});return ["project",["macro",mac$1],expr$0,true];}else{ph$5$0=expr$0;bridge$$5945$0=ph$5$0;if(((Array.isArray(bridge$$5945$0)&&((t0$11=bridge$$5945$0.length),((t0$11===2)&&((bridge$$5945$0[0]==="data")&&((t1$5=bridge$$5945$0[1]),(Array.isArray(t1$5)&&((t2$5=t1$5.length),((t2$5===3)&&((t1$5[0]==="send")&&((t3$3=t1$5[1]),(Array.isArray(t3$3)&&((t4$2=t3$3.length),((t4$2===2)&&((t3$3[0]==="symbol")&&((t3$3[1]==="->")&&((t5$2=t1$5[2]),(Array.isArray(t5$2)&&((t6$1=t5$2.length),((t6$1===3)&&((t5$2[0]==="data")&&((arg$9=t5$2[1]),(body$2=t5$2[2]),true)))))))))))))))))))))||(Array.isArray(bridge$$5945$0)&&((t0$12=bridge$$5945$0.length),((t0$12===3)&&((bridge$$5945$0[0]==="send")&&((t1$6=bridge$$5945$0[1]),(Array.isArray(t1$6)&&((t2$6=t1$6.length),((t2$6===2)&&((t1$6[0]==="symbol")&&((t1$6[1]==="->")&&((t3$4=bridge$$5945$0[2]),(Array.isArray(t3$4)&&((t4$3=t3$4.length),((t4$3===3)&&((t3$4[0]==="data")&&((arg$9=t3$4[1]),(body$2=t3$4[2]),true)))))))))))))))))){return ["send",["symbol","*->"],["data",arg$9,body$2]];}else{t0$10=ph$5$0;t1$4=t0$10.length;if(((t1$4===2)&&((t0$10[0]==="data")&&((t2$4=t0$10[1]),(Array.isArray(t2$4)&&((t3$2=t2$4.length),((t3$2===3)&&((t2$4[0]==="send")&&((t4$1=t2$4[1]),(Array.isArray(t4$1)&&((t5$1=t4$1.length),((t5$1===2)&&((t4$1[0]==="symbol")&&((t4$1[1]==="_lambda")&&((t6$0=t2$4[2]),(Array.isArray(t6$0)&&((t7$0=t6$0.length),((t7$0===6)&&(t6$0[0]==="data"))))))))))))))))))){arg$10=t6$0[1];pre$1=t6$0[2];body$3=t6$0[3];post$1=t6$0[4];t6$0[5];return ["send",["symbol","_lambda"],["data",arg$10,pre$1,body$3,post$1,["value",true]]];}else{throw ErrorFactory(["syntax","gen"]).create("gen must be applied on a function",({"expr":expr$0}));}}}}});t0$13=getProjector(mac$0("gen"))($targ$4);if(t0$13[0]){gen_mac$0=t0$13[1];}else{___match_error($targ$4,"mac{\"gen\"}! gen_mac{match, info, form, expr}");}$targ$5=(function(ph$8$0,info$1,form$3,expr$1){let x$4;let mac$2;let t0$17;let t1$10;let t2$10;let t3$8;let t4$6;let t5$5;let t6$3;let t0$18;let t1$11;let t2$11;let t3$9;let t4$7;let t0$19;let x$6;let arg$14;let pre$3;let body$7;let post$3;let arg$13;let body$6;let bridge$$6199$0;let t0$16;let t1$9;let t2$9;let t3$7;let t4$5;let t5$4;let t6$2;let t7$1;let bridge$$6202$0;let ph$9$0;if(equal(expr$1,["void"])){return ["nostep",form$3];}else{if(((x$4=ph$8$0),((x$4 instanceof Array)&&(x$4[0]==="pattern")))){mac$2=(function mac(){let arg$12;let pre$2;let body$5;let post$2;let arg$11;let body$4;let env$1;let x$5;let $$6229$0;let $$6230$0;let $$6231$0;let $$6232$0;let $$6233$0;let $$6234$0;let $$6235$0;let $$6236$0;let $$6237$0;let t0$15;let t1$8;let t2$8;let t3$6;let t4$4;let t5$3;let e$1;let ph$11$0;let blah$1;let t0$14;let t1$7;let t2$7;let t3$5;let m$3$0;m$3$0=arguments;t0$14=m$3$0.length;if(((t0$14>=1)&&((blah$1=Array.prototype.slice.call(m$3$0,0,-1)),(t1$7=m$3$0[(t0$14-1)]),(Array.isArray(t1$7)&&((t2$7=t1$7.length),((t2$7===2)&&(t1$7[0]==="data"))))))){t3$5=t1$7[1];e$1=t3$5;ph$11$0=t3$5;t0$15=ph$11$0;t1$8=t0$15.length;if((($$6231$0=(t1$8===3))&&(t0$15[0]==="use"))){env$1=t0$15[1];x$5=t0$15[2];return ["use",env$1,mac$2.call(this,["data",x$5])];}else{if(($$6231$0&&(($$6232$0=(t0$15[0]==="send"))&&((t2$8=t0$15[1]),(($$6234$0=Array.isArray(t2$8))&&((t3$6=t2$8.length),(($$6236$0=(t3$6===2))&&(($$6237$0=(t2$8[0]==="symbol"))&&((t2$8[1]==="->")&&((t4$4=t0$15[2]),(Array.isArray(t4$4)&&((t5$3=t4$4.length),((t5$3===3)&&(t4$4[0]==="data")))))))))))))){arg$11=t4$4[1];body$4=t4$4[2];return ["send",["symbol","->"],["data",arg$11,["send",["send",["symbol","spawn"],["send",["symbol","."],["data",["void"],["symbol","call"]]]],["data",["symbol","this"],["send",["symbol","*->"],["data",["data"],body$4]]]]]];}else{if(($$6237$0&&((t2$8[1]==="_lambda")&&((t4$4=t0$15[2]),(Array.isArray(t4$4)&&((t5$3=t4$4.length),((t5$3===6)&&(t4$4[0]==="data")))))))){arg$12=t4$4[1];pre$2=t4$4[2];body$5=t4$4[3];post$2=t4$4[4];t4$4[5];return ["send",["symbol","_lambda"],["data",arg$12,pre$2,["send",["send",["symbol","spawn"],["send",["symbol","."],["data",["void"],["symbol","call"]]]],["data",["symbol","this"],["send",["symbol","*->"],["data",["data"],body$5]]]],post$2,["value",false]]];}else{throw ErrorFactory(["syntax","async"]).create("async must decorate a function",({"node":e$1}));}}}}else{return ___match_error(m$3$0,"{*blah, #data{match e}}");}});return ["project",["macro",mac$2],expr$1,true];}else{ph$9$0=expr$1;bridge$$6199$0=ph$9$0;if(((Array.isArray(bridge$$6199$0)&&((t0$17=bridge$$6199$0.length),((t0$17===2)&&((bridge$$6199$0[0]==="data")&&((t1$10=bridge$$6199$0[1]),(Array.isArray(t1$10)&&((t2$10=t1$10.length),((t2$10===3)&&((t1$10[0]==="send")&&((t3$8=t1$10[1]),(Array.isArray(t3$8)&&((t4$6=t3$8.length),((t4$6===2)&&((t3$8[0]==="symbol")&&((t3$8[1]==="->")&&((t5$5=t1$10[2]),(Array.isArray(t5$5)&&((t6$3=t5$5.length),((t6$3===3)&&((t5$5[0]==="data")&&((arg$13=t5$5[1]),(body$6=t5$5[2]),true)))))))))))))))))))))||(Array.isArray(bridge$$6199$0)&&((t0$18=bridge$$6199$0.length),((t0$18===3)&&((bridge$$6199$0[0]==="send")&&((t1$11=bridge$$6199$0[1]),(Array.isArray(t1$11)&&((t2$11=t1$11.length),((t2$11===2)&&((t1$11[0]==="symbol")&&((t1$11[1]==="->")&&((t3$9=bridge$$6199$0[2]),(Array.isArray(t3$9)&&((t4$7=t3$9.length),((t4$7===3)&&((t3$9[0]==="data")&&((arg$13=t3$9[1]),(body$6=t3$9[2]),true)))))))))))))))))){return ["send",["symbol","->"],["data",arg$13,["send",["send",["symbol","spawn"],["send",["symbol","."],["data",["void"],["symbol","call"]]]],["data",["symbol","this"],["send",["symbol","*->"],["data",["data"],body$6]]]]]];}else{t0$16=ph$9$0;t1$9=t0$16.length;if(((t1$9===2)&&((t0$16[0]==="data")&&((t2$9=t0$16[1]),(Array.isArray(t2$9)&&((t3$7=t2$9.length),((t3$7===3)&&((t2$9[0]==="send")&&((t4$5=t2$9[1]),(Array.isArray(t4$5)&&((t5$4=t4$5.length),((t5$4===2)&&((t4$5[0]==="symbol")&&((t4$5[1]==="_lambda")&&((t6$2=t2$9[2]),(Array.isArray(t6$2)&&((t7$1=t6$2.length),((t7$1===6)&&(t6$2[0]==="data"))))))))))))))))))){arg$14=t6$2[1];pre$3=t6$2[2];body$7=t6$2[3];post$3=t6$2[4];t6$2[5];return ["send",["symbol","_lambda"],["data",arg$14,pre$3,["send",["send",["symbol","spawn"],["send",["symbol","."],["data",["void"],["symbol","call"]]]],["data",["symbol","this"],["send",["symbol","*->"],["data",["data"],body$7]]]],post$3,["value",false]]];}else{bridge$$6202$0=ph$9$0;if(((Array.isArray(bridge$$6202$0)&&((t0$19=bridge$$6202$0.length),((t0$19===2)&&((bridge$$6202$0[0]==="data")&&((x$6=bridge$$6202$0[1]),true)))))||((x$6=bridge$$6202$0),true))){return ["send",["send",["symbol","spawn"],["send",["symbol","."],["data",["void"],["symbol","call"]]]],["data",["symbol","this"],["send",["symbol","*->"],["data",["data"],["multi",["send",["symbol","try"],["data",["send",["symbol","await"],x$6]]],["send",["symbol","catch"],["data",["symbol","e"],["send",["send",["symbol","console"],["send",["symbol","."],["data",["void"],["symbol","error"]]]],["data",["send",["symbol","e"],["send",["symbol","."],["data",["void"],["symbol","stack"]]]]]]]]]]]]];}else{return ___match_error(ph$9$0,"`{^x}` or x");}}}}}});t0$20=getProjector(mac$0("async"))($targ$5);if(t0$20[0]){async_mac$0=t0$20[1];}else{___match_error($targ$5,"mac{\"async\"}! async_mac{match, info, form, expr}");}$targ$6=(function(ctx$0,temp$2$0,form$4,expr$2){return ["send",["symbol","match"],["data",expr$2,["multi",["send",["symbol","->"],["data",["send",["symbol","?"],["data",["symbol","Promise"],["symbol","p"]]],["send",["symbol","await"],["symbol","p"]]]],["send",["symbol","->"],["data",["symbol","x"],["symbol","x"]]]]]];});t0$21=getProjector(mac$0("eager-await"))($targ$6);if(t0$21[0]){eager_await_mac$0=t0$21[1];}else{___match_error($targ$6,"mac{\"eager-await\"}! eager_await_mac{ctx, _, form, expr}");}$targ$7=(function(ph$12$0,info$2,form$5,expr$3){let x$7;let mac$3;let t0$25;let t1$15;let t2$15;let t3$13;let t4$10;let t5$8;let t6$5;let t0$26;let t1$16;let t2$16;let t3$14;let t4$11;let t0$27;let x$9;let arg$18;let pre$5;let body$12;let post$5;let arg$17;let body$11;let bridge$$6483$0;let t0$24;let t1$14;let t2$14;let t3$12;let t4$9;let t5$7;let t6$4;let t7$2;let bridge$$6486$0;let ph$13$0;let aw$0;let wrap$0;aw$0=info$2.mark(["symbol","await"]);wrap$0=(function wrap(body$8){return ["multi",["send",["symbol","inline-macro"],["data",["send",aw$0,["data",["symbol","expr"]]],["send",["symbol","`"],["value","eager-await ^expr"]]]],body$8];});if(equal(expr$3,["void"])){return ["nostep",form$5];}else{if(((x$7=ph$12$0),((x$7 instanceof Array)&&(x$7[0]==="pattern")))){mac$3=(function mac(){let arg$16;let pre$4;let body$10;let post$4;let arg$15;let body$9;let env$2;let x$8;let $$6525$0;let $$6526$0;let $$6527$0;let $$6528$0;let $$6529$0;let $$6530$0;let $$6531$0;let $$6532$0;let $$6533$0;let t0$23;let t1$13;let t2$13;let t3$11;let t4$8;let t5$6;let e$2;let ph$15$0;let blah$2;let t0$22;let t1$12;let t2$12;let t3$10;let m$4$0;m$4$0=arguments;t0$22=m$4$0.length;if(((t0$22>=1)&&((blah$2=Array.prototype.slice.call(m$4$0,0,-1)),(t1$12=m$4$0[(t0$22-1)]),(Array.isArray(t1$12)&&((t2$12=t1$12.length),((t2$12===2)&&(t1$12[0]==="data"))))))){t3$10=t1$12[1];e$2=t3$10;ph$15$0=t3$10;t0$23=ph$15$0;t1$13=t0$23.length;if((($$6527$0=(t1$13===3))&&(t0$23[0]==="use"))){env$2=t0$23[1];x$8=t0$23[2];return ["use",env$2,mac$3.call(this,["data",x$8])];}else{if(($$6527$0&&(($$6528$0=(t0$23[0]==="send"))&&((t2$13=t0$23[1]),(($$6530$0=Array.isArray(t2$13))&&((t3$11=t2$13.length),(($$6532$0=(t3$11===2))&&(($$6533$0=(t2$13[0]==="symbol"))&&((t2$13[1]==="->")&&((t4$8=t0$23[2]),(Array.isArray(t4$8)&&((t5$6=t4$8.length),((t5$6===3)&&(t4$8[0]==="data")))))))))))))){arg$15=t4$8[1];body$9=t4$8[2];return ["send",["symbol","->"],["data",arg$15,["send",["send",["symbol","spawn"],["send",["symbol","."],["data",["void"],["symbol","call"]]]],["data",["symbol","this"],["send",["symbol","*->"],["data",["data"],wrap$0(body$9)]],["symbol","true"]]]]];}else{if(($$6533$0&&((t2$13[1]==="_lambda")&&((t4$8=t0$23[2]),(Array.isArray(t4$8)&&((t5$6=t4$8.length),((t5$6===6)&&(t4$8[0]==="data")))))))){arg$16=t4$8[1];pre$4=t4$8[2];body$10=t4$8[3];post$4=t4$8[4];t4$8[5];return ["send",["symbol","_lambda"],["data",arg$16,pre$4,["send",["send",["symbol","spawn"],["send",["symbol","."],["data",["void"],["symbol","call"]]]],["data",["symbol","this"],["send",["symbol","*->"],["data",["data"],wrap$0(body$10)]],["symbol","true"]]],post$4,["value",false]]];}else{throw ErrorFactory(["syntax","async"]).create("async must decorate a function",({"node":e$2}));}}}}else{return ___match_error(m$4$0,"{*blah, #data{match e}}");}});return ["project",["macro",mac$3],expr$3,true];}else{ph$13$0=expr$3;bridge$$6483$0=ph$13$0;if(((Array.isArray(bridge$$6483$0)&&((t0$25=bridge$$6483$0.length),((t0$25===2)&&((bridge$$6483$0[0]==="data")&&((t1$15=bridge$$6483$0[1]),(Array.isArray(t1$15)&&((t2$15=t1$15.length),((t2$15===3)&&((t1$15[0]==="send")&&((t3$13=t1$15[1]),(Array.isArray(t3$13)&&((t4$10=t3$13.length),((t4$10===2)&&((t3$13[0]==="symbol")&&((t3$13[1]==="->")&&((t5$8=t1$15[2]),(Array.isArray(t5$8)&&((t6$5=t5$8.length),((t6$5===3)&&((t5$8[0]==="data")&&((arg$17=t5$8[1]),(body$11=t5$8[2]),true)))))))))))))))))))))||(Array.isArray(bridge$$6483$0)&&((t0$26=bridge$$6483$0.length),((t0$26===3)&&((bridge$$6483$0[0]==="send")&&((t1$16=bridge$$6483$0[1]),(Array.isArray(t1$16)&&((t2$16=t1$16.length),((t2$16===2)&&((t1$16[0]==="symbol")&&((t1$16[1]==="->")&&((t3$14=bridge$$6483$0[2]),(Array.isArray(t3$14)&&((t4$11=t3$14.length),((t4$11===3)&&((t3$14[0]==="data")&&((arg$17=t3$14[1]),(body$11=t3$14[2]),true)))))))))))))))))){return ["send",["symbol","->"],["data",arg$17,["send",["send",["symbol","spawn"],["send",["symbol","."],["data",["void"],["symbol","call"]]]],["data",["symbol","this"],["send",["symbol","*->"],["data",["data"],wrap$0(body$11)]],["symbol","true"]]]]];}else{t0$24=ph$13$0;t1$14=t0$24.length;if(((t1$14===2)&&((t0$24[0]==="data")&&((t2$14=t0$24[1]),(Array.isArray(t2$14)&&((t3$12=t2$14.length),((t3$12===3)&&((t2$14[0]==="send")&&((t4$9=t2$14[1]),(Array.isArray(t4$9)&&((t5$7=t4$9.length),((t5$7===2)&&((t4$9[0]==="symbol")&&((t4$9[1]==="_lambda")&&((t6$4=t2$14[2]),(Array.isArray(t6$4)&&((t7$2=t6$4.length),((t7$2===6)&&(t6$4[0]==="data"))))))))))))))))))){arg$18=t6$4[1];pre$5=t6$4[2];body$12=t6$4[3];post$5=t6$4[4];t6$4[5];return ["send",["symbol","_lambda"],["data",arg$18,pre$5,["send",["send",["symbol","spawn"],["send",["symbol","."],["data",["void"],["symbol","call"]]]],["data",["symbol","this"],["send",["symbol","*->"],["data",["data"],wrap$0(body$12)]],["symbol","true"]]],post$5,["value",false]]];}else{bridge$$6486$0=ph$13$0;if(((Array.isArray(bridge$$6486$0)&&((t0$27=bridge$$6486$0.length),((t0$27===2)&&((bridge$$6486$0[0]==="data")&&((x$9=bridge$$6486$0[1]),true)))))||((x$9=bridge$$6486$0),true))){return ["send",["send",["symbol","spawn"],["send",["symbol","."],["data",["void"],["symbol","call"]]]],["data",["symbol","this"],["send",["symbol","*->"],["data",["data"],["multi",["send",["symbol","try"],["data",["send",["symbol","await"],x$9]]],["send",["symbol","catch"],["data",["symbol","e"],["send",["send",["symbol","console"],["send",["symbol","."],["data",["void"],["symbol","error"]]]],["data",["send",["symbol","e"],["send",["symbol","."],["data",["void"],["symbol","stack"]]]]]]]]]]],["symbol","true"]]];}else{return ___match_error(ph$13$0,"`{^x}` or x");}}}}}});t0$28=getProjector(mac$0("eager-async"))($targ$7);if(t0$28[0]){eager_async_mac$0=t0$28[1];}else{___match_error($targ$7,"mac{\"eager-async\"}! eager_async_mac{match, info, form, expr}");}return exports$0;});(module["exports"]=$targ$0);(void 0);
//# sourceMappingURL=async.js.map

