/// <reference types="node" />
export declare type TDataOut = string | Buffer;
export declare type TEncodingExtended = BufferEncoding | 'buffer';
export declare const ENCODING_UTF8: BufferEncoding;
export declare function assertEncoding(encoding: string | undefined): void;
export declare function strToEncoding(str: string, encoding?: TEncodingExtended): TDataOut;
