import assert from "assert";
import { 
  TestHelpers,
  TetherToken_AddedBlackList
} from "generated";
const { MockDb, TetherToken } = TestHelpers;

describe("TetherToken contract AddedBlackList event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for TetherToken contract AddedBlackList event
  const event = TetherToken.AddedBlackList.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("TetherToken_AddedBlackList is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await TetherToken.AddedBlackList.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualTetherTokenAddedBlackList = mockDbUpdated.entities.TetherToken_AddedBlackList.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedTetherTokenAddedBlackList: TetherToken_AddedBlackList = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      _user: event.params._user,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualTetherTokenAddedBlackList, expectedTetherTokenAddedBlackList, "Actual TetherTokenAddedBlackList should be the same as the expectedTetherTokenAddedBlackList");
  });
});
