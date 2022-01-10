interface User {
  id: string;
  discriminator: string;

  username: string;
  bio: string;
  avatar: string;
  banner: string;

  accentColor?: null | string;
  publicFlags: number;
  flags: number;

  email?: string;
  verified?: boolean;
  bot?: boolean;
  system?: boolean;
  mfaEnabled?: boolean;
  mobile?: boolean;
  desktop?: boolean;
  premiumType?: number;
  purchasedFlags?: number;
  premiumUsageFlags?: number;
  phone?: string;
  nsfwAllowed?: boolean;
  guildMemberAvatars?: unknown;
}

interface Account {
  type: string;
  id: string;
  name: string;
  verified: boolean;
}

interface Guild {
  id: string;
  nick: string;
}

interface Profile {
  user: User;
  connected_accounts: Account[];
  premium_since: string;
  premium_guild_since: string;
  mutual_guilds: Guild[]
}

export {
  User,
  Account,
  Guild,
  Profile
}