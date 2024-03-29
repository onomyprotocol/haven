/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "haven.haven";

export interface Haven {
  uid: number;
  name: string;
  owner: string;
  rake: number;
  earnings: Coin | undefined;
}

const baseHaven: object = { uid: 0, name: "", owner: "", rake: 0 };

export const Haven = {
  encode(message: Haven, writer: Writer = Writer.create()): Writer {
    if (message.uid !== 0) {
      writer.uint32(8).uint64(message.uid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.rake !== 0) {
      writer.uint32(32).uint64(message.rake);
    }
    if (message.earnings !== undefined) {
      Coin.encode(message.earnings, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Haven {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHaven } as Haven;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.rake = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.earnings = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Haven {
    const message = { ...baseHaven } as Haven;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = Number(object.uid);
    } else {
      message.uid = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.rake !== undefined && object.rake !== null) {
      message.rake = Number(object.rake);
    } else {
      message.rake = 0;
    }
    if (object.earnings !== undefined && object.earnings !== null) {
      message.earnings = Coin.fromJSON(object.earnings);
    } else {
      message.earnings = undefined;
    }
    return message;
  },

  toJSON(message: Haven): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.name !== undefined && (obj.name = message.name);
    message.owner !== undefined && (obj.owner = message.owner);
    message.rake !== undefined && (obj.rake = message.rake);
    message.earnings !== undefined &&
      (obj.earnings = message.earnings
        ? Coin.toJSON(message.earnings)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Haven>): Haven {
    const message = { ...baseHaven } as Haven;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.rake !== undefined && object.rake !== null) {
      message.rake = object.rake;
    } else {
      message.rake = 0;
    }
    if (object.earnings !== undefined && object.earnings !== null) {
      message.earnings = Coin.fromPartial(object.earnings);
    } else {
      message.earnings = undefined;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
