import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
 
import dotenv from "dotenv";
 
dotenv.config();
 
export const test = base.extend<{ loginPage: LoginPage }>({
  loginPage: async ({ page }, use) => {
    const username = process.env.USER;
    const password = process.env.PASS;
 
    if (!username || !password) {
      throw new Error(
        `Missing environment variables: ${!username ? "LOGIN_USER" : ""} ${!password ? "LOGIN_PASS" : ""}`
      );
    }
 
    const loginPage = new LoginPage(page, username, password);
    await use(loginPage);
  }, 

  /* Nova klasa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  
  adminPage: async ({ page }, use) => {
    const adminPage = new AdminPage(page);
    await use(adminPage);
  },*/

});
 
export { expect };