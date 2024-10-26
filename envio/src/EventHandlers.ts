/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  TetherToken,
  TetherToken_AddedBlackList,
  TetherToken_Approval,
  TetherToken_Deprecate,
  TetherToken_DestroyedBlackFunds,
  TetherToken_Issue,
  TetherToken_Params,
  TetherToken_Pause,
  TetherToken_Redeem,
  TetherToken_RemovedBlackList,
  TetherToken_Transfer,
  TetherToken_Unpause,
} from "generated";

TetherToken.AddedBlackList.handler(async ({ event, context }) => {
  const entity: TetherToken_AddedBlackList = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _user: event.params._user,
  };

  context.TetherToken_AddedBlackList.set(entity);
});

TetherToken.Approval.handler(async ({ event, context }) => {
  const entity: TetherToken_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.TetherToken_Approval.set(entity);
});

TetherToken.Deprecate.handler(async ({ event, context }) => {
  const entity: TetherToken_Deprecate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newAddress: event.params.newAddress,
  };

  context.TetherToken_Deprecate.set(entity);
});

TetherToken.DestroyedBlackFunds.handler(async ({ event, context }) => {
  const entity: TetherToken_DestroyedBlackFunds = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _blackListedUser: event.params._blackListedUser,
    _balance: event.params._balance,
  };

  context.TetherToken_DestroyedBlackFunds.set(entity);
});

TetherToken.Issue.handler(async ({ event, context }) => {
  const entity: TetherToken_Issue = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
  };

  context.TetherToken_Issue.set(entity);
});

TetherToken.Params.handler(async ({ event, context }) => {
  const entity: TetherToken_Params = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    feeBasisPoints: event.params.feeBasisPoints,
    maxFee: event.params.maxFee,
  };

  context.TetherToken_Params.set(entity);
});

TetherToken.Pause.handler(async ({ event, context }) => {
  const entity: TetherToken_Pause = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.TetherToken_Pause.set(entity);
});

TetherToken.Redeem.handler(async ({ event, context }) => {
  const entity: TetherToken_Redeem = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
  };

  context.TetherToken_Redeem.set(entity);
});

TetherToken.RemovedBlackList.handler(async ({ event, context }) => {
  const entity: TetherToken_RemovedBlackList = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _user: event.params._user,
  };

  context.TetherToken_RemovedBlackList.set(entity);
});

TetherToken.Transfer.handler(async ({ event, context }) => {
  const entity: TetherToken_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.TetherToken_Transfer.set(entity);
});

TetherToken.Unpause.handler(async ({ event, context }) => {
  const entity: TetherToken_Unpause = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.TetherToken_Unpause.set(entity);
});
