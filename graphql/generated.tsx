import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AggregateUserInformation = {
  __typename?: 'AggregateUserInformation';
  _avg?: Maybe<UserInformationAvgAggregate>;
  _count?: Maybe<UserInformationCountAggregate>;
  _max?: Maybe<UserInformationMaxAggregate>;
  _min?: Maybe<UserInformationMinAggregate>;
  _sum?: Maybe<UserInformationSumAggregate>;
};

export type AggregateUserSettings = {
  __typename?: 'AggregateUserSettings';
  _avg?: Maybe<UserSettingsAvgAggregate>;
  _count?: Maybe<UserSettingsCountAggregate>;
  _max?: Maybe<UserSettingsMaxAggregate>;
  _min?: Maybe<UserSettingsMinAggregate>;
  _sum?: Maybe<UserSettingsSumAggregate>;
};

export type CreateManyAndReturnUser = {
  __typename?: 'CreateManyAndReturnUser';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  role: Role;
};

export type CreateManyAndReturnUserInformation = {
  __typename?: 'CreateManyAndReturnUserInformation';
  age: Scalars['Int']['output'];
  daysToTrain?: Maybe<Array<DaysToTrain>>;
  gender: Gender;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  injury?: Maybe<Scalars['String']['output']>;
  medicalCondition?: Maybe<Array<Scalars['String']['output']>>;
  pathology?: Maybe<Scalars['String']['output']>;
  targetOptions?: Maybe<TargetOptions>;
  timeToTrain?: Maybe<Scalars['DateTimeISO']['output']>;
  user: User;
  userId: Scalars['Int']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type CreateManyAndReturnUserSettings = {
  __typename?: 'CreateManyAndReturnUserSettings';
  id: Scalars['Int']['output'];
  theme?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['Int']['output'];
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export enum DaysToTrain {
  FRIDAY = 'FRIDAY',
  MONDAY = 'MONDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
  THURSDAY = 'THURSDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY'
}

export type EnumDaysToTrainNullableListFilter = {
  equals?: InputMaybe<Array<DaysToTrain>>;
  has?: InputMaybe<DaysToTrain>;
  hasEvery?: InputMaybe<Array<DaysToTrain>>;
  hasSome?: InputMaybe<Array<DaysToTrain>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnumGenderFieldUpdateOperationsInput = {
  set?: InputMaybe<Gender>;
};

export type EnumGenderFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumGenderWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumGenderFilter>;
  _min?: InputMaybe<NestedEnumGenderFilter>;
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumtargetOptionsNullableFilter = {
  equals?: InputMaybe<TargetOptions>;
  in?: InputMaybe<Array<TargetOptions>>;
  not?: InputMaybe<NestedEnumtargetOptionsNullableFilter>;
  notIn?: InputMaybe<Array<TargetOptions>>;
};

export type EnumtargetOptionsNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumtargetOptionsNullableFilter>;
  _min?: InputMaybe<NestedEnumtargetOptionsNullableFilter>;
  equals?: InputMaybe<TargetOptions>;
  in?: InputMaybe<Array<TargetOptions>>;
  not?: InputMaybe<NestedEnumtargetOptionsNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TargetOptions>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export enum Gender {
  F = 'F',
  M = 'M'
}

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAndReturnUser: Array<CreateManyAndReturnUser>;
  createManyAndReturnUserInformation: Array<CreateManyAndReturnUserInformation>;
  createManyAndReturnUserSettings: Array<CreateManyAndReturnUserSettings>;
  createManyUser: AffectedRowsOutput;
  createManyUserInformation: AffectedRowsOutput;
  createManyUserSettings: AffectedRowsOutput;
  createOneUser: User;
  createOneUserInformation: UserInformation;
  createOneUserSettings: UserSettings;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserInformation: AffectedRowsOutput;
  deleteManyUserSettings: AffectedRowsOutput;
  deleteOneUser?: Maybe<User>;
  deleteOneUserInformation?: Maybe<UserInformation>;
  deleteOneUserSettings?: Maybe<UserSettings>;
  updateManyUser: AffectedRowsOutput;
  updateManyUserInformation: AffectedRowsOutput;
  updateManyUserSettings: AffectedRowsOutput;
  updateOneUser?: Maybe<User>;
  updateOneUserInformation?: Maybe<UserInformation>;
  updateOneUserSettings?: Maybe<UserSettings>;
  upsertOneUser: User;
  upsertOneUserInformation: UserInformation;
  upsertOneUserSettings: UserSettings;
};


export type MutationCreateManyAndReturnUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnUserInformationArgs = {
  data: Array<UserInformationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyAndReturnUserSettingsArgs = {
  data: Array<UserSettingsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserInformationArgs = {
  data: Array<UserInformationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserSettingsArgs = {
  data: Array<UserSettingsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneUserInformationArgs = {
  data: UserInformationCreateInput;
};


export type MutationCreateOneUserSettingsArgs = {
  data: UserSettingsCreateInput;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserInformationArgs = {
  where?: InputMaybe<UserInformationWhereInput>;
};


export type MutationDeleteManyUserSettingsArgs = {
  where?: InputMaybe<UserSettingsWhereInput>;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserInformationArgs = {
  where: UserInformationWhereUniqueInput;
};


export type MutationDeleteOneUserSettingsArgs = {
  where: UserSettingsWhereUniqueInput;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserInformationArgs = {
  data: UserInformationUpdateManyMutationInput;
  where?: InputMaybe<UserInformationWhereInput>;
};


export type MutationUpdateManyUserSettingsArgs = {
  data: UserSettingsUpdateManyMutationInput;
  where?: InputMaybe<UserSettingsWhereInput>;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserInformationArgs = {
  data: UserInformationUpdateInput;
  where: UserInformationWhereUniqueInput;
};


export type MutationUpdateOneUserSettingsArgs = {
  data: UserSettingsUpdateInput;
  where: UserSettingsWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserInformationArgs = {
  create: UserInformationCreateInput;
  update: UserInformationUpdateInput;
  where: UserInformationWhereUniqueInput;
};


export type MutationUpsertOneUserSettingsArgs = {
  create: UserSettingsCreateInput;
  update: UserSettingsUpdateInput;
  where: UserSettingsWhereUniqueInput;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumGenderFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumGenderWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumGenderFilter>;
  _min?: InputMaybe<NestedEnumGenderFilter>;
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumtargetOptionsNullableFilter = {
  equals?: InputMaybe<TargetOptions>;
  in?: InputMaybe<Array<TargetOptions>>;
  not?: InputMaybe<NestedEnumtargetOptionsNullableFilter>;
  notIn?: InputMaybe<Array<TargetOptions>>;
};

export type NestedEnumtargetOptionsNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumtargetOptionsNullableFilter>;
  _min?: InputMaybe<NestedEnumtargetOptionsNullableFilter>;
  equals?: InputMaybe<TargetOptions>;
  in?: InputMaybe<Array<TargetOptions>>;
  not?: InputMaybe<NestedEnumtargetOptionsNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TargetOptions>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableEnumtargetOptionsFieldUpdateOperationsInput = {
  set?: InputMaybe<TargetOptions>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  FIRST = 'first',
  LAST = 'last'
}

export type Query = {
  __typename?: 'Query';
  aggregateUser: AggregateUser;
  aggregateUserInformation: AggregateUserInformation;
  aggregateUserSettings: AggregateUserSettings;
  findFirstUser?: Maybe<User>;
  findFirstUserInformation?: Maybe<UserInformation>;
  findFirstUserInformationOrThrow?: Maybe<UserInformation>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstUserSettings?: Maybe<UserSettings>;
  findFirstUserSettingsOrThrow?: Maybe<UserSettings>;
  findManyUserSettings: Array<UserSettings>;
  findUniqueUserSettings?: Maybe<UserSettings>;
  findUniqueUserSettingsOrThrow?: Maybe<UserSettings>;
  getUser?: Maybe<User>;
  getUserInformation?: Maybe<UserInformation>;
  groupByUser: Array<UserGroupBy>;
  groupByUserInformation: Array<UserInformationGroupBy>;
  groupByUserSettings: Array<UserSettingsGroupBy>;
  user?: Maybe<User>;
  userInformation?: Maybe<UserInformation>;
  userInformations: Array<UserInformation>;
  users: Array<User>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserInformationArgs = {
  cursor?: InputMaybe<UserInformationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserInformationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserInformationWhereInput>;
};


export type QueryAggregateUserSettingsArgs = {
  cursor?: InputMaybe<UserSettingsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserSettingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserSettingsWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserInformationArgs = {
  cursor?: InputMaybe<UserInformationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserInformationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserInformationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserInformationWhereInput>;
};


export type QueryFindFirstUserInformationOrThrowArgs = {
  cursor?: InputMaybe<UserInformationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserInformationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserInformationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserInformationWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserSettingsArgs = {
  cursor?: InputMaybe<UserSettingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserSettingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserSettingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserSettingsWhereInput>;
};


export type QueryFindFirstUserSettingsOrThrowArgs = {
  cursor?: InputMaybe<UserSettingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserSettingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserSettingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserSettingsWhereInput>;
};


export type QueryFindManyUserSettingsArgs = {
  cursor?: InputMaybe<UserSettingsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserSettingsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserSettingsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserSettingsWhereInput>;
};


export type QueryFindUniqueUserSettingsArgs = {
  where: UserSettingsWhereUniqueInput;
};


export type QueryFindUniqueUserSettingsOrThrowArgs = {
  where: UserSettingsWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetUserInformationArgs = {
  where: UserInformationWhereUniqueInput;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserInformationArgs = {
  by: Array<UserInformationScalarFieldEnum>;
  having?: InputMaybe<UserInformationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserInformationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserInformationWhereInput>;
};


export type QueryGroupByUserSettingsArgs = {
  by: Array<UserSettingsScalarFieldEnum>;
  having?: InputMaybe<UserSettingsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserSettingsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserSettingsWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserInformationArgs = {
  where: UserInformationWhereUniqueInput;
};


export type QueryUserInformationsArgs = {
  cursor?: InputMaybe<UserInformationWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserInformationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserInformationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserInformationWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  DEFAULT = 'default',
  INSENSITIVE = 'insensitive'
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  info?: Maybe<UserInformation>;
  lastName?: Maybe<Scalars['String']['output']>;
  role: Role;
  settings?: Maybe<UserSettings>;
};


export type UserInfoArgs = {
  where?: InputMaybe<UserInformationWhereInput>;
};


export type UserSettingsArgs = {
  where?: InputMaybe<UserSettingsWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  firstName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  info?: InputMaybe<UserInformationCreateNestedOneWithoutUserInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  settings?: InputMaybe<UserSettingsCreateNestedOneWithoutUserInput>;
};

export type UserCreateManyInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
};

export type UserCreateNestedOneWithoutInfoInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInfoInput>;
  create?: InputMaybe<UserCreateWithoutInfoInput>;
};

export type UserCreateNestedOneWithoutSettingsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSettingsInput>;
  create?: InputMaybe<UserCreateWithoutSettingsInput>;
};

export type UserCreateOrConnectWithoutInfoInput = {
  create: UserCreateWithoutInfoInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSettingsInput = {
  create: UserCreateWithoutSettingsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutInfoInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  settings?: InputMaybe<UserSettingsCreateNestedOneWithoutUserInput>;
};

export type UserCreateWithoutSettingsInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  info?: InputMaybe<UserInformationCreateNestedOneWithoutUserInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  role: Role;
};

export type UserInformation = {
  __typename?: 'UserInformation';
  age: Scalars['Int']['output'];
  daysToTrain: Array<DaysToTrain>;
  gender: Gender;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  injury?: Maybe<Scalars['String']['output']>;
  medicalCondition: Array<Scalars['String']['output']>;
  pathology?: Maybe<Scalars['String']['output']>;
  targetOptions?: Maybe<TargetOptions>;
  timeToTrain?: Maybe<Scalars['DateTimeISO']['output']>;
  user: User;
  userId: Scalars['Int']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type UserInformationAvgAggregate = {
  __typename?: 'UserInformationAvgAggregate';
  age?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type UserInformationAvgOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type UserInformationCountAggregate = {
  __typename?: 'UserInformationCountAggregate';
  _all: Scalars['Int']['output'];
  age: Scalars['Int']['output'];
  daysToTrain: Scalars['Int']['output'];
  gender: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  injury: Scalars['Int']['output'];
  medicalCondition: Scalars['Int']['output'];
  pathology: Scalars['Int']['output'];
  targetOptions: Scalars['Int']['output'];
  timeToTrain: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  weight: Scalars['Int']['output'];
};

export type UserInformationCountOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  daysToTrain?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  injury?: InputMaybe<SortOrder>;
  medicalCondition?: InputMaybe<SortOrder>;
  pathology?: InputMaybe<SortOrder>;
  targetOptions?: InputMaybe<SortOrder>;
  timeToTrain?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type UserInformationCreateInput = {
  age: Scalars['Int']['input'];
  daysToTrain?: InputMaybe<UserInformationCreatedaysToTrainInput>;
  gender: Gender;
  height?: InputMaybe<Scalars['Float']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  injury?: InputMaybe<Scalars['String']['input']>;
  medicalCondition?: InputMaybe<UserInformationCreatemedicalConditionInput>;
  pathology?: InputMaybe<Scalars['String']['input']>;
  targetOptions?: InputMaybe<TargetOptions>;
  timeToTrain?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutInfoInput;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UserInformationCreateManyInput = {
  age: Scalars['Int']['input'];
  daysToTrain?: InputMaybe<UserInformationCreatedaysToTrainInput>;
  gender: Gender;
  height?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  injury?: InputMaybe<Scalars['String']['input']>;
  medicalCondition?: InputMaybe<UserInformationCreatemedicalConditionInput>;
  pathology?: InputMaybe<Scalars['String']['input']>;
  targetOptions?: InputMaybe<TargetOptions>;
  timeToTrain?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UserInformationCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<UserInformationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserInformationCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserInformationCreateWithoutUserInput>;
};

export type UserInformationCreateOrConnectWithoutUserInput = {
  create: UserInformationCreateWithoutUserInput;
  where: UserInformationWhereUniqueInput;
};

export type UserInformationCreateWithoutUserInput = {
  age: Scalars['Int']['input'];
  daysToTrain?: InputMaybe<UserInformationCreatedaysToTrainInput>;
  gender: Gender;
  height?: InputMaybe<Scalars['Float']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  injury?: InputMaybe<Scalars['String']['input']>;
  medicalCondition?: InputMaybe<UserInformationCreatemedicalConditionInput>;
  pathology?: InputMaybe<Scalars['String']['input']>;
  targetOptions?: InputMaybe<TargetOptions>;
  timeToTrain?: InputMaybe<Scalars['DateTimeISO']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type UserInformationCreatedaysToTrainInput = {
  set: Array<DaysToTrain>;
};

export type UserInformationCreatemedicalConditionInput = {
  set: Array<Scalars['String']['input']>;
};

export type UserInformationGroupBy = {
  __typename?: 'UserInformationGroupBy';
  _avg?: Maybe<UserInformationAvgAggregate>;
  _count?: Maybe<UserInformationCountAggregate>;
  _max?: Maybe<UserInformationMaxAggregate>;
  _min?: Maybe<UserInformationMinAggregate>;
  _sum?: Maybe<UserInformationSumAggregate>;
  age: Scalars['Int']['output'];
  daysToTrain?: Maybe<Array<DaysToTrain>>;
  gender: Gender;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  injury?: Maybe<Scalars['String']['output']>;
  medicalCondition?: Maybe<Array<Scalars['String']['output']>>;
  pathology?: Maybe<Scalars['String']['output']>;
  targetOptions?: Maybe<TargetOptions>;
  timeToTrain?: Maybe<Scalars['DateTimeISO']['output']>;
  userId: Scalars['Int']['output'];
  weight?: Maybe<Scalars['Float']['output']>;
};

export type UserInformationMaxAggregate = {
  __typename?: 'UserInformationMaxAggregate';
  age?: Maybe<Scalars['Int']['output']>;
  gender?: Maybe<Gender>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  injury?: Maybe<Scalars['String']['output']>;
  pathology?: Maybe<Scalars['String']['output']>;
  targetOptions?: Maybe<TargetOptions>;
  timeToTrain?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type UserInformationMaxOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  injury?: InputMaybe<SortOrder>;
  pathology?: InputMaybe<SortOrder>;
  targetOptions?: InputMaybe<SortOrder>;
  timeToTrain?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type UserInformationMinAggregate = {
  __typename?: 'UserInformationMinAggregate';
  age?: Maybe<Scalars['Int']['output']>;
  gender?: Maybe<Gender>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  injury?: Maybe<Scalars['String']['output']>;
  pathology?: Maybe<Scalars['String']['output']>;
  targetOptions?: Maybe<TargetOptions>;
  timeToTrain?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type UserInformationMinOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  injury?: InputMaybe<SortOrder>;
  pathology?: InputMaybe<SortOrder>;
  targetOptions?: InputMaybe<SortOrder>;
  timeToTrain?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type UserInformationNullableRelationFilter = {
  is?: InputMaybe<UserInformationWhereInput>;
  isNot?: InputMaybe<UserInformationWhereInput>;
};

export type UserInformationOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserInformationAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserInformationCountOrderByAggregateInput>;
  _max?: InputMaybe<UserInformationMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserInformationMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserInformationSumOrderByAggregateInput>;
  age?: InputMaybe<SortOrder>;
  daysToTrain?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  injury?: InputMaybe<SortOrderInput>;
  medicalCondition?: InputMaybe<SortOrder>;
  pathology?: InputMaybe<SortOrderInput>;
  targetOptions?: InputMaybe<SortOrderInput>;
  timeToTrain?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrderInput>;
};

export type UserInformationOrderByWithRelationInput = {
  age?: InputMaybe<SortOrder>;
  daysToTrain?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  injury?: InputMaybe<SortOrderInput>;
  medicalCondition?: InputMaybe<SortOrder>;
  pathology?: InputMaybe<SortOrderInput>;
  targetOptions?: InputMaybe<SortOrderInput>;
  timeToTrain?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrderInput>;
};

export enum UserInformationScalarFieldEnum {
  AGE = 'age',
  DAYSTOTRAIN = 'daysToTrain',
  GENDER = 'gender',
  HEIGHT = 'height',
  ID = 'id',
  IMAGE = 'image',
  INJURY = 'injury',
  MEDICALCONDITION = 'medicalCondition',
  PATHOLOGY = 'pathology',
  TARGETOPTIONS = 'targetOptions',
  TIMETOTRAIN = 'timeToTrain',
  USERID = 'userId',
  WEIGHT = 'weight'
}

export type UserInformationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserInformationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserInformationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserInformationScalarWhereWithAggregatesInput>>;
  age?: InputMaybe<IntWithAggregatesFilter>;
  daysToTrain?: InputMaybe<EnumDaysToTrainNullableListFilter>;
  gender?: InputMaybe<EnumGenderWithAggregatesFilter>;
  height?: InputMaybe<FloatNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  injury?: InputMaybe<StringNullableWithAggregatesFilter>;
  medicalCondition?: InputMaybe<StringNullableListFilter>;
  pathology?: InputMaybe<StringNullableWithAggregatesFilter>;
  targetOptions?: InputMaybe<EnumtargetOptionsNullableWithAggregatesFilter>;
  timeToTrain?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
  weight?: InputMaybe<FloatNullableWithAggregatesFilter>;
};

export type UserInformationSumAggregate = {
  __typename?: 'UserInformationSumAggregate';
  age?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type UserInformationSumOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  weight?: InputMaybe<SortOrder>;
};

export type UserInformationUpdateInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  daysToTrain?: InputMaybe<UserInformationUpdatedaysToTrainInput>;
  gender?: InputMaybe<EnumGenderFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  injury?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  medicalCondition?: InputMaybe<UserInformationUpdatemedicalConditionInput>;
  pathology?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  targetOptions?: InputMaybe<NullableEnumtargetOptionsFieldUpdateOperationsInput>;
  timeToTrain?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutInfoNestedInput>;
  weight?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type UserInformationUpdateManyMutationInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  daysToTrain?: InputMaybe<UserInformationUpdatedaysToTrainInput>;
  gender?: InputMaybe<EnumGenderFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  injury?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  medicalCondition?: InputMaybe<UserInformationUpdatemedicalConditionInput>;
  pathology?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  targetOptions?: InputMaybe<NullableEnumtargetOptionsFieldUpdateOperationsInput>;
  timeToTrain?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type UserInformationUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<UserInformationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserInformationCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserInformationCreateWithoutUserInput>;
  delete?: InputMaybe<UserInformationWhereInput>;
  disconnect?: InputMaybe<UserInformationWhereInput>;
  update?: InputMaybe<UserInformationUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<UserInformationUpsertWithoutUserInput>;
};

export type UserInformationUpdateToOneWithWhereWithoutUserInput = {
  data: UserInformationUpdateWithoutUserInput;
  where?: InputMaybe<UserInformationWhereInput>;
};

export type UserInformationUpdateWithoutUserInput = {
  age?: InputMaybe<IntFieldUpdateOperationsInput>;
  daysToTrain?: InputMaybe<UserInformationUpdatedaysToTrainInput>;
  gender?: InputMaybe<EnumGenderFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  injury?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  medicalCondition?: InputMaybe<UserInformationUpdatemedicalConditionInput>;
  pathology?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  targetOptions?: InputMaybe<NullableEnumtargetOptionsFieldUpdateOperationsInput>;
  timeToTrain?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  weight?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type UserInformationUpdatedaysToTrainInput = {
  push?: InputMaybe<Array<DaysToTrain>>;
  set?: InputMaybe<Array<DaysToTrain>>;
};

export type UserInformationUpdatemedicalConditionInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UserInformationUpsertWithoutUserInput = {
  create: UserInformationCreateWithoutUserInput;
  update: UserInformationUpdateWithoutUserInput;
  where?: InputMaybe<UserInformationWhereInput>;
};

export type UserInformationWhereInput = {
  AND?: InputMaybe<Array<UserInformationWhereInput>>;
  NOT?: InputMaybe<Array<UserInformationWhereInput>>;
  OR?: InputMaybe<Array<UserInformationWhereInput>>;
  age?: InputMaybe<IntFilter>;
  daysToTrain?: InputMaybe<EnumDaysToTrainNullableListFilter>;
  gender?: InputMaybe<EnumGenderFilter>;
  height?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  injury?: InputMaybe<StringNullableFilter>;
  medicalCondition?: InputMaybe<StringNullableListFilter>;
  pathology?: InputMaybe<StringNullableFilter>;
  targetOptions?: InputMaybe<EnumtargetOptionsNullableFilter>;
  timeToTrain?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
  weight?: InputMaybe<FloatNullableFilter>;
};

export type UserInformationWhereUniqueInput = {
  AND?: InputMaybe<Array<UserInformationWhereInput>>;
  NOT?: InputMaybe<Array<UserInformationWhereInput>>;
  OR?: InputMaybe<Array<UserInformationWhereInput>>;
  age?: InputMaybe<IntFilter>;
  daysToTrain?: InputMaybe<EnumDaysToTrainNullableListFilter>;
  gender?: InputMaybe<EnumGenderFilter>;
  height?: InputMaybe<FloatNullableFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  injury?: InputMaybe<StringNullableFilter>;
  medicalCondition?: InputMaybe<StringNullableListFilter>;
  pathology?: InputMaybe<StringNullableFilter>;
  targetOptions?: InputMaybe<EnumtargetOptionsNullableFilter>;
  timeToTrain?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<FloatNullableFilter>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  info?: InputMaybe<UserInformationOrderByWithRelationInput>;
  lastName?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  settings?: InputMaybe<UserSettingsOrderByWithRelationInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  EMAIL = 'email',
  FIRSTNAME = 'firstName',
  ID = 'id',
  LASTNAME = 'lastName',
  ROLE = 'role'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  lastName?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleWithAggregatesFilter>;
};

export type UserSettings = {
  __typename?: 'UserSettings';
  id: Scalars['Int']['output'];
  theme?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['Int']['output'];
};

export type UserSettingsAvgAggregate = {
  __typename?: 'UserSettingsAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type UserSettingsAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserSettingsCountAggregate = {
  __typename?: 'UserSettingsCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  theme: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserSettingsCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserSettingsCreateInput = {
  theme?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutSettingsInput;
};

export type UserSettingsCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  theme?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
};

export type UserSettingsCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<UserSettingsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserSettingsCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserSettingsCreateWithoutUserInput>;
};

export type UserSettingsCreateOrConnectWithoutUserInput = {
  create: UserSettingsCreateWithoutUserInput;
  where: UserSettingsWhereUniqueInput;
};

export type UserSettingsCreateWithoutUserInput = {
  theme?: InputMaybe<Scalars['String']['input']>;
};

export type UserSettingsGroupBy = {
  __typename?: 'UserSettingsGroupBy';
  _avg?: Maybe<UserSettingsAvgAggregate>;
  _count?: Maybe<UserSettingsCountAggregate>;
  _max?: Maybe<UserSettingsMaxAggregate>;
  _min?: Maybe<UserSettingsMinAggregate>;
  _sum?: Maybe<UserSettingsSumAggregate>;
  id: Scalars['Int']['output'];
  theme?: Maybe<Scalars['String']['output']>;
  userId: Scalars['Int']['output'];
};

export type UserSettingsMaxAggregate = {
  __typename?: 'UserSettingsMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserSettingsMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserSettingsMinAggregate = {
  __typename?: 'UserSettingsMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserSettingsMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserSettingsNullableRelationFilter = {
  is?: InputMaybe<UserSettingsWhereInput>;
  isNot?: InputMaybe<UserSettingsWhereInput>;
};

export type UserSettingsOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserSettingsAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserSettingsCountOrderByAggregateInput>;
  _max?: InputMaybe<UserSettingsMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserSettingsMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSettingsSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrderInput>;
  userId?: InputMaybe<SortOrder>;
};

export type UserSettingsOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  theme?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserSettingsScalarFieldEnum {
  ID = 'id',
  THEME = 'theme',
  USERID = 'userId'
}

export type UserSettingsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserSettingsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserSettingsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserSettingsScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  theme?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type UserSettingsSumAggregate = {
  __typename?: 'UserSettingsSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserSettingsSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserSettingsUpdateInput = {
  theme?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSettingsNestedInput>;
};

export type UserSettingsUpdateManyMutationInput = {
  theme?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserSettingsUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<UserSettingsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserSettingsCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserSettingsCreateWithoutUserInput>;
  delete?: InputMaybe<UserSettingsWhereInput>;
  disconnect?: InputMaybe<UserSettingsWhereInput>;
  update?: InputMaybe<UserSettingsUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<UserSettingsUpsertWithoutUserInput>;
};

export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
  data: UserSettingsUpdateWithoutUserInput;
  where?: InputMaybe<UserSettingsWhereInput>;
};

export type UserSettingsUpdateWithoutUserInput = {
  theme?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserSettingsUpsertWithoutUserInput = {
  create: UserSettingsCreateWithoutUserInput;
  update: UserSettingsUpdateWithoutUserInput;
  where?: InputMaybe<UserSettingsWhereInput>;
};

export type UserSettingsWhereInput = {
  AND?: InputMaybe<Array<UserSettingsWhereInput>>;
  NOT?: InputMaybe<Array<UserSettingsWhereInput>>;
  OR?: InputMaybe<Array<UserSettingsWhereInput>>;
  id?: InputMaybe<IntFilter>;
  theme?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserSettingsWhereUniqueInput = {
  AND?: InputMaybe<Array<UserSettingsWhereInput>>;
  NOT?: InputMaybe<Array<UserSettingsWhereInput>>;
  OR?: InputMaybe<Array<UserSettingsWhereInput>>;
  id?: InputMaybe<Scalars['Int']['input']>;
  theme?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  info?: InputMaybe<UserInformationUpdateOneWithoutUserNestedInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  settings?: InputMaybe<UserSettingsUpdateOneWithoutUserNestedInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutInfoNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutInfoInput>;
  create?: InputMaybe<UserCreateWithoutInfoInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutInfoInput>;
  upsert?: InputMaybe<UserUpsertWithoutInfoInput>;
};

export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSettingsInput>;
  create?: InputMaybe<UserCreateWithoutSettingsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSettingsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSettingsInput>;
};

export type UserUpdateToOneWithWhereWithoutInfoInput = {
  data: UserUpdateWithoutInfoInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSettingsInput = {
  data: UserUpdateWithoutSettingsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutInfoInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  settings?: InputMaybe<UserSettingsUpdateOneWithoutUserNestedInput>;
};

export type UserUpdateWithoutSettingsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  info?: InputMaybe<UserInformationUpdateOneWithoutUserNestedInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutInfoInput = {
  create: UserCreateWithoutInfoInput;
  update: UserUpdateWithoutInfoInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSettingsInput = {
  create: UserCreateWithoutSettingsInput;
  update: UserUpdateWithoutSettingsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  info?: InputMaybe<UserInformationNullableRelationFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  settings?: InputMaybe<UserSettingsNullableRelationFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  info?: InputMaybe<UserInformationNullableRelationFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  settings?: InputMaybe<UserSettingsNullableRelationFilter>;
};

export enum TargetOptions {
  GAIN = 'GAIN',
  LOSE = 'LOSE',
  MAINTAIN = 'MAINTAIN'
}

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, firstName: string, lastName?: string | null, role: Role, email: string }> };


export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
    firstName
    lastName
    role
    email
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;