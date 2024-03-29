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

interface FundingInterface extends ethers.utils.Interface {
  functions: {
    "CONTRACT()": FunctionFragment;
    "DS()": FunctionFragment;
    "ORACLE()": FunctionFragment;
    "fundingStore()": FunctionFragment;
    "getAccruedFunding(address,string,uint256)": FunctionFragment;
    "gov()": FunctionFragment;
    "link()": FunctionFragment;
    "positionStore()": FunctionFragment;
    "roleStore()": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "updateFundingTracker(address,string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "CONTRACT", values?: undefined): string;
  encodeFunctionData(functionFragment: "DS", values?: undefined): string;
  encodeFunctionData(functionFragment: "ORACLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fundingStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAccruedFunding",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(functionFragment: "link", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positionStore",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateFundingTracker",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "CONTRACT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ORACLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundingStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccruedFunding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "link", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateFundingTracker",
    data: BytesLike
  ): Result;

  events: {
    "FundingUpdated(address,string,int256,int256)": EventFragment;
    "SetGov(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FundingUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
}

export class Funding extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FundingInterface;

  functions: {
    CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<[string]>;

    DS(overrides?: CallOverrides): Promise<[string]>;

    "DS()"(overrides?: CallOverrides): Promise<[string]>;

    ORACLE(overrides?: CallOverrides): Promise<[string]>;

    "ORACLE()"(overrides?: CallOverrides): Promise<[string]>;

    fundingStore(overrides?: CallOverrides): Promise<[string]>;

    "fundingStore()"(overrides?: CallOverrides): Promise<[string]>;

    getAccruedFunding(
      asset: string,
      market: string,
      intervals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getAccruedFunding(address,string,uint256)"(
      asset: string,
      market: string,
      intervals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    "gov()"(overrides?: CallOverrides): Promise<[string]>;

    link(overrides?: Overrides): Promise<ContractTransaction>;

    "link()"(overrides?: Overrides): Promise<ContractTransaction>;

    positionStore(overrides?: CallOverrides): Promise<[string]>;

    "positionStore()"(overrides?: CallOverrides): Promise<[string]>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    "roleStore()"(overrides?: CallOverrides): Promise<[string]>;

    setGov(_gov: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setGov(address)"(
      _gov: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updateFundingTracker(
      asset: string,
      market: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "updateFundingTracker(address,string)"(
      asset: string,
      market: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  CONTRACT(overrides?: CallOverrides): Promise<string>;

  "CONTRACT()"(overrides?: CallOverrides): Promise<string>;

  DS(overrides?: CallOverrides): Promise<string>;

  "DS()"(overrides?: CallOverrides): Promise<string>;

  ORACLE(overrides?: CallOverrides): Promise<string>;

  "ORACLE()"(overrides?: CallOverrides): Promise<string>;

  fundingStore(overrides?: CallOverrides): Promise<string>;

  "fundingStore()"(overrides?: CallOverrides): Promise<string>;

  getAccruedFunding(
    asset: string,
    market: string,
    intervals: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getAccruedFunding(address,string,uint256)"(
    asset: string,
    market: string,
    intervals: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  gov(overrides?: CallOverrides): Promise<string>;

  "gov()"(overrides?: CallOverrides): Promise<string>;

  link(overrides?: Overrides): Promise<ContractTransaction>;

  "link()"(overrides?: Overrides): Promise<ContractTransaction>;

  positionStore(overrides?: CallOverrides): Promise<string>;

  "positionStore()"(overrides?: CallOverrides): Promise<string>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  "roleStore()"(overrides?: CallOverrides): Promise<string>;

  setGov(_gov: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setGov(address)"(
    _gov: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updateFundingTracker(
    asset: string,
    market: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "updateFundingTracker(address,string)"(
    asset: string,
    market: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    CONTRACT(overrides?: CallOverrides): Promise<string>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<string>;

    DS(overrides?: CallOverrides): Promise<string>;

    "DS()"(overrides?: CallOverrides): Promise<string>;

    ORACLE(overrides?: CallOverrides): Promise<string>;

    "ORACLE()"(overrides?: CallOverrides): Promise<string>;

    fundingStore(overrides?: CallOverrides): Promise<string>;

    "fundingStore()"(overrides?: CallOverrides): Promise<string>;

    getAccruedFunding(
      asset: string,
      market: string,
      intervals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAccruedFunding(address,string,uint256)"(
      asset: string,
      market: string,
      intervals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<string>;

    "gov()"(overrides?: CallOverrides): Promise<string>;

    link(overrides?: CallOverrides): Promise<void>;

    "link()"(overrides?: CallOverrides): Promise<void>;

    positionStore(overrides?: CallOverrides): Promise<string>;

    "positionStore()"(overrides?: CallOverrides): Promise<string>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    "roleStore()"(overrides?: CallOverrides): Promise<string>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;

    "setGov(address)"(_gov: string, overrides?: CallOverrides): Promise<void>;

    updateFundingTracker(
      asset: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateFundingTracker(address,string)"(
      asset: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    FundingUpdated(
      asset: string | null,
      market: null,
      fundingTracker: null,
      fundingIncrement: null
    ): EventFilter;

    SetGov(prevGov: null, nextGov: null): EventFilter;
  };

  estimateGas: {
    CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<BigNumber>;

    DS(overrides?: CallOverrides): Promise<BigNumber>;

    "DS()"(overrides?: CallOverrides): Promise<BigNumber>;

    ORACLE(overrides?: CallOverrides): Promise<BigNumber>;

    "ORACLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    fundingStore(overrides?: CallOverrides): Promise<BigNumber>;

    "fundingStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    getAccruedFunding(
      asset: string,
      market: string,
      intervals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAccruedFunding(address,string,uint256)"(
      asset: string,
      market: string,
      intervals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    "gov()"(overrides?: CallOverrides): Promise<BigNumber>;

    link(overrides?: Overrides): Promise<BigNumber>;

    "link()"(overrides?: Overrides): Promise<BigNumber>;

    positionStore(overrides?: CallOverrides): Promise<BigNumber>;

    "positionStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    "roleStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    setGov(_gov: string, overrides?: Overrides): Promise<BigNumber>;

    "setGov(address)"(_gov: string, overrides?: Overrides): Promise<BigNumber>;

    updateFundingTracker(
      asset: string,
      market: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "updateFundingTracker(address,string)"(
      asset: string,
      market: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ORACLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ORACLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fundingStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fundingStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccruedFunding(
      asset: string,
      market: string,
      intervals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAccruedFunding(address,string,uint256)"(
      asset: string,
      market: string,
      intervals: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "gov()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    link(overrides?: Overrides): Promise<PopulatedTransaction>;

    "link()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    positionStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "positionStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "roleStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGov(_gov: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "setGov(address)"(
      _gov: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updateFundingTracker(
      asset: string,
      market: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "updateFundingTracker(address,string)"(
      asset: string,
      market: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
