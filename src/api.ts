
import { 
    TTransactionParamWithType,
    TLong,
    IIssue,
    IIssueWithType,
    ITransfer,
    ITransferWithType,
    IReissue,
    IReissueWithType,
    IBurn,
    IBurnWithType,
    ILease,
    ILeaseWithType,
    IExchange,
    IExchangeWithType,
    ICancelLease,
    ICancelLeaseWithType,
    IAlias,
    IAliasWithType,
    IMassTransfer,
    IMassTransferWithType,
    IData,
    IDataWithType,
    ISponsorship,
    ISponsorshipWithType,
    ISetScript,
    ISetScriptWithType,
    ISetAssetScript,
    ISetAssetScriptWithType,
    IInvoke,
    IInvokeWithType,
    TActionsApi
} from './interface';


export type TTransactionsApi1<Q extends TTransactionParamWithType<TLong>> = {
    issue(data: IIssue): TTransactionsApi2<Q, IIssueWithType>;
    transfer(data: ITransfer): TTransactionsApi2<Q, ITransferWithType>;
    reissue(data: IReissue): TTransactionsApi2<Q, IReissueWithType>;
    burn(data: IBurn): TTransactionsApi2<Q, IBurnWithType>;
    lease(data: ILease): TTransactionsApi2<Q, ILeaseWithType>;
    exchange(data: IExchange): TTransactionsApi2<Q, IExchangeWithType>;
    cancelLease(data: ICancelLease): TTransactionsApi2<Q, ICancelLeaseWithType>;
    alias(data: IAlias): TTransactionsApi2<Q, IAliasWithType>;
    massTransfer(data: IMassTransfer): TTransactionsApi2<Q, IMassTransferWithType>;
    data(data: IData): TTransactionsApi2<Q, IDataWithType>;
    sponsorship(data: ISponsorship): TTransactionsApi2<Q, ISponsorshipWithType>;
    setScript(data: ISetScript): TTransactionsApi2<Q, ISetScriptWithType>;
    setAssetScript(data: ISetAssetScript): TTransactionsApi2<Q, ISetAssetScriptWithType>;
    invoke(data: IInvoke): TTransactionsApi2<Q, IInvokeWithType>;
} & TActionsApi<[Q]>;

export type TTransactionsApi2<Q extends TTransactionParamWithType<TLong>, W extends TTransactionParamWithType<TLong>> = {
    issue(data: IIssue): TTransactionsApi3<Q, W, IIssueWithType>;
    transfer(data: ITransfer): TTransactionsApi3<Q, W, ITransferWithType>;
    reissue(data: IReissue): TTransactionsApi3<Q, W, IReissueWithType>;
    burn(data: IBurn): TTransactionsApi3<Q, W, IBurnWithType>;
    lease(data: ILease): TTransactionsApi3<Q, W, ILeaseWithType>;
    exchange(data: IExchange): TTransactionsApi3<Q, W, IExchangeWithType>;
    cancelLease(data: ICancelLease): TTransactionsApi3<Q, W, ICancelLeaseWithType>;
    alias(data: IAlias): TTransactionsApi3<Q, W, IAliasWithType>;
    massTransfer(data: IMassTransfer): TTransactionsApi3<Q, W, IMassTransferWithType>;
    data(data: IData): TTransactionsApi3<Q, W, IDataWithType>;
    sponsorship(data: ISponsorship): TTransactionsApi3<Q, W, ISponsorshipWithType>;
    setScript(data: ISetScript): TTransactionsApi3<Q, W, ISetScriptWithType>;
    setAssetScript(data: ISetAssetScript): TTransactionsApi3<Q, W, ISetAssetScriptWithType>;
    invoke(data: IInvoke): TTransactionsApi3<Q, W, IInvokeWithType>;
} & TActionsApi<[Q, W]>;

export type TTransactionsApi3<Q extends TTransactionParamWithType<TLong>, W extends TTransactionParamWithType<TLong>, E extends TTransactionParamWithType<TLong>> = {
    issue(data: IIssue): TTransactionsApi4<Q, W, E, IIssueWithType>;
    transfer(data: ITransfer): TTransactionsApi4<Q, W, E, ITransferWithType>;
    reissue(data: IReissue): TTransactionsApi4<Q, W, E, IReissueWithType>;
    burn(data: IBurn): TTransactionsApi4<Q, W, E, IBurnWithType>;
    lease(data: ILease): TTransactionsApi4<Q, W, E, ILeaseWithType>;
    exchange(data: IExchange): TTransactionsApi4<Q, W, E, IExchangeWithType>;
    cancelLease(data: ICancelLease): TTransactionsApi4<Q, W, E, ICancelLeaseWithType>;
    alias(data: IAlias): TTransactionsApi4<Q, W, E, IAliasWithType>;
    massTransfer(data: IMassTransfer): TTransactionsApi4<Q, W, E, IMassTransferWithType>;
    data(data: IData): TTransactionsApi4<Q, W, E, IDataWithType>;
    sponsorship(data: ISponsorship): TTransactionsApi4<Q, W, E, ISponsorshipWithType>;
    setScript(data: ISetScript): TTransactionsApi4<Q, W, E, ISetScriptWithType>;
    setAssetScript(data: ISetAssetScript): TTransactionsApi4<Q, W, E, ISetAssetScriptWithType>;
    invoke(data: IInvoke): TTransactionsApi4<Q, W, E, IInvokeWithType>;
} & TActionsApi<[Q, W, E]>;

export type TTransactionsApi4<Q extends TTransactionParamWithType<TLong>, W extends TTransactionParamWithType<TLong>, E extends TTransactionParamWithType<TLong>, R extends TTransactionParamWithType<TLong>> = {
    issue(data: IIssue): TTransactionsApi5<Q, W, E, R, IIssueWithType>;
    transfer(data: ITransfer): TTransactionsApi5<Q, W, E, R, ITransferWithType>;
    reissue(data: IReissue): TTransactionsApi5<Q, W, E, R, IReissueWithType>;
    burn(data: IBurn): TTransactionsApi5<Q, W, E, R, IBurnWithType>;
    lease(data: ILease): TTransactionsApi5<Q, W, E, R, ILeaseWithType>;
    exchange(data: IExchange): TTransactionsApi5<Q, W, E, R, IExchangeWithType>;
    cancelLease(data: ICancelLease): TTransactionsApi5<Q, W, E, R, ICancelLeaseWithType>;
    alias(data: IAlias): TTransactionsApi5<Q, W, E, R, IAliasWithType>;
    massTransfer(data: IMassTransfer): TTransactionsApi5<Q, W, E, R, IMassTransferWithType>;
    data(data: IData): TTransactionsApi5<Q, W, E, R, IDataWithType>;
    sponsorship(data: ISponsorship): TTransactionsApi5<Q, W, E, R, ISponsorshipWithType>;
    setScript(data: ISetScript): TTransactionsApi5<Q, W, E, R, ISetScriptWithType>;
    setAssetScript(data: ISetAssetScript): TTransactionsApi5<Q, W, E, R, ISetAssetScriptWithType>;
    invoke(data: IInvoke): TTransactionsApi5<Q, W, E, R, IInvokeWithType>;
} & TActionsApi<[Q, W, E, R]>;

export type TTransactionsApi5<Q extends TTransactionParamWithType<TLong>, W extends TTransactionParamWithType<TLong>, E extends TTransactionParamWithType<TLong>, R extends TTransactionParamWithType<TLong>, T extends TTransactionParamWithType<TLong>> = {
    issue(data: IIssue): TTransactionsApi6<Q, W, E, R, T, IIssueWithType>;
    transfer(data: ITransfer): TTransactionsApi6<Q, W, E, R, T, ITransferWithType>;
    reissue(data: IReissue): TTransactionsApi6<Q, W, E, R, T, IReissueWithType>;
    burn(data: IBurn): TTransactionsApi6<Q, W, E, R, T, IBurnWithType>;
    lease(data: ILease): TTransactionsApi6<Q, W, E, R, T, ILeaseWithType>;
    exchange(data: IExchange): TTransactionsApi6<Q, W, E, R, T, IExchangeWithType>;
    cancelLease(data: ICancelLease): TTransactionsApi6<Q, W, E, R, T, ICancelLeaseWithType>;
    alias(data: IAlias): TTransactionsApi6<Q, W, E, R, T, IAliasWithType>;
    massTransfer(data: IMassTransfer): TTransactionsApi6<Q, W, E, R, T, IMassTransferWithType>;
    data(data: IData): TTransactionsApi6<Q, W, E, R, T, IDataWithType>;
    sponsorship(data: ISponsorship): TTransactionsApi6<Q, W, E, R, T, ISponsorshipWithType>;
    setScript(data: ISetScript): TTransactionsApi6<Q, W, E, R, T, ISetScriptWithType>;
    setAssetScript(data: ISetAssetScript): TTransactionsApi6<Q, W, E, R, T, ISetAssetScriptWithType>;
    invoke(data: IInvoke): TTransactionsApi6<Q, W, E, R, T, IInvokeWithType>;
} & TActionsApi<[Q, W, E, R, T]>;

export type TTransactionsApi6<Q extends TTransactionParamWithType<TLong>, W extends TTransactionParamWithType<TLong>, E extends TTransactionParamWithType<TLong>, R extends TTransactionParamWithType<TLong>, T extends TTransactionParamWithType<TLong>, Y extends TTransactionParamWithType<TLong>> = {
    issue(data: IIssue): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    transfer(data: ITransfer): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    reissue(data: IReissue): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    burn(data: IBurn): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    lease(data: ILease): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    exchange(data: IExchange): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    cancelLease(data: ICancelLease): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    alias(data: IAlias): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    massTransfer(data: IMassTransfer): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    data(data: IData): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    sponsorship(data: ISponsorship): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    setScript(data: ISetScript): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    setAssetScript(data: ISetAssetScript): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
    invoke(data: IInvoke): TTransactionsApi7<Array<TTransactionParamWithType<TLong>>>
} & TActionsApi<Array<TTransactionParamWithType<TLong>>>;

export type TTransactionsApi7<T extends Array<TTransactionParamWithType>> = {
    issue(data: IIssue): TTransactionsApi7<T>
    transfer(data: ITransfer): TTransactionsApi7<T>
    reissue(data: IReissue): TTransactionsApi7<T>
    burn(data: IBurn): TTransactionsApi7<T>
    lease(data: ILease): TTransactionsApi7<T>
    exchange(data: IExchange): TTransactionsApi7<T>
    cancelLease(data: ICancelLease): TTransactionsApi7<T>
    alias(data: IAlias): TTransactionsApi7<T>
    massTransfer(data: IMassTransfer): TTransactionsApi7<T>
    data(data: IData): TTransactionsApi7<T>
    sponsorship(data: ISponsorship): TTransactionsApi7<T>
    setScript(data: ISetScript): TTransactionsApi7<T>
    setAssetScript(data: ISetAssetScript): TTransactionsApi7<T>
    invoke(data: IInvoke): TTransactionsApi7<T>
} & TActionsApi<Array<TTransactionParamWithType>>;
