import  { Page } from "playwright";

export class BasePage {
    constructor(protected page: Page) {}

    async goto(url:string){
        await this.page.goto(url);
    }

    
}