/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface StakingStoreInterface extends ethers.utils.Interface {
  functions: {
    "CONTRACT()": FunctionFragment;
    "ORACLE()": FunctionFragment;
    "UNIT()": FunctionFragment;
    "decrementBalance(address,uint256)": FunctionFragment;
    "decrementSupply(uint256)": FunctionFragment;
    "feeShare()": FunctionFragment;
    "getBalance(address)": FunctionFragment;
    "getClaimableReward(address,address)": FunctionFragment;
    "getPendingReward(address)": FunctionFragment;
    "getPreviousReward(address,address)": FunctionFragment;
    "getRewardPerTokenSum(address)": FunctionFragment;
    "getTotalSupply()": FunctionFragment;
    "gov()": FunctionFragment;
    "incrementBalance(address,uint256)": FunctionFragment;
    "incrementPendingReward(address,uint256)": FunctionFragment;
    "incrementRewardPerToken(address)": FunctionFragment;
    "incrementSupply(uint256)": FunctionFragment;
    "roleStore()": FunctionFragment;
    "setClaimableReward(address,address,uint256)": FunctionFragment;
    "setFeeShare(uint256)": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "updateClaimableReward(address,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "CONTRACT", values?: undefined): string;
  encodeFunctionData(functionFragment: "ORACLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "UNIT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decrementBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decrementSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "feeShare", values?: undefined): string;
  encodeFunctionData(functionFragment: "getBalance", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getClaimableReward",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingReward",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPreviousReward",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardPerTokenSum",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "incrementBalance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "incrementPendingReward",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "incrementRewardPerToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "incrementSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setClaimableReward",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeShare",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateClaimableReward",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "CONTRACT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ORACLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "UNIT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decrementBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decrementSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeShare", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getClaimableReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPreviousReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardPerTokenSum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "incrementBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incrementPendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incrementRewardPerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incrementSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setClaimableReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeShare",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateClaimableReward",
    data: BytesLike
  ): Result;

  events: {
    "SetGov(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
}

export class StakingStore extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: StakingStoreInterface;

  functions: {
    CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<[string]>;

    ORACLE(overrides?: CallOverrides): Promise<[string]>;

    "ORACLE()"(overrides?: CallOverrides): Promise<[string]>;

    UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    "UNIT()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    decrementBalance(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decrementBalance(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    decrementSupply(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "decrementSupply(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    feeShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    "feeShare()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getBalance(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getClaimableReward(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getClaimableReward(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPendingReward(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPendingReward(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPreviousReward(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPreviousReward(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRewardPerTokenSum(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getRewardPerTokenSum(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getTotalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    "gov()"(overrides?: CallOverrides): Promise<[string]>;

    incrementBalance(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "incrementBalance(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    incrementPendingReward(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "incrementPendingReward(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    incrementRewardPerToken(
      asset: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "incrementRewardPerToken(address)"(
      asset: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    incrementSupply(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "incrementSupply(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    "roleStore()"(overrides?: CallOverrides): Promise<[string]>;

    setClaimableReward(
      asset: string,
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setClaimableReward(address,address,uint256)"(
      asset: string,
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setFeeShare(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFeeShare(uint256)"(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setGov(_gov: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setGov(address)"(
      _gov: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateClaimableReward(
      asset: string,
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateClaimableReward(address,address)"(
      asset: string,
      user: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  CONTRACT(overrides?: CallOverrides): Promise<string>;

  "CONTRACT()"(overrides?: CallOverrides): Promise<string>;

  ORACLE(overrides?: CallOverrides): Promise<string>;

  "ORACLE()"(overrides?: CallOverrides): Promise<string>;

  UNIT(overrides?: CallOverrides): Promise<BigNumber>;

  "UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

  decrementBalance(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decrementBalance(address,uint256)"(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  decrementSupply(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "decrementSupply(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  feeShare(overrides?: CallOverrides): Promise<BigNumber>;

  "feeShare()"(overrides?: CallOverrides): Promise<BigNumber>;

  getBalance(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getBalance(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getClaimableReward(
    asset: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getClaimableReward(address,address)"(
    asset: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPendingReward(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPendingReward(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPreviousReward(
    asset: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPreviousReward(address,address)"(
    asset: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRewardPerTokenSum(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getRewardPerTokenSum(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  gov(overrides?: CallOverrides): Promise<string>;

  "gov()"(overrides?: CallOverrides): Promise<string>;

  incrementBalance(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "incrementBalance(address,uint256)"(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  incrementPendingReward(
    asset: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "incrementPendingReward(address,uint256)"(
    asset: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  incrementRewardPerToken(
    asset: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "incrementRewardPerToken(address)"(
    asset: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  incrementSupply(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "incrementSupply(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  "roleStore()"(overrides?: CallOverrides): Promise<string>;

  setClaimableReward(
    asset: string,
    user: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setClaimableReward(address,address,uint256)"(
    asset: string,
    user: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setFeeShare(
    bps: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFeeShare(uint256)"(
    bps: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setGov(_gov: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setGov(address)"(
    _gov: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateClaimableReward(
    asset: string,
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateClaimableReward(address,address)"(
    asset: string,
    user: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    CONTRACT(overrides?: CallOverrides): Promise<string>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<string>;

    ORACLE(overrides?: CallOverrides): Promise<string>;

    "ORACLE()"(overrides?: CallOverrides): Promise<string>;

    UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    "UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    decrementBalance(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "decrementBalance(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decrementSupply(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "decrementSupply(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    feeShare(overrides?: CallOverrides): Promise<BigNumber>;

    "feeShare()"(overrides?: CallOverrides): Promise<BigNumber>;

    getBalance(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getBalance(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaimableReward(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getClaimableReward(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingReward(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPendingReward(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPreviousReward(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPreviousReward(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardPerTokenSum(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRewardPerTokenSum(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<string>;

    "gov()"(overrides?: CallOverrides): Promise<string>;

    incrementBalance(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "incrementBalance(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    incrementPendingReward(
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "incrementPendingReward(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    incrementRewardPerToken(
      asset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "incrementRewardPerToken(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<void>;

    incrementSupply(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "incrementSupply(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    "roleStore()"(overrides?: CallOverrides): Promise<string>;

    setClaimableReward(
      asset: string,
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setClaimableReward(address,address,uint256)"(
      asset: string,
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeShare(bps: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setFeeShare(uint256)"(
      bps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;

    "setGov(address)"(_gov: string, overrides?: CallOverrides): Promise<void>;

    updateClaimableReward(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateClaimableReward(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    SetGov(prevGov: null, nextGov: null): EventFilter;
  };

  estimateGas: {
    CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<BigNumber>;

    ORACLE(overrides?: CallOverrides): Promise<BigNumber>;

    "ORACLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    "UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    decrementBalance(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decrementBalance(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    decrementSupply(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "decrementSupply(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    feeShare(overrides?: CallOverrides): Promise<BigNumber>;

    "feeShare()"(overrides?: CallOverrides): Promise<BigNumber>;

    getBalance(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getBalance(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getClaimableReward(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getClaimableReward(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingReward(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPendingReward(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPreviousReward(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPreviousReward(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewardPerTokenSum(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRewardPerTokenSum(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    "gov()"(overrides?: CallOverrides): Promise<BigNumber>;

    incrementBalance(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "incrementBalance(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    incrementPendingReward(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "incrementPendingReward(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    incrementRewardPerToken(
      asset: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "incrementRewardPerToken(address)"(
      asset: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    incrementSupply(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "incrementSupply(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    "roleStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    setClaimableReward(
      asset: string,
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setClaimableReward(address,address,uint256)"(
      asset: string,
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setFeeShare(bps: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setFeeShare(uint256)"(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setGov(_gov: string, overrides?: Overrides): Promise<BigNumber>;

    "setGov(address)"(_gov: string, overrides?: Overrides): Promise<BigNumber>;

    updateClaimableReward(
      asset: string,
      user: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateClaimableReward(address,address)"(
      asset: string,
      user: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ORACLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ORACLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "UNIT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decrementBalance(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decrementBalance(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    decrementSupply(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "decrementSupply(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    feeShare(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeShare()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBalance(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBalance(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getClaimableReward(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getClaimableReward(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingReward(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPendingReward(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPreviousReward(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPreviousReward(address,address)"(
      asset: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRewardPerTokenSum(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRewardPerTokenSum(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTotalSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "gov()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    incrementBalance(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "incrementBalance(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    incrementPendingReward(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "incrementPendingReward(address,uint256)"(
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    incrementRewardPerToken(
      asset: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "incrementRewardPerToken(address)"(
      asset: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    incrementSupply(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "incrementSupply(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "roleStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setClaimableReward(
      asset: string,
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setClaimableReward(address,address,uint256)"(
      asset: string,
      user: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setFeeShare(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFeeShare(uint256)"(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setGov(_gov: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "setGov(address)"(
      _gov: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateClaimableReward(
      asset: string,
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateClaimableReward(address,address)"(
      asset: string,
      user: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}