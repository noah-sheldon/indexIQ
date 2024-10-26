import assert from "assert";
import { 
  TestHelpers,
  CyberFiToken_Approval
} from "generated";
const { MockDb, CyberFiToken } = TestHelpers;

describe("CyberFiToken contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for CyberFiToken contract Approval event
  const event = CyberFiToken.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("CyberFiToken_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await CyberFiToken.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualCyberFiTokenApproval = mockDbUpdated.entities.CyberFiToken_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedCyberFiTokenApproval: CyberFiToken_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualCyberFiTokenApproval, expectedCyberFiTokenApproval, "Actual CyberFiTokenApproval should be the same as the expectedCyberFiTokenApproval");
  });
});
