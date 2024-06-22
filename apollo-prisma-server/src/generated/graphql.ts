import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: number; output: number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddBikeInput = {
  brand: Scalars['String']['input'];
  model: Scalars['String']['input'];
  nickname?: InputMaybe<Scalars['String']['input']>;
};

export type AddRideInput = {
  bikeId: Scalars['ID']['input'];
  distance: Scalars['Float']['input'];
  location: Scalars['String']['input'];
};

export type Bike = {
  __typename?: 'Bike';
  brand: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  model: Scalars['String']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBike: Bike;
  addRide: Ride;
  removeBike: Scalars['Boolean']['output'];
  removeRide: Scalars['Boolean']['output'];
  updateBike: Bike;
  updateRide: Ride;
};


export type MutationAddBikeArgs = {
  input: AddBikeInput;
};


export type MutationAddRideArgs = {
  input: AddRideInput;
};


export type MutationRemoveBikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveRideArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateBikeArgs = {
  id: Scalars['ID']['input'];
  input: UpdateBikeInput;
};


export type MutationUpdateRideArgs = {
  id: Scalars['ID']['input'];
  input: UpdateRideInput;
};

export type Query = {
  __typename?: 'Query';
  bikes: Array<Bike>;
  rides: Array<Ride>;
};

export type Ride = {
  __typename?: 'Ride';
  bike: Bike;
  distance: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
};

export type UpdateBikeInput = {
  bikeId: Scalars['ID']['input'];
  brand?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRideInput = {
  bikeId: Scalars['ID']['input'];
  distance?: InputMaybe<Scalars['Float']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddBikeInput: AddBikeInput;
  AddRideInput: AddRideInput;
  Bike: ResolverTypeWrapper<Bike>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Ride: ResolverTypeWrapper<Ride>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateBikeInput: UpdateBikeInput;
  UpdateRideInput: UpdateRideInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddBikeInput: AddBikeInput;
  AddRideInput: AddRideInput;
  Bike: Bike;
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Mutation: {};
  Query: {};
  Ride: Ride;
  String: Scalars['String']['output'];
  UpdateBikeInput: UpdateBikeInput;
  UpdateRideInput: UpdateRideInput;
};

export type BikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bike'] = ResolversParentTypes['Bike']> = {
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBike?: Resolver<ResolversTypes['Bike'], ParentType, ContextType, RequireFields<MutationAddBikeArgs, 'input'>>;
  addRide?: Resolver<ResolversTypes['Ride'], ParentType, ContextType, RequireFields<MutationAddRideArgs, 'input'>>;
  removeBike?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveBikeArgs, 'id'>>;
  removeRide?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveRideArgs, 'id'>>;
  updateBike?: Resolver<ResolversTypes['Bike'], ParentType, ContextType, RequireFields<MutationUpdateBikeArgs, 'id' | 'input'>>;
  updateRide?: Resolver<ResolversTypes['Ride'], ParentType, ContextType, RequireFields<MutationUpdateRideArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  bikes?: Resolver<Array<ResolversTypes['Bike']>, ParentType, ContextType>;
  rides?: Resolver<Array<ResolversTypes['Ride']>, ParentType, ContextType>;
};

export type RideResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ride'] = ResolversParentTypes['Ride']> = {
  bike?: Resolver<ResolversTypes['Bike'], ParentType, ContextType>;
  distance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Bike?: BikeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Ride?: RideResolvers<ContextType>;
};

