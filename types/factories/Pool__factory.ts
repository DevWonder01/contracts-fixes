/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Pool } from "../Pool";

export class Pool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(rs: string, ds: string, overrides?: Overrides): Promise<Pool> {
    return super.deploy(rs, ds, overrides || {}) as Promise<Pool>;
  }
  getDeployTransaction(
    rs: string,
    ds: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(rs, ds, overrides || {});
  }
  attach(address: string): Pool {
    return super.attach(address) as Pool;
  }
  connect(signer: Signer): Pool__factory {
    return super.connect(signer) as Pool__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Pool {
    return new Contract(address, _abi, signerOrProvider) as Pool;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "rs",
        type: "address",
      },
      {
        internalType: "contract DataStore",
        name: "ds",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "clpAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolBalance",
        type: "uint256",
      },
    ],
    name: "PoolDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "market",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bufferToPoolAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bufferBalance",
        type: "uint256",
      },
    ],
    name: "PoolPayIn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "market",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bufferBalance",
        type: "uint256",
      },
    ],
    name: "PoolPayOut",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "clpAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolBalance",
        type: "uint256",
      },
    ],
    name: "PoolWithdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "prevGov",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nextGov",
        type: "address",
      },
    ],
    name: "SetGov",
    type: "event",
  },
  {
    inputs: [],
    name: "BPS_DIVIDER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CONTRACT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DS",
    outputs: [
      {
        internalType: "contract DataStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ORACLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetStore",
    outputs: [
      {
        internalType: "contract AssetStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "string",
        name: "market",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "creditTraderLoss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "string",
        name: "market",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "debitTraderProfit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "fundStore",
    outputs: [
      {
        internalType: "contract FundStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "link",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolStore",
    outputs: [
      {
        internalType: "contract PoolStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "roleStore",
    outputs: [
      {
        internalType: "contract RoleStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGov",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080346200007a57601f62002da838819003918201601f19168301916001600160401b038311848410176200007f5780849260409485528339810103126200007a578060206200006a925191620000568362000095565b015190620000648262000095565b620000a7565b604051612c9990816200010f8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116036200007a57565b6000549160018060a01b0319923384821617600055604051927f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785604060018060a01b0395868095168152336020820152a1168360015416176001551690600254161760025556fe60806040526004361015610013575b600080fd5b60003560e01c8063077d17f81461015357806312d43a511461014a5780631c4695f41461014157806338013f02146101385780634242bac01461012f57806347e7ef24146101265780634a4a7b041461011d5780634d2ccfd814610114578063597a0e361461010b57806360465d11146101025780637c4283bc146100f95780639d8e2177146100f0578063b931db6d146100e7578063cfad57a2146100de578063f3fef3a3146100d55763fc833ac6146100cd57600080fd5b61000e611b7a565b5061000e61139e565b5061000e6112c6565b5061000e61121f565b5061000e6111dd565b5061000e6111a1565b5061000e61114e565b5061000e6110fb565b5061000e611025565b5061000e610e67565b5061000e610649565b5061000e6105d8565b5061000e61057e565b5061000e61020d565b5061000e6101ba565b5061000e610167565b600091031261000e57565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60045416604051908152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b503461000e576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261057b576104e873ffffffffffffffffffffffffffffffffffffffff610264818454163314611bd4565b61029f61028660025473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b6040519061036983837fbf40fac10000000000000000000000000000000000000000000000000000000093848252602095869181806103136004820160609060208152600a60208201527f417373657453746f72650000000000000000000000000000000000000000000060408201520190565b03915afa90811561056e575b8891610551575b501673ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff00000000000000000000000000000000000000006003541617600355565b61042f8361038f61028660025473ffffffffffffffffffffffffffffffffffffffff1690565b84604051809286825281806103d96004820160609060208152600960208201527f46756e6453746f7265000000000000000000000000000000000000000000000060408201520190565b03915afa908115610544575b8891610527575b501673ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff00000000000000000000000000000000000000006004541617600455565b8161045261028660025473ffffffffffffffffffffffffffffffffffffffff1690565b60405192835260206004840152600960248401527f506f6f6c53746f726500000000000000000000000000000000000000000000006044840152829060649082905afa91821561051a575b85926104ed575b50501673ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff00000000000000000000000000000000000000006005541617600555565b604051f35b61050c9250803d10610513575b6105048183610f0b565b810190611c39565b38806104a4565b503d6104fa565b610522611c51565b61049d565b61053e9150853d8711610513576105048183610f0b565b386103ec565b61054c611c51565b6103e5565b6105689150853d8711610513576105048183610f0b565b38610326565b610576611c51565b61031f565b80fd5b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760206040517f352d05fe3946dbe49277552ba941e744d5a96d9c60bc1ba0ea5f1d3ae000f7c88152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60025416604051908152f35b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b506040807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576004908135916106848361062b565b602435906106aa61028660025473ffffffffffffffffffffffffffffffffffffffff1690565b610734845180927f9535ce120000000000000000000000000000000000000000000000000000000082526020938491818061071989820160609060208152601160208201527f6172654465706f7369747350617573656400000000000000000000000000000060408201520190565b03915afa908115610e5a575b600091610e3d575b5015612acf565b61073f831515612b34565b6107d161076461028660035473ffffffffffffffffffffffffffffffffffffffff1690565b82865180927f4f129c5300000000000000000000000000000000000000000000000000000000825281806107b78c8a830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b03915afa908115610e30575b600091610e03575b50612b99565b6107f361028660055473ffffffffffffffffffffffffffffffffffffffff1690565b90845181817ff8b2cb4f000000000000000000000000000000000000000000000000000000009485825281806108488c8a830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b03915afa908115610df6575b600091610dd9575b5073ffffffffffffffffffffffffffffffffffffffff87169485610d1a5750349361089e610286825473ffffffffffffffffffffffffffffffffffffffff1690565b803b1561000e5787517fe4652f4900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a1683820190815233602082015260408101889052909160009183919082908a90829060600103925af18015610d0d575b610cfa575b505b61093961028660055473ffffffffffffffffffffffffffffffffffffffff1690565b918751907fee39b63700000000000000000000000000000000000000000000000000000000825284828061098c8d87830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b0381875afa918215610ced575b600092610cce575b5080158015610cc6575b15610cae57505084915b803b1561000e57600083610a1b928b838c518096819582947f55c37ec30000000000000000000000000000000000000000000000000000000084528a84016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03925af18015610ca1575b610c8e575b50610a4e61028660055473ffffffffffffffffffffffffffffffffffffffff1690565b803b1561000e5787517ffd95b2e600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a1683820190815233602082015260408101859052909160009183919082908490829060600103925af18015610c81575b610c6e575b50610ae861028660055473ffffffffffffffffffffffffffffffffffffffff1690565b803b1561000e576000987f476bb75dda88c17897f99c2de3be0f64f242ac9b025839a6f3759b9fe9751b9695610bda938b80610b7789968c8f519485809481937f384bc4660000000000000000000000000000000000000000000000000000000083528b8a84016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03925af18015610c61575b610c48575b50610baa61028660055473ffffffffffffffffffffffffffffffffffffffff1690565b918b51958694859384938452830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b03915afa928315610c3b575b8893610c0c575b5050855193845260208401526040830152339180606081015b0390a351f35b610c2c929350803d10610c34575b610c248183610f0b565b810190611cdb565b903880610bed565b503d610c1a565b610c43611c51565b610be6565b80610c55610c5b92610eea565b8061015c565b38610b87565b610c69611c51565b610b82565b80610c55610c7b92610eea565b38610ac5565b610c89611c51565b610ac0565b80610c55610c9b92610eea565b38610a2b565b610ca9611c51565b610a26565b610cbb610cc09288611d31565b611d6e565b916109b5565b5081156109ab565b610ce6919250853d8711610c3457610c248183610f0b565b90386109a1565b610cf5611c51565b610999565b80610c55610d0792610eea565b38610915565b610d15611c51565b610910565b93610d3c610286825473ffffffffffffffffffffffffffffffffffffffff1690565b803b1561000e5787517fe4652f4900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a1683820190815233602082015260408101889052909160009183919082908490829060600103925af18015610dcc575b610db9575b50610917565b80610c55610dc692610eea565b38610db3565b610dd4611c51565b610dae565b610df09150823d8411610c3457610c248183610f0b565b3861085c565b610dfe611c51565b610854565b610e239150833d8511610e29575b610e1b8183610f0b565b810190611c5e565b386107cb565b503d610e11565b610e38611c51565b6107c3565b610e549150833d8511610e2957610e1b8183610f0b565b3861072d565b610e62611c51565b610725565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff8111610efe57604052565b610f06610eba565b604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610efe57604052565b60807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc82011261000e57600435610f828161062b565b91602435610f8f8161062b565b9167ffffffffffffffff60443581811161000e578260238201121561000e578060040135918211611018575b60405192610ff160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610f0b565b8284526024838301011161000e578160009260246020930183860137830101529060643590565b611020610eba565b610fbb565b503461000e576110ce61103736610f4c565b926110c96044602073ffffffffffffffffffffffffffffffffffffffff60019695965416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa9081156110ee575b6000916110d0575b50611c76565b6125d8565b005b6110e8915060203d8111610e2957610e1b8183610f0b565b386110c3565b6110f6611c51565b6110bb565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60035416604051908152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60055416604051908152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760206040516127108152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576020604051670de0b6b3a76400008152f35b503461000e576110ce61123136610f4c565b926112c16044602073ffffffffffffffffffffffffffffffffffffffff60019695965416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa9081156110ee576000916110d05750611c76565b611e44565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e577f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f7856004356113238161062b565b60005473ffffffffffffffffffffffffffffffffffffffff907fffffffffffffffffffffffff00000000000000000000000000000000000000008282169261136c843314611bd4565b84169116176000556040805173ffffffffffffffffffffffffffffffffffffffff9283168152919092166020820152a1005b503461000e576040807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760049081356113dd8161062b565b60243561140261028660025473ffffffffffffffffffffffffffffffffffffffff1690565b611471845180927f9535ce12000000000000000000000000000000000000000000000000000000008252602093849181806107198c820160609060208152601460208201527f6172655769746864726177616c7350617573656400000000000000000000000060408201520190565b61147c821515612b34565b6114f46114a161028660035473ffffffffffffffffffffffffffffffffffffffff1690565b82865180927f4f129c5300000000000000000000000000000000000000000000000000000000825281806107b78a8d830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b61151661028660055473ffffffffffffffffffffffffffffffffffffffff1690565b908451937ff8b2cb4f000000000000000000000000000000000000000000000000000000009283865282868061156b858c830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b0381845afa958615611b6d575b600096611b4e575b508651927fee39b6370000000000000000000000000000000000000000000000000000000084528084806115d3868d830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b0381855afa938415611b41575b600094611b22575b5086151580611b19575b6115fb90612bfe565b87517f6805d6ad00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416818b019081523360208201528a918a918490829081906040010381885afa908115611b0c575b600091611aef575b50808911611ae5575b50517f5722dee000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169181019182526116fe916116e9916116e1918590829081906020010381895afa908115611ad8575b600091611abb575b5089611d31565b612710900490565b97610cbb6116f78a8a611d1a565b9687611d31565b91803b1561000e5788517fe2ab3a9700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516818c0190815260208101859052909160009183919082908490829060400103925af18015611aae575b611a9b575b5061179361028660055473ffffffffffffffffffffffffffffffffffffffff1690565b803b1561000e5788517f12c7995a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516818c0190815233602082015260408101859052909160009183919082908490829060600103925af18015611a8e575b611a7b575b5061182d61028660055473ffffffffffffffffffffffffffffffffffffffff1690565b803b1561000e5788517f720ee37c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516818c0190815260208101879052909160009183919082908490829060400103925af18015611a6e575b611a5b575b506118c06102868a5473ffffffffffffffffffffffffffffffffffffffff1690565b91823b1561000e576119d482858b60009d7fae04f501857d63b8ca31ec171decfe6513ab9113a08210fc4acc3403190e0df99a8f80611972610c069b73ffffffffffffffffffffffffffffffffffffffff9e87519485809481937f078d3b79000000000000000000000000000000000000000000000000000000008352338d8c850160409194939294606082019573ffffffffffffffffffffffffffffffffffffffff80921683521660208201520152565b03925af18015611a4e575b611a3b575b506119a561028660055473ffffffffffffffffffffffffffffffffffffffff1690565b9251958694859384938452830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b03915afa928315611a2e575b8b93611a0f575b5050885194859416973397859094939260609260808301968352602083015260408201520152565b611a26929350803d10610c3457610c248183610f0b565b9038806119e7565b611a36611c51565b6119e0565b80610c55611a4892610eea565b38611982565b611a56611c51565b61197d565b80610c55611a6892610eea565b3861189e565b611a76611c51565b611899565b80610c55611a8892610eea565b3861180a565b611a96611c51565b611805565b80610c55611aa892610eea565b38611770565b611ab6611c51565b61176b565b611ad29150853d8711610c3457610c248183610f0b565b386116da565b611ae0611c51565b6116d2565b97506116e161166e565b611b069150843d8611610c3457610c248183610f0b565b38611665565b611b14611c51565b61165d565b508315156115f2565b81611b3a9295503d8611610c3457610c248183610f0b565b92386115e8565b611b49611c51565b6115e0565b611b66919650833d8511610c3457610c248183610f0b565b9438611580565b611b75611c51565b611578565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760206040517fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f198152f35b15611bdb57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600460248201527f21676f76000000000000000000000000000000000000000000000000000000006044820152fd5b9081602091031261000e5751611c4e8161062b565b90565b506040513d6000823e3d90fd5b9081602091031261000e5751801515810361000e5790565b15611c7d57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f21636f6e74726163742d726f6c650000000000000000000000000000000000006044820152fd5b9081602091031261000e575190565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818110611d25570390565b611d2d611cea565b0390565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821181151516611d62570290565b611d6a611cea565b0290565b8115611d78570490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b91908251928382526000905b848210611dfe5750601f84602094957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09311611df1575b0116010190565b6000858286010152611dea565b90602090818082850101519082860101520190611db3565b919594939092611e3060809460a0855260a0850190611da7565b966020840152604083015260608201520152565b92906005611e69610286825473ffffffffffffffffffffffffffffffffffffffff1690565b803b1561000e576040918251927fde900ab90000000000000000000000000000000000000000000000000000000084526000938481600495818381611ed48d8d8c84016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03925af1801561253e575b61252b575b50611f06610286835473ffffffffffffffffffffffffffffffffffffffff1690565b8151937f3ad07b1e000000000000000000000000000000000000000000000000000000008552602091828680611f5b8b86830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b0381845afa95861561251e575b87966124ff575b50851561245e5750611f98610286855473ffffffffffffffffffffffffffffffffffffffff1690565b938351947f4021fe0f0000000000000000000000000000000000000000000000000000000096878752848780611fed8d88830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b0381855afa968715612451575b899761242e575b5085517f59bca6670000000000000000000000000000000000000000000000000000000081526120559186828781875afa918215612421575b8b926123fa575b5061204f610cbb9142611d1a565b89611d31565b958087116123f2575b50803b156123ae5787866120c4928b8389518096819582947f384bc4660000000000000000000000000000000000000000000000000000000084528b84016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03925af180156123e5575b6123d2575b506120f6610286825473ffffffffffffffffffffffffffffffffffffffff1690565b803b156123ae57878661215b928b8389518096819582947ff51603de0000000000000000000000000000000000000000000000000000000084528b84016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03925af180156123c5575b6123b2575b5061218d610286825473ffffffffffffffffffffffffffffffffffffffff1690565b803b156123ae5797849261224f6102868a9896947fa23af116f782ad07f8010bd150b57bb7084c718271e5aa4bdab61a8be2986b059d9c859c6123229c9a5180927f473cc2af000000000000000000000000000000000000000000000000000000008252818381612224428d8d84016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03925af180156123a1575b61238e575b505473ffffffffffffffffffffffffffffffffffffffff1690565b908451967ff8b2cb4f0000000000000000000000000000000000000000000000000000000088528488806122a28786830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b0381865afa978815612381575b8998612353575b50855190815273ffffffffffffffffffffffffffffffffffffffff90931690830190815291929182918491829081906020015b03915afa958615612346575b95612327575b50505195869573ffffffffffffffffffffffffffffffffffffffff8091169a169886611e16565b0390a3565b61233e929550803d10610c3457610c248183610f0b565b9238806122fb565b61234e611c51565b6122f5565b859492908594929950612375906122e9973d8711610c3457610c248183610f0b565b989193509193946122b6565b612389611c51565b6122af565b80610c5561239b92610eea565b38612234565b6123a9611c51565b61222f565b8780fd5b80610c556123bf92610eea565b3861216b565b6123cd611c51565b612166565b80610c556123df92610eea565b386120d4565b6123ed611c51565b6120cf565b95503861205e565b610cbb91925061241961204f91893d8b11610c3457610c248183610f0b565b929150612041565b612429611c51565b61203a565b61205591975061244a90863d8811610c3457610c248183610f0b565b9690612001565b612459611c51565b611ffa565b969598509650509796505050813b156124fb57836124cd9596518096819582947f473cc2af000000000000000000000000000000000000000000000000000000008452429184016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03925af180156124ee575b6124df5750565b80610c556124ec92610eea565b565b6124f6611c51565b6124d8565b8380fd5b612517919650833d8511610c3457610c248183610f0b565b9438611f6f565b612526611c51565b611f68565b80610c5561253892610eea565b38611ee4565b612546611c51565b611edf565b1561255257565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f21706f6f6c2d62616c616e6365000000000000000000000000000000000000006044820152fd5b90926125c9606093969594608084526080840190611da7565b95602083015260408201520152565b928015612ac95761260161028660055473ffffffffffffffffffffffffffffffffffffffff1690565b604080517f4021fe0f0000000000000000000000000000000000000000000000000000000080825273ffffffffffffffffffffffffffffffffffffffff8616600480840191909152929593602092908382602481845afa918215612abc575b600092612a9d575b50803b1561000e576000885180927ff51603de0000000000000000000000000000000000000000000000000000000082528183816126cc8d8d8d84016020909392919373ffffffffffffffffffffffffffffffffffffffff60408201951681520152565b03925af18015612a90575b612a7d575b50808611612926575b50612707610286845473ffffffffffffffffffffffffffffffffffffffff1690565b92833b1561000e578661279d600088612322978d838b7f3092724f7adc895c13332959eb9d68277692c0f667f5c166c06996dfd6f21e2d9e51968795869485937f078d3b790000000000000000000000000000000000000000000000000000000085528c850160409194939294606082019573ffffffffffffffffffffffffffffffffffffffff80921683521660208201520152565b03925af18015612919575b612906575b5083866127d261028660055473ffffffffffffffffffffffffffffffffffffffff1690565b8351947ff8b2cb4f0000000000000000000000000000000000000000000000000000000086528386806128248685830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b0381855afa9586156128f9575b6000966128d6575b5084959661286f9551958694859384938452830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b03915afa9384156128c9575b6000946128aa575b50505194859473ffffffffffffffffffffffffffffffffffffffff809116991697856125b0565b6128c1929450803d10610c3457610c248183610f0b565b913880612883565b6128d1611c51565b61287b565b61286f9596506128f290853d8711610c3457610c248183610f0b565b9594612839565b612901611c51565b612831565b80610c5561291392610eea565b386127ad565b612921611c51565b6127a8565b6129309086611d1a565b61295261028660055473ffffffffffffffffffffffffffffffffffffffff1690565b6129c388517ff8b2cb4f0000000000000000000000000000000000000000000000000000000081528581806129a68b8b830191909173ffffffffffffffffffffffffffffffffffffffff6020820193169052565b0381865afa908115612a70575b600091612a53575b50831061254b565b803b1561000e5787517f720ee37c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8716868201908152602081019390935291600091839182908490829060400103925af18015612a46575b156126e55780610c55612a4092610eea565b386126e5565b612a4e611c51565b612a2e565b612a6a9150863d8811610c3457610c248183610f0b565b386129bb565b612a78611c51565b6129b3565b80610c55612a8a92610eea565b386126dc565b612a98611c51565b6126d7565b612ab5919250843d8611610c3457610c248183610f0b565b9038612668565b612ac4611c51565b612660565b50505050565b15612ad657565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f21706175736564000000000000000000000000000000000000000000000000006044820152fd5b15612b3b57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f21616d6f756e74000000000000000000000000000000000000000000000000006044820152fd5b15612ba057565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f21617373657400000000000000000000000000000000000000000000000000006044820152fd5b15612c0557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f21656d70747900000000000000000000000000000000000000000000000000006044820152fdfea264697066735822122011f4dc6542e7a5d4e1c05f773696f62aef24d3673f730030aa1e9a9f6936e9cd64736f6c634300080d0033";
