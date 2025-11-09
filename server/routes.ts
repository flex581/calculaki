import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Currency conversion API endpoint
  app.get("/api/currency-rates", async (_req, res) => {
    try {
      // Using a free API to fetch current USD/BRL rates
      // For production, consider using a paid API with better rate limits
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      const data = await response.json();
      
      res.json({
        rates: {
          BRL: data.rates?.BRL || 5.0, // fallback to 5.0 if API fails
          USD: 1
        },
        lastUpdated: new Date().toISOString()
      });
    } catch (error) {
      // If the external API fails, return fallback rates
      res.json({
        rates: {
          BRL: 5.0,
          USD: 1
        },
        lastUpdated: new Date().toISOString(),
        fallback: true
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
