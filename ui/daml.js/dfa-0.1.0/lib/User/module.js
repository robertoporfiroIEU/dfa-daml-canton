"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');


exports.Request = {
  templateId: '227a0a4c5c568fef4d281853ab73f94bb05cc8e42ae4f97063b8cbeae1e1405c:User:Request',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Party, damlTypes.Text).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({sender: damlTypes.Party.decoder, receiver: damlTypes.Party.decoder, content: damlTypes.Text.decoder, status: damlTypes.Text.decoder, geo: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Int).decoder, }); }),
  encode: function (__typed__) {
  return {
    sender: damlTypes.Party.encode(__typed__.sender),
    receiver: damlTypes.Party.encode(__typed__.receiver),
    content: damlTypes.Text.encode(__typed__.content),
    status: damlTypes.Text.encode(__typed__.status),
    geo: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Int).encode(__typed__.geo),
  };
}
,
  Archive: {
    template: function () { return exports.Request; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Request);



exports.SendRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({receiver: damlTypes.Party.decoder, content: damlTypes.Text.decoder, geo: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Int).decoder, }); }),
  encode: function (__typed__) {
  return {
    receiver: damlTypes.Party.encode(__typed__.receiver),
    content: damlTypes.Text.encode(__typed__.content),
    geo: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.Int, damlTypes.Int).encode(__typed__.geo),
  };
}
,
};



exports.User = {
  templateId: '227a0a4c5c568fef4d281853ab73f94bb05cc8e42ae4f97063b8cbeae1e1405c:User:User',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return damlTypes.Party.decoder; }); }),
  keyEncode: function (__typed__) { return damlTypes.Party.encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({username: damlTypes.Party.decoder, requests: damlTypes.List(exports.Request).decoder, }); }),
  encode: function (__typed__) {
  return {
    username: damlTypes.Party.encode(__typed__.username),
    requests: damlTypes.List(exports.Request).encode(__typed__.requests),
  };
}
,
  Archive: {
    template: function () { return exports.User; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  SendRequest: {
    template: function () { return exports.User; },
    choiceName: 'SendRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SendRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.SendRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.User).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.User).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.User);



exports.Admin = {
  templateId: '227a0a4c5c568fef4d281853ab73f94bb05cc8e42ae4f97063b8cbeae1e1405c:User:Admin',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return damlTypes.Party.decoder; }); }),
  keyEncode: function (__typed__) { return damlTypes.Party.encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({adminame: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    adminame: damlTypes.Party.encode(__typed__.adminame),
  };
}
,
  Archive: {
    template: function () { return exports.Admin; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Admin);

