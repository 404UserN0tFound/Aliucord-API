interface Theme {
  name: string;
  theme_color_map: Partial<ThemeColorMap>;
  colors: Partial<Colors>;
}

interface ThemeColorMap {
  HEADER_PRIMARY: string[];
  HEADER_SECONDARY: string[];
  TEXT_NORMAL: string[];
  TEXT_MUTED: string[];
  TEXT_LINK: string[];
  TEXT_LINK_LOW_SATURATION: string[];
  TEXT_POSITIVE: string[];
  TEXT_WARNING: string[];
  TEXT_DANGER: string[];
  INTERACTIVE_NORMAL: string[];
  INTERACTIVE_HOVER: string[];
  INTERACTIVE_ACTIVE: string[];
  INTERACTIVE_MUTED: string[];
  BACKGROUND_PRIMARY: string[];
  BACKGROUND_SECONDARY: string[];
  BACKGROUND_SECONDARY_ALT: string[];
  BACKGROUND_TERTIARY: string[];
  BACKGROUND_ACCENT: string[];
  BACKGROUND_FLOATING: string[];
  BACKGROUND_MOBILE_PRIMARY: string[];
  BACKGROUND_MOBILE_SECONDARY: string[];
  BACKGROUND_MODIFIER_HOVER: string[];
  BACKGROUND_MODIFIER_ACTIVE: string[];
  BACKGROUND_MODIFIER_SELECTED: string[];
  BACKGROUND_MODIFIER_ACCENT: string[];
  INFO_POSITIVE_BACKGROUND: string[];
  INFO_POSITIVE_FOREGROUND: string[];
  INFO_POSITIVE_TEXT: string[];
  INFO_WARNING_BACKGROUND: string[];
  INFO_WARNING_FOREGROUND: string[];
  INFO_WARNING_TEXT: string[];
  INFO_DANGER_BACKGROUND: string[];
  INFO_DANGER_FOREGROUND: string[];
  INFO_DANGER_TEXT: string[];
  INFO_HELP_BACKGROUND: string[];
  INFO_HELP_FOREGROUND: string[];
  INFO_HELP_TEXT: string[];
  STATUS_POSITIVE_BACKGROUND: string[];
  STATUS_POSITIVE_TEXT: string[];
  STATUS_WARNING_BACKGROUND: string[];
  STATUS_WARNING_TEXT: string[];
  STATUS_DANGER_BACKGROUND: string[];
  STATUS_DANGER_TEXT: string[];
  SCROLLBAR_THIN_THUMB: string[];
  SCROLLBAR_THIN_TRACK: string[];
  SCROLLBAR_AUTO_THUMB: string[];
  SCROLLBAR_AUTO_TRACK: string[];
  SCROLLBAR_AUTO_SCROLLBAR_COLOR_THUMB: string[];
  SCROLLBAR_AUTO_SCROLLBAR_COLOR_TRACK: string[];
  ELEVATION_STROKE: string[];
  ELEVATION_LOW: string[];
  ELEVATION_MEDIUM: string[];
  ELEVATION_HIGH: string[];
  LOGO_PRIMARY: string[];
  FOCUS_PRIMARY: string[];
  CONTROL_BRAND_FOREGROUND: string[];
  CONTROL_BRAND_FOREGROUND_NEW: string[];
  BACKGROUND_MENTIONED: string[];
  BACKGROUND_MENTIONED_HOVER: string[];
  BACKGROUND_MESSAGE_HOVER: string[];
  CHANNELS_DEFAULT: string[];
  GUILD_HEADER_TEXT_SHADOW: string[];
  CHANNELTEXTAREA_BACKGROUND: string[];
  ACTIVITY_CARD_BACKGROUND: string[];
  TEXTBOX_MARKDOWN_SYNTAX: string[];
  DEPRECATED_CARD_BG: string[];
  DEPRECATED_CARD_EDITABLE_BG: string[];
  DEPRECATED_STORE_BG: string[];
  DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND: string[];
  DEPRECATED_QUICKSWITCHER_INPUT_PLACEHOLDER: string[];
  DEPRECATED_TEXT_INPUT_BG: string[];
  DEPRECATED_TEXT_INPUT_BORDER: string[];
  DEPRECATED_TEXT_INPUT_BORDER_HOVER: string[];
  DEPRECATED_TEXT_INPUT_BORDER_DISABLED: string[];
  DEPRECATED_TEXT_INPUT_PREFIX: string[];
}

interface Colors {
  PRIMARY_DARK_100: string;
  PRIMARY_DARK_130: string;
  PRIMARY_DARK_160: string;
  PRIMARY_DARK_200: string;
  PRIMARY_DARK_230: string;
  PRIMARY_DARK_260: string;
  PRIMARY_DARK_300: string;
  PRIMARY_DARK_330: string;
  PRIMARY_DARK_360: string;
  PRIMARY_DARK_400: string;
  PRIMARY_DARK_430: string;
  PRIMARY_DARK_460: string;
  PRIMARY_DARK_500: string;
  PRIMARY_DARK: string;
  PRIMARY_DARK_530: string;
  PRIMARY_DARK_560: string;
  PRIMARY_DARK_600: string;
  PRIMARY_DARK_630: string;
  PRIMARY_DARK_660: string;
  PRIMARY_DARK_700: string;
  PRIMARY_DARK_730: string;
  PRIMARY_DARK_760: string;
  PRIMARY_DARK_800: string;
  PRIMARY_DARK_830: string;
  PRIMARY_DARK_860: string;
  PRIMARY_DARK_900: string;
  PRIMARY_LIGHT_100: string;
  PRIMARY_LIGHT_130: string;
  PRIMARY_LIGHT_160: string;
  PRIMARY_LIGHT_200: string;
  PRIMARY_LIGHT_230: string;
  PRIMARY_LIGHT_260: string;
  PRIMARY_LIGHT_300: string;
  PRIMARY_LIGHT_330: string;
  PRIMARY_LIGHT_360: string;
  PRIMARY_LIGHT_400: string;
  PRIMARY_LIGHT_430: string;
  PRIMARY_LIGHT_460: string;
  PRIMARY_LIGHT_500: string;
  PRIMARY_LIGHT: string;
  PRIMARY_LIGHT_530: string;
  PRIMARY_LIGHT_560: string;
  PRIMARY_LIGHT_600: string;
  PRIMARY_LIGHT_630: string;
  PRIMARY_LIGHT_660: string;
  PRIMARY_LIGHT_700: string;
  PRIMARY_LIGHT_730: string;
  PRIMARY_LIGHT_760: string;
  PRIMARY_LIGHT_800: string;
  PRIMARY_LIGHT_830: string;
  PRIMARY_LIGHT_860: string;
  PRIMARY_LIGHT_900: string;
  BRAND_100: string;
  BRAND_130: string;
  BRAND_160: string;
  BRAND_200: string;
  BRAND_230: string;
  BRAND_260: string;
  BRAND_300: string;
  BRAND_330: string;
  BRAND_360: string;
  BRAND_400: string;
  BRAND_430: string;
  BRAND_460: string;
  BRAND_500: string;
  BRAND: string;
  BRAND_530: string;
  BRAND_560: string;
  BRAND_600: string;
  BRAND_630: string;
  BRAND_660: string;
  BRAND_700: string;
  BRAND_730: string;
  BRAND_760: string;
  BRAND_800: string;
  BRAND_830: string;
  BRAND_860: string;
  BRAND_900: string;
  BRAND_NEW_100: string;
  BRAND_NEW_130: string;
  BRAND_NEW_160: string;
  BRAND_NEW_200: string;
  BRAND_NEW_230: string;
  BRAND_NEW_260: string;
  BRAND_NEW_300: string;
  BRAND_NEW_330: string;
  BRAND_NEW_360: string;
  BRAND_NEW_400: string;
  BRAND_NEW_430: string;
  BRAND_NEW_460: string;
  BRAND_NEW_500: string;
  BRAND_NEW: string;
  BRAND_NEW_530: string;
  BRAND_NEW_560: string;
  BRAND_NEW_600: string;
  BRAND_NEW_630: string;
  BRAND_NEW_660: string;
  BRAND_NEW_700: string;
  BRAND_NEW_730: string;
  BRAND_NEW_760: string;
  BRAND_NEW_800: string;
  BRAND_NEW_830: string;
  BRAND_NEW_860: string;
  BRAND_NEW_900: string;
  STATUS_RED_100: string;
  STATUS_RED_130: string;
  STATUS_RED_160: string;
  STATUS_RED_200: string;
  STATUS_RED_230: string;
  STATUS_RED_260: string;
  STATUS_RED_300: string;
  STATUS_RED_330: string;
  STATUS_RED_360: string;
  STATUS_RED_400: string;
  STATUS_RED_430: string;
  STATUS_RED_460: string;
  STATUS_RED_500: string;
  STATUS_RED: string;
  STATUS_RED_530: string;
  STATUS_RED_560: string;
  STATUS_RED_600: string;
  STATUS_RED_630: string;
  STATUS_RED_660: string;
  STATUS_RED_700: string;
  STATUS_RED_730: string;
  STATUS_RED_760: string;
  STATUS_RED_800: string;
  STATUS_RED_830: string;
  STATUS_RED_860: string;
  STATUS_RED_900: string;
  STATUS_YELLOW_100: string;
  STATUS_YELLOW_130: string;
  STATUS_YELLOW_160: string;
  STATUS_YELLOW_200: string;
  STATUS_YELLOW_230: string;
  STATUS_YELLOW_260: string;
  STATUS_YELLOW_300: string;
  STATUS_YELLOW_330: string;
  STATUS_YELLOW_360: string;
  STATUS_YELLOW_400: string;
  STATUS_YELLOW_430: string;
  STATUS_YELLOW_460: string;
  STATUS_YELLOW_500: string;
  STATUS_YELLOW: string;
  STATUS_YELLOW_530: string;
  STATUS_YELLOW_560: string;
  STATUS_YELLOW_600: string;
  STATUS_YELLOW_630: string;
  STATUS_YELLOW_660: string;
  STATUS_YELLOW_700: string;
  STATUS_YELLOW_730: string;
  STATUS_YELLOW_760: string;
  STATUS_YELLOW_800: string;
  STATUS_YELLOW_830: string;
  STATUS_YELLOW_860: string;
  STATUS_YELLOW_900: string;
  STATUS_GREEN_100: string;
  STATUS_GREEN_130: string;
  STATUS_GREEN_160: string;
  STATUS_GREEN_200: string;
  STATUS_GREEN_230: string;
  STATUS_GREEN_260: string;
  STATUS_GREEN_300: string;
  STATUS_GREEN_330: string;
  STATUS_GREEN_360: string;
  STATUS_GREEN_400: string;
  STATUS_GREEN_430: string;
  STATUS_GREEN_460: string;
  STATUS_GREEN_500: string;
  STATUS_GREEN: string;
  STATUS_GREEN_530: string;
  STATUS_GREEN_560: string;
  STATUS_GREEN_600: string;
  STATUS_GREEN_630: string;
  STATUS_GREEN_660: string;
  STATUS_GREEN_700: string;
  STATUS_GREEN_730: string;
  STATUS_GREEN_760: string;
  STATUS_GREEN_800: string;
  STATUS_GREEN_830: string;
  STATUS_GREEN_860: string;
  STATUS_GREEN_900: string;
  STATUS_GREY_100: string;
  STATUS_GREY_130: string;
  STATUS_GREY_160: string;
  STATUS_GREY_200: string;
  STATUS_GREY_230: string;
  STATUS_GREY_260: string;
  STATUS_GREY_300: string;
  STATUS_GREY_330: string;
  STATUS_GREY_360: string;
  STATUS_GREY_400: string;
  STATUS_GREY_430: string;
  STATUS_GREY_460: string;
  STATUS_GREY_500: string;
  STATUS_GREY: string;
  STATUS_GREY_530: string;
  STATUS_GREY_560: string;
  STATUS_GREY_600: string;
  STATUS_GREY_630: string;
  STATUS_GREY_660: string;
  STATUS_GREY_700: string;
  STATUS_GREY_730: string;
  STATUS_GREY_760: string;
  STATUS_GREY_800: string;
  STATUS_GREY_830: string;
  STATUS_GREY_860: string;
  STATUS_GREY_900: string;
  STATUS_ORANGE_100: string;
  STATUS_ORANGE_130: string;
  STATUS_ORANGE_160: string;
  STATUS_ORANGE_200: string;
  STATUS_ORANGE_230: string;
  STATUS_ORANGE_260: string;
  STATUS_ORANGE_300: string;
  STATUS_ORANGE_330: string;
  STATUS_ORANGE_360: string;
  STATUS_ORANGE_400: string;
  STATUS_ORANGE_430: string;
  STATUS_ORANGE_460: string;
  STATUS_ORANGE_500: string;
  STATUS_ORANGE: string;
  STATUS_ORANGE_530: string;
  STATUS_ORANGE_560: string;
  STATUS_ORANGE_600: string;
  STATUS_ORANGE_630: string;
  STATUS_ORANGE_660: string;
  STATUS_ORANGE_700: string;
  STATUS_ORANGE_730: string;
  STATUS_ORANGE_760: string;
  STATUS_ORANGE_800: string;
  STATUS_ORANGE_830: string;
  STATUS_ORANGE_860: string;
  STATUS_ORANGE_900: string;
  FOCUS_PRIMARY_100: string;
  FOCUS_PRIMARY_130: string;
  FOCUS_PRIMARY_160: string;
  FOCUS_PRIMARY_200: string;
  FOCUS_PRIMARY_230: string;
  FOCUS_PRIMARY_260: string;
  FOCUS_PRIMARY_300: string;
  FOCUS_PRIMARY_330: string;
  FOCUS_PRIMARY_360: string;
  FOCUS_PRIMARY_400: string;
  FOCUS_PRIMARY_430: string;
  FOCUS_PRIMARY_460: string;
  FOCUS_PRIMARY_500: string;
  FOCUS_PRIMARY: string;
  FOCUS_PRIMARY_530: string;
  FOCUS_PRIMARY_560: string;
  FOCUS_PRIMARY_600: string;
  FOCUS_PRIMARY_630: string;
  FOCUS_PRIMARY_660: string;
  FOCUS_PRIMARY_700: string;
  FOCUS_PRIMARY_730: string;
  FOCUS_PRIMARY_760: string;
  FOCUS_PRIMARY_800: string;
  FOCUS_PRIMARY_830: string;
  FOCUS_PRIMARY_860: string;
  FOCUS_PRIMARY_900: string;
  LINK_100: string;
  LINK_130: string;
  LINK_160: string;
  LINK_200: string;
  LINK_230: string;
  LINK_260: string;
  LINK_300: string;
  LINK_330: string;
  LINK_360: string;
  LINK_400: string;
  LINK_430: string;
  LINK_460: string;
  LINK_500: string;
  LINK: string;
  LINK_530: string;
  LINK_560: string;
  LINK_600: string;
  LINK_630: string;
  LINK_660: string;
  LINK_700: string;
  LINK_730: string;
  LINK_760: string;
  LINK_800: string;
  LINK_830: string;
  LINK_860: string;
  LINK_900: string;
  LINK_LOW_SATURATION_100: string;
  LINK_LOW_SATURATION_130: string;
  LINK_LOW_SATURATION_160: string;
  LINK_LOW_SATURATION_200: string;
  LINK_LOW_SATURATION_230: string;
  LINK_LOW_SATURATION_260: string;
  LINK_LOW_SATURATION_300: string;
  LINK_LOW_SATURATION_330: string;
  LINK_LOW_SATURATION_360: string;
  LINK_LOW_SATURATION_400: string;
  LINK_LOW_SATURATION_430: string;
  LINK_LOW_SATURATION_460: string;
  LINK_LOW_SATURATION_500: string;
  LINK_LOW_SATURATION: string;
  LINK_LOW_SATURATION_530: string;
  LINK_LOW_SATURATION_560: string;
  LINK_LOW_SATURATION_600: string;
  LINK_LOW_SATURATION_630: string;
  LINK_LOW_SATURATION_660: string;
  LINK_LOW_SATURATION_700: string;
  LINK_LOW_SATURATION_730: string;
  LINK_LOW_SATURATION_760: string;
  LINK_LOW_SATURATION_800: string;
  LINK_LOW_SATURATION_830: string;
  LINK_LOW_SATURATION_860: string;
  LINK_LOW_SATURATION_900: string;
  LINK_LIGHT_100: string;
  LINK_LIGHT_130: string;
  LINK_LIGHT_160: string;
  LINK_LIGHT_200: string;
  LINK_LIGHT_230: string;
  LINK_LIGHT_260: string;
  LINK_LIGHT_300: string;
  LINK_LIGHT_330: string;
  LINK_LIGHT_360: string;
  LINK_LIGHT_400: string;
  LINK_LIGHT_430: string;
  LINK_LIGHT_460: string;
  LINK_LIGHT_500: string;
  LINK_LIGHT: string;
  LINK_LIGHT_530: string;
  LINK_LIGHT_560: string;
  LINK_LIGHT_600: string;
  LINK_LIGHT_630: string;
  LINK_LIGHT_660: string;
  LINK_LIGHT_700: string;
  LINK_LIGHT_730: string;
  LINK_LIGHT_760: string;
  LINK_LIGHT_800: string;
  LINK_LIGHT_830: string;
  LINK_LIGHT_860: string;
  LINK_LIGHT_900: string;
  WHITE_100: string;
  WHITE_130: string;
  WHITE_160: string;
  WHITE_200: string;
  WHITE_230: string;
  WHITE_260: string;
  WHITE_300: string;
  WHITE_330: string;
  WHITE_360: string;
  WHITE_400: string;
  WHITE_430: string;
  WHITE_460: string;
  WHITE_500: string;
  WHITE: string;
  WHITE_530: string;
  WHITE_560: string;
  WHITE_600: string;
  WHITE_630: string;
  WHITE_660: string;
  WHITE_700: string;
  WHITE_730: string;
  WHITE_760: string;
  WHITE_800: string;
  WHITE_830: string;
  WHITE_860: string;
  WHITE_900: string;
  BLACK_100: string;
  BLACK_130: string;
  BLACK_160: string;
  BLACK_200: string;
  BLACK_230: string;
  BLACK_260: string;
  BLACK_300: string;
  BLACK_330: string;
  BLACK_360: string;
  BLACK_400: string;
  BLACK_430: string;
  BLACK_460: string;
  BLACK_500: string;
  BLACK: string;
  BLACK_530: string;
  BLACK_560: string;
  BLACK_600: string;
  BLACK_630: string;
  BLACK_660: string;
  BLACK_700: string;
  BLACK_730: string;
  BLACK_760: string;
  BLACK_800: string;
  BLACK_830: string;
  BLACK_860: string;
  BLACK_900: string;
  PREMIUM_TIER_2_PURPLE_500: string;
  PREMIUM_TIER_2_PURPLE: string;
  PREMIUM_TIER_2_PINK_500: string;
  PREMIUM_TIER_2_PINK: string;
  PREMIUM_TIER_1_PURPLE_500: string;
  PREMIUM_TIER_1_PURPLE: string;
  PREMIUM_TIER_1_BLUE_500: string;
  PREMIUM_TIER_1_BLUE: string;
  PREMIUM_GUILD_PINK_500: string;
  PREMIUM_GUILD_PINK: string;
  PREMIUM_GUILD_PURPLE_500: string;
  PREMIUM_GUILD_PURPLE: string;
  PREMIUM_GUILD_BLUE_500: string;
  PREMIUM_GUILD_BLUE: string;
  CREATOR_REVENUE_START_500: string;
  CREATOR_REVENUE_START: string;
  CREATOR_REVENUE_END_500: string;
  CREATOR_REVENUE_END: string;
  HYPESQUAD_HOUSE_1_500: string;
  HYPESQUAD_HOUSE_1: string;
  HYPESQUAD_HOUSE_2_500: string;
  HYPESQUAD_HOUSE_2: string;
  HYPESQUAD_HOUSE_3_500: string;
  HYPESQUAD_HOUSE_3: string;
  GOLD_500: string;
  GOLD: string;
  PARTNER_500: string;
  PARTNER: string;
  SKYPE_500: string;
  SKYPE: string;
  BATTLENET_500: string;
  BATTLENET: string;
  STEAM_500: string;
  STEAM: string;
  LOL_500: string;
  LOL: string;
  TWITCH_500: string;
  TWITCH: string;
  YOUTUBE_500: string;
  YOUTUBE: string;
  TWITTER_500: string;
  TWITTER: string;
  REDDIT_500: string;
  REDDIT: string;
  SPOTIFY_500: string;
  SPOTIFY: string;
  FACEBOOK_500: string;
  FACEBOOK: string;
  SAMSUNG_500: string;
  SAMSUNG: string;
  XBOX_500: string;
  XBOX: string;
  GITHUB_500: string;
  GITHUB: string;
  TRANSPARENT: string;
}

/**
 * Get the currently loaded theme
 */
function getTheme(): Theme {
  return window.aliucord.themer.getTheme();
}

/**
 * List the available themes
 */
function listThemes(): Theme[] {
  return window.aliucord.themer.listThemes();
}

/**
 * Apply a theme by name
 */
function applyTheme(name: string): void {
  window.aliucord.themer.applyTheme(name);
}

/**
 * Register a theme
 */
function registerTheme(theme: Theme): void {
  window.aliucord.themer.registerTheme(theme);
}

/**
 * Remove the currently applied theme
 */
function removeTheme(): void {
  window.aliucord.themer.removeTheme();
}

export {
  getTheme,
  listThemes,
  applyTheme,
  registerTheme,
  removeTheme,
};