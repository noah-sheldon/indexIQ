/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  CyberFiToken,
  CyberFiToken_Approval,
  CyberFiToken_OwnershipTransferred,
  CyberFiToken_Transfer,
} from "generated";

CyberFiToken.Approval.handler(async ({ event, context }) => {
  const entity: CyberFiToken_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.CyberFiToken_Approval.set(entity);
});

CyberFiToken.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: CyberFiToken_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.CyberFiToken_OwnershipTransferred.set(entity);
});

CyberFiToken.Transfer.handler(async ({ event, context }) => {
  const entity: CyberFiToken_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.CyberFiToken_Transfer.set(entity);
});
