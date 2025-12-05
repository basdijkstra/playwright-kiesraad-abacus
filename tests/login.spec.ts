import { test, expect } from '@playwright/test';
import { AdminPage } from './pages/adminPage';
import { ElectionOverviewPage } from './pages/electionOverviewPage';

test('admin can login', async ({ page }) => {

    var adminPage = new AdminPage(page);
    await adminPage.open();
    await adminPage.loginAs('Beheerder 1');
    await adminPage.selectElection('Gemeenteraad 2026');

    await expect(new ElectionOverviewPage(page).header).toHaveText('Gemeenteraad 2026');
});
