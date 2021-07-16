import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** 商品信息 */
export type GoodsData = {
  /** 商品 ID */
  goodsId: Scalars['String'];
  /** 商品名称 */
  goodsName: Scalars['String'];
  /** 商品简介 */
  goodsBrief?: Maybe<Scalars['String']>;
};

/** 商品列表数据 */
export type GoodsListData = {
  /** 订单列表数据 */
  list: Array<GoodsData>;
  /** 总数 */
  totalCount: Scalars['Int'];
  /** 当前页 */
  page: Scalars['Int'];
};

/** 商品列表参数 */
export type GoodsListParam = {
  /** 商品名称 */
  goodsName?: Maybe<Scalars['String']>;
  /** 每页个数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 第几页 */
  pageNum?: Maybe<Scalars['Int']>;
};

/** 商品详情参数 */
export type GoodsParam = {
  /** 商品 ID */
  goodsId: Scalars['String'];
};

/** 订单数据 */
export type OrderData = {
  /** 订单号 */
  orderNo: Scalars['String'];
  /** 商品 ID */
  goodsId: Scalars['String'];
  /** 金额 */
  pay: Scalars['Float'];
  /** 备注信息 */
  comment?: Maybe<Scalars['String']>;
  goodsData?: Maybe<GoodsData>;
};

/** 订单列表 */
export type OrderListData = {
  /** 订单列表数据 */
  list: Array<OrderData>;
  /** 总数 */
  totalCount: Scalars['Int'];
  /** 当前页 */
  page: Scalars['Int'];
};

/** 订单列表参数 */
export type OrderListParam = {
  /** 订单号 */
  orderNo?: Maybe<Scalars['String']>;
  /** 每页个数 */
  pageSize?: Maybe<Scalars['Int']>;
  /** 第几页 */
  pageNum?: Maybe<Scalars['Int']>;
};

/** 订单详情参数 */
export type OrderParam = {
  /** 订单号 */
  orderNo: Scalars['String'];
};

export type Query = {
  goodsListData: GoodsListData;
  goodsData: GoodsData;
  orderListData: OrderListData;
  orderData: OrderData;
};


export type QueryGoodsListDataArgs = {
  param: GoodsListParam;
};


export type QueryGoodsDataArgs = {
  param: GoodsParam;
};


export type QueryOrderListDataArgs = {
  param: OrderListParam;
};


export type QueryOrderDataArgs = {
  param: OrderParam;
};

export type GoodsQueryVariables = Exact<{
  param: GoodsParam;
}>;


export type GoodsQuery = { goodsData: Pick<GoodsData, 'goodsId' | 'goodsName'> };


export const GoodsDocument = gql`
    query Goods($param: GoodsParam!) {
  goodsData(param: $param) {
    goodsId
    goodsName
  }
}
    `;

/**
 * __useGoodsQuery__
 *
 * To run a query within a React component, call `useGoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoodsQuery({
 *   variables: {
 *      param: // value for 'param'
 *   },
 * });
 */
export function useGoodsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GoodsQuery, GoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GoodsQuery, GoodsQueryVariables>(GoodsDocument, options);
      }
export function useGoodsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GoodsQuery, GoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GoodsQuery, GoodsQueryVariables>(GoodsDocument, options);
        }
export type GoodsQueryHookResult = ReturnType<typeof useGoodsQuery>;
export type GoodsLazyQueryHookResult = ReturnType<typeof useGoodsLazyQuery>;
export type GoodsQueryResult = ApolloReactCommon.QueryResult<GoodsQuery, GoodsQueryVariables>;