/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PoolStore } from "../PoolStore";

export class PoolStore__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(rs: string, overrides?: Overrides): Promise<PoolStore> {
    return super.deploy(rs, overrides || {}) as Promise<PoolStore>;
  }
  getDeployTransaction(rs: string, overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(rs, overrides || {});
  }
  attach(address: string): PoolStore {
    return super.attach(address) as PoolStore;
  }
  connect(signer: Signer): PoolStore__factory {
    return super.connect(signer) as PoolStore__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolStore {
    return new Contract(address, _abi, signerOrProvider) as PoolStore;
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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "bufferPayoutPeriod",
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
    name: "decrementBalance",
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
    name: "decrementBufferBalance",
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
    name: "decrementClpSupply",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decrementUserClpBalance",
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
    ],
    name: "getAvailable",
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
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getBalance",
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
    inputs: [
      {
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
    ],
    name: "getBalances",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getBufferBalance",
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
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getClpSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getLastDeposited",
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
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getLastPaid",
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
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getUserBalance",
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
    inputs: [
      {
        internalType: "address[]",
        name: "_assets",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getUserBalances",
    outputs: [
      {
        internalType: "uint256[]",
        name: "_balances",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getUserClpBalance",
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
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getWithdrawalFee",
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
    name: "incrementBalance",
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
    name: "incrementBufferBalance",
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
    name: "incrementClpSupply",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "incrementUserClpBalance",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "setBufferPayoutPeriod",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "setLastDeposited",
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
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "setLastPaid",
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
        name: "bps",
        type: "uint256",
      },
    ],
    name: "setWithdrawalFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60803461006757601f611b7938819003918201601f19168301916001600160401b0383118484101761006c5780849260209460405283398101031261006757516001600160a01b03811681036100675761005890610082565b604051611a9790816100e28239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b60005460018060a01b03199133838316176000557f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f7856040805160018060a01b038095168152336020820152a11690600154161760015562093a8060025556fe60806040526004361015610013575b600080fd5b60003560e01c806312c7995a1461025757806312d43a511461024e578063196cf9ae146102455780632d2ae1c11461023c57806338013f0214610233578063384bc4661461022a5780633ad07b1e146102215780633d357b02146102185780634021fe0f1461020f578063473cc2af146102065780634a4a7b04146101fd57806355c37ec3146101f45780635722dee0146101eb57806359bca667146101e2578063650b1b27146101d95780636805d6ad146101d0578063720ee37c146101c757806381906b80146101be5780638c754434146101b55780639e6eeb2e146101ac578063a23fefb1146101a3578063cfad57a21461019a578063de900ab914610191578063e2ab3a9714610188578063ee39b6371461017f578063f51603de14610176578063f8b2cb4f1461016d578063fc833ac6146101645763fd95b2e61461015c57600080fd5b61000e61141d565b5061000e6113c3565b5061000e611359565b5061000e611285565b5061000e61121b565b5061000e611147565b5061000e611073565b5061000e610fb6565b5061000e610f5a565b5061000e610e85565b5061000e610e20565b5061000e610d70565b5061000e610c9c565b5061000e610c82565b5061000e610be1565b5061000e610ba4565b5061000e610b3a565b5061000e610a66565b5061000e610a13565b5061000e61091e565b5061000e6108b4565b5061000e610837565b5061000e6107cd565b5061000e6106d1565b5061000e610677565b5061000e6105ae565b5061000e6104c8565b5061000e610475565b5061000e6102c8565b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc606091011261000e576004356102b481610260565b906024356102c181610260565b9060443590565b503461000e5760056103e96102dc3661027e565b93909173ffffffffffffffffffffffffffffffffffffffff80600154169161037160405180947fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f19602483015281604460209788935afa908115610468575b60009161043b575b50611609565b169485600052828252806103a98560406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b546000918691116103ec575050506000945b6000525260406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b55005b6040828961041e9452868652209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b5481811061042e575b03946103bb565b61043661166e565b610427565b61045b9150853d8711610461575b6104538183611596565b8101906115e4565b3861036b565b503d610449565b6104706115fc565b610363565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760043561050481610260565b73ffffffffffffffffffffffffffffffffffffffff9061052982600054163314611501565b1660005260096020526024356040600020556000604051f35b9181601f8401121561000e5782359167ffffffffffffffff831161000e576020808501948460051b01011161000e57565b6020908160408183019282815285518094520193019160005b82811061059a575050505090565b83518552938101939281019260010161058c565b503461000e576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576004803567ffffffffffffffff811161000e576105ff9036908301610542565b909161060a82611888565b93600092835b81811061062957604051806106258982610573565b0390f35b8073ffffffffffffffffffffffffffffffffffffffff61064d61067293858a611935565b3561065781610260565b168652848452604086205461066c828a61194d565b526118d7565b610610565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760206040517f352d05fe3946dbe49277552ba941e744d5a96d9c60bc1ba0ea5f1d3ae000f7c88152f35b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576107a660043561071081610260565b61079d6044602073ffffffffffffffffffffffffffffffffffffffff60015416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa9081156107c0575b6000916107a85750611609565b602435906116b6565b005b61045b915060203d8111610461576104538183611596565b6107c86115fc565b610790565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5773ffffffffffffffffffffffffffffffffffffffff60043561081e81610260565b1660005260086020526020604060002054604051908152f35b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5773ffffffffffffffffffffffffffffffffffffffff60043561088881610260565b16600052600460205260206108ac604060002054600783526040600020549061169e565b604051908152f35b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5773ffffffffffffffffffffffffffffffffffffffff60043561090581610260565b1660005260076020526020604060002054604051908152f35b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576107a660043561095d81610260565b6109e96044602073ffffffffffffffffffffffffffffffffffffffff60015416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa9081156107c0576000916107a85750611609565b6024359073ffffffffffffffffffffffffffffffffffffffff166000526008602052604060002055565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576107a6600435610aa581610260565b610b316044602073ffffffffffffffffffffffffffffffffffffffff60015416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa9081156107c0576000916107a85750611609565b602435906117d4565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5773ffffffffffffffffffffffffffffffffffffffff600435610b8b81610260565b1660005260096020526020604060002054604051908152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576020600254604051908152f35b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57610c3473ffffffffffffffffffffffffffffffffffffffff600054163314611501565b600435600255005b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc604091011261000e57600435610c7281610260565b90602435610c7f81610260565b90565b503461000e5760206108ac610c9636610c3c565b9061196f565b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576107a6600435610cdb81610260565b610d676044602073ffffffffffffffffffffffffffffffffffffffff60015416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa9081156107c0576000916107a85750611609565b602435906116e8565b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760043567ffffffffffffffff811161000e57610dc0903690600401610542565b90602435610dcd81610260565b610dd683611888565b9260005b818110610def57604051806106258782610573565b80610e1184610e02610e1b948689611935565b35610e0c81610260565b61196f565b61066c828861194d565b610dda565b503461000e576020610e7c73ffffffffffffffffffffffffffffffffffffffff610e4936610c3c565b91166000526005835260406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b54604051908152f35b503461000e576103e9610e973661027e565b929173ffffffffffffffffffffffffffffffffffffffff90610f27604460208460015416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa9081156107c0576000916107a85750611609565b16600052600660205260406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b503461000e576020610e7c73ffffffffffffffffffffffffffffffffffffffff610f8336610c3c565b91166000526006835260406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e577f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f785604060043561101581610260565b7fffffffffffffffffffffffff000000000000000000000000000000000000000060005473ffffffffffffffffffffffffffffffffffffffff8082169361105d853314611501565b16918291161760005582519182526020820152a1005b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576107a66004356110b281610260565b61113e6044602073ffffffffffffffffffffffffffffffffffffffff60015416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa9081156107c0576000916107a85750611609565b60243590611747565b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576107a660043561118681610260565b6112126044602073ffffffffffffffffffffffffffffffffffffffff60015416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa9081156107c0576000916107a85750611609565b60243590611802565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5773ffffffffffffffffffffffffffffffffffffffff60043561126c81610260565b1660005260036020526020604060002054604051908152f35b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576107a66004356112c481610260565b6113506044602073ffffffffffffffffffffffffffffffffffffffff60015416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa9081156107c0576000916107a85750611609565b60243590611775565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5773ffffffffffffffffffffffffffffffffffffffff6004356113aa81610260565b1660005260046020526020604060002054604051908152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760206040517fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f198152f35b503461000e576114f56114fd6114323661027e565b939173ffffffffffffffffffffffffffffffffffffffff906114c2604460208460015416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa9081156107c0576000916107a85750611609565b16600052600560205260406000209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b91825461169e565b9055005b1561150857565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600460248201527f21676f76000000000000000000000000000000000000000000000000000000006044820152fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176115d757604052565b6115df611566565b604052565b9081602091031261000e5751801515810361000e5790565b506040513d6000823e3d90fd5b1561161057565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f21636f6e74726163742d726f6c650000000000000000000000000000000000006044820152fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b811981116116aa570190565b6116b261166e565b0190565b73ffffffffffffffffffffffffffffffffffffffff1660005260046020526116e4604060002091825461169e565b9055565b73ffffffffffffffffffffffffffffffffffffffff1660008181526004602052604080822054929390928110611727575080925b815260046020522055565b8282205481811061173a575b039261171c565b61174261166e565b611733565b73ffffffffffffffffffffffffffffffffffffffff1660005260076020526116e4604060002091825461169e565b73ffffffffffffffffffffffffffffffffffffffff16600081815260076020526040808220549293909281106117b4575080925b815260076020522055565b828220548181106117c7575b03926117a9565b6117cf61166e565b6117c0565b73ffffffffffffffffffffffffffffffffffffffff1660005260036020526116e4604060002091825461169e565b73ffffffffffffffffffffffffffffffffffffffff1660008181526003602052604080822054929390928110611841575080925b815260036020522055565b82822054818110611854575b0392611836565b61185c61166e565b61184d565b60209067ffffffffffffffff811161187b575b60051b0190565b611883611566565b611874565b9061189282611861565b61189f6040519182611596565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06118cd8294611861565b0190602036910137565b6001907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146116aa570190565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b91908110156119455760051b0190565b611883611905565b6020918151811015611962575b60051b010190565b61196a611905565b61195a565b73ffffffffffffffffffffffffffffffffffffffff166000918183526003602052604083205415611a5c576119cc906005602052604084209073ffffffffffffffffffffffffffffffffffffffff16600052602052604060002090565b548183526004602052604083205491817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516611a4f575b835260036020526040832054928315611a225750020490565b807f4e487b7100000000000000000000000000000000000000000000000000000000602492526012600452fd5b611a5761166e565b611a09565b50509056fea2646970667358221220ef4f613144c8ff2800161f187fd7910b662c9d17f8f309b9c858ab723eaf289e64736f6c634300080d0033";
