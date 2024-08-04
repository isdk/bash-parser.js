
// deno-lint-ignore-file
/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,9],$V1=[1,28],$V2=[1,6],$V3=[1,29],$V4=[1,34],$V5=[1,30],$V6=[1,26],$V7=[1,31],$V8=[1,32],$V9=[1,33],$Va=[1,27],$Vb=[1,25],$Vc=[1,36],$Vd=[1,38],$Ve=[1,39],$Vf=[1,40],$Vg=[1,41],$Vh=[1,42],$Vi=[1,43],$Vj=[1,44],$Vk=[1,45],$Vl=[1,46],$Vm=[1,5],$Vn=[6,31,84],$Vo=[1,50],$Vp=[1,51],$Vq=[6,13,27,29,31,32,39,41,42,44,49,50,51,53,54,55,56,57,60,61,62,63,69,71,73,75,76,77,78,79,80,81,83],$Vr=[6,9,11,29,31,44,49,51,53,54,55,61,62,63,84],$Vs=[1,52],$Vt=[6,9,11,15,29,31,44,49,51,53,54,55,61,62,63,84],$Vu=[1,62],$Vv=[6,9,11,15,29,31,44,49,51,53,54,55,61,62,63,71,73,75,76,77,78,79,80,81,83,84],$Vw=[6,9,11,15,29,31,42,44,49,51,53,54,55,61,62,63,69,71,73,75,76,77,78,79,80,81,83,84],$Vx=[6,9,11,15,29,31,42,44,49,51,53,54,55,61,62,63,71,73,75,76,77,78,79,80,81,83,84],$Vy=[1,66],$Vz=[1,78],$VA=[1,86],$VB=[13,27,32,39,41,42,50,56,57,60,69,71,73,75,76,77,78,79,80,81,83],$VC=[2,102],$VD=[1,93],$VE=[1,99],$VF=[29,44,49,51,53,54,55,61,62,63],$VG=[29,31,44,49,51,53,54,55,61,62,63,84],$VH=[1,112],$VI=[2,101],$VJ=[29,31,44,49,51,53,54,55,61,62,63],$VK=[2,37],$VL=[31,42,84],$VM=[27,42,44],$VN=[1,140],$VO=[1,141],$VP=[1,151],$VQ=[1,152],$VR=[1,161],$VS=[15,29],$VT=[44,49],$VU=[1,166];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"complete_command":3,"list":4,"separator":5,"EOF":6,"and_or":7,"pipeline":8,"AND_IF":9,"linebreak":10,"OR_IF":11,"pipe_sequence":12,"Bang":13,"command":14,"PIPE":15,"simple_command":16,"compound_command":17,"redirect_list":18,"function_definition":19,"brace_group":20,"subshell":21,"for_clause":22,"case_clause":23,"if_clause":24,"while_clause":25,"until_clause":26,"OPEN_PAREN":27,"compound_list":28,"CLOSE_PAREN":29,"term":30,"NEWLINE_LIST":31,"For":32,"name":33,"do_group":34,"LINEBREAK_IN":35,"In":36,"in":37,"wordlist":38,"NAME":39,"wordlist_repetition_plus0":40,"Case":41,"WORD":42,"case_list":43,"Esac":44,"case_list_ns":45,"case_item_ns":46,"case_item":47,"pattern":48,"DSEMI":49,"If":50,"Then":51,"else_part":52,"Fi":53,"Elif":54,"Else":55,"While":56,"Until":57,"fname":58,"function_body":59,"Lbrace":60,"Rbrace":61,"Do":62,"Done":63,"cmd_prefix":64,"cmd_word":65,"cmd_suffix":66,"cmd_name":67,"io_redirect":68,"ASSIGNMENT_WORD":69,"io_file":70,"IO_NUMBER":71,"io_here":72,"LESS":73,"filename":74,"LESSAND":75,"GREAT":76,"GREATAND":77,"DGREAT":78,"LESSGREAT":79,"CLOBBER":80,"DLESS":81,"here_end":82,"DLESSDASH":83,"SEPARATOR_OP":84,"$accept":0,"$end":1},
terminals_: {2:"error",6:"EOF",9:"AND_IF",11:"OR_IF",13:"Bang",15:"PIPE",27:"OPEN_PAREN",29:"CLOSE_PAREN",31:"NEWLINE_LIST",32:"For",35:"LINEBREAK_IN",36:"In",39:"NAME",41:"Case",42:"WORD",44:"Esac",49:"DSEMI",50:"If",51:"Then",53:"Fi",54:"Elif",55:"Else",56:"While",57:"Until",60:"Lbrace",61:"Rbrace",62:"Do",63:"Done",69:"ASSIGNMENT_WORD",71:"IO_NUMBER",73:"LESS",75:"LESSAND",76:"GREAT",77:"GREATAND",78:"DGREAT",79:"LESSGREAT",80:"CLOBBER",81:"DLESS",83:"DLESSDASH",84:"SEPARATOR_OP"},
productions_: [0,[3,3],[3,2],[3,3],[3,4],[4,3],[4,1],[7,1],[7,4],[7,4],[8,1],[8,2],[12,1],[12,4],[14,1],[14,1],[14,2],[14,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[21,3],[28,1],[28,2],[28,2],[28,3],[30,3],[30,1],[22,4],[22,5],[22,5],[22,6],[33,1],[37,1],[38,1],[23,7],[23,7],[23,6],[45,2],[45,1],[43,2],[43,1],[46,3],[46,4],[46,4],[46,5],[47,5],[47,5],[47,6],[47,6],[48,1],[48,3],[24,6],[24,5],[52,4],[52,5],[52,2],[25,3],[26,3],[19,5],[59,1],[59,2],[58,1],[20,3],[34,3],[16,3],[16,2],[16,1],[16,2],[16,1],[67,1],[65,1],[64,1],[64,2],[64,1],[64,2],[66,1],[66,2],[66,1],[66,2],[18,1],[18,2],[68,1],[68,2],[68,1],[68,2],[70,2],[70,2],[70,2],[70,2],[70,2],[70,2],[70,2],[74,1],[72,2],[72,2],[82,1],[10,1],[10,0],[5,1],[5,1],[40,1],[40,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return yy.checkAsync($$[$0-2], $$[$0-1])
break;
case 2: case 3:
 return $$[$0-1] 
break;
case 4:
 return yy.checkAsync($$[$0-2], $$[$0-3])
break;
case 5:
this.$ = yy.listAppend($$[$0-2], $$[$0], $$[$0-1]);
break;
case 6:
this.$ = yy.list($$[$0]);
break;
case 7: case 26: case 27: case 86:
this.$ = $$[$0];
break;
case 8:
this.$ = yy.andAndOr($$[$0-3], $$[$0]);
break;
case 9:
this.$ = yy.orAndOr($$[$0-3], $$[$0]);
break;
case 10:
this.$ = yy.pipeLine($$[$0]);
break;
case 11:
this.$ = yy.bangPipeLine($$[$0]);
break;
case 12:
this.$ = yy.pipeSequence($$[$0]);
break;
case 13:
this.$ = yy.pipeSequenceAppend($$[$0-3], $$[$0]);
break;
case 16:
this.$ = yy.addRedirections($$[$0-1], $$[$0])
break;
case 25:
this.$ = yy.subshell($$[$0-1], $$[$0-2].loc, $$[$0].loc);
break;
case 28: case 29:
this.$ = yy.checkAsync($$[$0-1], $$[$0]);
break;
case 30:
this.$ = yy.termAppend($$[$0-2], $$[$0], $$[$0-1]);
break;
case 31:
this.$ = yy.term($$[$0]);
break;
case 32:
this.$ = yy.forClauseDefault($$[$0-2], $$[$0], $$[$0-3].loc);
break;
case 33: case 34:
this.$ = yy.forClauseDefault($$[$0-3], $$[$0], $$[$0-4].loc);
break;
case 35:
this.$ = yy.forClause($$[$0-4], $$[$0-2], $$[$0], $$[$0-5].loc);
break;
case 39: case 40:
this.$ = yy.caseClause($$[$0-5], $$[$0-1], $$[$0-6].loc, $$[$0].loc);
break;
case 41:
this.$ = yy.caseClause($$[$0-4], null, $$[$0-5].loc, $$[$0].loc);
break;
case 42: case 44:
this.$ = yy.caseListAppend($$[$0-1], $$[$0]);
break;
case 43: case 45:
this.$ = yy.caseList($$[$0]);
break;
case 46:
this.$ = yy.caseItem($$[$0-2], null, $$[$0-2][0].loc, $$[$0-1].loc);
break;
case 47:
this.$ = yy.caseItem($$[$0-3], $$[$0-1], $$[$0-3][0].loc, $$[$0-1].loc);
break;
case 48:
this.$ = yy.caseItem($$[$0-2], null, $$[$0-3].loc, $$[$0-1].loc );
break;
case 49:
this.$ = yy.caseItem($$[$0-3], $$[$0-1], $$[$0-4].loc, $$[$0-1].loc);
break;
case 50:
this.$ = yy.caseItem($$[$0-4], null, $$[$0-4][0].loc, $$[$0-1].loc);
break;
case 51:
this.$ = yy.caseItem($$[$0-4], $$[$0-2], $$[$0-4][0].loc, $$[$0-1].loc);
break;
case 52:
this.$ = yy.caseItem($$[$0-4], null, $$[$0-5].loc, $$[$0-1].loc );
break;
case 53:
this.$ = yy.caseItem($$[$0-4], $$[$0-2], $$[$0-5].loc, $$[$0-1].loc);
break;
case 54:
this.$ = yy.pattern($$[$0]);
break;
case 55:
this.$ = yy.patternAppend($$[$0-2], $$[$0]);
break;
case 56:
this.$ = yy.ifClause($$[$0-4], $$[$0-2], $$[$0-1], $$[$0-5].loc, $$[$0].loc);
break;
case 57:
this.$ = yy.ifClause($$[$0-3], $$[$0-1], null, $$[$0-4].loc, $$[$0].loc);
break;
case 58:
this.$ = yy.ifClause($$[$0-2], $$[$0], null, $$[$0-3].loc, $$[$0].loc);
break;
case 59:
this.$ = yy.ifClause($$[$0-3], $$[$0-1], $$[$0], $$[$0-4].loc, $$[$0].loc);
break;
case 60:
this.$ = yy.elseClause($$[$0], $$[$0-1]);
break;
case 61:
this.$ = yy.while($$[$0-1], $$[$0], $$[$0-2]);
break;
case 62:
this.$ = yy.until($$[$0-1], $$[$0], $$[$0-2]);
break;
case 63:
this.$ = yy.functionDefinition($$[$0-4], $$[$0]);
break;
case 64:
this.$ = [$$[$0], null];
break;
case 65:
this.$ = [$$[$0-1], $$[$0]];
break;
case 67:
this.$ = yy.braceGroup($$[$0-1], $$[$0-2].loc, $$[$0].loc);
break;
case 68:
this.$ = yy.doGroup($$[$0-1], $$[$0-2].loc, $$[$0].loc);
break;
case 69:
this.$ =yy.command($$[$0-2], $$[$0-1], $$[$0]);
break;
case 70:
this.$ =yy.command($$[$0-1], $$[$0], null);
break;
case 71:
this.$ =yy.commandAssignment($$[$0]);
break;
case 72:
this.$ =yy.command(null, $$[$0-1], $$[$0]);
break;
case 73:
this.$ =yy.command(null, $$[$0]);
break;
case 74:
this.$ =yy.commandName(yytext) /* Apply rule 7a */;
break;
case 75:
this.$ = yytext	/* Apply rule 7B */;
break;
case 76: case 78:
this.$ = yy.prefix($$[$0]);
break;
case 77: case 79:
this.$ = yy.prefixAppend($$[$0-1], $$[$0]);
break;
case 80: case 82:
this.$ = yy.suffix($$[$0]);
break;
case 81: case 83:
this.$ = yy.suffixAppend($$[$0-1], $$[$0]);
break;
case 84: case 105:
this.$ = [$$[$0]];
break;
case 85:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 87:
this.$ = yy.numberIoRedirect($$[$0], $$[$0-1]);
break;
case 90: case 91: case 92: case 93: case 94: case 95: case 96:
this.$ =yy.ioRedirect($$[$0-1], $$[$0]);
break;
case 106:
$$[$0-1].push($$[$0]);
break;
}
},
table: [{3:1,4:2,5:3,7:4,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,31:$V2,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl,84:$Vm},{1:[3]},{5:47,6:[1,48],31:$V2,84:$Vm},{4:49,7:4,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},o($Vn,[2,6],{9:$Vo,11:$Vp}),o($Vq,[2,103]),o($Vq,[2,104]),o($Vr,[2,7]),o($Vr,[2,10],{15:$Vs}),{12:53,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},o($Vt,[2,12]),o($Vt,[2,14]),o($Vt,[2,15],{70:35,72:37,18:54,68:55,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($Vt,[2,17]),o($Vt,[2,71],{70:35,72:37,65:56,68:57,42:[1,59],69:[1,58],71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($Vt,[2,73],{70:35,72:37,66:60,68:61,42:$Vu,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($Vv,[2,18]),o($Vv,[2,19]),o($Vv,[2,20]),o($Vv,[2,21]),o($Vv,[2,22]),o($Vv,[2,23]),o($Vv,[2,24]),{27:[1,63]},o($Vw,[2,76]),o($Vw,[2,78]),o($Vx,[2,74]),{7:67,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,28:64,30:65,31:$Vy,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},{7:67,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,28:68,30:65,31:$Vy,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},{33:69,39:[1,70]},{42:[1,71]},{7:67,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,28:72,30:65,31:$Vy,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},{7:67,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,28:73,30:65,31:$Vy,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},{7:67,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,28:74,30:65,31:$Vy,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},{27:[2,66]},o($Vw,[2,86]),{70:75,72:76,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},o($Vw,[2,88]),{42:$Vz,74:77},{42:$Vz,74:79},{42:$Vz,74:80},{42:$Vz,74:81},{42:$Vz,74:82},{42:$Vz,74:83},{42:$Vz,74:84},{42:$VA,82:85},{42:$VA,82:87},{6:[1,88],7:89,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},{1:[2,2]},{5:91,6:[1,90],31:$V2,84:$Vm},o($VB,$VC,{10:92,31:$VD}),o($VB,$VC,{10:94,31:$VD}),o([27,32,39,41,42,50,56,57,60,69,71,73,75,76,77,78,79,80,81,83],$VC,{10:95,31:$VD}),o($Vr,[2,11],{15:$Vs}),o($Vt,[2,16],{70:35,72:37,68:96,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($Vv,[2,84]),o($Vt,[2,70],{70:35,72:37,68:61,66:97,42:$Vu,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($Vw,[2,77]),o($Vw,[2,79]),o($Vx,[2,75]),o($Vt,[2,72],{70:35,72:37,68:98,42:$VE,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($Vx,[2,80]),o($Vx,[2,82]),{29:[1,100]},{61:[1,101]},o($VF,[2,26],{5:102,31:$V2,84:$Vm}),{7:67,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,30:103,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},o($VG,[2,31],{9:$Vo,11:$Vp}),{29:[1,104]},{10:105,31:$VD,35:[1,106],36:[1,107],37:108,62:$VC},o([31,35,36,62],[2,36]),{10:109,31:$VD,36:$VC},{51:[1,110]},{34:111,62:$VH},{34:113,62:$VH},o($Vw,[2,87]),o($Vw,[2,89]),o($Vw,[2,90]),o($Vw,[2,97]),o($Vw,[2,91]),o($Vw,[2,92]),o($Vw,[2,93]),o($Vw,[2,94]),o($Vw,[2,95]),o($Vw,[2,96]),o($Vw,[2,98]),o($Vw,[2,100]),o($Vw,[2,99]),{1:[2,1]},o($Vn,[2,5],{9:$Vo,11:$Vp}),{1:[2,3]},{6:[1,114],7:89,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},{8:115,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},o([13,27,32,36,39,41,42,44,50,56,57,60,62,69,71,73,75,76,77,78,79,80,81,83],$VI),{8:116,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},{14:117,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},o($Vv,[2,85]),o($Vt,[2,69],{70:35,72:37,68:98,42:$VE,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($Vx,[2,81]),o($Vx,[2,83]),o([27,32,41,50,56,57,60],$VC,{10:118,31:$VD}),o($Vv,[2,67]),o($VJ,[2,28],{8:7,12:8,14:10,16:11,17:12,19:13,64:14,67:15,20:16,21:17,22:18,23:19,24:20,25:21,26:22,58:23,68:24,70:35,72:37,7:119,13:$V0,27:$V1,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,60:$Va,69:$Vb,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($VF,[2,27],{5:120,31:$V2,84:$Vm}),o($Vv,[2,25]),{34:121,62:$VH},{5:122,31:$V2,84:$Vm},{5:123,31:$V2,42:$VK,84:$Vm},{38:124,40:125,42:[1,126]},{36:[1,128],37:127},{7:67,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,28:129,30:65,31:$Vy,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},o($Vv,[2,61]),{7:67,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,28:130,30:65,31:$Vy,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},o($Vv,[2,62]),{1:[2,4]},o($Vr,[2,8]),o($Vr,[2,9]),o($Vt,[2,13]),{17:132,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,32:$V3,41:$V5,50:$V7,56:$V8,57:$V9,59:131,60:$Va},o($VG,[2,30],{9:$Vo,11:$Vp}),o($VJ,[2,29],{8:7,12:8,14:10,16:11,17:12,19:13,64:14,67:15,20:16,21:17,22:18,23:19,24:20,25:21,26:22,58:23,68:24,70:35,72:37,7:119,13:$V0,27:$V1,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,60:$Va,69:$Vb,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($Vv,[2,32]),{34:133,62:$VH},{34:134,62:$VH},{5:135,31:$V2,84:$Vm},o([31,84],[2,38],{42:[1,136]}),o($VL,[2,105]),o($VM,$VC,{10:137,31:$VD}),o([27,31,42,44],$VK),{52:138,53:[1,139],54:$VN,55:$VO},{63:[1,142]},o($Vt,[2,63]),o($Vt,[2,64],{70:35,72:37,68:55,18:143,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($Vv,[2,33]),o($Vv,[2,34]),{34:144,62:$VH},o($VL,[2,106]),{27:$VP,42:$VQ,43:145,44:[1,147],45:146,46:149,47:148,48:150},{53:[1,153]},o($Vv,[2,57]),{7:67,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,28:154,30:65,31:$Vy,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},{7:67,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,28:155,30:65,31:$Vy,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},o($Vv,[2,68]),o($Vt,[2,65],{70:35,72:37,68:96,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($Vv,[2,35]),{27:$VP,42:$VQ,44:[1,156],46:158,47:157,48:150},{44:[1,159]},o($Vv,[2,41]),o($VM,[2,45]),{44:[2,43]},{15:$VR,29:[1,160]},{42:$VQ,48:162},o($VS,[2,54]),o($Vv,[2,56]),{51:[1,163]},{53:[2,60]},o($Vv,[2,39]),o($VM,[2,44]),{44:[2,42]},o($Vv,[2,40]),o($VT,$VC,{8:7,12:8,14:10,16:11,17:12,19:13,64:14,67:15,20:16,21:17,22:18,23:19,24:20,25:21,26:22,58:23,68:24,70:35,72:37,30:65,7:67,10:164,28:165,13:$V0,27:$V1,31:$VU,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,60:$Va,69:$Vb,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),{42:[1,167]},{15:$VR,29:[1,168]},{7:67,8:7,12:8,13:$V0,14:10,16:11,17:12,19:13,20:16,21:17,22:18,23:19,24:20,25:21,26:22,27:$V1,28:169,30:65,31:$Vy,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,58:23,60:$Va,64:14,67:15,68:24,69:$Vb,70:35,71:$Vc,72:37,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl},{44:[2,46],49:[1,170]},{10:172,31:$VD,44:$VC,49:[1,171]},o($VT,$VI,{8:7,12:8,14:10,16:11,17:12,19:13,64:14,67:15,20:16,21:17,22:18,23:19,24:20,25:21,26:22,58:23,68:24,70:35,72:37,7:67,30:103,13:$V0,27:$V1,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,60:$Va,69:$Vb,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),o($VS,[2,55]),o($VT,$VC,{8:7,12:8,14:10,16:11,17:12,19:13,64:14,67:15,20:16,21:17,22:18,23:19,24:20,25:21,26:22,58:23,68:24,70:35,72:37,30:65,7:67,10:173,28:174,13:$V0,27:$V1,31:$VU,32:$V3,39:$V4,41:$V5,42:$V6,50:$V7,56:$V8,57:$V9,60:$Va,69:$Vb,71:$Vc,73:$Vd,75:$Ve,76:$Vf,77:$Vg,78:$Vh,79:$Vi,80:$Vj,81:$Vk,83:$Vl}),{52:175,53:[2,58],54:$VN,55:$VO},o($VM,$VC,{10:176,31:$VD}),o($VM,$VC,{10:177,31:$VD}),{44:[2,47]},{44:[2,48],49:[1,178]},{10:180,31:$VD,44:$VC,49:[1,179]},{53:[2,59]},o($VM,[2,50]),o($VM,[2,51]),o($VM,$VC,{10:181,31:$VD}),o($VM,$VC,{10:182,31:$VD}),{44:[2,49]},o($VM,[2,52]),o($VM,[2,53])],
defaultActions: {34:[2,66],48:[2,2],88:[2,1],90:[2,3],114:[2,4],149:[2,43],155:[2,60],158:[2,42],172:[2,47],175:[2,59],180:[2,49]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
// ESM export
export {parser};
export const Parser = parser.Parser;
export const parse = function () { return parser.parse.apply(parser, arguments); };
