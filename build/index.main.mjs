// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Data({
    None: ctc7,
    Some: ctc7
    });
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc9;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc6],
      2: [ctc0, ctc1, ctc2, ctc3, ctc6],
      3: [ctc0, ctc1, ctc2, ctc3, ctc6],
      5: [ctc0, ctc1, ctc0, ctc6, ctc2, ctc4],
      7: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc2, ctc2, ctc6, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    Bob_checkStatus0_108: ctc8,
    Bob_drawRaffleTicket0_108: ctc9,
    Bob_subscribeToNFT0_108: ctc8,
    Bob_ticketsAvailable0_108: ctc8
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Tuple([ctc11, ctc11]);
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc11]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v1079 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1080 = [v1079];
  const v1086 = stdlib.protect(ctc5, await interact.startRaffle(), {
    at: './index.rsh:37:66:application',
    fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:17:function exp)'],
    msg: 'startRaffle',
    who: 'Alice'
    });
  const v1087 = v1086[stdlib.checkedBigNumberify('./index.rsh:37:66:application', stdlib.UInt_max, '0')];
  const v1088 = v1086[stdlib.checkedBigNumberify('./index.rsh:37:66:application', stdlib.UInt_max, '1')];
  const v1091 = stdlib.protect(ctc1, await interact.getNum(v1088), {
    at: './index.rsh:38:43:application',
    fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:17:function exp)'],
    msg: 'getNum',
    who: 'Alice'
    });
  const v1092 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:39:55:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v1093 = stdlib.digest(ctc6, [v1092, v1091]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1087, v1088, v1093],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc1, ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1096, v1097, v1098], secs: v1100, time: v1099, didSend: v38, from: v1095 } = txn1;
      
      const v1101 = v1080[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '0')];
      const v1103 = v1101[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1')];
      const v1104 = v1101[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2')];
      const v1105 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1103, v1104];
      const v1106 = stdlib.Array_set(v1080, stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '0'), v1105);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1096
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1096, v1097, v1098], secs: v1100, time: v1099, didSend: v38, from: v1095 } = txn1;
  const v1101 = v1080[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '0')];
  const v1103 = v1101[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '1')];
  const v1104 = v1101[stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '2')];
  const v1105 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1103, v1104];
  const v1106 = stdlib.Array_set(v1080, stdlib.checkedBigNumberify('./index.rsh:42:9:dot', stdlib.UInt_max, '0'), v1105);
  ;
  ;
  stdlib.protect(ctc0, await interact.displayHash(v1098), {
    at: './index.rsh:43:29:application',
    fs: ['at ./index.rsh:43:29:application call to [unknown function] (defined at: ./index.rsh:43:29:function exp)', 'at ./index.rsh:43:29:application call to "liftedInteract" (defined at: ./index.rsh:43:29:application)'],
    msg: 'displayHash',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v1095, v1096, v1097, v1098, v1106],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1099,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'), v1096]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1111, time: v1110, didSend: v49, from: v1109 } = txn2;
      
      ;
      const v1112 = v1106[stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '0')];
      const v1113 = v1112[stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '0')];
      const v1114 = stdlib.add(v1113, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
      const v1117 = v1112[stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '1')];
      const v1118 = v1112[stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '2')];
      const v1119 = [v1114, v1117, v1118];
      const v1120 = stdlib.Array_set(v1106, stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '0'), v1119);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v1096
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc1, ctc7, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1111, time: v1110, didSend: v49, from: v1109 } = txn2;
  ;
  const v1112 = v1106[stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '0')];
  const v1113 = v1112[stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '0')];
  const v1114 = stdlib.add(v1113, stdlib.checkedBigNumberify('./index.rsh:3:13:decimal', stdlib.UInt_max, '1'));
  const v1117 = v1112[stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '1')];
  const v1118 = v1112[stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '2')];
  const v1119 = [v1114, v1117, v1118];
  const v1120 = stdlib.Array_set(v1106, stdlib.checkedBigNumberify('./index.rsh:46:9:dot', stdlib.UInt_max, '0'), v1119);
  ;
  const v1121 = stdlib.addressEq(v1095, v1109);
  stdlib.assert(v1121, {
    at: './index.rsh:46:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v1095, v1096, v1097, v1098, v1120],
    evt_cnt: 0,
    funcNum: 2,
    lct: v1110,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:50:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1124, time: v1123, didSend: v54, from: v1122 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc1, ctc7, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1124, time: v1123, didSend: v54, from: v1122 } = txn3;
  ;
  const v1125 = stdlib.addressEq(v1095, v1122);
  stdlib.assert(v1125, {
    at: './index.rsh:50:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v1095, v1096, v1097, v1098, v1120, v1092, v1091],
    evt_cnt: 2,
    funcNum: 3,
    lct: v1123,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:62:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1129, v1130], secs: v1132, time: v1131, didSend: v65, from: v1128 } = txn4;
      
      ;
      const v1136 = v1095;
      const v1137 = stdlib.checkedBigNumberify('./index.rsh:66:42:decimal', stdlib.UInt_max, '0');
      const v1138 = stdlib.checkedBigNumberify('./index.rsh:66:22:decimal', stdlib.UInt_max, '0');
      const v1139 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v1140 = v1131;
      const v1146 = v1120;
      const v1147 = stdlib.checkedBigNumberify('./index.rsh:33:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1159 = stdlib.lt(v1138, v1097);
        const v1160 = stdlib.eq(v1139, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v1161 = stdlib.eq(v1139, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v1162 = v1160 ? true : v1161;
        const v1163 = v1159 ? v1162 : false;
        const v1164 = stdlib.lt(v1137, v1097);
        const v1165 = v1163 ? v1164 : false;
        
        return v1165;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1823 = stdlib.addressEq(v1136, v1095);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc1, ctc7, ctc15, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1129, v1130], secs: v1132, time: v1131, didSend: v65, from: v1128 } = txn4;
  ;
  const v1133 = stdlib.addressEq(v1095, v1128);
  stdlib.assert(v1133, {
    at: './index.rsh:62:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v1134 = stdlib.digest(ctc6, [v1129, v1130]);
  const v1135 = stdlib.digestEq(v1098, v1134);
  stdlib.assert(v1135, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:63:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v1136 = v1095;
  let v1137 = stdlib.checkedBigNumberify('./index.rsh:66:42:decimal', stdlib.UInt_max, '0');
  let v1138 = stdlib.checkedBigNumberify('./index.rsh:66:22:decimal', stdlib.UInt_max, '0');
  let v1139 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  let v1140 = v1131;
  let v1146 = v1120;
  let v1147 = stdlib.checkedBigNumberify('./index.rsh:33:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1159 = stdlib.lt(v1138, v1097);
    const v1160 = stdlib.eq(v1139, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    const v1161 = stdlib.eq(v1139, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v1162 = v1160 ? true : v1161;
    const v1163 = v1159 ? v1162 : false;
    const v1164 = stdlib.lt(v1137, v1097);
    const v1165 = v1163 ? v1164 : false;
    
    return v1165;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1264], secs: v1266, time: v1265, didSend: v794, from: v1263 } = txn5;
    switch (v1264[0]) {
      case 'Bob_checkStatus0_108': {
        const v1267 = v1264[1];
        undefined /* setApiDetails */;
        const v1272 = stdlib.addressEq(v1263, v1095);
        const v1273 = v1272 ? false : true;
        stdlib.assert(v1273, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:108:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
          msg: 'Not Alice',
          who: 'Alice'
          });
        const v1275 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1263), null);
        let v1276;
        switch (v1275[0]) {
          case 'None': {
            const v1277 = v1275[1];
            v1276 = false;
            
            break;
            }
          case 'Some': {
            const v1278 = v1275[1];
            v1276 = true;
            
            break;
            }
          }
        stdlib.assert(v1276, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
          msg: 'You have not made any draw yet!',
          who: 'Alice'
          });
        const v1280 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1263), null);
        let v1281;
        switch (v1280[0]) {
          case 'None': {
            const v1282 = v1280[1];
            v1281 = false;
            
            break;
            }
          case 'Some': {
            const v1283 = v1280[1];
            v1281 = true;
            
            break;
            }
          }
        const v1284 = v1281 ? false : true;
        stdlib.assert(v1284, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
          msg: 'You have checked your status already',
          who: 'Alice'
          });
        ;
        let v1309;
        switch (v1275[0]) {
          case 'None': {
            const v1310 = v1275[1];
            v1309 = false;
            
            break;
            }
          case 'Some': {
            const v1311 = v1275[1];
            v1309 = true;
            
            break;
            }
          }
        stdlib.assert(v1309, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:112:30:application call to [unknown function] (defined at: ./index.rsh:112:30:function exp)'],
          msg: 'You have not made any draw yet!',
          who: 'Alice'
          });
        let v1314;
        switch (v1280[0]) {
          case 'None': {
            const v1315 = v1280[1];
            v1314 = false;
            
            break;
            }
          case 'Some': {
            const v1316 = v1280[1];
            v1314 = true;
            
            break;
            }
          }
        const v1317 = v1314 ? false : true;
        stdlib.assert(v1317, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:112:30:application call to [unknown function] (defined at: ./index.rsh:112:30:function exp)'],
          msg: 'You have checked your status already',
          who: 'Alice'
          });
        const v1319 = stdlib.eq(v1139, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        if (v1319) {
          const v1320 = [false, false];
          await txn5.getOutput('Bob_checkStatus', 'v1320', ctc12, v1320);
          const cv1136 = v1136;
          const cv1137 = v1137;
          const cv1138 = v1138;
          const cv1139 = v1139;
          const cv1140 = v1265;
          const cv1146 = v1146;
          const cv1147 = v1147;
          
          v1136 = cv1136;
          v1137 = cv1137;
          v1138 = cv1138;
          v1139 = cv1139;
          v1140 = cv1140;
          v1146 = cv1146;
          v1147 = cv1147;
          
          continue;}
        else {
          await stdlib.mapSet(map1, v1263, null);
          const v1336 = [true, false];
          await txn5.getOutput('Bob_checkStatus', 'v1336', ctc12, v1336);
          const v1344 = stdlib.add(v1137, stdlib.checkedBigNumberify('./index.rsh:126:81:decimal', stdlib.UInt_max, '1'));
          const cv1136 = v1136;
          const cv1137 = v1344;
          const cv1138 = v1138;
          const cv1139 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
          const cv1140 = v1265;
          const cv1146 = v1146;
          const cv1147 = v1147;
          
          v1136 = cv1136;
          v1137 = cv1137;
          v1138 = cv1138;
          v1139 = cv1139;
          v1140 = cv1140;
          v1146 = cv1146;
          v1147 = cv1147;
          
          continue;}
        break;
        }
      case 'Bob_drawRaffleTicket0_108': {
        const v1406 = v1264[1];
        undefined /* setApiDetails */;
        const v1427 = stdlib.addressEq(v1263, v1095);
        const v1428 = v1427 ? false : true;
        stdlib.assert(v1428, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:89:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:42:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
          msg: 'Not Deployer',
          who: 'Alice'
          });
        const v1430 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1263), null);
        let v1431;
        switch (v1430[0]) {
          case 'None': {
            const v1432 = v1430[1];
            v1431 = true;
            
            break;
            }
          case 'Some': {
            const v1433 = v1430[1];
            v1431 = false;
            
            break;
            }
          }
        stdlib.assert(v1431, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:90:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:42:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
          msg: 'Already made a draw',
          who: 'Alice'
          });
        ;
        const v1491 = v1406[stdlib.checkedBigNumberify('./index.rsh:88:12:spread', stdlib.UInt_max, '0')];
        let v1496;
        switch (v1430[0]) {
          case 'None': {
            const v1497 = v1430[1];
            v1496 = true;
            
            break;
            }
          case 'Some': {
            const v1498 = v1430[1];
            v1496 = false;
            
            break;
            }
          }
        stdlib.assert(v1496, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:90:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:31:application call to [unknown function] (defined at: ./index.rsh:92:31:function exp)'],
          msg: 'Already made a draw',
          who: 'Alice'
          });
        const v1501 = null;
        await txn5.getOutput('Bob_drawRaffleTicket', 'v1501', ctc0, v1501);
        await stdlib.mapSet(map0, v1263, v1491);
        stdlib.protect(ctc0, await interact.usersDraw(v1263, v1491), {
          at: './index.rsh:97:35:application',
          fs: ['at ./index.rsh:97:35:application call to [unknown function] (defined at: ./index.rsh:97:35:function exp)', 'at ./index.rsh:97:35:application call to "liftedInteract" (defined at: ./index.rsh:97:35:application)', 'at ./index.rsh:92:31:application call to [unknown function] (defined at: ./index.rsh:92:31:function exp)'],
          msg: 'usersDraw',
          who: 'Alice'
          });
        
        const v1509 = stdlib.add(v1138, stdlib.checkedBigNumberify('./index.rsh:99:29:decimal', stdlib.UInt_max, '1'));
        const v1510 = stdlib.eq(v1509, v1097);
        if (v1510) {
          const cv1136 = v1095;
          const cv1137 = v1137;
          const cv1138 = v1509;
          const cv1139 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
          const cv1140 = v1265;
          const cv1146 = v1146;
          const cv1147 = v1147;
          
          v1136 = cv1136;
          v1137 = cv1137;
          v1138 = cv1138;
          v1139 = cv1139;
          v1140 = cv1140;
          v1146 = cv1146;
          v1147 = cv1147;
          
          continue;}
        else {
          const cv1136 = v1095;
          const cv1137 = v1137;
          const cv1138 = v1509;
          const cv1139 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
          const cv1140 = v1265;
          const cv1146 = v1146;
          const cv1147 = v1147;
          
          v1136 = cv1136;
          v1137 = cv1137;
          v1138 = cv1138;
          v1139 = cv1139;
          v1140 = cv1140;
          v1146 = cv1146;
          v1147 = cv1147;
          
          continue;}
        break;
        }
      case 'Bob_subscribeToNFT0_108': {
        const v1545 = v1264[1];
        undefined /* setApiDetails */;
        const v1575 = stdlib.addressEq(v1263, v1095);
        const v1576 = v1575 ? false : true;
        stdlib.assert(v1576, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
          msg: 'Not deployer',
          who: 'Alice'
          });
        ;
        await txn5.getOutput('Bob_subscribeToNFT', 'v1096', ctc4, v1096);
        const cv1136 = v1095;
        const cv1137 = v1137;
        const cv1138 = v1138;
        const cv1139 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const cv1140 = v1265;
        const cv1146 = v1146;
        const cv1147 = v1147;
        
        v1136 = cv1136;
        v1137 = cv1137;
        v1138 = cv1138;
        v1139 = cv1139;
        v1140 = cv1140;
        v1146 = cv1146;
        v1147 = cv1147;
        
        continue;
        break;
        }
      case 'Bob_ticketsAvailable0_108': {
        const v1684 = v1264[1];
        undefined /* setApiDetails */;
        const v1718 = stdlib.addressEq(v1263, v1095);
        const v1719 = v1718 ? false : true;
        stdlib.assert(v1719, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:79:38:application call to [unknown function] (defined at: ./index.rsh:79:38:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:79:38:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
          msg: 'Not deployer',
          who: 'Alice'
          });
        ;
        await txn5.getOutput('Bob_ticketsAvailable', 'v1097', ctc1, v1097);
        const cv1136 = v1095;
        const cv1137 = v1137;
        const cv1138 = v1138;
        const cv1139 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const cv1140 = v1265;
        const cv1146 = v1146;
        const cv1147 = v1147;
        
        v1136 = cv1136;
        v1137 = cv1137;
        v1138 = cv1138;
        v1139 = cv1139;
        v1140 = cv1140;
        v1146 = cv1146;
        v1147 = cv1147;
        
        continue;
        break;
        }
      }
    
    }
  const v1823 = stdlib.addressEq(v1136, v1095);
  if (v1823) {
    stdlib.protect(ctc0, await interact.noWinner(), {
      at: './index.rsh:134:28:application',
      fs: ['at ./index.rsh:134:28:application call to [unknown function] (defined at: ./index.rsh:134:28:function exp)', 'at ./index.rsh:134:28:application call to "liftedInteract" (defined at: ./index.rsh:134:28:application)'],
      msg: 'noWinner',
      who: 'Alice'
      });
    
    }
  else {
    stdlib.protect(ctc0, await interact.displayWinner(v1136), {
      at: './index.rsh:137:33:application',
      fs: ['at ./index.rsh:137:33:application call to [unknown function] (defined at: ./index.rsh:137:33:function exp)', 'at ./index.rsh:137:33:application call to "liftedInteract" (defined at: ./index.rsh:137:33:application)'],
      msg: 'displayWinner',
      who: 'Alice'
      });
    
    }
  const txn5 = await (ctc.sendrecv({
    args: [v1095, v1096, v1136, v1146, v1147, v1823],
    evt_cnt: 0,
    funcNum: 5,
    lct: v1140,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:140:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1828, time: v1827, didSend: v1023, from: v1826 } = txn5;
      
      ;
      const v1830 = v1146[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
      const v1831 = v1830[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v1136,
        tok: v1096
        });
      sim_r.txns.push({
        kind: 'from',
        to: v1095,
        tok: undefined /* Nothing */
        });
      
      sim_r.txns.push({
        kind: 'halt',
        tok: v1096
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc13, ctc15, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1828, time: v1827, didSend: v1023, from: v1826 } = txn5;
  ;
  const v1829 = stdlib.addressEq(v1095, v1826);
  stdlib.assert(v1829, {
    at: './index.rsh:140:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v1830 = v1146[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
  const v1831 = v1830[stdlib.checkedBigNumberify('./index.rsh:142:19:application', stdlib.UInt_max, '0')];
  ;
  ;
  stdlib.protect(ctc0, await interact.displayWinner(v1136), {
    at: './index.rsh:146:31:application',
    fs: ['at ./index.rsh:146:31:application call to [unknown function] (defined at: ./index.rsh:146:31:function exp)', 'at ./index.rsh:146:31:application call to "liftedInteract" (defined at: ./index.rsh:146:31:application)'],
    msg: 'displayWinner',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  };
export async function _Bob_checkStatus7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_checkStatus7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_checkStatus7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_108: ctc9,
    Bob_drawRaffleTicket0_108: ctc10,
    Bob_subscribeToNFT0_108: ctc9,
    Bob_ticketsAvailable0_108: ctc9
    });
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1095, v1096, v1097, v1136, v1137, v1138, v1139, v1146, v1147] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1208 = ctc.selfAddress();
  const v1210 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to "runBob_checkStatus0_108" (defined at: ./index.rsh:107:12:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'in',
    who: 'Bob_checkStatus'
    });
  const v1211 = stdlib.addressEq(v1208, v1095);
  const v1212 = v1211 ? false : true;
  stdlib.assert(v1212, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:108:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to "runBob_checkStatus0_108" (defined at: ./index.rsh:107:12:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'Not Alice',
    who: 'Bob_checkStatus'
    });
  const v1214 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1208), null);
  let v1215;
  switch (v1214[0]) {
    case 'None': {
      const v1216 = v1214[1];
      v1215 = false;
      
      break;
      }
    case 'Some': {
      const v1217 = v1214[1];
      v1215 = true;
      
      break;
      }
    }
  stdlib.assert(v1215, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to "runBob_checkStatus0_108" (defined at: ./index.rsh:107:12:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'You have not made any draw yet!',
    who: 'Bob_checkStatus'
    });
  const v1219 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1208), null);
  let v1220;
  switch (v1219[0]) {
    case 'None': {
      const v1221 = v1219[1];
      v1220 = false;
      
      break;
      }
    case 'Some': {
      const v1222 = v1219[1];
      v1220 = true;
      
      break;
      }
    }
  const v1223 = v1220 ? false : true;
  stdlib.assert(v1223, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to "runBob_checkStatus0_108" (defined at: ./index.rsh:107:12:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'You have checked your status already',
    who: 'Bob_checkStatus'
    });
  const v1228 = ['Bob_checkStatus0_108', v1210];
  
  let v1235;
  switch (v1214[0]) {
    case 'None': {
      const v1236 = v1214[1];
      v1235 = false;
      
      break;
      }
    case 'Some': {
      const v1237 = v1214[1];
      v1235 = true;
      
      break;
      }
    }
  stdlib.assert(v1235, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'You have not made any draw yet!',
    who: 'Bob_checkStatus'
    });
  let v1240;
  switch (v1219[0]) {
    case 'None': {
      const v1241 = v1219[1];
      v1240 = false;
      
      break;
      }
    case 'Some': {
      const v1242 = v1219[1];
      v1240 = true;
      
      break;
      }
    }
  const v1243 = v1240 ? false : true;
  stdlib.assert(v1243, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'You have checked your status already',
    who: 'Bob_checkStatus'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1095, v1096, v1097, v1136, v1137, v1138, v1139, v1146, v1147, v1228],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:112:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1264], secs: v1266, time: v1265, didSend: v794, from: v1263 } = txn1;
      
      switch (v1264[0]) {
        case 'Bob_checkStatus0_108': {
          const v1267 = v1264[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_checkStatus"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1263), null);
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1263), null);
          ;
          const v1319 = stdlib.eq(v1139, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          if (v1319) {
            const v1320 = [false, false];
            const v1321 = await txn1.getOutput('Bob_checkStatus', 'v1320', ctc12, v1320);
            
            const v4015 = v1136;
            const v4016 = v1137;
            const v4017 = v1138;
            const v4018 = v1139;
            const v4020 = v1146;
            const v4021 = v1147;
            const v4022 = stdlib.lt(v1138, v1097);
            const v4027 = stdlib.lt(v1137, v1097);
            const v4028 = v4022 ? v4027 : false;
            if (v4028) {
              sim_r.isHalt = false;
              }
            else {
              const v4029 = stdlib.addressEq(v1136, v1095);
              sim_r.isHalt = false;
              }}
          else {
            await stdlib.simMapSet(sim_r, 1, v1263, null);
            const v1336 = [true, false];
            const v1337 = await txn1.getOutput('Bob_checkStatus', 'v1336', ctc12, v1336);
            
            const v1344 = stdlib.add(v1137, stdlib.checkedBigNumberify('./index.rsh:126:81:decimal', stdlib.UInt_max, '1'));
            const v4037 = v1136;
            const v4038 = v1344;
            const v4039 = v1138;
            const v4040 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
            const v4042 = v1146;
            const v4043 = v1147;
            const v4044 = stdlib.lt(v1138, v1097);
            const v4049 = stdlib.lt(v1344, v1097);
            const v4050 = v4044 ? v4049 : false;
            if (v4050) {
              sim_r.isHalt = false;
              }
            else {
              const v4051 = stdlib.addressEq(v1136, v1095);
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Bob_drawRaffleTicket0_108': {
          const v1406 = v1264[1];
          
          break;
          }
        case 'Bob_subscribeToNFT0_108': {
          const v1545 = v1264[1];
          
          break;
          }
        case 'Bob_ticketsAvailable0_108': {
          const v1684 = v1264[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1264], secs: v1266, time: v1265, didSend: v794, from: v1263 } = txn1;
  switch (v1264[0]) {
    case 'Bob_checkStatus0_108': {
      const v1267 = v1264[1];
      undefined /* setApiDetails */;
      const v1272 = stdlib.addressEq(v1263, v1095);
      const v1273 = v1272 ? false : true;
      stdlib.assert(v1273, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:108:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
        msg: 'Not Alice',
        who: 'Bob_checkStatus'
        });
      const v1275 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1263), null);
      let v1276;
      switch (v1275[0]) {
        case 'None': {
          const v1277 = v1275[1];
          v1276 = false;
          
          break;
          }
        case 'Some': {
          const v1278 = v1275[1];
          v1276 = true;
          
          break;
          }
        }
      stdlib.assert(v1276, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
        msg: 'You have not made any draw yet!',
        who: 'Bob_checkStatus'
        });
      const v1280 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1263), null);
      let v1281;
      switch (v1280[0]) {
        case 'None': {
          const v1282 = v1280[1];
          v1281 = false;
          
          break;
          }
        case 'Some': {
          const v1283 = v1280[1];
          v1281 = true;
          
          break;
          }
        }
      const v1284 = v1281 ? false : true;
      stdlib.assert(v1284, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:107:33:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:107:33:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
        msg: 'You have checked your status already',
        who: 'Bob_checkStatus'
        });
      ;
      let v1309;
      switch (v1275[0]) {
        case 'None': {
          const v1310 = v1275[1];
          v1309 = false;
          
          break;
          }
        case 'Some': {
          const v1311 = v1275[1];
          v1309 = true;
          
          break;
          }
        }
      stdlib.assert(v1309, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:109:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:112:30:application call to [unknown function] (defined at: ./index.rsh:112:30:function exp)'],
        msg: 'You have not made any draw yet!',
        who: 'Bob_checkStatus'
        });
      let v1314;
      switch (v1280[0]) {
        case 'None': {
          const v1315 = v1280[1];
          v1314 = false;
          
          break;
          }
        case 'Some': {
          const v1316 = v1280[1];
          v1314 = true;
          
          break;
          }
        }
      const v1317 = v1314 ? false : true;
      stdlib.assert(v1317, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:110:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:112:30:application call to [unknown function] (defined at: ./index.rsh:112:30:function exp)'],
        msg: 'You have checked your status already',
        who: 'Bob_checkStatus'
        });
      const v1319 = stdlib.eq(v1139, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v1319) {
        const v1320 = [false, false];
        const v1321 = await txn1.getOutput('Bob_checkStatus', 'v1320', ctc12, v1320);
        if (v794) {
          stdlib.protect(ctc0, await interact.out(v1267, v1321), {
            at: './index.rsh:107:13:application',
            fs: ['at ./index.rsh:107:13:application call to [unknown function] (defined at: ./index.rsh:107:13:function exp)', 'at ./index.rsh:114:20:application call to "resolve" (defined at: ./index.rsh:112:30:function exp)', 'at ./index.rsh:112:30:application call to [unknown function] (defined at: ./index.rsh:112:30:function exp)'],
            msg: 'out',
            who: 'Bob_checkStatus'
            });
          }
        else {
          }
        
        const v4015 = v1136;
        const v4016 = v1137;
        const v4017 = v1138;
        const v4018 = v1139;
        const v4020 = v1146;
        const v4021 = v1147;
        const v4022 = stdlib.lt(v1138, v1097);
        const v4027 = stdlib.lt(v1137, v1097);
        const v4028 = v4022 ? v4027 : false;
        if (v4028) {
          return;
          }
        else {
          const v4029 = stdlib.addressEq(v1136, v1095);
          return;
          }}
      else {
        await stdlib.mapSet(map1, v1263, null);
        const v1336 = [true, false];
        const v1337 = await txn1.getOutput('Bob_checkStatus', 'v1336', ctc12, v1336);
        if (v794) {
          stdlib.protect(ctc0, await interact.out(v1267, v1337), {
            at: './index.rsh:107:13:application',
            fs: ['at ./index.rsh:107:13:application call to [unknown function] (defined at: ./index.rsh:107:13:function exp)', 'at ./index.rsh:125:22:application call to "resolve" (defined at: ./index.rsh:112:30:function exp)', 'at ./index.rsh:112:30:application call to [unknown function] (defined at: ./index.rsh:112:30:function exp)'],
            msg: 'out',
            who: 'Bob_checkStatus'
            });
          }
        else {
          }
        
        const v1344 = stdlib.add(v1137, stdlib.checkedBigNumberify('./index.rsh:126:81:decimal', stdlib.UInt_max, '1'));
        const v4037 = v1136;
        const v4038 = v1344;
        const v4039 = v1138;
        const v4040 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
        const v4042 = v1146;
        const v4043 = v1147;
        const v4044 = stdlib.lt(v1138, v1097);
        const v4049 = stdlib.lt(v1344, v1097);
        const v4050 = v4044 ? v4049 : false;
        if (v4050) {
          return;
          }
        else {
          const v4051 = stdlib.addressEq(v1136, v1095);
          return;
          }}
      break;
      }
    case 'Bob_drawRaffleTicket0_108': {
      const v1406 = v1264[1];
      return;
      break;
      }
    case 'Bob_subscribeToNFT0_108': {
      const v1545 = v1264[1];
      return;
      break;
      }
    case 'Bob_ticketsAvailable0_108': {
      const v1684 = v1264[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_drawRaffleTicket7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_drawRaffleTicket7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_drawRaffleTicket7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_108: ctc10,
    Bob_drawRaffleTicket0_108: ctc9,
    Bob_subscribeToNFT0_108: ctc10,
    Bob_ticketsAvailable0_108: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1095, v1096, v1097, v1136, v1137, v1138, v1139, v1146, v1147] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1188 = ctc.selfAddress();
  const v1190 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:88:42:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to "runBob_drawRaffleTicket0_108" (defined at: ./index.rsh:88:12:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'in',
    who: 'Bob_drawRaffleTicket'
    });
  const v1193 = stdlib.addressEq(v1188, v1095);
  const v1194 = v1193 ? false : true;
  stdlib.assert(v1194, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:42:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to "runBob_drawRaffleTicket0_108" (defined at: ./index.rsh:88:12:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_drawRaffleTicket'
    });
  const v1196 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1188), null);
  let v1197;
  switch (v1196[0]) {
    case 'None': {
      const v1198 = v1196[1];
      v1197 = true;
      
      break;
      }
    case 'Some': {
      const v1199 = v1196[1];
      v1197 = false;
      
      break;
      }
    }
  stdlib.assert(v1197, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:90:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:42:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to "runBob_drawRaffleTicket0_108" (defined at: ./index.rsh:88:12:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'Already made a draw',
    who: 'Bob_drawRaffleTicket'
    });
  const v1206 = ['Bob_drawRaffleTicket0_108', v1190];
  
  let v1251;
  switch (v1196[0]) {
    case 'None': {
      const v1252 = v1196[1];
      v1251 = true;
      
      break;
      }
    case 'Some': {
      const v1253 = v1196[1];
      v1251 = false;
      
      break;
      }
    }
  stdlib.assert(v1251, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:90:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:42:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'Already made a draw',
    who: 'Bob_drawRaffleTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1095, v1096, v1097, v1136, v1137, v1138, v1139, v1146, v1147, v1206],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:92:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1264], secs: v1266, time: v1265, didSend: v794, from: v1263 } = txn1;
      
      switch (v1264[0]) {
        case 'Bob_checkStatus0_108': {
          const v1267 = v1264[1];
          
          break;
          }
        case 'Bob_drawRaffleTicket0_108': {
          const v1406 = v1264[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_drawRaffleTicket"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1263), null);
          ;
          const v1491 = v1406[stdlib.checkedBigNumberify('./index.rsh:88:12:spread', stdlib.UInt_max, '0')];
          const v1501 = null;
          const v1502 = await txn1.getOutput('Bob_drawRaffleTicket', 'v1501', ctc0, v1501);
          
          await stdlib.simMapSet(sim_r, 0, v1263, v1491);
          const v1509 = stdlib.add(v1138, stdlib.checkedBigNumberify('./index.rsh:99:29:decimal', stdlib.UInt_max, '1'));
          const v1510 = stdlib.eq(v1509, v1097);
          if (v1510) {
            const v4191 = v1095;
            const v4192 = v1137;
            const v4193 = v1509;
            const v4194 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
            const v4196 = v1146;
            const v4197 = v1147;
            const v4198 = stdlib.lt(v1509, v1097);
            const v4203 = stdlib.lt(v1137, v1097);
            const v4204 = v4198 ? v4203 : false;
            if (v4204) {
              sim_r.isHalt = false;
              }
            else {
              const v4205 = true;
              sim_r.isHalt = false;
              }}
          else {
            const v4213 = v1095;
            const v4214 = v1137;
            const v4215 = v1509;
            const v4216 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
            const v4218 = v1146;
            const v4219 = v1147;
            const v4220 = stdlib.lt(v1509, v1097);
            const v4225 = stdlib.lt(v1137, v1097);
            const v4226 = v4220 ? v4225 : false;
            if (v4226) {
              sim_r.isHalt = false;
              }
            else {
              const v4227 = true;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Bob_subscribeToNFT0_108': {
          const v1545 = v1264[1];
          
          break;
          }
        case 'Bob_ticketsAvailable0_108': {
          const v1684 = v1264[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1264], secs: v1266, time: v1265, didSend: v794, from: v1263 } = txn1;
  switch (v1264[0]) {
    case 'Bob_checkStatus0_108': {
      const v1267 = v1264[1];
      return;
      break;
      }
    case 'Bob_drawRaffleTicket0_108': {
      const v1406 = v1264[1];
      undefined /* setApiDetails */;
      const v1427 = stdlib.addressEq(v1263, v1095);
      const v1428 = v1427 ? false : true;
      stdlib.assert(v1428, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:89:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:42:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
        msg: 'Not Deployer',
        who: 'Bob_drawRaffleTicket'
        });
      const v1430 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1263), null);
      let v1431;
      switch (v1430[0]) {
        case 'None': {
          const v1432 = v1430[1];
          v1431 = true;
          
          break;
          }
        case 'Some': {
          const v1433 = v1430[1];
          v1431 = false;
          
          break;
          }
        }
      stdlib.assert(v1431, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:90:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:42:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:88:42:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
        msg: 'Already made a draw',
        who: 'Bob_drawRaffleTicket'
        });
      ;
      const v1491 = v1406[stdlib.checkedBigNumberify('./index.rsh:88:12:spread', stdlib.UInt_max, '0')];
      let v1496;
      switch (v1430[0]) {
        case 'None': {
          const v1497 = v1430[1];
          v1496 = true;
          
          break;
          }
        case 'Some': {
          const v1498 = v1430[1];
          v1496 = false;
          
          break;
          }
        }
      stdlib.assert(v1496, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:90:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:31:application call to [unknown function] (defined at: ./index.rsh:92:31:function exp)'],
        msg: 'Already made a draw',
        who: 'Bob_drawRaffleTicket'
        });
      const v1501 = null;
      const v1502 = await txn1.getOutput('Bob_drawRaffleTicket', 'v1501', ctc0, v1501);
      if (v794) {
        stdlib.protect(ctc0, await interact.out(v1406, v1502), {
          at: './index.rsh:88:13:application',
          fs: ['at ./index.rsh:88:13:application call to [unknown function] (defined at: ./index.rsh:88:13:function exp)', 'at ./index.rsh:93:18:application call to "resolve" (defined at: ./index.rsh:92:31:function exp)', 'at ./index.rsh:92:31:application call to [unknown function] (defined at: ./index.rsh:92:31:function exp)'],
          msg: 'out',
          who: 'Bob_drawRaffleTicket'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v1263, v1491);
      const v1509 = stdlib.add(v1138, stdlib.checkedBigNumberify('./index.rsh:99:29:decimal', stdlib.UInt_max, '1'));
      const v1510 = stdlib.eq(v1509, v1097);
      if (v1510) {
        const v4191 = v1095;
        const v4192 = v1137;
        const v4193 = v1509;
        const v4194 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
        const v4196 = v1146;
        const v4197 = v1147;
        const v4198 = stdlib.lt(v1509, v1097);
        const v4203 = stdlib.lt(v1137, v1097);
        const v4204 = v4198 ? v4203 : false;
        if (v4204) {
          return;
          }
        else {
          const v4205 = true;
          return;
          }}
      else {
        const v4213 = v1095;
        const v4214 = v1137;
        const v4215 = v1509;
        const v4216 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1');
        const v4218 = v1146;
        const v4219 = v1147;
        const v4220 = stdlib.lt(v1509, v1097);
        const v4225 = stdlib.lt(v1137, v1097);
        const v4226 = v4220 ? v4225 : false;
        if (v4226) {
          return;
          }
        else {
          const v4227 = true;
          return;
          }}
      break;
      }
    case 'Bob_subscribeToNFT0_108': {
      const v1545 = v1264[1];
      return;
      break;
      }
    case 'Bob_ticketsAvailable0_108': {
      const v1684 = v1264[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_subscribeToNFT7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_subscribeToNFT7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_subscribeToNFT7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_108: ctc9,
    Bob_drawRaffleTicket0_108: ctc10,
    Bob_subscribeToNFT0_108: ctc9,
    Bob_ticketsAvailable0_108: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1095, v1096, v1097, v1136, v1137, v1138, v1139, v1146, v1147] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1166 = ctc.selfAddress();
  const v1168 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:66:19:application call to "runBob_subscribeToNFT0_108" (defined at: ./index.rsh:70:12:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'in',
    who: 'Bob_subscribeToNFT'
    });
  const v1169 = stdlib.addressEq(v1166, v1095);
  const v1170 = v1169 ? false : true;
  stdlib.assert(v1170, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:66:19:application call to "runBob_subscribeToNFT0_108" (defined at: ./index.rsh:70:12:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'Not deployer',
    who: 'Bob_subscribeToNFT'
    });
  const v1175 = ['Bob_subscribeToNFT0_108', v1168];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1095, v1096, v1097, v1136, v1137, v1138, v1139, v1146, v1147, v1175],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1264], secs: v1266, time: v1265, didSend: v794, from: v1263 } = txn1;
      
      switch (v1264[0]) {
        case 'Bob_checkStatus0_108': {
          const v1267 = v1264[1];
          
          break;
          }
        case 'Bob_drawRaffleTicket0_108': {
          const v1406 = v1264[1];
          
          break;
          }
        case 'Bob_subscribeToNFT0_108': {
          const v1545 = v1264[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_subscribeToNFT"
            });
          ;
          const v1668 = await txn1.getOutput('Bob_subscribeToNFT', 'v1096', ctc5, v1096);
          
          const v4367 = v1095;
          const v4368 = v1137;
          const v4369 = v1138;
          const v4370 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v4372 = v1146;
          const v4373 = v1147;
          const v4374 = stdlib.lt(v1138, v1097);
          const v4379 = stdlib.lt(v1137, v1097);
          const v4380 = v4374 ? v4379 : false;
          if (v4380) {
            sim_r.isHalt = false;
            }
          else {
            const v4381 = true;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bob_ticketsAvailable0_108': {
          const v1684 = v1264[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1264], secs: v1266, time: v1265, didSend: v794, from: v1263 } = txn1;
  switch (v1264[0]) {
    case 'Bob_checkStatus0_108': {
      const v1267 = v1264[1];
      return;
      break;
      }
    case 'Bob_drawRaffleTicket0_108': {
      const v1406 = v1264[1];
      return;
      break;
      }
    case 'Bob_subscribeToNFT0_108': {
      const v1545 = v1264[1];
      undefined /* setApiDetails */;
      const v1575 = stdlib.addressEq(v1263, v1095);
      const v1576 = v1575 ? false : true;
      stdlib.assert(v1576, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:71:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:70:36:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:70:36:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
        msg: 'Not deployer',
        who: 'Bob_subscribeToNFT'
        });
      ;
      const v1668 = await txn1.getOutput('Bob_subscribeToNFT', 'v1096', ctc5, v1096);
      if (v794) {
        stdlib.protect(ctc0, await interact.out(v1545, v1668), {
          at: './index.rsh:70:13:application',
          fs: ['at ./index.rsh:70:13:application call to [unknown function] (defined at: ./index.rsh:70:13:function exp)', 'at ./index.rsh:74:18:application call to "resolve" (defined at: ./index.rsh:73:30:function exp)', 'at ./index.rsh:73:30:application call to [unknown function] (defined at: ./index.rsh:73:30:function exp)'],
          msg: 'out',
          who: 'Bob_subscribeToNFT'
          });
        }
      else {
        }
      
      const v4367 = v1095;
      const v4368 = v1137;
      const v4369 = v1138;
      const v4370 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v4372 = v1146;
      const v4373 = v1147;
      const v4374 = stdlib.lt(v1138, v1097);
      const v4379 = stdlib.lt(v1137, v1097);
      const v4380 = v4374 ? v4379 : false;
      if (v4380) {
        return;
        }
      else {
        const v4381 = true;
        return;
        }
      break;
      }
    case 'Bob_ticketsAvailable0_108': {
      const v1684 = v1264[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_ticketsAvailable7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_ticketsAvailable7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_ticketsAvailable7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_108: ctc9,
    Bob_drawRaffleTicket0_108: ctc10,
    Bob_subscribeToNFT0_108: ctc9,
    Bob_ticketsAvailable0_108: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1095, v1096, v1097, v1136, v1137, v1138, v1139, v1146, v1147] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1177 = ctc.selfAddress();
  const v1179 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:79:38:application call to [unknown function] (defined at: ./index.rsh:79:38:function exp)', 'at ./index.rsh:66:19:application call to "runBob_ticketsAvailable0_108" (defined at: ./index.rsh:79:12:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'in',
    who: 'Bob_ticketsAvailable'
    });
  const v1180 = stdlib.addressEq(v1177, v1095);
  const v1181 = v1180 ? false : true;
  stdlib.assert(v1181, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:79:38:application call to [unknown function] (defined at: ./index.rsh:79:38:function exp)', 'at ./index.rsh:66:19:application call to "runBob_ticketsAvailable0_108" (defined at: ./index.rsh:79:12:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
    msg: 'Not deployer',
    who: 'Bob_ticketsAvailable'
    });
  const v1186 = ['Bob_ticketsAvailable0_108', v1179];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1095, v1096, v1097, v1136, v1137, v1138, v1139, v1146, v1147, v1186],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1264], secs: v1266, time: v1265, didSend: v794, from: v1263 } = txn1;
      
      switch (v1264[0]) {
        case 'Bob_checkStatus0_108': {
          const v1267 = v1264[1];
          
          break;
          }
        case 'Bob_drawRaffleTicket0_108': {
          const v1406 = v1264[1];
          
          break;
          }
        case 'Bob_subscribeToNFT0_108': {
          const v1545 = v1264[1];
          
          break;
          }
        case 'Bob_ticketsAvailable0_108': {
          const v1684 = v1264[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_ticketsAvailable"
            });
          ;
          const v1817 = await txn1.getOutput('Bob_ticketsAvailable', 'v1097', ctc1, v1097);
          
          const v4521 = v1095;
          const v4522 = v1137;
          const v4523 = v1138;
          const v4524 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v4526 = v1146;
          const v4527 = v1147;
          const v4528 = stdlib.lt(v1138, v1097);
          const v4533 = stdlib.lt(v1137, v1097);
          const v4534 = v4528 ? v4533 : false;
          if (v4534) {
            sim_r.isHalt = false;
            }
          else {
            const v4535 = true;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1264], secs: v1266, time: v1265, didSend: v794, from: v1263 } = txn1;
  switch (v1264[0]) {
    case 'Bob_checkStatus0_108': {
      const v1267 = v1264[1];
      return;
      break;
      }
    case 'Bob_drawRaffleTicket0_108': {
      const v1406 = v1264[1];
      return;
      break;
      }
    case 'Bob_subscribeToNFT0_108': {
      const v1545 = v1264[1];
      return;
      break;
      }
    case 'Bob_ticketsAvailable0_108': {
      const v1684 = v1264[1];
      undefined /* setApiDetails */;
      const v1718 = stdlib.addressEq(v1263, v1095);
      const v1719 = v1718 ? false : true;
      stdlib.assert(v1719, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:79:38:application call to [unknown function] (defined at: ./index.rsh:79:38:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:79:38:function exp)', 'at ./index.rsh:66:19:application call to [unknown function] (defined at: ./index.rsh:66:19:function exp)'],
        msg: 'Not deployer',
        who: 'Bob_ticketsAvailable'
        });
      ;
      const v1817 = await txn1.getOutput('Bob_ticketsAvailable', 'v1097', ctc1, v1097);
      if (v794) {
        stdlib.protect(ctc0, await interact.out(v1684, v1817), {
          at: './index.rsh:79:13:application',
          fs: ['at ./index.rsh:79:13:application call to [unknown function] (defined at: ./index.rsh:79:13:function exp)', 'at ./index.rsh:83:18:application call to "resolve" (defined at: ./index.rsh:82:30:function exp)', 'at ./index.rsh:82:30:application call to [unknown function] (defined at: ./index.rsh:82:30:function exp)'],
          msg: 'out',
          who: 'Bob_ticketsAvailable'
          });
        }
      else {
        }
      
      const v4521 = v1095;
      const v4522 = v1137;
      const v4523 = v1138;
      const v4524 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v4526 = v1146;
      const v4527 = v1147;
      const v4528 = stdlib.lt(v1138, v1097);
      const v4533 = stdlib.lt(v1137, v1097);
      const v4534 = v4528 ? v4533 : false;
      if (v4534) {
        return;
        }
      else {
        const v4535 = true;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Bob_checkStatus(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_checkStatus expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_checkStatus expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_checkStatus7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_drawRaffleTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_drawRaffleTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_drawRaffleTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_drawRaffleTicket7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_subscribeToNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_subscribeToNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_subscribeToNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_subscribeToNFT7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_ticketsAvailable(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_ticketsAvailable expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_ticketsAvailable expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_ticketsAvailable7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_checkStatus()(byte,byte)`, `Bob_drawRaffleTicket(uint64)byte[0]`, `Bob_subscribeToNFT()uint64`, `Bob_ticketsAvailable()uint64`],
    pure: [],
    sigs: [`Bob_checkStatus()(byte,byte)`, `Bob_drawRaffleTicket(uint64)byte[0]`, `Bob_subscribeToNFT()uint64`, `Bob_ticketsAvailable()uint64`]
    },
  appApproval: `BiAQAAEIAwIgBSgECvu18sgJ66/g9w6H/bTVBAYHoI0GJgMBAAABASI1ADEYQQZSKWRJIls1ASRbNQIxGSMSQQAKMQAoIQmvZkIGHzYaABdJQQBlIjUEIzUGSSEKDEAAKkkhCwxAABMhCxJEKTX/gAECNP9QJK9QQgBjIQoSRDYaATX/KjT/UEIAU0khDAxAABMhDBJEKTX/gAEDNP9QJK9QQgA5gd6OlHcSRCk1/yg0/1Akr1BCACU2GgIXNQQ2GgM2GgEXSSUMQANMSSEGDEAC3EkhDQxAAlghDRJEIQ40ARJENARJIhJMNAISEUQoZCpkUEk1A0lKSkpJVwAgNf8hBVs1/iEHWzX9VzAgNfyBUFs1+4FYWzX6gWBbNflXaBE1+IF5WzX3STUFNfaABBQM5gg09lCwNPYiVUkhBAxAAGpJJQxAADMlEkQxADT/E0SACAAAAAAAAARJNP0WULA0/RY1BzT/NP40/TT/NPs0+iMyBjT4NPdCBB5IMQA0/xNEgAgAAAAAAAAESDT+FlCwNP4WNQc0/zT+NP00/zT7NPojMgY0+DT3QgPtSSMMQAChSDT2VwEINfUxADT/E0QxAIgE2VcACUk19CJVQAAGIzXzQgAGIjXzQgAANPNENPQiVUAABiM18kIABiI18kIAADTyRIAIAAAAAAAABd2wKTUHMQAoMQCIBJMqNPVQNfFXCQE08UxQZjT6IwhJNfE0/RJBABc0/zT+NP00/zT7NPEhBDIGNPg090IDXDT/NP40/TT/NPs08SMyBjT4NPdCA0ZIMQA0/xNEMQCIBD9XAAlJNfUiVUAABiI19EIABiM19EIAADT0RDEAiAQgVwkBSTXzIlVAAAYiNfJCAAYjNfJCAAA08hRENPUiVUAABiI18UIABiM18UIAADTxRDTzIlVAAAYiNfBCAAYjNfBCAAA08BRENPkjEkEAKoAKAAAAAAAABSgAALCAAgAANQc0/zT+NP00/DT7NPo0+TIGNPg090ICojEAKDEAiAOfI4EJTFZmgAoAAAAAAAAFOAEAsIACAQA1BzT/NP40/TT8NPsjCDT6IQQyBjT4NPdCAmhIIQY0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEFWzX+gATMmZJcsDT/MQASRLEisgE0A1dIEVcAESJbshIhCLIQNANXKCCyFDT+shGzsSKyATQDgVlbsggjshA0/7IHs7EisgEishIhCLIQMgmyFTIKshQ0/rIRs0ICgyUSRCU0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFSSJbNf4kWzX9gASkpfCINP4WUDT9FlCwNP8xABJENANXMCA0/hY0/RZQARJENP80AyEFWzQDIQdbNP8iIiMyBjQDV1ARIkIBgkkjDEAA7EkhBAxAAGJIIQQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf4hB1s1/VcwIDX8V1ARNfuABEGxQE2wNP8xABJENP80/hZQNP0WUDT8UDT7UChLAVcAYWdIJTUBMgY1AkIBx0gjNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEFWzX+IQdbNf1XMCA1/FdQETX7gASai5F0sDT7VwARSTX6IlsjCBY0+lcICFA0+lcQAVA1+SM0/ogB5TT/MQASRDT/NP4WUDT9FlA0/FA0+VAoSwFXAGFnSCEENQEyBjUCQgFESCEPiAGeIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yRbNf5XECA1/YAEFi0oOzT/FlA0/hZQNP1QsIERr0k1/FcAETX7JK80+1cICFA0+1cQAVA1+iEPiAFKsSKyASKyEiEIshAyCrIUNP+yEbMxADT/FlA0/hZQNP1QNPpQKEsBVwBhZ0gjNQEyBjUCQgC0Nf81/jX9Nfw1+zX6Nfk1+DX3NfY0+zT4DDT8IxI0/CEEEhEQNPo0+AwQQQA6NPY09xZQNPgWUDT5UDT6FlA0+xZQNPwWUDT+UDT/FlAoSwFXAH9nKksBV38CZ0ghDjUBMgY1AkIATTT5NPYSNfU09jT3FlA0+VA0/lA0/xZQNPUWUQcIUChLAVcAYmdIIQY1ATIGNQJCABwxGSEGEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAABUghCa+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhCBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 10,
  stateKeys: 2,
  stateSize: 129,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1096",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1097",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1098",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1096",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1097",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1098",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1129",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1130",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_checkStatus0_108",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Bob_drawRaffleTicket0_108",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_subscribeToNFT0_108",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_ticketsAvailable0_108",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1264",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v1096",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1097",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1320",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1336",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1501",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_checkStatus",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bob_drawRaffleTicket",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_subscribeToNFT",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_ticketsAvailable",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1129",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1130",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_checkStatus0_108",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Bob_drawRaffleTicket0_108",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_subscribeToNFT0_108",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_ticketsAvailable0_108",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1264",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002eea38038062002eea83398101604081905262000026916200041b565b60008055436003556200003862000247565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f892906200019a565b60608201526200010b341560076200021d565b62000115620002ae565b33815260208084018051516001600160a01b03168284015280518201516040808501919091529051810151606080850191909152840151608084015260016000819055439055516200016a91839101620004dd565b6040516020818303038152906040526002908051906020019062000190929190620002f1565b50505050620005c4565b620001a462000380565b60005b6001811015620001fa57848160018110620001c657620001c6620004c7565b6020020151828260018110620001e057620001e0620004c7565b602002015280620001f1816200055d565b915050620001a7565b5081818460018110620002115762000211620004c7565b60200201529392505050565b81620002435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027a62000380565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a962000380565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002a962000380565b828054620002ff9062000587565b90600052602060002090601f0160209004810192826200032357600085556200036e565b82601f106200033e57805160ff19168380011785556200036e565b828001600101855582156200036e579182015b828111156200036e57825182559160200191906001019062000351565b506200037c929150620003cd565b5090565b60405180602001604052806001905b620003b6604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200038f5790505090565b5b808211156200037c5760008155600101620003ce565b604051606081016001600160401b03811182821017156200041557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200042f57600080fd5b604080519081016001600160401b03811182821017156200046057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200047a57600080fd5b62000484620003e4565b60208501519092506001600160a01b0381168114620004a257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b60018110156200055157825180518352858101518684015286015115158683015291840191908301906001016200051f565b50505050505092915050565b60006000198214156200058057634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059c57607f821691505b60208210811415620005be57634e487b7160e01b600052602260045260246000fd5b50919050565b61291680620005d46000396000f3fe6080604052600436106100d55760003560e01c80638e31476911610079578063ad2d91d111610056578063ad2d91d1146101fa578063adde787e1461020d578063b712d4d314610230578063cadc2e7a1461023857005b80638e314769146101a4578063a1d6acfb146101b7578063ab53f2c6146101d757005b80633bc5b7bf116100b25780633bc5b7bf1461013c5780636cf90080146101695780637eea518c1461017c578063832307571461018f57005b80631e93b0f1146100de57806325361b3e146101025780632c10a1591461012957005b366100dc57005b005b3480156100ea57600080fd5b506003545b6040519081526020015b60405180910390f35b61010a610265565b60408051825115158152602092830151151592810192909252016100f9565b6100dc610137366004611fdc565b6102a4565b34801561014857600080fd5b5061015c610157366004612009565b6102c8565b6040516100f9919061204c565b6100dc61017736600461207c565b6102df565b6100dc61018a366004611fdc565b6102ff565b34801561019b57600080fd5b506001546100ef565b6100dc6101b2366004611fdc565b61031f565b6101bf61033f565b6040516001600160a01b0390911681526020016100f9565b3480156101e357600080fd5b506101ec61036f565b6040516100f99291906120ba565b6100dc6102083660046120f4565b61040c565b61022061021b366004612106565b61042c565b60405190151581526020016100f9565b6100ef610467565b34801561024457600080fd5b50610258610253366004612009565b610497565b6040516100f9919061211f565b6040805180820190915260008082526020820152610281611c08565b60208101515160009052610293611c27565b61029d82826104a8565b5192915050565b6102ac611c27565b6102c46102be36849003840184612236565b82610e9b565b5050565b6102d0611c61565b6102d9826110bf565b92915050565b6102e7611c27565b6102c46102f93684900384018461228c565b826104a8565b610307611c27565b6102c461031936849003840184612236565b8261117d565b610327611c27565b6102c461033936849003840184612236565b8261132d565b6000610349611c08565b6020810151516002905261035b611c27565b61036582826104a8565b6040015192915050565b60006060600054600280805461038490612350565b80601f01602080910402602001604051908101604052809291908181526020018280546103b090612350565b80156103fd5780601f106103d2576101008083540402835291602001916103fd565b820191906000526020600020905b8154815290600101906020018083116103e057829003601f168201915b50505050509050915091509091565b610414611c27565b6102c461042636849003840184612385565b826114e2565b6000610436611c08565b6020810180515160019052515160400151839052610452611c27565b61045c82826104a8565b602001519392505050565b6000610471611c08565b60208101515160039052610483611c27565b61048d82826104a8565b6060015192915050565b61049f611c61565b6102d9826116ef565b6104b860076000541460286117a3565b81516104d39015806104cc57508251600154145b60296117a3565b6000808055600280546104e590612350565b80601f016020809104026020016040519081016040528092919081815260200182805461051190612350565b801561055e5780601f106105335761010080835404028352916020019161055e565b820191906000526020600020905b81548152906001019060200180831161054157829003601f168201915b50505050508060200190518101906105769190612473565b9050610580611c84565b7ffccd0bccaa8107f531383c647cefe1c1a05fb130354a290a07a556cdef3b5b7d33856040516105b1929190612509565b60405180910390a160006020850151515160038111156105d3576105d3612026565b14156109e45781516105ff906001600160a01b031633146105f55760016105f8565b60005b601a6117a3565b610608336110bf565b81526000815151600181111561062057610620612026565b14156106325760006020820152610656565b6001815151600181111561064857610648612026565b141561065657600160208201525b6106658160200151601b6117a3565b61066e336116ef565b6040820181905251600090600181111561068a5761068a612026565b141561069c57600060608201526106c3565b600160408201515160018111156106b5576106b5612026565b14156106c357600160608201525b6106e081606001516106d65760016106d9565b60005b601c6117a3565b6106ec3415601d6117a3565b6000815151600181111561070257610702612026565b14156107145760006080820152610738565b6001815151600181111561072a5761072a612026565b141561073857600160808201525b6107478160800151601e6117a3565b6000604082015151600181111561076057610760612026565b141561077257600060a0820152610799565b6001604082015151600181111561078b5761078b612026565b141561079957600160a08201525b6107b68160a001516107ac5760016107af565b60005b601f6117a3565b60018260c0015114156108c75760c081018051600090819052815160200152516040517ff9f3400e82ac84a84b73555f87f676304cff32370f664b9d122e20b2c441f7049161081a9181511515815260209182015115159181019190915260400190565b60405180910390a160c08101518352610831611d0b565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151838601805191909516905260808088015185519094019390935260a08088015185519093019290925260c08088015185519092019190915283514393019290925260e0860151835190910152610100850151915101526108c1816117c9565b50610e95565b336000908152600560209081526040808320805462ff00ff1916600190811790915560e08501805191909152805183019390935291518251815115158152908201511515918101919091527f44f4524a990a12eda6787030665fc4afa1e247c63d7d26acbf425440f14b0a77910160405180910390a160e0810151835261094c611d0b565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519091015260608501519083015191169052608083015161099690600190612590565b602080830180519091019190915260a080850151825160400152815160026060919091015281514360809091015260e0850151825190910152610100840151905160c001526108c1816117c9565b60016020850151515160038111156109fe576109fe612026565b1415610cbc57602084015151604001516101008201528151610a3a906001600160a01b03163314610a30576001610a33565b60005b60206117a3565b610a43336110bf565b6101208201819052516000906001811115610a6057610a60612026565b1415610a73576001610140820152610a9c565b6001610120820151516001811115610a8d57610a8d612026565b1415610a9c5760006101408201525b610aac81610140015160216117a3565b610ab8341560226117a3565b6000610120820151516001811115610ad257610ad2612026565b1415610ae5576001610160820152610b0e565b6001610120820151516001811115610aff57610aff612026565b1415610b0e5760006101608201525b610b1e81610160015160236117a3565b604051600081527f4696862732c27f3dde19738f510d96635689f7ba8976334e011b3e45a4e287529060200160405180910390a1600060208481018290523382526004905260409020805460ff191660019081178255610100830151519181019190915560a0830151610b919190612590565b610180820181905260408301511415610c3057610bac611d0b565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845182015285518285018051919094169052608080870151845190930192909252610180850151835190910152815160026060919091015281514391015260e0840151815160a00152610100840151905160c001526108c1816117c9565b610c38611d0b565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845182015285518285018051919094169052608080870151845190930192909252610180850151835190910152815160016060919091015281514391015260e0840151815160a00152610100840151905160c001526108c1816117c9565b6002602085015151516003811115610cd657610cd6612026565b1415610df4578151610d02906001600160a01b03163314610cf8576001610cfb565b60005b60246117a3565b610d0e341560256117a3565b6020808301516040516001600160a01b0390911681527ffa393f1d0e7ae11b75283d233ca90437ab6564832194683f484c329abb72b647910160405180910390a160208201516001600160a01b03166040840152610d6a611d0b565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201528551828501805191909416905260808087015184519093019290925260a080870151845190920191909152825160016060919091015282514392019190915260e0850151825190910152610100840151905160c001526108c1816117c9565b6003602085015151516003811115610e0e57610e0e612026565b1415610e95578151610e3a906001600160a01b03163314610e30576001610e33565b60005b60266117a3565b610e46341560276117a3565b7f7825ed32938af04ce96d3e3eea5d4b16c6ce0c72f885e330afa2e3f0f94247dd8260400151604051610e7b91815260200190565b60405180910390a160408201516060840152610d6a611d0b565b50505050565b610eab600160005414600b6117a3565b8151610ec6901580610ebf57508251600154145b600c6117a3565b600080805560028054610ed890612350565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0490612350565b8015610f515780601f10610f2657610100808354040283529160200191610f51565b820191906000526020600020905b815481529060010190602001808311610f3457829003601f168201915b5050505050806020019051810190610f699190612612565b9050610f73611d3b565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051610fa492919061262e565b60405180910390a1610fb8341560086117a3565b60808201515151610fcb90600190612590565b8151526080820180515160209081015183519091015280515160409081015183519015159101525181516110029190600090611982565b816020018190525061102461101d33846020015160016119f6565b60096117a3565b815161103c906001600160a01b03163314600a6117a3565b611044611d6b565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526060808601519084015283820151608084015260026000554360015551611093918391016126aa565b604051602081830303815290604052600290805190602001906110b7929190611dac565b505050505050565b6110c7611c61565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156110f6576110f6612026565b141561116d576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561113757611137612026565b600181111561114857611148612026565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b61118d600260005414600f6117a3565b81516111a89015806111a157508251600154145b60106117a3565b6000808055600280546111ba90612350565b80601f01602080910402602001604051908101604052809291908181526020018280546111e690612350565b80156112335780601f1061120857610100808354040283529160200191611233565b820191906000526020600020905b81548152906001019060200180831161121657829003601f168201915b505050505080602001905181019061124b9190612612565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338460405161127e92919061262e565b60405180910390a16112923415600d6117a3565b80516112aa906001600160a01b03163314600e6117a3565b6112b2611d6b565b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151908401526080808501519084015260036000554360015551611302918391016126aa565b60405160208183030381529060405260029080519060200190611326929190611dac565b5050505050565b61133d60056000541460186117a3565b815161135890158061135157508251600154145b60196117a3565b60008080556002805461136a90612350565b80601f016020809104026020016040519081016040528092919081815260200182805461139690612350565b80156113e35780601f106113b8576101008083540402835291602001916113e3565b820191906000526020600020905b8154815290600101906020018083116113c657829003601f168201915b50505050508060200190518101906113fb91906126f8565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338460405161142e92919061262e565b60405180910390a1611442341560166117a3565b805161145a906001600160a01b0316331460176117a3565b61148981602001518260400151836060015160006001811061147e5761147e612656565b602002015151611a0e565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156114c6573d6000803e3d6000fd5b50600080805560018190556114dd90600290611e30565b505050565b6114f260036000541460146117a3565b815161150d90158061150657508251600154145b60156117a3565b60008080556002805461151f90612350565b80601f016020809104026020016040519081016040528092919081815260200182805461154b90612350565b80156115985780601f1061156d57610100808354040283529160200191611598565b820191906000526020600020905b81548152906001019060200180831161157b57829003601f168201915b50505050508060200190518101906115b09190612612565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a161160f341560116117a3565b8051611627906001600160a01b0316331460126117a3565b6020808401518051908201516040516116759361164f93929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c82606001511460136117a3565b61167d611d0b565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201528451828501805191909416905282516000920182905282510181905281516001606090910152815143608091820152840151825160a00152905160c00152610e95816117c9565b6116f7611c61565b60016001600160a01b03831660009081526005602052604090205460ff16600181111561172657611726612026565b141561116d576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561176757611767612026565b600181111561177857611778612026565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b816102c45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152816000015160400151826020015160400151106117f657600061181a565b6001826020015160600151146118175760028260200151606001511461181a565b60015b611825576000611835565b8151604001516020808401510151105b156118f757611842611e6d565b8251516001600160a01b039081168252835160209081015182168184015284516040908101518185015281860180515190931660608086019190915283518301516080860152835182015160a08087019190915284519091015160c08087019190915284519091015160e086015292519092015161010084015260076000554360015590516118d39183910161279a565b60405160208183030381529060405260029080519060200190610e95929190611dac565b8151516020830151516001600160a01b039081169116148152611918611eda565b8251516001600160a01b0390811682528351602090810151821681840152808501805151909216604080850191909152825160a0908101516060860152925160c001516080850152845115159284019290925260056000554360015590516118d391839101612830565b61198a611eff565b60005b60018110156119d6578481600181106119a8576119a8612656565b60200201518282600181106119bf576119bf612656565b6020020152806119ce8161288c565b91505061198d565b50818184600181106119ea576119ea612656565b60200201529392505050565b6000611a0483853085611a22565b90505b9392505050565b611a19838383611afc565b6114dd57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611a89916128a7565b60006040518083038185875af1925050503d8060008114611ac6576040519150601f19603f3d011682016040523d82523d6000602084013e611acb565b606091505b5091509150611adc82826001611bcd565b5080806020019051810190611af191906128c3565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611b5b916128a7565b60006040518083038185875af1925050503d8060008114611b98576040519150601f19603f3d011682016040523d82523d6000602084013e611b9d565b606091505b5091509150611bae82826002611bcd565b5080806020019051810190611bc391906128c3565b9695505050505050565b60608315611bdc575081611a07565b825115611bec5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016117c0565b604051806040016040528060008152602001611c22611f4a565b905290565b6040805160c0810190915260006080820181815260a083019190915281905b81526000602082018190526040820181905260609091015290565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806101a00160405280611c98611c61565b815260006020820152604001611cac611c61565b8152600060208083018290526040808401839052606084018390528051808201825283815280830184905260808501528051808201825283815280830184905260a08501528051918201905290815260c082015260e001611c46611c61565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611c22611f5d565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611c22611eff565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001611c22611eff565b828054611db890612350565b90600052602060002090601f016020900481019282611dda5760008555611e20565b82601f10611df357805160ff1916838001178555611e20565b82800160010185558215611e20579182015b82811115611e20578251825591602001919060010190611e05565b50611e2c929150611f9c565b5090565b508054611e3c90612350565b6000825580601f10611e4c575050565b601f016020900490600052602060002090810190611e6a9190611f9c565b50565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611ecd611eff565b8152602001600081525090565b6040805160c0810182526000808252602082018190529181019190915260608101611c705b60405180602001604052806001905b611f34604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611f0e5790505090565b6040518060200160405280611c22611fb1565b6040518060e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001611ecd611eff565b5b80821115611e2c5760008155600101611f9d565b6040805160a08101825260008082526020808301829052835190810184529081529091820190611c70565b600060408284031215611fee57600080fd5b50919050565b6001600160a01b0381168114611e6a57600080fd5b60006020828403121561201b57600080fd5b8135611a0781611ff4565b634e487b7160e01b600052602160045260246000fd5b60028110611e6a57611e6a612026565b8151606082019061205c8161203c565b808352506020830151151560208301526040830151604083015292915050565b600060c08284031215611fee57600080fd5b60005b838110156120a9578181015183820152602001612091565b83811115610e955750506000910152565b82815260406020820152600082518060408401526120df81606085016020870161208e565b601f01601f1916919091016060019392505050565b600060608284031215611fee57600080fd5b60006020828403121561211857600080fd5b5035919050565b8151606082019061212f8161203c565b8083525060208301511515602083015260408301511515604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561218a5761218a612151565b60405290565b6040516020810167ffffffffffffffff8111828210171561218a5761218a612151565b60405160a0810167ffffffffffffffff8111828210171561218a5761218a612151565b6040516060810167ffffffffffffffff8111828210171561218a5761218a612151565b604051610120810167ffffffffffffffff8111828210171561218a5761218a612151565b8015158114611e6a57600080fd5b80356111788161221d565b60006040828403121561224857600080fd5b6040516040810181811067ffffffffffffffff8211171561226b5761226b612151565b6040528235815260208301356122808161221d565b60208201529392505050565b600081830360c081121561229f57600080fd5b6122a7612167565b8335815260a0601f19830112156122bd57600080fd5b6122c5612190565b6122cd6121b3565b6020860135600481106122df57600080fd5b815260408601356122ef8161221d565b806020830152506020605f198501121561230857600080fd5b612310612190565b93506060860135845283604082015261232b6080870161222b565b606082015261233c60a0870161222b565b608082015281526020820152949350505050565b600181811c9082168061236457607f821691505b60208210811415611fee57634e487b7160e01b600052602260045260246000fd5b6000818303606081121561239857600080fd5b6123a0612167565b833581526040601f19830112156123b657600080fd5b6123be612167565b60208581013582526040909501358582015293810193909352509092915050565b805161117881611ff4565b600082601f8301126123fb57600080fd5b612403612190565b8060608085018681111561241657600080fd5b855b81811015612467578281890312156124305760008081fd5b6124386121d6565b81518152602080830151818301526040808401516124558161221d565b90830152908652909401938201612418565b50919695505050505050565b6000610160828403121561248657600080fd5b61248e6121f9565b612497836123df565b81526124a5602084016123df565b6020820152604083015160408201526124c0606084016123df565b60608201526080830151608082015260a083015160a082015260c083015160c08201526124f08460e085016123ea565b60e0820152610140929092015161010083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160e0830191906004811061253c5761253c612026565b8060408501525060208101511515606084015260408101515160808401526060810151151560a08401526080810151151560c0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156125a3576125a361257a565b500190565b600060e082840312156125ba57600080fd5b6125c26121b3565b905081516125cf81611ff4565b815260208201516125df81611ff4565b80602083015250604082015160408201526060820151606082015261260783608084016123ea565b608082015292915050565b600060e0828403121561262457600080fd5b611a0783836125a8565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b8060005b6001811015610e95578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612670565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808083015160e08301916126f19084018261266c565b5092915050565b6000610100828403121561270b57600080fd5b60405160c0810181811067ffffffffffffffff8211171561272e5761272e612151565b604052825161273c81611ff4565b8152602083015161274c81611ff4565b6020820152604083015161275f81611ff4565b604082015261277184606085016123ea565b606082015260c0830151608082015260e083015161278e8161221d565b60a08201529392505050565b81516001600160a01b031681526020808301516101608301916127c7908401826001600160a01b03169052565b506040830151604083015260608301516127ec60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015161281d60e084018261266c565b5061010083015161014083015292915050565b81516001600160a01b039081168252602080840151821690830152604080840151909116908201526060808301516101008301916128709084018261266c565b50608083015160c083015260a090920151151560e09091015290565b60006000198214156128a0576128a061257a565b5060010190565b600082516128b981846020870161208e565b9190910192915050565b6000602082840312156128d557600080fd5b8151611a078161221d56fea2646970667358221220145971826b2e9550c69905fef62e4024ac94f2cee904a991477dd8d28f596fbb64736f6c634300080c0033`,
  BytecodeLen: 12010,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:44:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:48:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:55:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:131:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:148:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:66:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_checkStatus": Bob_checkStatus,
  "Bob_drawRaffleTicket": Bob_drawRaffleTicket,
  "Bob_subscribeToNFT": Bob_subscribeToNFT,
  "Bob_ticketsAvailable": Bob_ticketsAvailable
  };
export const _APIs = {
  Bob: {
    checkStatus: Bob_checkStatus,
    drawRaffleTicket: Bob_drawRaffleTicket,
    subscribeToNFT: Bob_subscribeToNFT,
    ticketsAvailable: Bob_ticketsAvailable
    }
  };
