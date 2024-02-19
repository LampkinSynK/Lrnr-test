import app from "./server.js";
import supertest from "supertest";
const request = supertest(app);

describe("Testing endpoints", () => {
  it("Checks get status of test endpoint", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("ello from backend ");
  });

  it("Checks get status of /ask endpoint", async () => {
    const response = await request.post("/ask").send({
      length: 5,
      topic: "javascript",
      expertise: "expert",
      style: "normal",
    });
    expect(response.status).toBe(200);
  });

  it("Checks get status of /grade endpoint", async () => {
    const response = await request.post("/grade").send({
      question: "How do you define a variable in JavaScript?",
      answer: "let x = 5;, var x = 5;, const x = 5;",
    });
    expect(response.status).toBe(200);
  });

  it("checks /ask endpoint prompt", async () => {
    // this will check app.js for the prompt
    const response = await request.post("/ask").send({
      length: 5,
      topic: "javascript",
      expertise: "beginner",
      style: "master oogway",
    });
    expect(response.text).toContain(`"role":"assistant"`);
  })

  it('checks for error for non-existent route', async () => {
    const response = await request.get('/testing-route')
    expect(response.status).toBe(404)
  } )
});

