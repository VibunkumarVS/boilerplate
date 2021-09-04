import {start} from "../src/server";
import express from "express";

jest.mock('express', () => {
    return require('jest-express');
  });

describe("server", () => {
    test("successfully start the express server", async () => {
        const app = await start();
        expect(app).toBeDefined();
    })
})
