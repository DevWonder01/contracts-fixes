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

interface RiskStoreInterface extends ethers.utils.Interface {
  functions: {
    "BPS_DIVIDER()": FunctionFragment;
    "CONTRACT()": FunctionFragment;
    "DS()": FunctionFragment;
    "ORACLE()": FunctionFragment;
    "banAddress(address,bool)": FunctionFragment;
    "banAddressForMarket(address,string,bool)": FunctionFragment;
    "checkMarketRisk(string,address,int256)": FunctionFragment;
    "checkMaxOI(address,string,uint256)": FunctionFragment;
    "checkPoolRisk(address,int256)": FunctionFragment;
    "getMarketProfitLimit(string,address)": FunctionFragment;
    "getMarketProfitTracker(string,address)": FunctionFragment;
    "getMaxOI(string,address)": FunctionFragment;
    "getParams(address,string)": FunctionFragment;
    "getPoolProfitLimit(address)": FunctionFragment;
    "getPoolProfitTracker(address)": FunctionFragment;
    "gov()": FunctionFragment;
    "isAddressBanned(address)": FunctionFragment;
    "isAddressBannedForMarket(address,string)": FunctionFragment;
    "marketHourlyDecay()": FunctionFragment;
    "poolHourlyDecay()": FunctionFragment;
    "roleStore()": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "setMarketHourlyDecay(uint256)": FunctionFragment;
    "setMarketProfitLimit(string,address,uint256)": FunctionFragment;
    "setMaxOI(string,address,uint256)": FunctionFragment;
    "setPoolHourlyDecay(uint256)": FunctionFragment;
    "setPoolProfitLimit(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BPS_DIVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "CONTRACT", values?: undefined): string;
  encodeFunctionData(functionFragment: "DS", values?: undefined): string;
  encodeFunctionData(functionFragment: "ORACLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "banAddress",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "banAddressForMarket",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "checkMarketRisk",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkMaxOI",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkPoolRisk",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketProfitLimit",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketProfitTracker",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxOI",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getParams",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolProfitLimit",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolProfitTracker",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isAddressBanned",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAddressBannedForMarket",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "marketHourlyDecay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolHourlyDecay",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setMarketHourlyDecay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMarketProfitLimit",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxOI",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolHourlyDecay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPoolProfitLimit",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BPS_DIVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CONTRACT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ORACLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "banAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "banAddressForMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkMarketRisk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checkMaxOI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkPoolRisk",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketProfitLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketProfitTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMaxOI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getParams", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolProfitLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolProfitTracker",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAddressBanned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAddressBannedForMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketHourlyDecay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolHourlyDecay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMarketHourlyDecay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMarketProfitLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setMaxOI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPoolHourlyDecay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPoolProfitLimit",
    data: BytesLike
  ): Result;

  events: {
    "SetGov(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
}

export class RiskStore extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RiskStoreInterface;

  functions: {
    BPS_DIVIDER(overrides?: CallOverrides): Promise<[BigNumber]>;

    "BPS_DIVIDER()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<[string]>;

    DS(overrides?: CallOverrides): Promise<[string]>;

    "DS()"(overrides?: CallOverrides): Promise<[string]>;

    ORACLE(overrides?: CallOverrides): Promise<[string]>;

    "ORACLE()"(overrides?: CallOverrides): Promise<[string]>;

    banAddress(
      user: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "banAddress(address,bool)"(
      user: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    banAddressForMarket(
      user: string,
      market: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "banAddressForMarket(address,string,bool)"(
      user: string,
      market: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    checkMarketRisk(
      market: string,
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "checkMarketRisk(string,address,int256)"(
      market: string,
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    checkMaxOI(
      asset: string,
      market: string,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkMaxOI(address,string,uint256)"(
      asset: string,
      market: string,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    checkPoolRisk(
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "checkPoolRisk(address,int256)"(
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getMarketProfitLimit(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getMarketProfitLimit(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMarketProfitTracker(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getMarketProfitTracker(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMaxOI(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getMaxOI(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getParams(
      asset: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;

    "getParams(address,string)"(
      asset: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;

    getPoolProfitLimit(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPoolProfitLimit(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPoolProfitTracker(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPoolProfitTracker(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    "gov()"(overrides?: CallOverrides): Promise<[string]>;

    isAddressBanned(
      user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isAddressBanned(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isAddressBannedForMarket(
      user: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isAddressBannedForMarket(address,string)"(
      user: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    marketHourlyDecay(overrides?: CallOverrides): Promise<[BigNumber]>;

    "marketHourlyDecay()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    poolHourlyDecay(overrides?: CallOverrides): Promise<[BigNumber]>;

    "poolHourlyDecay()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    "roleStore()"(overrides?: CallOverrides): Promise<[string]>;

    setGov(_gov: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setGov(address)"(
      _gov: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMarketHourlyDecay(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMarketHourlyDecay(uint256)"(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMarketProfitLimit(
      market: string,
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMarketProfitLimit(string,address,uint256)"(
      market: string,
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMaxOI(
      market: string,
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMaxOI(string,address,uint256)"(
      market: string,
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPoolHourlyDecay(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPoolHourlyDecay(uint256)"(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPoolProfitLimit(
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPoolProfitLimit(address,uint256)"(
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  BPS_DIVIDER(overrides?: CallOverrides): Promise<BigNumber>;

  "BPS_DIVIDER()"(overrides?: CallOverrides): Promise<BigNumber>;

  CONTRACT(overrides?: CallOverrides): Promise<string>;

  "CONTRACT()"(overrides?: CallOverrides): Promise<string>;

  DS(overrides?: CallOverrides): Promise<string>;

  "DS()"(overrides?: CallOverrides): Promise<string>;

  ORACLE(overrides?: CallOverrides): Promise<string>;

  "ORACLE()"(overrides?: CallOverrides): Promise<string>;

  banAddress(
    user: string,
    isBanned: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "banAddress(address,bool)"(
    user: string,
    isBanned: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  banAddressForMarket(
    user: string,
    market: string,
    isBanned: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "banAddressForMarket(address,string,bool)"(
    user: string,
    market: string,
    isBanned: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  checkMarketRisk(
    market: string,
    asset: string,
    pnl: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "checkMarketRisk(string,address,int256)"(
    market: string,
    asset: string,
    pnl: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  checkMaxOI(
    asset: string,
    market: string,
    size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkMaxOI(address,string,uint256)"(
    asset: string,
    market: string,
    size: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  checkPoolRisk(
    asset: string,
    pnl: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "checkPoolRisk(address,int256)"(
    asset: string,
    pnl: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getMarketProfitLimit(
    market: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getMarketProfitLimit(string,address)"(
    market: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMarketProfitTracker(
    market: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getMarketProfitTracker(string,address)"(
    market: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMaxOI(
    market: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getMaxOI(string,address)"(
    market: string,
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getParams(
    asset: string,
    market: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
  >;

  "getParams(address,string)"(
    asset: string,
    market: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
  >;

  getPoolProfitLimit(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPoolProfitLimit(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPoolProfitTracker(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPoolProfitTracker(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  gov(overrides?: CallOverrides): Promise<string>;

  "gov()"(overrides?: CallOverrides): Promise<string>;

  isAddressBanned(user: string, overrides?: CallOverrides): Promise<boolean>;

  "isAddressBanned(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isAddressBannedForMarket(
    user: string,
    market: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isAddressBannedForMarket(address,string)"(
    user: string,
    market: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  marketHourlyDecay(overrides?: CallOverrides): Promise<BigNumber>;

  "marketHourlyDecay()"(overrides?: CallOverrides): Promise<BigNumber>;

  poolHourlyDecay(overrides?: CallOverrides): Promise<BigNumber>;

  "poolHourlyDecay()"(overrides?: CallOverrides): Promise<BigNumber>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  "roleStore()"(overrides?: CallOverrides): Promise<string>;

  setGov(_gov: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setGov(address)"(
    _gov: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMarketHourlyDecay(
    bps: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMarketHourlyDecay(uint256)"(
    bps: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMarketProfitLimit(
    market: string,
    asset: string,
    bps: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMarketProfitLimit(string,address,uint256)"(
    market: string,
    asset: string,
    bps: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMaxOI(
    market: string,
    asset: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMaxOI(string,address,uint256)"(
    market: string,
    asset: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPoolHourlyDecay(
    bps: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPoolHourlyDecay(uint256)"(
    bps: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPoolProfitLimit(
    asset: string,
    bps: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPoolProfitLimit(address,uint256)"(
    asset: string,
    bps: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    BPS_DIVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    "BPS_DIVIDER()"(overrides?: CallOverrides): Promise<BigNumber>;

    CONTRACT(overrides?: CallOverrides): Promise<string>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<string>;

    DS(overrides?: CallOverrides): Promise<string>;

    "DS()"(overrides?: CallOverrides): Promise<string>;

    ORACLE(overrides?: CallOverrides): Promise<string>;

    "ORACLE()"(overrides?: CallOverrides): Promise<string>;

    banAddress(
      user: string,
      isBanned: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "banAddress(address,bool)"(
      user: string,
      isBanned: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    banAddressForMarket(
      user: string,
      market: string,
      isBanned: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "banAddressForMarket(address,string,bool)"(
      user: string,
      market: string,
      isBanned: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    checkMarketRisk(
      market: string,
      asset: string,
      pnl: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkMarketRisk(string,address,int256)"(
      market: string,
      asset: string,
      pnl: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkMaxOI(
      asset: string,
      market: string,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkMaxOI(address,string,uint256)"(
      asset: string,
      market: string,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkPoolRisk(
      asset: string,
      pnl: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkPoolRisk(address,int256)"(
      asset: string,
      pnl: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getMarketProfitLimit(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMarketProfitLimit(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarketProfitTracker(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMarketProfitTracker(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxOI(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMaxOI(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getParams(
      asset: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;

    "getParams(address,string)"(
      asset: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]
    >;

    getPoolProfitLimit(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPoolProfitLimit(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolProfitTracker(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPoolProfitTracker(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<string>;

    "gov()"(overrides?: CallOverrides): Promise<string>;

    isAddressBanned(user: string, overrides?: CallOverrides): Promise<boolean>;

    "isAddressBanned(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAddressBannedForMarket(
      user: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isAddressBannedForMarket(address,string)"(
      user: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    marketHourlyDecay(overrides?: CallOverrides): Promise<BigNumber>;

    "marketHourlyDecay()"(overrides?: CallOverrides): Promise<BigNumber>;

    poolHourlyDecay(overrides?: CallOverrides): Promise<BigNumber>;

    "poolHourlyDecay()"(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    "roleStore()"(overrides?: CallOverrides): Promise<string>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;

    "setGov(address)"(_gov: string, overrides?: CallOverrides): Promise<void>;

    setMarketHourlyDecay(
      bps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMarketHourlyDecay(uint256)"(
      bps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMarketProfitLimit(
      market: string,
      asset: string,
      bps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMarketProfitLimit(string,address,uint256)"(
      market: string,
      asset: string,
      bps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxOI(
      market: string,
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMaxOI(string,address,uint256)"(
      market: string,
      asset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPoolHourlyDecay(
      bps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPoolHourlyDecay(uint256)"(
      bps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPoolProfitLimit(
      asset: string,
      bps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPoolProfitLimit(address,uint256)"(
      asset: string,
      bps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    SetGov(prevGov: null, nextGov: null): EventFilter;
  };

  estimateGas: {
    BPS_DIVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    "BPS_DIVIDER()"(overrides?: CallOverrides): Promise<BigNumber>;

    CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<BigNumber>;

    DS(overrides?: CallOverrides): Promise<BigNumber>;

    "DS()"(overrides?: CallOverrides): Promise<BigNumber>;

    ORACLE(overrides?: CallOverrides): Promise<BigNumber>;

    "ORACLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    banAddress(
      user: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "banAddress(address,bool)"(
      user: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    banAddressForMarket(
      user: string,
      market: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "banAddressForMarket(address,string,bool)"(
      user: string,
      market: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    checkMarketRisk(
      market: string,
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "checkMarketRisk(string,address,int256)"(
      market: string,
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    checkMaxOI(
      asset: string,
      market: string,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkMaxOI(address,string,uint256)"(
      asset: string,
      market: string,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkPoolRisk(
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "checkPoolRisk(address,int256)"(
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getMarketProfitLimit(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMarketProfitLimit(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarketProfitTracker(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMarketProfitTracker(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMaxOI(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMaxOI(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getParams(
      asset: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getParams(address,string)"(
      asset: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolProfitLimit(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPoolProfitLimit(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolProfitTracker(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPoolProfitTracker(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    "gov()"(overrides?: CallOverrides): Promise<BigNumber>;

    isAddressBanned(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAddressBanned(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAddressBannedForMarket(
      user: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAddressBannedForMarket(address,string)"(
      user: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketHourlyDecay(overrides?: CallOverrides): Promise<BigNumber>;

    "marketHourlyDecay()"(overrides?: CallOverrides): Promise<BigNumber>;

    poolHourlyDecay(overrides?: CallOverrides): Promise<BigNumber>;

    "poolHourlyDecay()"(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    "roleStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    setGov(_gov: string, overrides?: Overrides): Promise<BigNumber>;

    "setGov(address)"(_gov: string, overrides?: Overrides): Promise<BigNumber>;

    setMarketHourlyDecay(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMarketHourlyDecay(uint256)"(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMarketProfitLimit(
      market: string,
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMarketProfitLimit(string,address,uint256)"(
      market: string,
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMaxOI(
      market: string,
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMaxOI(string,address,uint256)"(
      market: string,
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPoolHourlyDecay(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPoolHourlyDecay(uint256)"(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPoolProfitLimit(
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPoolProfitLimit(address,uint256)"(
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BPS_DIVIDER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "BPS_DIVIDER()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ORACLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ORACLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    banAddress(
      user: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "banAddress(address,bool)"(
      user: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    banAddressForMarket(
      user: string,
      market: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "banAddressForMarket(address,string,bool)"(
      user: string,
      market: string,
      isBanned: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    checkMarketRisk(
      market: string,
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "checkMarketRisk(string,address,int256)"(
      market: string,
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    checkMaxOI(
      asset: string,
      market: string,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkMaxOI(address,string,uint256)"(
      asset: string,
      market: string,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkPoolRisk(
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "checkPoolRisk(address,int256)"(
      asset: string,
      pnl: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getMarketProfitLimit(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMarketProfitLimit(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarketProfitTracker(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMarketProfitTracker(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMaxOI(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMaxOI(string,address)"(
      market: string,
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getParams(
      asset: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getParams(address,string)"(
      asset: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolProfitLimit(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPoolProfitLimit(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolProfitTracker(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPoolProfitTracker(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "gov()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isAddressBanned(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAddressBanned(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAddressBannedForMarket(
      user: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAddressBannedForMarket(address,string)"(
      user: string,
      market: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marketHourlyDecay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "marketHourlyDecay()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolHourlyDecay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "poolHourlyDecay()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "roleStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGov(_gov: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "setGov(address)"(
      _gov: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMarketHourlyDecay(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMarketHourlyDecay(uint256)"(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMarketProfitLimit(
      market: string,
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMarketProfitLimit(string,address,uint256)"(
      market: string,
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMaxOI(
      market: string,
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMaxOI(string,address,uint256)"(
      market: string,
      asset: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPoolHourlyDecay(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPoolHourlyDecay(uint256)"(
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPoolProfitLimit(
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPoolProfitLimit(address,uint256)"(
      asset: string,
      bps: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
