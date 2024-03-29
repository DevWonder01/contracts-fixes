/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MarketStore } from "../MarketStore";

export class MarketStore__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(rs: string, overrides?: Overrides): Promise<MarketStore> {
    return super.deploy(rs, overrides || {}) as Promise<MarketStore>;
  }
  getDeployTransaction(rs: string, overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(rs, overrides || {});
  }
  attach(address: string): MarketStore {
    return super.attach(address) as MarketStore;
  }
  connect(signer: Signer): MarketStore__factory {
    return super.connect(signer) as MarketStore__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketStore {
    return new Contract(address, _abi, signerOrProvider) as MarketStore;
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
    name: "MAX_FEE",
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
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "address",
            name: "chainlinkFeed",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "maxLeverage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxDeviation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liqThreshold",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "allowChainlinkExecution",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isClosed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isReduceOnly",
            type: "bool",
          },
        ],
        internalType: "struct MarketStore.Market",
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
        internalType: "string[]",
        name: "_markets",
        type: "string[]",
      },
    ],
    name: "getMany",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "address",
            name: "chainlinkFeed",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "maxLeverage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxDeviation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liqThreshold",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "allowChainlinkExecution",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isClosed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isReduceOnly",
            type: "bool",
          },
        ],
        internalType: "struct MarketStore.Market[]",
        name: "_marketInfos",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "getMarketByIndex",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMarketCount",
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
    name: "getMarketList",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
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
    name: "isGlobalReduceOnly",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "marketList",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "string",
        name: "market",
        type: "string",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "address",
            name: "chainlinkFeed",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "maxLeverage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxDeviation",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liqThreshold",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "allowChainlinkExecution",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isClosed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isReduceOnly",
            type: "bool",
          },
        ],
        internalType: "struct MarketStore.Market",
        name: "marketInfo",
        type: "tuple",
      },
    ],
    name: "set",
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
        internalType: "bool",
        name: "b",
        type: "bool",
      },
    ],
    name: "setIsGlobalReduceOnly",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_markets",
        type: "string[]",
      },
      {
        internalType: "bool[]",
        name: "isClosed",
        type: "bool[]",
      },
    ],
    name: "setMarketStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60803461006757601f611c3e38819003918201601f19168301916001600160401b0383118484101761006c5780849260209460405283398101031261006757516001600160a01b03811681036100675761005890610082565b604051611b6390816100db8239f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b60005460018060a01b03199133838316176000557f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f7856040805160018060a01b038095168152336020820152a11690600154161760015556fe60806040526004361015610013575b600080fd5b60003560e01c80630f2cbcb31461015357806312d43a511461014a578063232b956c14610141578063376416e41461013857806338013f021461012f5780633c74ecf5146101265780634a4a7b041461011d5780635b9907a414610114578063693ec85e1461010b578063ad44d25e14610102578063af4b9d3d146100f9578063b1b52666146100f0578063bc063e1a146100e7578063cfad57a2146100de578063fc833ac6146100d55763fd69f3c2146100cd57600080fd5b61000e610ff1565b5061000e610f97565b5061000e610eda565b5061000e610e9e565b5061000e610d8b565b5061000e610c8e565b5061000e610b63565b5061000e610a0c565b5061000e61082d565b5061000e6107da565b5061000e610798565b5061000e61073e565b5061000e6106ac565b5061000e6104d8565b5061000e610208565b5061000e610173565b8015150361000e57565b35906101718261015c565b565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576004356101af8161015c565b6101d273ffffffffffffffffffffffffffffffffffffffff60005416331461102e565b60ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff006004541691151516176004556000604051f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60005416604051908152f35b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6002548110156102c3575b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0190600090565b6102cb61025b565b610296565b90600182811c92168015610319575b60208310146102ea57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f16916102df565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761039457604052565b61039c610323565b604052565b90604051918260008254926103b5846102d0565b90818452600194858116908160001461042257506001146103df575b505061017192500383610353565b9093915060005260209081600020936000915b81831061040a575050610171935082010138806103d1565b855488840185015294850194879450918301916103f2565b9450505050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009150166020830152610171826040810138806103d1565b918091926000905b828210610480575011610479575050565b6000910152565b91508060209183015181860152018291610468565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f6020936104d181518092818752878088019101610460565b0116010190565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760043560025481101561000e5761054861055c9160026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace016103a1565b604051918291602083526020830190610495565b0390f35b60405190610140820182811067ffffffffffffffff82111761039457604052565b60209067ffffffffffffffff811161059b575b60051b0190565b6105a3610323565b610594565b81601f8201121561000e5780359067ffffffffffffffff821161061e575b604051926105fc60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601160185610353565b8284526020838301011161000e57816000926020809301838601378301015290565b610626610323565b6105c6565b9080601f8301121561000e5781359061064382610581565b926106516040519485610353565b828452602092838086019160051b8301019280841161000e57848301915b84831061067f5750505050505090565b823567ffffffffffffffff811161000e5786916106a1848480948901016105a8565b81520192019161066f565b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5767ffffffffffffffff60043581811161000e576106fd90369060040161062b565b906024359181831161000e573660238401121561000e57826004013591821161000e573660248360051b8501011161000e57602461073c9301906117ae565b005b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760206040517f352d05fe3946dbe49277552ba941e744d5a96d9c60bc1ba0ea5f1d3ae000f7c88152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602060ff600454166040519015158152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b503461000e576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126109515760025461086a81610581565b906108786040519283610353565b8082526002835260209283830191817f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace845b83831061092d5750505050604051928484019085855251809152604084019460408260051b8601019392955b8287106108e35785850386f35b90919293828061091d837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08a600196030186528851610495565b96019201960195929190926108d6565b600188819261093f859b9a989b6103a1565b815201920192019190969395966108aa565b80fd5b906109f89061098161096f8451610140808552840190610495565b60208501518382036020850152610495565b60408085015173ffffffffffffffffffffffffffffffffffffffff169083015292606081015160608301526080810151608083015260a081015160a083015260c081015160c08301526109dd60e082015160e084019015159052565b61010081810151151590830152610120908101511515910152565b90565b9060206109f8928181520190610954565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760043567ffffffffffffffff811161000e57610a70610a6261055c9236906004016105a8565b610a6a611a00565b506111a1565b610b2e60ff6007610a7f610560565b93610a89816103a1565b8552610a97600182016103a1565b6020860152610add610ac0600283015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff166040870152565b6003810154606086015260048101546080860152600581015460a0860152600681015460c08601520154818116151560e0850152600881901c8216151561010085015260101c161515610120830152565b604051918291826109fb565b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b359061017182610b3a565b503461000e577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60408136011261000e5767ffffffffffffffff9060043582811161000e57610bb69036906004016105a8565b6024359183831161000e5761014090833603011261000e57610bd6610560565b91806004013584811161000e57610bf390600436918401016105a8565b8352602481013593841161000e57610124610c8391610c1b61073c96600436918401016105a8565b6020860152610c2c60448201610b58565b6040860152606481013560608601526084810135608086015260a481013560a086015260c481013560c0860152610c6560e48201610166565b60e0860152610c776101048201610166565b61010086015201610166565b610120830152611093565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5761055c610548600435600254811015610cfe575b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace016103a1565b610d0661025b565b610cd2565b602080820190808352835180925260408301928160408460051b8301019501936000915b848310610d3f5750505050505090565b9091929394958480610d7b837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc086600196030187528a51610954565b9801930193019194939290610d2f565b503461000e576020807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760043567ffffffffffffffff811161000e57610ddc90369060040161062b565b805190610de882610581565b92610df66040519485610353565b8284527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610e2384610581565b0160005b818110610e885750505060005b828110610e49576040518061055c8682610d0b565b80610e68610e63610e5d610e83948661194b565b516111a1565b611a6e565b610e72828761194b565b52610e7d818661194b565b506114cc565b610e34565b8290610e92611a00565b82828901015201610e27565b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760206040516103e88152f35b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e577f53351836099c03ffc3b1727d8abd4b0222afa87d4ed76ae3102d51369ef7f7856040600435610f3981610b3a565b7fffffffffffffffffffffffff000000000000000000000000000000000000000060005473ffffffffffffffffffffffffffffffffffffffff80821693610f8185331461102e565b16918291161760005582519182526020820152a1005b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760206040517fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f198152f35b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e576020600254604051908152f35b1561103557565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600460248201527f21676f76000000000000000000000000000000000000000000000000000000006044820152fd5b90610171916110bb73ffffffffffffffffffffffffffffffffffffffff60005416331461102e565b611632565b156110c757565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f216d61782d6665650000000000000000000000000000000000000000000000006044820152fd5b1561112c57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f216d61782d6c65766572616765000000000000000000000000000000000000006044820152fd5b9061119d60209282815194859201610460565b0190565b60206111ba918160405193828580945193849201610460565b8101600381520301902090565b90601f81116111d557505050565b600091825260208220906020601f850160051c83019410611211575b601f0160051c01915b82811061120657505050565b8181556001016111fa565b90925082906111f1565b919091825167ffffffffffffffff8111611344575b6112448161123e84546102d0565b846111c7565b602080601f831160011461129d575081929394600092611292575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916179055565b01519050388061125f565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08316956112d185600052602060002090565b926000905b88821061132c575050836001959697106112f5575b505050811b019055565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690553880806112eb565b806001859682949686015181550195019301906112d6565b61134c610323565b611230565b9061149861012060076101719461136985518261121b565b61137a60208601516001830161121b565b6113e261139e604087015173ffffffffffffffffffffffffffffffffffffffff1690565b600283019073ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b606085015160038201556080850151600482015560a0850151600582015560c08501516006820155019261144d61141c60e0830151151590565b859060ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0083541691151516179055565b61149161145e610100830151151590565b85547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690151560081b61ff0016178555565b0151151590565b81547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff1690151560101b62ff000016179055565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146114f95760010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600092918154611537816102d0565b926001918083169081156115905750600114611554575b50505050565b90919293945060005260209081600020906000915b85831061157f575050505001903880808061154e565b805485840152918301918101611569565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001684525050500191503880808061154e565b6101719060025468010000000000000000811015611625575b6001810180600255811015611618575b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0161121b565b61162061025b565b6115ec565b61162d610323565b6115dc565b90611668906116496103e860a083015111156110c0565b61165a600160608301511015611125565b611663836111a1565b611351565b6002549060005b828110611681575061017191506115c3565b61168a8161028b565b506040908151906116f7602091836116a58482018093611528565b03936116d77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe095868101835282610353565b519020935191820192826116eb858961118a565b03908101835282610353565b5190201461170d57611708906114cc565b61166f565b505050565b9081602091031261000e57516109f881610b3a565b506040513d6000823e3d90fd5b9081602091031261000e57516109f88161015c565b1561175057565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f21636f6e74726163742d6f722d676f76000000000000000000000000000000006044820152fd5b90610171929161181f6040517f12d43a5100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff6020918281600481305afa90811561193e575b600091611911575b50163314908115611824575b50611749565b61196d565b905061186161184860015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b6040517fac4ab3fb0000000000000000000000000000000000000000000000000000000081523360048201527fa66b7a3e6b19d24ccb6f717fc232a1bb0278a7f83f8e2211835fc4ed0fe69f196024820152908290829060449082905afa918215611904575b6000926118d7575b505038611819565b6118f69250803d106118fd575b6118ee8183610353565b810190611734565b38806118cf565b503d6118e4565b61190c611727565b6118c7565b6119319150833d8511611937575b6119298183610353565b810190611712565b3861180d565b503d61191f565b611946611727565b611805565b6020918151811015611960575b60051b010190565b61196861025b565b611958565b92919260005b81518110156119f957806119e2611990610e5d6119e7948661194b565b878310156119ec575b60078360051b870135916119ac8361015c565b01907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff61ff00835492151560081b169116179055565b6114cc565b611973565b6119f461025b565b611999565b5050509050565b60405190610140820182811067ffffffffffffffff821117611a61575b6040528160608152606060208201526101206000918260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b611a69610323565b611a1d565b9061017160ff6007611a7e610560565b94611a88816103a1565b8652611a96600182016103a1565b6020870152611adc611abf600283015473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff166040880152565b6003810154606087015260048101546080870152600581015460a0870152600681015460c08701520154818116151560e0860152600881901c8216151561010086015260101c16151561012084015256fea264697066735822122005815b7018750b2170e998ab014e6d759c646465894fa12c648b8112b6d3110f64736f6c634300080d0033";
