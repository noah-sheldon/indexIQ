import assert from "assert";
import { 
  TestHelpers,
  FiatTokenV2_2_Approval
} from "generated";
const { MockDb, FiatTokenV2_2 } = TestHelpers;

describe("FiatTokenV2_2 contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for FiatTokenV2_2 contract Approval event
  const event = FiatTokenV2_2.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("FiatTokenV2_2_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await FiatTokenV2_2.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualFiatTokenV2_2Approval = mockDbUpdated.entities.FiatTokenV2_2_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedFiatTokenV2_2Approval: FiatTokenV2_2_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualFiatTokenV2_2Approval, expectedFiatTokenV2_2Approval, "Actual FiatTokenV2_2Approval should be the same as the expectedFiatTokenV2_2Approval");
  });
});
