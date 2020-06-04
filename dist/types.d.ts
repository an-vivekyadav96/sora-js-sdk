declare type Json = null | boolean | number | string | Json[] | {
    [prop: string]: Json;
};
export declare type SimulcastQuality = "low" | "middle" | "high";
export declare type Simulcast = boolean | {
    quality: SimulcastQuality;
};
export declare type AudioCodecType = "OPUS" | "PCMU";
export declare type Audio = boolean | {
    codec_type?: AudioCodecType;
    bit_rate?: number;
    opus_params?: {
        channels?: number;
        clock_rate?: number;
        maxplaybackrate?: number;
        minptime?: number;
        ptime?: number;
        stereo?: boolean;
        sprop_stereo?: boolean;
        useinbandfec?: boolean;
        usedtx?: boolean;
    };
};
export declare type VideoCodecType = "VP9" | "VP8" | "H264";
export declare type Video = boolean | {
    codec_type?: VideoCodecType;
    bit_rate?: number;
};
export declare type Role = "upstream" | "downstream" | "sendrecv" | "sendonly" | "recvonly";
export declare type Encoding = {
    rid: string;
    maxBitrate?: number;
    maxFramerate?: number;
    scaleResolutionDownBy?: number;
};
export declare type Browser = "edge" | "chrome" | "safari" | "opera" | "firefox" | null;
export declare type SignalingConnectMessage = {
    type: "connect";
    role: Role;
    channel_id: string;
    client_id?: string;
    metadata?: Json;
    signaling_notify_metadata?: Json;
    multistream?: boolean;
    spotlight?: number;
    simulcast?: Simulcast;
    audio: Audio;
    video: Video;
    sdp: string;
    sora_client: string;
    environment: string;
    e2ee?: boolean;
};
export declare type SignalingOfferMessage = {
    type: "offer";
    sdp: string;
    client_id: string;
    connection_id: string;
    metadata?: Json;
    config?: RTCConfiguration;
    encodings?: Encoding[];
};
export declare type SignalingUpdateMessage = {
    type: "update";
    sdp: string;
    encodings?: Encoding[];
};
export declare type SignalingReOfferMessage = {
    type: "re-offer";
    sdp: string;
    encodings?: Encoding[];
};
export declare type ConnectionOptions = {
    audio?: boolean;
    audioCodecType?: AudioCodecType;
    audioBitRate?: number;
    audioOpusParamsChannels?: number;
    audioOpusParamsClockRate?: number;
    audioOpusParamsMaxplaybackrate?: number;
    audioOpusParamsStereo?: boolean;
    audioOpusParamsSpropStereo?: boolean;
    audioOpusParamsMinptime?: number;
    audioOpusParamsPtime?: number;
    audioOpusParamsUseinbandfec?: boolean;
    audioOpusParamsUsedtx?: boolean;
    video?: boolean;
    videoCodecType?: VideoCodecType;
    videoBitRate?: number;
    multistream?: boolean;
    spotlight?: number;
    simulcast?: boolean;
    simulcastQuality?: SimulcastQuality;
    clientId?: string;
    timeout?: number;
    e2ee?: string;
};
export declare type Callbacks = {
    disconnect: Function;
    push: Function;
    addstream: Function;
    track: Function;
    removestream: Function;
    removetrack: Function;
    notify: Function;
    log: Function;
    timeout: Function;
};
export {};
