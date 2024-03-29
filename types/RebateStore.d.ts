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

interface RebateStoreInterface extends ethers.utils.Interface {
  functions: {
    "BPS_DIVIDER()": FunctionFragment;
    "CONTRACT()": FunctionFragment;
    "DS()": FunctionFragment;
    "ORACLE()": FunctionFragment;
    "UNIT()": FunctionFragment;
    "getParams()": FunctionFragment;
    "getStakingRebate(address)": FunctionFragment;
    "getUserRebate(address)": FunctionFragment;
    "getUserVolume(address)": FunctionFragment;
    "getVolumeRebate(address)": FunctionFragment;
    "gov()": FunctionFragment;
    "incrementUserVolume(address,uint256,uint256)": FunctionFragment;
    "maxStaked()": FunctionFragment;
    "maxStakingRebate()": FunctionFragment;
    "maxVolume()": FunctionFragment;
    "maxVolumeRebate()": FunctionFragment;
    "minStaked()": FunctionFragment;
    "minStakingRebate()": FunctionFragment;
    "minVolume()": FunctionFragment;
    "minVolumeRebate()": FunctionFragment;
    "rebateOverride()": FunctionFragment;
    "roleStore()": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "setRebateOverride(uint256)": FunctionFragment;
    "setRebatesEnabled(bool,bool)": FunctionFragment;
    "setStakingRebateParams(uint256,uint256,uint256,uint256)": FunctionFragment;
    "setVolumeRebateParams(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "stakingRebateEnabled()": FunctionFragment;
    "volumeDailyDecay()": FunctionFragment;
    "volumeRebateEnabled()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BPS_DIVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "CONTRACT", values?: undefined): string;
  encodeFunctionData(functionFragment: "DS", values?: undefined): string;
  encodeFunctionData(functionFragment: "ORACLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "UNIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "getParams", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getStakingRebate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserRebate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserVolume",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getVolumeRebate",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "incrementUserVolume",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "maxStaked", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxStakingRebate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "maxVolume", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxVolumeRebate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "minStaked", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minStakingRebate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "minVolume", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minVolumeRebate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rebateOverride",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setRebateOverride",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRebatesEnabled",
    values: [boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setStakingRebateParams",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setVolumeRebateParams",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "stakingRebateEnabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "volumeDailyDecay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "volumeRebateEnabled",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BPS_DIVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CONTRACT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ORACLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "UNIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getParams", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStakingRebate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserRebate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserVolume",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVolumeRebate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "incrementUserVolume",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxStaked", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxStakingRebate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxVolume", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxVolumeRebate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minStaked", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minStakingRebate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minVolume", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minVolumeRebate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rebateOverride",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRebateOverride",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRebatesEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakingRebateParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVolumeRebateParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stakingRebateEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "volumeDailyDecay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "volumeRebateEnabled",
    data: BytesLike
  ): Result;

  events: {
    "SetGov(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
}

export class RebateStore extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RebateStoreInterface;

  functions: {
    BPS_DIVIDER(overrides?: CallOverrides): Promise<[BigNumber]>;

    "BPS_DIVIDER()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<[string]>;

    DS(overrides?: CallOverrides): Promise<[string]>;

    "DS()"(overrides?: CallOverrides): Promise<[string]>;

    ORACLE(overrides?: CallOverrides): Promise<[string]>;

    "ORACLE()"(overrides?: CallOverrides): Promise<[string]>;

    UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    "UNIT()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getParams(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    "getParams()"(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    getStakingRebate(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getStakingRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserRebate(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getUserRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserVolume(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getUserVolume(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVolumeRebate(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getVolumeRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    "gov()"(overrides?: CallOverrides): Promise<[string]>;

    incrementUserVolume(
      user: string,
      feeBps: BigNumberish,
      usdAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "incrementUserVolume(address,uint256,uint256)"(
      user: string,
      feeBps: BigNumberish,
      usdAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    maxStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxStaked()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxStakingRebate(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxStakingRebate()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxVolume(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxVolume()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxVolumeRebate(overrides?: CallOverrides): Promise<[BigNumber]>;

    "maxVolumeRebate()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minStaked()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minStakingRebate(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minStakingRebate()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minVolume(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minVolume()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    minVolumeRebate(overrides?: CallOverrides): Promise<[BigNumber]>;

    "minVolumeRebate()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    rebateOverride(overrides?: CallOverrides): Promise<[BigNumber]>;

    "rebateOverride()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    "roleStore()"(overrides?: CallOverrides): Promise<[string]>;

    setGov(_gov: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setGov(address)"(
      _gov: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRebateOverride(
      _rebateOverride: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRebateOverride(uint256)"(
      _rebateOverride: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRebatesEnabled(
      _volumeRebateEnabled: boolean,
      _stakingRebateEnabled: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRebatesEnabled(bool,bool)"(
      _volumeRebateEnabled: boolean,
      _stakingRebateEnabled: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setStakingRebateParams(
      _minStaked: BigNumberish,
      _maxStaked: BigNumberish,
      _minStakingRebate: BigNumberish,
      _maxStakingRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setStakingRebateParams(uint256,uint256,uint256,uint256)"(
      _minStaked: BigNumberish,
      _maxStaked: BigNumberish,
      _minStakingRebate: BigNumberish,
      _maxStakingRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setVolumeRebateParams(
      _volumeDailyDecay: BigNumberish,
      _minVolume: BigNumberish,
      _maxVolume: BigNumberish,
      _minVolumeRebate: BigNumberish,
      _maxVolumeRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setVolumeRebateParams(uint256,uint256,uint256,uint256,uint256)"(
      _volumeDailyDecay: BigNumberish,
      _minVolume: BigNumberish,
      _maxVolume: BigNumberish,
      _minVolumeRebate: BigNumberish,
      _maxVolumeRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    stakingRebateEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    "stakingRebateEnabled()"(overrides?: CallOverrides): Promise<[boolean]>;

    volumeDailyDecay(overrides?: CallOverrides): Promise<[BigNumber]>;

    "volumeDailyDecay()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    volumeRebateEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    "volumeRebateEnabled()"(overrides?: CallOverrides): Promise<[boolean]>;
  };

  BPS_DIVIDER(overrides?: CallOverrides): Promise<BigNumber>;

  "BPS_DIVIDER()"(overrides?: CallOverrides): Promise<BigNumber>;

  CONTRACT(overrides?: CallOverrides): Promise<string>;

  "CONTRACT()"(overrides?: CallOverrides): Promise<string>;

  DS(overrides?: CallOverrides): Promise<string>;

  "DS()"(overrides?: CallOverrides): Promise<string>;

  ORACLE(overrides?: CallOverrides): Promise<string>;

  "ORACLE()"(overrides?: CallOverrides): Promise<string>;

  UNIT(overrides?: CallOverrides): Promise<BigNumber>;

  "UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

  getParams(
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ]
  >;

  "getParams()"(
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ]
  >;

  getStakingRebate(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getStakingRebate(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserRebate(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getUserRebate(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserVolume(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getUserVolume(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVolumeRebate(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getVolumeRebate(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  gov(overrides?: CallOverrides): Promise<string>;

  "gov()"(overrides?: CallOverrides): Promise<string>;

  incrementUserVolume(
    user: string,
    feeBps: BigNumberish,
    usdAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "incrementUserVolume(address,uint256,uint256)"(
    user: string,
    feeBps: BigNumberish,
    usdAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  maxStaked(overrides?: CallOverrides): Promise<BigNumber>;

  "maxStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

  maxStakingRebate(overrides?: CallOverrides): Promise<BigNumber>;

  "maxStakingRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

  maxVolume(overrides?: CallOverrides): Promise<BigNumber>;

  "maxVolume()"(overrides?: CallOverrides): Promise<BigNumber>;

  maxVolumeRebate(overrides?: CallOverrides): Promise<BigNumber>;

  "maxVolumeRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

  minStaked(overrides?: CallOverrides): Promise<BigNumber>;

  "minStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

  minStakingRebate(overrides?: CallOverrides): Promise<BigNumber>;

  "minStakingRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

  minVolume(overrides?: CallOverrides): Promise<BigNumber>;

  "minVolume()"(overrides?: CallOverrides): Promise<BigNumber>;

  minVolumeRebate(overrides?: CallOverrides): Promise<BigNumber>;

  "minVolumeRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

  rebateOverride(overrides?: CallOverrides): Promise<BigNumber>;

  "rebateOverride()"(overrides?: CallOverrides): Promise<BigNumber>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  "roleStore()"(overrides?: CallOverrides): Promise<string>;

  setGov(_gov: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setGov(address)"(
    _gov: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRebateOverride(
    _rebateOverride: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRebateOverride(uint256)"(
    _rebateOverride: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRebatesEnabled(
    _volumeRebateEnabled: boolean,
    _stakingRebateEnabled: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRebatesEnabled(bool,bool)"(
    _volumeRebateEnabled: boolean,
    _stakingRebateEnabled: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setStakingRebateParams(
    _minStaked: BigNumberish,
    _maxStaked: BigNumberish,
    _minStakingRebate: BigNumberish,
    _maxStakingRebate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setStakingRebateParams(uint256,uint256,uint256,uint256)"(
    _minStaked: BigNumberish,
    _maxStaked: BigNumberish,
    _minStakingRebate: BigNumberish,
    _maxStakingRebate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setVolumeRebateParams(
    _volumeDailyDecay: BigNumberish,
    _minVolume: BigNumberish,
    _maxVolume: BigNumberish,
    _minVolumeRebate: BigNumberish,
    _maxVolumeRebate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setVolumeRebateParams(uint256,uint256,uint256,uint256,uint256)"(
    _volumeDailyDecay: BigNumberish,
    _minVolume: BigNumberish,
    _maxVolume: BigNumberish,
    _minVolumeRebate: BigNumberish,
    _maxVolumeRebate: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  stakingRebateEnabled(overrides?: CallOverrides): Promise<boolean>;

  "stakingRebateEnabled()"(overrides?: CallOverrides): Promise<boolean>;

  volumeDailyDecay(overrides?: CallOverrides): Promise<BigNumber>;

  "volumeDailyDecay()"(overrides?: CallOverrides): Promise<BigNumber>;

  volumeRebateEnabled(overrides?: CallOverrides): Promise<boolean>;

  "volumeRebateEnabled()"(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    BPS_DIVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    "BPS_DIVIDER()"(overrides?: CallOverrides): Promise<BigNumber>;

    CONTRACT(overrides?: CallOverrides): Promise<string>;

    "CONTRACT()"(overrides?: CallOverrides): Promise<string>;

    DS(overrides?: CallOverrides): Promise<string>;

    "DS()"(overrides?: CallOverrides): Promise<string>;

    ORACLE(overrides?: CallOverrides): Promise<string>;

    "ORACLE()"(overrides?: CallOverrides): Promise<string>;

    UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    "UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    getParams(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    "getParams()"(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ]
    >;

    getStakingRebate(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getStakingRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserRebate(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getUserRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserVolume(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getUserVolume(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVolumeRebate(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVolumeRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<string>;

    "gov()"(overrides?: CallOverrides): Promise<string>;

    incrementUserVolume(
      user: string,
      feeBps: BigNumberish,
      usdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "incrementUserVolume(address,uint256,uint256)"(
      user: string,
      feeBps: BigNumberish,
      usdAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    maxStaked(overrides?: CallOverrides): Promise<BigNumber>;

    "maxStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxStakingRebate(overrides?: CallOverrides): Promise<BigNumber>;

    "maxStakingRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxVolume(overrides?: CallOverrides): Promise<BigNumber>;

    "maxVolume()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxVolumeRebate(overrides?: CallOverrides): Promise<BigNumber>;

    "maxVolumeRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

    minStaked(overrides?: CallOverrides): Promise<BigNumber>;

    "minStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

    minStakingRebate(overrides?: CallOverrides): Promise<BigNumber>;

    "minStakingRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

    minVolume(overrides?: CallOverrides): Promise<BigNumber>;

    "minVolume()"(overrides?: CallOverrides): Promise<BigNumber>;

    minVolumeRebate(overrides?: CallOverrides): Promise<BigNumber>;

    "minVolumeRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

    rebateOverride(overrides?: CallOverrides): Promise<BigNumber>;

    "rebateOverride()"(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    "roleStore()"(overrides?: CallOverrides): Promise<string>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;

    "setGov(address)"(_gov: string, overrides?: CallOverrides): Promise<void>;

    setRebateOverride(
      _rebateOverride: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRebateOverride(uint256)"(
      _rebateOverride: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRebatesEnabled(
      _volumeRebateEnabled: boolean,
      _stakingRebateEnabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRebatesEnabled(bool,bool)"(
      _volumeRebateEnabled: boolean,
      _stakingRebateEnabled: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setStakingRebateParams(
      _minStaked: BigNumberish,
      _maxStaked: BigNumberish,
      _minStakingRebate: BigNumberish,
      _maxStakingRebate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setStakingRebateParams(uint256,uint256,uint256,uint256)"(
      _minStaked: BigNumberish,
      _maxStaked: BigNumberish,
      _minStakingRebate: BigNumberish,
      _maxStakingRebate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setVolumeRebateParams(
      _volumeDailyDecay: BigNumberish,
      _minVolume: BigNumberish,
      _maxVolume: BigNumberish,
      _minVolumeRebate: BigNumberish,
      _maxVolumeRebate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setVolumeRebateParams(uint256,uint256,uint256,uint256,uint256)"(
      _volumeDailyDecay: BigNumberish,
      _minVolume: BigNumberish,
      _maxVolume: BigNumberish,
      _minVolumeRebate: BigNumberish,
      _maxVolumeRebate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakingRebateEnabled(overrides?: CallOverrides): Promise<boolean>;

    "stakingRebateEnabled()"(overrides?: CallOverrides): Promise<boolean>;

    volumeDailyDecay(overrides?: CallOverrides): Promise<BigNumber>;

    "volumeDailyDecay()"(overrides?: CallOverrides): Promise<BigNumber>;

    volumeRebateEnabled(overrides?: CallOverrides): Promise<boolean>;

    "volumeRebateEnabled()"(overrides?: CallOverrides): Promise<boolean>;
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

    UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    "UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    getParams(overrides?: CallOverrides): Promise<BigNumber>;

    "getParams()"(overrides?: CallOverrides): Promise<BigNumber>;

    getStakingRebate(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getStakingRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserRebate(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getUserRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserVolume(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getUserVolume(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVolumeRebate(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVolumeRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    "gov()"(overrides?: CallOverrides): Promise<BigNumber>;

    incrementUserVolume(
      user: string,
      feeBps: BigNumberish,
      usdAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "incrementUserVolume(address,uint256,uint256)"(
      user: string,
      feeBps: BigNumberish,
      usdAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    maxStaked(overrides?: CallOverrides): Promise<BigNumber>;

    "maxStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxStakingRebate(overrides?: CallOverrides): Promise<BigNumber>;

    "maxStakingRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxVolume(overrides?: CallOverrides): Promise<BigNumber>;

    "maxVolume()"(overrides?: CallOverrides): Promise<BigNumber>;

    maxVolumeRebate(overrides?: CallOverrides): Promise<BigNumber>;

    "maxVolumeRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

    minStaked(overrides?: CallOverrides): Promise<BigNumber>;

    "minStaked()"(overrides?: CallOverrides): Promise<BigNumber>;

    minStakingRebate(overrides?: CallOverrides): Promise<BigNumber>;

    "minStakingRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

    minVolume(overrides?: CallOverrides): Promise<BigNumber>;

    "minVolume()"(overrides?: CallOverrides): Promise<BigNumber>;

    minVolumeRebate(overrides?: CallOverrides): Promise<BigNumber>;

    "minVolumeRebate()"(overrides?: CallOverrides): Promise<BigNumber>;

    rebateOverride(overrides?: CallOverrides): Promise<BigNumber>;

    "rebateOverride()"(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    "roleStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    setGov(_gov: string, overrides?: Overrides): Promise<BigNumber>;

    "setGov(address)"(_gov: string, overrides?: Overrides): Promise<BigNumber>;

    setRebateOverride(
      _rebateOverride: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRebateOverride(uint256)"(
      _rebateOverride: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRebatesEnabled(
      _volumeRebateEnabled: boolean,
      _stakingRebateEnabled: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRebatesEnabled(bool,bool)"(
      _volumeRebateEnabled: boolean,
      _stakingRebateEnabled: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setStakingRebateParams(
      _minStaked: BigNumberish,
      _maxStaked: BigNumberish,
      _minStakingRebate: BigNumberish,
      _maxStakingRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setStakingRebateParams(uint256,uint256,uint256,uint256)"(
      _minStaked: BigNumberish,
      _maxStaked: BigNumberish,
      _minStakingRebate: BigNumberish,
      _maxStakingRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setVolumeRebateParams(
      _volumeDailyDecay: BigNumberish,
      _minVolume: BigNumberish,
      _maxVolume: BigNumberish,
      _minVolumeRebate: BigNumberish,
      _maxVolumeRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setVolumeRebateParams(uint256,uint256,uint256,uint256,uint256)"(
      _volumeDailyDecay: BigNumberish,
      _minVolume: BigNumberish,
      _maxVolume: BigNumberish,
      _minVolumeRebate: BigNumberish,
      _maxVolumeRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    stakingRebateEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    "stakingRebateEnabled()"(overrides?: CallOverrides): Promise<BigNumber>;

    volumeDailyDecay(overrides?: CallOverrides): Promise<BigNumber>;

    "volumeDailyDecay()"(overrides?: CallOverrides): Promise<BigNumber>;

    volumeRebateEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    "volumeRebateEnabled()"(overrides?: CallOverrides): Promise<BigNumber>;
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

    UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "UNIT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getParams()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStakingRebate(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getStakingRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserRebate(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserVolume(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserVolume(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVolumeRebate(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVolumeRebate(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "gov()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    incrementUserVolume(
      user: string,
      feeBps: BigNumberish,
      usdAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "incrementUserVolume(address,uint256,uint256)"(
      user: string,
      feeBps: BigNumberish,
      usdAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    maxStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxStaked()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxStakingRebate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxStakingRebate()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxVolume(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxVolume()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxVolumeRebate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "maxVolumeRebate()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minStaked()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minStakingRebate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minStakingRebate()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minVolume(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minVolume()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minVolumeRebate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "minVolumeRebate()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rebateOverride(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rebateOverride()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "roleStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGov(_gov: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "setGov(address)"(
      _gov: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRebateOverride(
      _rebateOverride: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRebateOverride(uint256)"(
      _rebateOverride: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRebatesEnabled(
      _volumeRebateEnabled: boolean,
      _stakingRebateEnabled: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRebatesEnabled(bool,bool)"(
      _volumeRebateEnabled: boolean,
      _stakingRebateEnabled: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setStakingRebateParams(
      _minStaked: BigNumberish,
      _maxStaked: BigNumberish,
      _minStakingRebate: BigNumberish,
      _maxStakingRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setStakingRebateParams(uint256,uint256,uint256,uint256)"(
      _minStaked: BigNumberish,
      _maxStaked: BigNumberish,
      _minStakingRebate: BigNumberish,
      _maxStakingRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setVolumeRebateParams(
      _volumeDailyDecay: BigNumberish,
      _minVolume: BigNumberish,
      _maxVolume: BigNumberish,
      _minVolumeRebate: BigNumberish,
      _maxVolumeRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setVolumeRebateParams(uint256,uint256,uint256,uint256,uint256)"(
      _volumeDailyDecay: BigNumberish,
      _minVolume: BigNumberish,
      _maxVolume: BigNumberish,
      _minVolumeRebate: BigNumberish,
      _maxVolumeRebate: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    stakingRebateEnabled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "stakingRebateEnabled()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    volumeDailyDecay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "volumeDailyDecay()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    volumeRebateEnabled(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "volumeRebateEnabled()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
