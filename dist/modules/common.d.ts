interface Channel {
    id: string;
    guild_id: string;
    type: number;
    name: string;
    position: number;
    recipients: any[];
    rawRecipients: any[];
    permissionOverwrites: Record<string, ChannelPermission>;
    bitrate: number;
    videoQualityMode?: number;
    rtcRegion?: string;
    userLimit: number;
    ownerId: null;
    icon?: string;
    banner?: string;
    application_id?: string;
    nicks: any;
    nsfw: boolean;
    parent_id: string;
    memberListId?: string;
    rateLimitPerUser: number;
    defaultAutoArchiveDuration?: number;
    originChannelId?: string;
    lastMessageId: string;
    lastPinTimestamp: string;
    messageCount?: number;
    memberCount?: number;
    memberIdsPreview?: any;
    member?: any;
    threadMetadata?: any;
}
interface Permission {
    parts: number[];
    str: string;
}
interface ChannelPermission {
    id: string;
    type: number;
    allow: Permission;
    deny: Permission;
}
interface Message {
    guild: Guild;
    channel: Channel;
}
interface Guild {
    id: string;
    name: string;
    description?: string;
    ownerId: string;
    icon?: string;
    splash?: string;
    banner?: string;
    features: Record<any, any>;
    preferredLocale: string;
    roles: Record<string, Role>;
    afkChannelId: string;
    afkTimeout: number;
    systemChannelId: string;
    verificationLevel: number;
    region: string;
    joinedAt: string;
    defaultMessageNotifications: number;
    mfaLevel: number;
    application_id: string;
    explicitContentFilter: number;
    vanityURLCode: string;
    premiumTier: number;
    premiumSubscriberCount: number;
    premiumProgressBarEnabled: boolean;
    systemChannelFlags: number;
    discoverySplash?: string;
    rulesChannelId?: string;
    publicUpdatesChannelId?: string;
    maxVideoChannelUsers: number;
    maxMembers: number;
    nsfwLevel: number;
    applicationCommandCounts: number;
    hubType: number;
}
interface Role {
    id: string;
    name: string;
    permissions: Permission;
    mentionable: boolean;
    position: number;
    originalPosition: number;
    color: number;
    colorString: string;
    hoist: boolean;
    managed: boolean;
    tags?: any;
    icon?: string;
    unicodeEmoji?: string;
}
