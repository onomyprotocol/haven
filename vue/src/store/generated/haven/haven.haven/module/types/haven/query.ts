/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../haven/params";
import { Haven } from "../haven/haven";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "haven.haven";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetHavenRequest {
  uid: number;
}

export interface QueryGetHavenResponse {
  haven: Haven | undefined;
}

export interface QueryAllHavenRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllHavenResponse {
  haven: Haven[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetHavenRequest: object = { uid: 0 };

export const QueryGetHavenRequest = {
  encode(
    message: QueryGetHavenRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.uid !== 0) {
      writer.uint32(8).uint64(message.uid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetHavenRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetHavenRequest } as QueryGetHavenRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHavenRequest {
    const message = { ...baseQueryGetHavenRequest } as QueryGetHavenRequest;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = Number(object.uid);
    } else {
      message.uid = 0;
    }
    return message;
  },

  toJSON(message: QueryGetHavenRequest): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetHavenRequest>): QueryGetHavenRequest {
    const message = { ...baseQueryGetHavenRequest } as QueryGetHavenRequest;
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = 0;
    }
    return message;
  },
};

const baseQueryGetHavenResponse: object = {};

export const QueryGetHavenResponse = {
  encode(
    message: QueryGetHavenResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.haven !== undefined) {
      Haven.encode(message.haven, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetHavenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetHavenResponse } as QueryGetHavenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.haven = Haven.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetHavenResponse {
    const message = { ...baseQueryGetHavenResponse } as QueryGetHavenResponse;
    if (object.haven !== undefined && object.haven !== null) {
      message.haven = Haven.fromJSON(object.haven);
    } else {
      message.haven = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetHavenResponse): unknown {
    const obj: any = {};
    message.haven !== undefined &&
      (obj.haven = message.haven ? Haven.toJSON(message.haven) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetHavenResponse>
  ): QueryGetHavenResponse {
    const message = { ...baseQueryGetHavenResponse } as QueryGetHavenResponse;
    if (object.haven !== undefined && object.haven !== null) {
      message.haven = Haven.fromPartial(object.haven);
    } else {
      message.haven = undefined;
    }
    return message;
  },
};

const baseQueryAllHavenRequest: object = {};

export const QueryAllHavenRequest = {
  encode(
    message: QueryAllHavenRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllHavenRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllHavenRequest } as QueryAllHavenRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHavenRequest {
    const message = { ...baseQueryAllHavenRequest } as QueryAllHavenRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHavenRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllHavenRequest>): QueryAllHavenRequest {
    const message = { ...baseQueryAllHavenRequest } as QueryAllHavenRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllHavenResponse: object = {};

export const QueryAllHavenResponse = {
  encode(
    message: QueryAllHavenResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.haven) {
      Haven.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllHavenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllHavenResponse } as QueryAllHavenResponse;
    message.haven = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.haven.push(Haven.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllHavenResponse {
    const message = { ...baseQueryAllHavenResponse } as QueryAllHavenResponse;
    message.haven = [];
    if (object.haven !== undefined && object.haven !== null) {
      for (const e of object.haven) {
        message.haven.push(Haven.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllHavenResponse): unknown {
    const obj: any = {};
    if (message.haven) {
      obj.haven = message.haven.map((e) => (e ? Haven.toJSON(e) : undefined));
    } else {
      obj.haven = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllHavenResponse>
  ): QueryAllHavenResponse {
    const message = { ...baseQueryAllHavenResponse } as QueryAllHavenResponse;
    message.haven = [];
    if (object.haven !== undefined && object.haven !== null) {
      for (const e of object.haven) {
        message.haven.push(Haven.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Haven by index. */
  Haven(request: QueryGetHavenRequest): Promise<QueryGetHavenResponse>;
  /** Queries a list of Haven items. */
  HavenAll(request: QueryAllHavenRequest): Promise<QueryAllHavenResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("haven.haven.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Haven(request: QueryGetHavenRequest): Promise<QueryGetHavenResponse> {
    const data = QueryGetHavenRequest.encode(request).finish();
    const promise = this.rpc.request("haven.haven.Query", "Haven", data);
    return promise.then((data) =>
      QueryGetHavenResponse.decode(new Reader(data))
    );
  }

  HavenAll(request: QueryAllHavenRequest): Promise<QueryAllHavenResponse> {
    const data = QueryAllHavenRequest.encode(request).finish();
    const promise = this.rpc.request("haven.haven.Query", "HavenAll", data);
    return promise.then((data) =>
      QueryAllHavenResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
