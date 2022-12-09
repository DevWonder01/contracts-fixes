/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PositionStore } from "../PositionStore";

export class PositionStore__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(rs: string, overrides?: Overrides): Promise<PositionStore> {
    return super.deploy(rs, overrides || {}) as Promise<PositionStore>;
  }
  getDeployTransaction(rs: string, overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(rs, overrides || {});
  }
  attach(address: string): PositionStore {
    return super.attach(address) as PositionStore;
  }
  connect(signer: Signer): PositionStore__factory {
    return super.connect(signer) as PositionStore__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PositionStore {
    return new Contract(address, _abi, signerOrProvider) as PositionStore;
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
    inputs: [
      {
        components: [
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
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "margin",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "fundingTracker",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct PositionStore.Position",
        name: "position",
        type: "tuple",
      },
    ],
    name: "addOrUpdate",
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
        internalType: "string",
        name: "market",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
    ],
    name: "decrementOI",
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
    ],
    name: "get",
    outputs: [
      {
        components: [
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
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "margin",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "fundingTracker",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct PositionStore.Position",
        name: "",
        type: "tuple",
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
        internalType: "string",
        name: "market",
        type: "string",
      },
    ],
    name: "getOI",
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
        internalType: "string",
        name: "market",
        type: "string",
      },
    ],
    name: "getOILong",
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
        internalType: "string",
        name: "market",
        type: "string",
      },
    ],
    name: "getOIShort",
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
    ],
    name: "getPosition",
    outputs: [
      {
        components: [
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
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "margin",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "fundingTracker",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct PositionStore.Position",
        name: "position",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPositionCount",
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
        internalType: "bytes32[]",
        name: "keys",
        type: "bytes32[]",
      },
    ],
    name: "getPositions",
    outputs: [
      {
        components: [
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
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "margin",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "fundingTracker",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct PositionStore.Position[]",
        name: "_positions",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
    ],
    name: "getPositions",
    outputs: [
      {
        components: [
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
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "margin",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "fundingTracker",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct PositionStore.Position[]",
        name: "_positions",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "markets",
        type: "string[]",
      },
    ],
    name: "getPositions",
    outputs: [
      {
        components: [
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
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "margin",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "fundingTracker",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct PositionStore.Position[]",
        name: "_positions",
        type: "tuple[]",
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
    ],
    name: "getUserPositions",
    outputs: [
      {
        components: [
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
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "margin",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "fundingTracker",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct PositionStore.Position[]",
        name: "_positions",
        type: "tuple[]",
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
        internalType: "string",
        name: "market",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
    ],
    name: "incrementOI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oracleFeeShare",
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
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeMarginBuffer",
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
        internalType: "uint256",
        name: "bps",
        type: "uint256",
      },
    ],
    name: "setOracleFeeShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bps",
        type: "uint256",
      },
    ],
    name: "setRemoveMarginBuffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080346200006f57601f620026ef38819003918201601f19168301916001600160401b0383118484101762000074578084926020946040528339810103126200006f57516001600160a01b03811681036200006f576200005f906200008a565b6040516126029081620000ed8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b60005460018060a01b03199133838316176000557f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f7856040805160018060a01b038095168152336020820152a1169060015416176001556103e88060025560035556fe60806040526004361015610013575b600080fd5b60003560e01c806307496b74146101d65780630bbfdb32146101cd5780630dc65e761461016a57806312c35353146101c457806312d43a51146101bb5780632a26f17f146101b25780632a6bc2dd146101a957806338013f02146101a0578063428d1561146101975780634a4a7b041461018e5780636b093238146101855780637149d6b01461017c57806378eaac7d146101735780637d4c14031461016a5780638168347614610161578063970aa0d814610158578063cac687361461014f578063cfad57a214610146578063e512766b1461013d578063e5626b6c14610134578063e9bed5c11461012b578063ed5832f8146101225763fc833ac61461011a57600080fd5b61000e611691565b5061000e611636565b5061000e6114d5565b5061000e61148a565b5061000e611312565b5061000e611255565b5061000e6111fa565b5061000e6111af565b5061000e611172565b5061000e6108fa565b5061000e611089565b5061000e610f12565b5061000e610ed5565b5061000e610e82565b5061000e610d1f565b5061000e610cc5565b5061000e610c02565b5061000e610a6e565b5061000e61096a565b5061000e61092d565b5061000e61046b565b5061000e610391565b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b3590610208826101df565b565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761027b57604052565b61028361020a565b604052565b60405190610120820182811067ffffffffffffffff82111761027b57604052565b92919267ffffffffffffffff821161030f575b604051916102f260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116018461023a565b82948184528183011161000e578281602093846000960137010152565b61031761020a565b6102bc565b9080601f8301121561000e57816020610337933591016102a9565b90565b9060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83011261000e57600435610371816101df565b916024359067ffffffffffffffff821161000e576103379160040161031c565b503461000e5760206103dc8173ffffffffffffffffffffffffffffffffffffffff6103bb3661033a565b911660005260058252604060002082604051948386809551938492016107e5565b82019081520301902054604051908152f35b8015150361000e57565b3590610208826103ee565b9060807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc83011261000e5760043561043a816101df565b916024359067ffffffffffffffff821161000e5761045a9160040161031c565b9060443590606435610337816103ee565b503461000e5761047a36610403565b61050b6044602073ffffffffffffffffffffffffffffffffffffffff60019695965416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa908115610775575b600091610747575b50611772565b8261053f6105398673ffffffffffffffffffffffffffffffffffffffff166000526004602052604060002090565b846117d7565b54116107115760005b6105756105398673ffffffffffffffffffffffffffffffffffffffff166000526004602052604060002090565b551561065157816105e6926105ad6105398673ffffffffffffffffffffffffffffffffffffffff166000526005602052604060002090565b54116105ea57506105e060009373ffffffffffffffffffffffffffffffffffffffff166000526005602052604060002090565b906117d7565b555b005b61062a6105e09161062461061e8773ffffffffffffffffffffffffffffffffffffffff166000526005602052604060002090565b856117d7565b54611845565b9373ffffffffffffffffffffffffffffffffffffffff166000526005602052604060002090565b816105e6926106836105398673ffffffffffffffffffffffffffffffffffffffff166000526006602052604060002090565b54116106b657506105e060009373ffffffffffffffffffffffffffffffffffffffff166000526006602052604060002090565b6106ea6105e09161062461061e8773ffffffffffffffffffffffffffffffffffffffff166000526006602052604060002090565b9373ffffffffffffffffffffffffffffffffffffffff166000526006602052604060002090565b6107428361062461061e8773ffffffffffffffffffffffffffffffffffffffff166000526004602052604060002090565b610548565b610768915060203d811161076e575b610760818361023a565b810190611750565b38610505565b503d610756565b61077d611765565b6104fd565b60607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc82011261000e576004356107b8816101df565b916024356107c5816101df565b916044359067ffffffffffffffff821161000e576103379160040161031c565b918091926000905b8282106108055750116107fe575050565b6000910152565b915080602091830151818601520182916107ed565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602093610856815180928187528780880191016107e5565b0116010190565b9073ffffffffffffffffffffffffffffffffffffffff825116815261089f6020830151602083019073ffffffffffffffffffffffffffffffffffffffff169052565b6108b8604083015161012080604085015283019061081a565b606080840151151590830152916080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008091015191015290565b503461000e5761092961091561090f36610782565b9161235b565b60405191829160208352602083019061085d565b0390f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576020600354604051908152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b9181601f8401121561000e5782359167ffffffffffffffff831161000e576020808501948460051b01011161000e57565b602080820190808352835180925260408301928160408460051b8301019501936000915b848310610a225750505050505090565b9091929394958480610a5e837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc086600196030187528a5161085d565b9801930193019194939290610a12565b503461000e576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57600490813567ffffffffffffffff811161000e57610ac090369084016109bd565b610acc81939293612488565b93600091825b818110610ae7576040518061092989826109ee565b80610af6610bfd928489612523565b3585526007808752600860409182882090610b0f610288565b93610b4b610b31845473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff168652565b610b8b610b6f600185015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16868d0152565b610b97600284016121c0565b90850152610bb5610bac600384015460ff1690565b15156060860152565b878201546080850152600582015460a0850152600682015460c085015281015460e08401520154610100820152610bec828a61253b565b52610bf7818961253b565b506124f5565b610ad2565b503461000e576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5773ffffffffffffffffffffffffffffffffffffffff600435610c54816101df565b16600091818352600a8082526040918285205491610c7183612488565b94865b848110610c885785518061092989826109ee565b610cc090828952838552610c9e81888b20611d57565b90549060031b1c895260078552610cb6878a2061227f565b610bec828a61253b565b610c74565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760206040517f352d05fe3946dbe49277552ba941e744d5a96d9c60bc1ba0ea5f1d3ae000f7c88152f35b503461000e57610d2e36610403565b73ffffffffffffffffffffffffffffffffffffffff93919390816001541691610dc360405180947fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f19602483015281604460209788935afa908115610e75575b600091610e5e5750611772565b831690816000526004835260406000208360405180928851610de88184868d016107e5565b820190815203019020610dfc87825461182d565b905515610e42575050610e3e916105e0610e369273ffffffffffffffffffffffffffffffffffffffff166000526005602052604060002090565b91825461182d565b9055005b610e369250610e3e9391600691600052526040600020906117d7565b6107689150853d871161076e57610760818361023a565b610e7d611765565b610db6565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576020600254604051908152f35b503461000e576040807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760088054600480359260243592808511611081575b50610f6284612488565b92805b610f6f828761182d565b811015611074579061106c828885610f89610f6f96611d12565b929054600390600094821b1c845261102a610bac600792846020978589522094611011610fb4610288565b98610ff0610fd6895473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff168b52565b600188015473ffffffffffffffffffffffffffffffffffffffff16908a0152565b61101d600287016121c0565b9088015284015460ff1690565b898201546080850152600582015460a0850152600682015460c085015281015460e08401520154610100820152611061828961253b565b52610bf7818861253b565b909150610f65565b86518061092987826109ee565b935038610f58565b503461000e577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60208136011261000e576004359067ffffffffffffffff9081831161000e5761012090833603011261000e576110e4610288565b906110f1836004016101fd565b82526110ff602484016101fd565b6020830152604483013590811161000e576105e892611127610104926004369184010161031c565b6040840152611138606482016103f8565b60608401526084810135608084015260a481013560a084015260c481013560c084015260e481013560e0840152013561010082015261185c565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576020600854604051908152f35b503461000e5760206103dc8173ffffffffffffffffffffffffffffffffffffffff6111d93661033a565b911660005260068252604060002082604051948386809551938492016107e5565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5761124d73ffffffffffffffffffffffffffffffffffffffff6000541633146116eb565b600435600255005b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e577f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f78560406004356112b4816101df565b7fffffffffffffffffffffffff000000000000000000000000000000000000000060005473ffffffffffffffffffffffffffffffffffffffff808216936112fc8533146116eb565b16918291161760005582519182526020820152a1005b503461000e576113bc61132436610782565b73ffffffffffffffffffffffffffffffffffffffff93919293926113b6604460208660015416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa908115610775576000916107475750611772565b8461255d565b9116600052600a6020526113d4816040600020612078565b506113de81611f9f565b5060005260076020526000600860408220828155826001820155600281016114068154611abf565b9081611436575b505082600382015582600482015582600582015582600682015582600782015501556000604051f35b601f821160011461144d57849150555b388061140d565b611475611485926001601f61146785600052602060002090565b920160051c82019101611b50565b6000908082528160208120915555565b611446565b503461000e5760206103dc8173ffffffffffffffffffffffffffffffffffffffff6114b43661033a565b911660005260048252604060002082604051948386809551938492016107e5565b503461000e5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5767ffffffffffffffff60043581811161000e576115269036906004016109bd565b9060243583811161000e5761153f9036906004016109bd565b909360443581811161000e576115599036906004016109bd565b9261156386612488565b9560005b81811061157c57604051806109298a826109ee565b611587818389612523565b3590611592826101df565b61159d81858c612523565b356115a7816101df565b87821015611629575b8160051b8601357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18736030181121561000e5786019283359388851161000e5760200191843603831361000e5761090f61160f936116249636916102a9565b611619828b61253b565b52610bf7818a61253b565b611567565b611631611ce2565b6115b0565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5761168973ffffffffffffffffffffffffffffffffffffffff6000541633146116eb565b600435600355005b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760206040517fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f198152f35b156116f257565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600460248201527f21676f76000000000000000000000000000000000000000000000000000000006044820152fd5b9081602091031261000e5751610337816103ee565b506040513d6000823e3d90fd5b1561177957565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f21636f6e74726163742d726f6c650000000000000000000000000000000000006044820152fd5b6020906117f19282604051948386809551938492016107e5565b82019081520301902090565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81198111611839570190565b6118416117fd565b0190565b818110611850570390565b6118586117fd565b0390565b6119fa611ab6611abc92611ab1611a8b73ffffffffffffffffffffffffffffffffffffffff926118fa604460208660015416604051928380927fac4ab3fb0000000000000000000000000000000000000000000000000000000082523360048301527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f1960248301525afa908115610775576000916107475750611772565b8381511693611918602083019182511695604084019687519161255d565b9687958660005260076020526119f06119ac604060002094611992611951885173ffffffffffffffffffffffffffffffffffffffff1690565b879073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b5173ffffffffffffffffffffffffffffffffffffffff1690565b600185019073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b5160028301611bac565b611a3e611a0a6060840151151590565b600383019060ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0083541691151516179055565b6080820151600482015560a0820151600582015560c0820151600682015560e0820151600782015560086101008301519101555173ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16600052600a602052604060002090565b611e14565b50611d7d565b50565b90600182811c92168015611b08575b6020831014611ad957565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691611ace565b91611b4c9183549060031b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811b9283911b169119161790565b9055565b818110611b5b575050565b60008155600101611b50565b9190601f8111611b7657505050565b610208926000526020600020906020601f840160051c83019310611ba2575b601f0160051c0190611b50565b9091508190611b95565b919091825167ffffffffffffffff8111611cd5575b611bd581611bcf8454611abf565b84611b67565b602080601f8311600114611c2e575081929394600092611c23575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916179055565b015190503880611bf0565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0831695611c6285600052602060002090565b926000905b888210611cbd57505083600195969710611c86575b505050811b019055565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c19169055388080611c7c565b80600185968294968601518155019501930190611c67565b611cdd61020a565b611bc1565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600854811015611d4a575b60086000527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30190600090565b611d52611ce2565b611d1d565b8054821015611d70575b60005260206000200190600090565b611d78611ce2565b611d61565b80600052600960205260406000205415600014611e0e578060085468010000000000000000811015611e01575b6001810180600855811015611df4575b7ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155600854906000526009602052604060002055600190565b611dfc611ce2565b611dba565b611e0961020a565b611daa565b50600090565b6001810190826000528160205260406000205415600014611eaf5782611e8d611e56835468010000000000000000811015611ea2575b60018101855584611d57565b819391549060031b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811b9283911b169119161790565b90555491600052602052604060002055600190565b611eaa61020a565b611e4a565b505050600090565b6008548015611f285760007ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83019280841015611f1b575b600883520155600855565b611f23611ce2565b611f10565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b8054908115611f28577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80920191611f8f8383611d57565b909182549160031b1b1916905555565b60008181526009602052604090205480156120715760009181600161201a9310612064575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8082019060085460018110612057575b0190808203612020575b50505061200a611eb7565b6000526009602052604060002090565b55600190565b61200a6120489161204061203661204e95611d12565b90549060031b1c90565b928391611d12565b90611b12565b55388080611fff565b61205f6117fd565b611ff5565b61206c6117fd565b611fc4565b5050600090565b6001810191806000528260205260406000205492831515600014612151576120eb61201a9385600160009710612144575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80820190835460018110612137575b01908082036120fa575b505050611f57565b90600052602052604060002090565b61211e6120489161210e61212e9487611d57565b90549060031b1c92839187611d57565b8590600052602052604060002090565b553880806120e3565b61213f6117fd565b6120d9565b61214c6117fd565b6120a9565b50505050600090565b60405190610120820182811067ffffffffffffffff8211176121b3575b60405281610100600091828152826020820152606060408201528260608201528260808201528260a08201528260c08201528260e08201520152565b6121bb61020a565b612177565b90604051918260008254926121d484611abf565b90818452600194858116908160001461224157506001146121fe575b50506102089250038361023a565b9093915060005260209081600020936000915b818310612229575050610208935082010138806121f0565b85548884018501529485019487945091830191612211565b9450505050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009150166020830152610208826040810138806121f0565b90600861228a610288565b926122c66122ac825473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff168552565b6123076122ea600183015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff166020860152565b612313600282016121c0565b6040850152612329610bac600383015460ff1690565b60048101546080850152600581015460a0850152600681015460c0850152600781015460e08501520154610100830152565b9061236f929161236961215a565b5061255d565b600052600760205260406000206008612386610288565b916123c26123a8825473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff168452565b6124036123e6600183015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff166020850152565b61240f600282016121c0565b604084015261242e612425600383015460ff1690565b15156060850152565b60048101546080840152600581015460a0840152600681015460c0840152600781015460e0840152015461010082015290565b60209067ffffffffffffffff811161247b575b60051b0190565b61248361020a565b612474565b9061249282612461565b61249f604051918261023a565b8281527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe06124cd8294612461565b019060005b8281106124de57505050565b6020906124e961215a565b828285010152016124d2565b6001907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114611839570190565b91908110156125335760051b0190565b612483611ce2565b6020918151811015612550575b60051b010190565b612558611ce2565b612548565b60486125c69193929360405193849160208301967fffffffffffffffffffffffffffffffffffffffff000000000000000000000000809260601b16885260601b1660348301526125b681518092602086860191016107e5565b810103602881018452018261023a565b5190209056fea26469706673582212209a80742503131c02dd8be1655e820b4dbd3fd39f2db1310b8978c995c27874a464736f6c634300080d0033";
