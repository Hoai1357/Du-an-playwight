import {test} from '@playwright/test';
test(
    'Test login',
    async({page}) => {
await test.step('Truy cap trang',async()=>{

    await page.goto("https://material.playwrightvn.com/")
})


    })