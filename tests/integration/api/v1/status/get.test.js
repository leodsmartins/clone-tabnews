test("GET to /api/v1/status should return status 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const parseUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parseUpdatedAt);

  const databaseVersionValue = responseBody.dependecies.database.version;
  expect(databaseVersionValue).toEqual("17.8");

  const databaseMaxConnectionValue =
    responseBody.dependecies.database.max_connections;
  expect(databaseMaxConnectionValue).toEqual(100);

  const openedConnectionsValue =
    responseBody.dependecies.database.opened_connections;
  expect(openedConnectionsValue).toEqual(1);
});
