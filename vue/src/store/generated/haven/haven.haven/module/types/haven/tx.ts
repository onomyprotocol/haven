/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "haven.haven";

/** Rake is a two digit percentage */
export interface MsgCreateHaven {
  creator: string;
  name: string;
  rake: string;
}

export interface MsgCreateHavenResponse {}

export interface MsgCreatePost {
  creator: string;
  title: string;
  body: string;
  haven: string;
}

export interface MsgCreatePostResponse {}

export interface MsgTipPost {
  creator: string;
  uid: string;
  amount: string;
}

export interface MsgTipPostResponse {}

const baseMsgCreateHaven: object = { creator: "", name: "", rake: "" };

export const MsgCreateHaven = {
  encode(message: MsgCreateHaven, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.rake !== "") {
      writer.uint32(26).string(message.rake);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateHaven {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateHaven } as MsgCreateHaven;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.rake = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateHaven {
    const message = { ...baseMsgCreateHaven } as MsgCreateHaven;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.rake !== undefined && object.rake !== null) {
      message.rake = String(object.rake);
    } else {
      message.rake = "";
    }
    return message;
  },

  toJSON(message: MsgCreateHaven): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.rake !== undefined && (obj.rake = message.rake);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateHaven>): MsgCreateHaven {
    const message = { ...baseMsgCreateHaven } as MsgCreateHaven;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.rake !== undefined && object.rake !== null) {
      message.rake = object.rake;
    } else {
      message.rake = "";
    }
    return message;
  },
};

const baseMsgCreateHavenResponse: object = {};

export const MsgCreateHavenResponse = {
  encode(_: MsgCreateHavenResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateHavenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateHavenResponse } as MsgCreateHavenResponse;
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

  fromJSON(_: any): MsgCreateHavenResponse {
    const message = { ...baseMsgCreateHavenResponse } as MsgCreateHavenResponse;
    return message;
  },

  toJSON(_: MsgCreateHavenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateHavenResponse>): MsgCreateHavenResponse {
    const message = { ...baseMsgCreateHavenResponse } as MsgCreateHavenResponse;
    return message;
  },
};

const baseMsgCreatePost: object = {
  creator: "",
  title: "",
  body: "",
  haven: "",
};

export const MsgCreatePost = {
  encode(message: MsgCreatePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.haven !== "") {
      writer.uint32(34).string(message.haven);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.body = reader.string();
          break;
        case 4:
          message.haven = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.haven !== undefined && object.haven !== null) {
      message.haven = String(object.haven);
    } else {
      message.haven = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    message.haven !== undefined && (obj.haven = message.haven);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.haven !== undefined && object.haven !== null) {
      message.haven = object.haven;
    } else {
      message.haven = "";
    }
    return message;
  },
};

const baseMsgCreatePostResponse: object = {};

export const MsgCreatePostResponse = {
  encode(_: MsgCreatePostResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
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

  fromJSON(_: any): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    return message;
  },

  toJSON(_: MsgCreatePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    return message;
  },
};

const baseMsgTipPost: object = { creator: "", uid: "", amount: "" };

export const MsgTipPost = {
  encode(message: MsgTipPost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uid !== "") {
      writer.uint32(18).string(message.uid);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTipPost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTipPost } as MsgTipPost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uid = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTipPost {
    const message = { ...baseMsgTipPost } as MsgTipPost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = String(object.uid);
    } else {
      message.uid = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    return message;
  },

  toJSON(message: MsgTipPost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uid !== undefined && (obj.uid = message.uid);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTipPost>): MsgTipPost {
    const message = { ...baseMsgTipPost } as MsgTipPost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    } else {
      message.uid = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    return message;
  },
};

const baseMsgTipPostResponse: object = {};

export const MsgTipPostResponse = {
  encode(_: MsgTipPostResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTipPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTipPostResponse } as MsgTipPostResponse;
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

  fromJSON(_: any): MsgTipPostResponse {
    const message = { ...baseMsgTipPostResponse } as MsgTipPostResponse;
    return message;
  },

  toJSON(_: MsgTipPostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgTipPostResponse>): MsgTipPostResponse {
    const message = { ...baseMsgTipPostResponse } as MsgTipPostResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateHaven(request: MsgCreateHaven): Promise<MsgCreateHavenResponse>;
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  TipPost(request: MsgTipPost): Promise<MsgTipPostResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateHaven(request: MsgCreateHaven): Promise<MsgCreateHavenResponse> {
    const data = MsgCreateHaven.encode(request).finish();
    const promise = this.rpc.request("haven.haven.Msg", "CreateHaven", data);
    return promise.then((data) =>
      MsgCreateHavenResponse.decode(new Reader(data))
    );
  }

  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("haven.haven.Msg", "CreatePost", data);
    return promise.then((data) =>
      MsgCreatePostResponse.decode(new Reader(data))
    );
  }

  TipPost(request: MsgTipPost): Promise<MsgTipPostResponse> {
    const data = MsgTipPost.encode(request).finish();
    const promise = this.rpc.request("haven.haven.Msg", "TipPost", data);
    return promise.then((data) => MsgTipPostResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
