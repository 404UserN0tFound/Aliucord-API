import { Message } from "./common";

interface Section {
  id: string;
  type: number;
  name: string;
}

interface Command {
  id: string;
  applicationId: string;

  name: string;
  description: string;

  type: ApplicationCommandType;
  inputType: ApplicationCommandInputType;
  options?: CommandOption[];

  predicate?: (message: Message) => void;
  execute: (args: Argument[], message?: Message) => void;
}

interface Argument {
  name: string;
  value: string;
  type: number;
  focused?: any; // TODO: Figure out what focused is
}

interface CommandOption {
  name: string,
  description: string,
  type: ApplicationCommandOptionType,
  required?: boolean,
}

enum ApplicationCommandSectionType {
  BuiltIn = 0,
  Guild = 1,
  DM = 2,
}

enum ApplicationCommandType {
  Chat = 1,
  User = 2,
  Message = 3,
}

enum ApplicationCommandInputType {
  BuiltIn = 0,
  BuiltInText = 1,
  BuiltInIntegration = 2,
  Bot = 3,
  Placeholder = 4,
}

enum ApplicationCommandPermissionType {
  Role = 1,
  User = 2,
}

enum ApplicationCommandOptionType {
  SubCommand = 1,
  SubCommandGroup = 2,

  String = 3,
  Integer = 4,
  Boolean = 5,

  User = 6,
  Channel = 7,
  Role = 8,
  Mentionnable = 9,
  Number = 10,
}

enum InteractionTypes {
  ApplicationCommand = 2,
  MessageComponent = 3,
}

export {
  Section,
  Command,
  CommandOption,
  Argument,

  ApplicationCommandSectionType,
  ApplicationCommandType,
  ApplicationCommandInputType,
  ApplicationCommandPermissionType,
  ApplicationCommandOptionType,

  InteractionTypes,
}