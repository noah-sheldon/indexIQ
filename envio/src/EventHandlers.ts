/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  FiatTokenV2_2,
  FiatTokenV2_2_Approval,
  FiatTokenV2_2_AuthorizationCanceled,
  FiatTokenV2_2_AuthorizationUsed,
  FiatTokenV2_2_Blacklisted,
  FiatTokenV2_2_BlacklisterChanged,
  FiatTokenV2_2_Burn,
  FiatTokenV2_2_MasterMinterChanged,
  FiatTokenV2_2_Mint,
  FiatTokenV2_2_MinterConfigured,
  FiatTokenV2_2_MinterRemoved,
  FiatTokenV2_2_OwnershipTransferred,
  FiatTokenV2_2_Pause,
  FiatTokenV2_2_PauserChanged,
  FiatTokenV2_2_RescuerChanged,
  FiatTokenV2_2_Transfer,
  FiatTokenV2_2_UnBlacklisted,
  FiatTokenV2_2_Unpause,
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

FiatTokenV2_2.Approval.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.FiatTokenV2_2_Approval.set(entity);
});

FiatTokenV2_2.AuthorizationCanceled.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_AuthorizationCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    authorizer: event.params.authorizer,
    nonce: event.params.nonce,
  };

  context.FiatTokenV2_2_AuthorizationCanceled.set(entity);
});

FiatTokenV2_2.AuthorizationUsed.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_AuthorizationUsed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    authorizer: event.params.authorizer,
    nonce: event.params.nonce,
  };

  context.FiatTokenV2_2_AuthorizationUsed.set(entity);
});

FiatTokenV2_2.Blacklisted.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_Blacklisted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _account: event.params._account,
  };

  context.FiatTokenV2_2_Blacklisted.set(entity);
});

FiatTokenV2_2.BlacklisterChanged.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_BlacklisterChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newBlacklister: event.params.newBlacklister,
  };

  context.FiatTokenV2_2_BlacklisterChanged.set(entity);
});

FiatTokenV2_2.Burn.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_Burn = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    burner: event.params.burner,
    amount: event.params.amount,
  };

  context.FiatTokenV2_2_Burn.set(entity);
});

FiatTokenV2_2.MasterMinterChanged.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_MasterMinterChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newMasterMinter: event.params.newMasterMinter,
  };

  context.FiatTokenV2_2_MasterMinterChanged.set(entity);
});

FiatTokenV2_2.Mint.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_Mint = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minter: event.params.minter,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.FiatTokenV2_2_Mint.set(entity);
});

FiatTokenV2_2.MinterConfigured.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_MinterConfigured = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minter: event.params.minter,
    minterAllowedAmount: event.params.minterAllowedAmount,
  };

  context.FiatTokenV2_2_MinterConfigured.set(entity);
});

FiatTokenV2_2.MinterRemoved.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_MinterRemoved = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldMinter: event.params.oldMinter,
  };

  context.FiatTokenV2_2_MinterRemoved.set(entity);
});

FiatTokenV2_2.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.FiatTokenV2_2_OwnershipTransferred.set(entity);
});

FiatTokenV2_2.Pause.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_Pause = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.FiatTokenV2_2_Pause.set(entity);
});

FiatTokenV2_2.PauserChanged.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_PauserChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newAddress: event.params.newAddress,
  };

  context.FiatTokenV2_2_PauserChanged.set(entity);
});

FiatTokenV2_2.RescuerChanged.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_RescuerChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newRescuer: event.params.newRescuer,
  };

  context.FiatTokenV2_2_RescuerChanged.set(entity);
});

FiatTokenV2_2.Transfer.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.FiatTokenV2_2_Transfer.set(entity);
});

FiatTokenV2_2.UnBlacklisted.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_UnBlacklisted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _account: event.params._account,
  };

  context.FiatTokenV2_2_UnBlacklisted.set(entity);
});

FiatTokenV2_2.Unpause.handler(async ({ event, context }) => {
  const entity: FiatTokenV2_2_Unpause = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.FiatTokenV2_2_Unpause.set(entity);
});

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
