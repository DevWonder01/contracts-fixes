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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface OrdersInterface extends ethers.utils.Interface {
  functions: {
    "BPS_DIVIDER()": FunctionFragment;
    "CONTRACT()": FunctionFragment;
    "DS()": FunctionFragment;
    "ORACLE()": FunctionFragment;
    "UNIT()": FunctionFragment;
    "assetStore()": FunctionFragment;
    "cancelOrder(uint256)": FunctionFragment;
    "cancelOrderGov(uint256)": FunctionFragment;
    "cancelOrders(uint256[],string[])": FunctionFragment;
    "cancelOrdersGov(uint256[])": FunctionFragment;
    "chainlink()": FunctionFragment;
    "fundStore()": FunctionFragment;
    "gov()": FunctionFragment;
    "link()": FunctionFragment;
    "marketStore()": FunctionFragment;
    "orderStore()": FunctionFragment;
    "positionStore()": FunctionFragment;
    "rebateStore()": FunctionFragment;
    "referralStore()": FunctionFragment;
    "riskStore()": FunctionFragment;
    "roleStore()": FunctionFragment;
    "setGov(address)": FunctionFragment;
    "submitOrder(tuple,uint256,uint256,string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BPS_DIVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "CONTRACT", values?: undefined): string;
  encodeFunctionData(functionFragment: "DS", values?: undefined): string;
  encodeFunctionData(functionFragment: "ORACLE", values?: undefined): string;
  encodeFunctionData(functionFragment: "UNIT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "assetStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrderGov",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrders",
    values: [BigNumberish[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrdersGov",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "chainlink", values?: undefined): string;
  encodeFunctionData(functionFragment: "fundStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "gov", values?: undefined): string;
  encodeFunctionData(functionFragment: "link", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "marketStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "orderStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "positionStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rebateStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "referralStore",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "riskStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "roleStore", values?: undefined): string;
  encodeFunctionData(functionFragment: "setGov", values: [string]): string;
  encodeFunctionData(
    functionFragment: "submitOrder",
    values: [
      {
        orderId: BigNumberish;
        user: string;
        asset: string;
        market: string;
        margin: BigNumberish;
        size: BigNumberish;
        price: BigNumberish;
        fee: BigNumberish;
        isLong: boolean;
        orderType: BigNumberish;
        isReduceOnly: boolean;
        timestamp: BigNumberish;
        expiry: BigNumberish;
        cancelOrderId: BigNumberish;
      },
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "BPS_DIVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CONTRACT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "DS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ORACLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "UNIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "assetStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrderGov",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrdersGov",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "chainlink", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fundStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gov", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "link", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "orderStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rebateStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "referralStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "riskStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roleStore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGov", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submitOrder",
    data: BytesLike
  ): Result;

  events: {
    "OrderCancelled(uint256,address,string)": EventFragment;
    "OrderCreated(uint256,address,address,string,bool,uint256,uint256,uint256,uint256,uint8,bool,uint256,uint256)": EventFragment;
    "SetGov(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetGov"): EventFragment;
}

export class Orders extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: OrdersInterface;

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

    assetStore(overrides?: CallOverrides): Promise<[string]>;

    "assetStore()"(overrides?: CallOverrides): Promise<[string]>;

    "cancelOrder(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelOrder(uint256,string)"(
      orderId: BigNumberish,
      reason: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    cancelOrderGov(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelOrderGov(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelOrders(uint256[],string[])"(
      orderIds: BigNumberish[],
      reasons: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelOrders(uint256[])"(
      orderIds: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    cancelOrdersGov(
      orderIds: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelOrdersGov(uint256[])"(
      orderIds: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    chainlink(overrides?: CallOverrides): Promise<[string]>;

    "chainlink()"(overrides?: CallOverrides): Promise<[string]>;

    fundStore(overrides?: CallOverrides): Promise<[string]>;

    "fundStore()"(overrides?: CallOverrides): Promise<[string]>;

    gov(overrides?: CallOverrides): Promise<[string]>;

    "gov()"(overrides?: CallOverrides): Promise<[string]>;

    link(overrides?: Overrides): Promise<ContractTransaction>;

    "link()"(overrides?: Overrides): Promise<ContractTransaction>;

    marketStore(overrides?: CallOverrides): Promise<[string]>;

    "marketStore()"(overrides?: CallOverrides): Promise<[string]>;

    orderStore(overrides?: CallOverrides): Promise<[string]>;

    "orderStore()"(overrides?: CallOverrides): Promise<[string]>;

    positionStore(overrides?: CallOverrides): Promise<[string]>;

    "positionStore()"(overrides?: CallOverrides): Promise<[string]>;

    rebateStore(overrides?: CallOverrides): Promise<[string]>;

    "rebateStore()"(overrides?: CallOverrides): Promise<[string]>;

    referralStore(overrides?: CallOverrides): Promise<[string]>;

    "referralStore()"(overrides?: CallOverrides): Promise<[string]>;

    riskStore(overrides?: CallOverrides): Promise<[string]>;

    "riskStore()"(overrides?: CallOverrides): Promise<[string]>;

    roleStore(overrides?: CallOverrides): Promise<[string]>;

    "roleStore()"(overrides?: CallOverrides): Promise<[string]>;

    setGov(_gov: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setGov(address)"(
      _gov: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    submitOrder(
      params: {
        orderId: BigNumberish;
        user: string;
        asset: string;
        market: string;
        margin: BigNumberish;
        size: BigNumberish;
        price: BigNumberish;
        fee: BigNumberish;
        isLong: boolean;
        orderType: BigNumberish;
        isReduceOnly: boolean;
        timestamp: BigNumberish;
        expiry: BigNumberish;
        cancelOrderId: BigNumberish;
      },
      tpPrice: BigNumberish,
      slPrice: BigNumberish,
      refCode: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "submitOrder((uint256,address,address,string,uint256,uint256,uint256,uint256,bool,uint8,bool,uint256,uint256,uint256),uint256,uint256,string)"(
      params: {
        orderId: BigNumberish;
        user: string;
        asset: string;
        market: string;
        margin: BigNumberish;
        size: BigNumberish;
        price: BigNumberish;
        fee: BigNumberish;
        isLong: boolean;
        orderType: BigNumberish;
        isReduceOnly: boolean;
        timestamp: BigNumberish;
        expiry: BigNumberish;
        cancelOrderId: BigNumberish;
      },
      tpPrice: BigNumberish,
      slPrice: BigNumberish,
      refCode: string,
      overrides?: PayableOverrides
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

  UNIT(overrides?: CallOverrides): Promise<BigNumber>;

  "UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

  assetStore(overrides?: CallOverrides): Promise<string>;

  "assetStore()"(overrides?: CallOverrides): Promise<string>;

  "cancelOrder(uint256)"(
    orderId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelOrder(uint256,string)"(
    orderId: BigNumberish,
    reason: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  cancelOrderGov(
    orderId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelOrderGov(uint256)"(
    orderId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelOrders(uint256[],string[])"(
    orderIds: BigNumberish[],
    reasons: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelOrders(uint256[])"(
    orderIds: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  cancelOrdersGov(
    orderIds: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancelOrdersGov(uint256[])"(
    orderIds: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  chainlink(overrides?: CallOverrides): Promise<string>;

  "chainlink()"(overrides?: CallOverrides): Promise<string>;

  fundStore(overrides?: CallOverrides): Promise<string>;

  "fundStore()"(overrides?: CallOverrides): Promise<string>;

  gov(overrides?: CallOverrides): Promise<string>;

  "gov()"(overrides?: CallOverrides): Promise<string>;

  link(overrides?: Overrides): Promise<ContractTransaction>;

  "link()"(overrides?: Overrides): Promise<ContractTransaction>;

  marketStore(overrides?: CallOverrides): Promise<string>;

  "marketStore()"(overrides?: CallOverrides): Promise<string>;

  orderStore(overrides?: CallOverrides): Promise<string>;

  "orderStore()"(overrides?: CallOverrides): Promise<string>;

  positionStore(overrides?: CallOverrides): Promise<string>;

  "positionStore()"(overrides?: CallOverrides): Promise<string>;

  rebateStore(overrides?: CallOverrides): Promise<string>;

  "rebateStore()"(overrides?: CallOverrides): Promise<string>;

  referralStore(overrides?: CallOverrides): Promise<string>;

  "referralStore()"(overrides?: CallOverrides): Promise<string>;

  riskStore(overrides?: CallOverrides): Promise<string>;

  "riskStore()"(overrides?: CallOverrides): Promise<string>;

  roleStore(overrides?: CallOverrides): Promise<string>;

  "roleStore()"(overrides?: CallOverrides): Promise<string>;

  setGov(_gov: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setGov(address)"(
    _gov: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  submitOrder(
    params: {
      orderId: BigNumberish;
      user: string;
      asset: string;
      market: string;
      margin: BigNumberish;
      size: BigNumberish;
      price: BigNumberish;
      fee: BigNumberish;
      isLong: boolean;
      orderType: BigNumberish;
      isReduceOnly: boolean;
      timestamp: BigNumberish;
      expiry: BigNumberish;
      cancelOrderId: BigNumberish;
    },
    tpPrice: BigNumberish,
    slPrice: BigNumberish,
    refCode: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "submitOrder((uint256,address,address,string,uint256,uint256,uint256,uint256,bool,uint8,bool,uint256,uint256,uint256),uint256,uint256,string)"(
    params: {
      orderId: BigNumberish;
      user: string;
      asset: string;
      market: string;
      margin: BigNumberish;
      size: BigNumberish;
      price: BigNumberish;
      fee: BigNumberish;
      isLong: boolean;
      orderType: BigNumberish;
      isReduceOnly: boolean;
      timestamp: BigNumberish;
      expiry: BigNumberish;
      cancelOrderId: BigNumberish;
    },
    tpPrice: BigNumberish,
    slPrice: BigNumberish,
    refCode: string,
    overrides?: PayableOverrides
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

    UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    "UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    assetStore(overrides?: CallOverrides): Promise<string>;

    "assetStore()"(overrides?: CallOverrides): Promise<string>;

    "cancelOrder(uint256)"(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelOrder(uint256,string)"(
      orderId: BigNumberish,
      reason: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOrderGov(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelOrderGov(uint256)"(
      orderId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelOrders(uint256[],string[])"(
      orderIds: BigNumberish[],
      reasons: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelOrders(uint256[])"(
      orderIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    cancelOrdersGov(
      orderIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "cancelOrdersGov(uint256[])"(
      orderIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    chainlink(overrides?: CallOverrides): Promise<string>;

    "chainlink()"(overrides?: CallOverrides): Promise<string>;

    fundStore(overrides?: CallOverrides): Promise<string>;

    "fundStore()"(overrides?: CallOverrides): Promise<string>;

    gov(overrides?: CallOverrides): Promise<string>;

    "gov()"(overrides?: CallOverrides): Promise<string>;

    link(overrides?: CallOverrides): Promise<void>;

    "link()"(overrides?: CallOverrides): Promise<void>;

    marketStore(overrides?: CallOverrides): Promise<string>;

    "marketStore()"(overrides?: CallOverrides): Promise<string>;

    orderStore(overrides?: CallOverrides): Promise<string>;

    "orderStore()"(overrides?: CallOverrides): Promise<string>;

    positionStore(overrides?: CallOverrides): Promise<string>;

    "positionStore()"(overrides?: CallOverrides): Promise<string>;

    rebateStore(overrides?: CallOverrides): Promise<string>;

    "rebateStore()"(overrides?: CallOverrides): Promise<string>;

    referralStore(overrides?: CallOverrides): Promise<string>;

    "referralStore()"(overrides?: CallOverrides): Promise<string>;

    riskStore(overrides?: CallOverrides): Promise<string>;

    "riskStore()"(overrides?: CallOverrides): Promise<string>;

    roleStore(overrides?: CallOverrides): Promise<string>;

    "roleStore()"(overrides?: CallOverrides): Promise<string>;

    setGov(_gov: string, overrides?: CallOverrides): Promise<void>;

    "setGov(address)"(_gov: string, overrides?: CallOverrides): Promise<void>;

    submitOrder(
      params: {
        orderId: BigNumberish;
        user: string;
        asset: string;
        market: string;
        margin: BigNumberish;
        size: BigNumberish;
        price: BigNumberish;
        fee: BigNumberish;
        isLong: boolean;
        orderType: BigNumberish;
        isReduceOnly: boolean;
        timestamp: BigNumberish;
        expiry: BigNumberish;
        cancelOrderId: BigNumberish;
      },
      tpPrice: BigNumberish,
      slPrice: BigNumberish,
      refCode: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "submitOrder((uint256,address,address,string,uint256,uint256,uint256,uint256,bool,uint8,bool,uint256,uint256,uint256),uint256,uint256,string)"(
      params: {
        orderId: BigNumberish;
        user: string;
        asset: string;
        market: string;
        margin: BigNumberish;
        size: BigNumberish;
        price: BigNumberish;
        fee: BigNumberish;
        isLong: boolean;
        orderType: BigNumberish;
        isReduceOnly: boolean;
        timestamp: BigNumberish;
        expiry: BigNumberish;
        cancelOrderId: BigNumberish;
      },
      tpPrice: BigNumberish,
      slPrice: BigNumberish,
      refCode: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OrderCancelled(
      orderId: BigNumberish | null,
      user: string | null,
      reason: null
    ): EventFilter;

    OrderCreated(
      orderId: BigNumberish | null,
      user: string | null,
      asset: string | null,
      market: null,
      isLong: null,
      margin: null,
      size: null,
      price: null,
      fee: null,
      orderType: null,
      isReduceOnly: null,
      expiry: null,
      cancelOrderId: null
    ): EventFilter;

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

    assetStore(overrides?: CallOverrides): Promise<BigNumber>;

    "assetStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    "cancelOrder(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelOrder(uint256,string)"(
      orderId: BigNumberish,
      reason: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    cancelOrderGov(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelOrderGov(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelOrders(uint256[],string[])"(
      orderIds: BigNumberish[],
      reasons: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelOrders(uint256[])"(
      orderIds: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    cancelOrdersGov(
      orderIds: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "cancelOrdersGov(uint256[])"(
      orderIds: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    chainlink(overrides?: CallOverrides): Promise<BigNumber>;

    "chainlink()"(overrides?: CallOverrides): Promise<BigNumber>;

    fundStore(overrides?: CallOverrides): Promise<BigNumber>;

    "fundStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    gov(overrides?: CallOverrides): Promise<BigNumber>;

    "gov()"(overrides?: CallOverrides): Promise<BigNumber>;

    link(overrides?: Overrides): Promise<BigNumber>;

    "link()"(overrides?: Overrides): Promise<BigNumber>;

    marketStore(overrides?: CallOverrides): Promise<BigNumber>;

    "marketStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    orderStore(overrides?: CallOverrides): Promise<BigNumber>;

    "orderStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    positionStore(overrides?: CallOverrides): Promise<BigNumber>;

    "positionStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    rebateStore(overrides?: CallOverrides): Promise<BigNumber>;

    "rebateStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    referralStore(overrides?: CallOverrides): Promise<BigNumber>;

    "referralStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    riskStore(overrides?: CallOverrides): Promise<BigNumber>;

    "riskStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    roleStore(overrides?: CallOverrides): Promise<BigNumber>;

    "roleStore()"(overrides?: CallOverrides): Promise<BigNumber>;

    setGov(_gov: string, overrides?: Overrides): Promise<BigNumber>;

    "setGov(address)"(_gov: string, overrides?: Overrides): Promise<BigNumber>;

    submitOrder(
      params: {
        orderId: BigNumberish;
        user: string;
        asset: string;
        market: string;
        margin: BigNumberish;
        size: BigNumberish;
        price: BigNumberish;
        fee: BigNumberish;
        isLong: boolean;
        orderType: BigNumberish;
        isReduceOnly: boolean;
        timestamp: BigNumberish;
        expiry: BigNumberish;
        cancelOrderId: BigNumberish;
      },
      tpPrice: BigNumberish,
      slPrice: BigNumberish,
      refCode: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "submitOrder((uint256,address,address,string,uint256,uint256,uint256,uint256,bool,uint8,bool,uint256,uint256,uint256),uint256,uint256,string)"(
      params: {
        orderId: BigNumberish;
        user: string;
        asset: string;
        market: string;
        margin: BigNumberish;
        size: BigNumberish;
        price: BigNumberish;
        fee: BigNumberish;
        isLong: boolean;
        orderType: BigNumberish;
        isReduceOnly: boolean;
        timestamp: BigNumberish;
        expiry: BigNumberish;
        cancelOrderId: BigNumberish;
      },
      tpPrice: BigNumberish,
      slPrice: BigNumberish,
      refCode: string,
      overrides?: PayableOverrides
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

    UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "UNIT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "assetStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cancelOrder(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelOrder(uint256,string)"(
      orderId: BigNumberish,
      reason: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    cancelOrderGov(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelOrderGov(uint256)"(
      orderId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelOrders(uint256[],string[])"(
      orderIds: BigNumberish[],
      reasons: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelOrders(uint256[])"(
      orderIds: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    cancelOrdersGov(
      orderIds: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelOrdersGov(uint256[])"(
      orderIds: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    chainlink(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "chainlink()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fundStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "fundStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gov(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "gov()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    link(overrides?: Overrides): Promise<PopulatedTransaction>;

    "link()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    marketStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "marketStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    orderStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "orderStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positionStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "positionStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebateStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rebateStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    referralStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "referralStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    riskStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "riskStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    roleStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "roleStore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setGov(_gov: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "setGov(address)"(
      _gov: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    submitOrder(
      params: {
        orderId: BigNumberish;
        user: string;
        asset: string;
        market: string;
        margin: BigNumberish;
        size: BigNumberish;
        price: BigNumberish;
        fee: BigNumberish;
        isLong: boolean;
        orderType: BigNumberish;
        isReduceOnly: boolean;
        timestamp: BigNumberish;
        expiry: BigNumberish;
        cancelOrderId: BigNumberish;
      },
      tpPrice: BigNumberish,
      slPrice: BigNumberish,
      refCode: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "submitOrder((uint256,address,address,string,uint256,uint256,uint256,uint256,bool,uint8,bool,uint256,uint256,uint256),uint256,uint256,string)"(
      params: {
        orderId: BigNumberish;
        user: string;
        asset: string;
        market: string;
        margin: BigNumberish;
        size: BigNumberish;
        price: BigNumberish;
        fee: BigNumberish;
        isLong: boolean;
        orderType: BigNumberish;
        isReduceOnly: boolean;
        timestamp: BigNumberish;
        expiry: BigNumberish;
        cancelOrderId: BigNumberish;
      },
      tpPrice: BigNumberish,
      slPrice: BigNumberish,
      refCode: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
