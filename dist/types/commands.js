"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionTypes = exports.ApplicationCommandOptionType = exports.ApplicationCommandPermissionType = exports.ApplicationCommandType = exports.ApplicationCommandTarget = exports.ApplicationCommandSectionType = void 0;
var ApplicationCommandSectionType;
(function (ApplicationCommandSectionType) {
    ApplicationCommandSectionType[ApplicationCommandSectionType["BuiltIn"] = 0] = "BuiltIn";
    ApplicationCommandSectionType[ApplicationCommandSectionType["Guild"] = 1] = "Guild";
    ApplicationCommandSectionType[ApplicationCommandSectionType["DM"] = 2] = "DM";
})(ApplicationCommandSectionType || (ApplicationCommandSectionType = {}));
exports.ApplicationCommandSectionType = ApplicationCommandSectionType;
var ApplicationCommandTarget;
(function (ApplicationCommandTarget) {
    ApplicationCommandTarget[ApplicationCommandTarget["Chat"] = 1] = "Chat";
    ApplicationCommandTarget[ApplicationCommandTarget["User"] = 2] = "User";
    ApplicationCommandTarget[ApplicationCommandTarget["Message"] = 3] = "Message";
})(ApplicationCommandTarget || (ApplicationCommandTarget = {}));
exports.ApplicationCommandTarget = ApplicationCommandTarget;
var ApplicationCommandType;
(function (ApplicationCommandType) {
    ApplicationCommandType[ApplicationCommandType["BuiltIn"] = 0] = "BuiltIn";
    ApplicationCommandType[ApplicationCommandType["BuiltInText"] = 1] = "BuiltInText";
    ApplicationCommandType[ApplicationCommandType["BuiltInIntegration"] = 2] = "BuiltInIntegration";
    ApplicationCommandType[ApplicationCommandType["Bot"] = 3] = "Bot";
    ApplicationCommandType[ApplicationCommandType["Placeholder"] = 4] = "Placeholder";
})(ApplicationCommandType || (ApplicationCommandType = {}));
exports.ApplicationCommandType = ApplicationCommandType;
var ApplicationCommandPermissionType;
(function (ApplicationCommandPermissionType) {
    ApplicationCommandPermissionType[ApplicationCommandPermissionType["Role"] = 1] = "Role";
    ApplicationCommandPermissionType[ApplicationCommandPermissionType["User"] = 2] = "User";
})(ApplicationCommandPermissionType || (ApplicationCommandPermissionType = {}));
exports.ApplicationCommandPermissionType = ApplicationCommandPermissionType;
var ApplicationCommandOptionType;
(function (ApplicationCommandOptionType) {
    ApplicationCommandOptionType[ApplicationCommandOptionType["SubCommand"] = 1] = "SubCommand";
    ApplicationCommandOptionType[ApplicationCommandOptionType["SubCommandGroup"] = 2] = "SubCommandGroup";
    ApplicationCommandOptionType[ApplicationCommandOptionType["String"] = 3] = "String";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Integer"] = 4] = "Integer";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Boolean"] = 5] = "Boolean";
    ApplicationCommandOptionType[ApplicationCommandOptionType["User"] = 6] = "User";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Channel"] = 7] = "Channel";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Role"] = 8] = "Role";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Mentionnable"] = 9] = "Mentionnable";
    ApplicationCommandOptionType[ApplicationCommandOptionType["Number"] = 10] = "Number";
})(ApplicationCommandOptionType || (ApplicationCommandOptionType = {}));
exports.ApplicationCommandOptionType = ApplicationCommandOptionType;
var InteractionTypes;
(function (InteractionTypes) {
    InteractionTypes[InteractionTypes["ApplicationCommand"] = 2] = "ApplicationCommand";
    InteractionTypes[InteractionTypes["MessageComponent"] = 3] = "MessageComponent";
})(InteractionTypes || (InteractionTypes = {}));
exports.InteractionTypes = InteractionTypes;
