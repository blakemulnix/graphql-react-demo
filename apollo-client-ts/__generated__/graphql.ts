/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
};

export type AddRideInput = {
  bikeId: Scalars['ID']['input'];
  distance: Scalars['Float']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Bike = {
  __typename?: 'Bike';
  brand: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  model: Scalars['String']['output'];
  rides: Array<Ride>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBike: Bike;
  addRide: Ride;
};


export type MutationAddBikeArgs = {
  input: AddBikeInput;
};


export type MutationAddRideArgs = {
  input: AddRideInput;
};

export type Query = {
  __typename?: 'Query';
  bikes: Array<Bike>;
  rides: Array<Ride>;
};

export type Ride = {
  __typename?: 'Ride';
  bikeId: Scalars['ID']['output'];
  distance: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type GetBikesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBikesQuery = { __typename?: 'Query', bikes: Array<{ __typename?: 'Bike', brand: string, model: string, rides: Array<{ __typename?: 'Ride', name: string, distance: number }> }> };


export const GetBikesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bikes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"model"}},{"kind":"Field","name":{"kind":"Name","value":"rides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"distance"}}]}}]}}]}}]} as unknown as DocumentNode<GetBikesQuery, GetBikesQueryVariables>;