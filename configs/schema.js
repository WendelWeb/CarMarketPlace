import { pgTable, serial, varchar, json } from "drizzle-orm/pg-core";

export const carListing = pgTable("carListing", {
  id: serial("id").primaryKey(),
  listingTitle: varchar("listingTitle").notNull(),
  tagline: varchar("tagline"),
  originalPrice: varchar("originalPrice"),
  sellingPrice: varchar("sellingPrice").notNull(),
  category: varchar("category").notNull(),
  condition: varchar("condition").notNull(),
  make: varchar("make").notNull(),
  model: varchar("model").notNull(),
  year: varchar("year").notNull(),
  driveType: varchar("driveType").notNull(),
  transmission: varchar("transmission").notNull(),
  fuelType: varchar("fuelType").notNull(),
  mileage: varchar("mileage").notNull(),
  engineSize: varchar("engineSize"),
  cylinder: varchar("cylinder").notNull(),
  color: varchar("color").notNull(),
  door: varchar("door").notNull(),
  vin: varchar("vin"),
  offerType: varchar("offerType").notNull(),
  listingDescription: varchar("listingDescription").notNull(),
  features: json("features")
});
