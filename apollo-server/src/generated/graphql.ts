export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
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
  type: RideType;
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
  type: RideType;
};

export enum RideType {
  Gravel = 'GRAVEL',
  Mountain = 'MOUNTAIN',
  Road = 'ROAD'
}

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
  type?: InputMaybe<RideType>;
};
