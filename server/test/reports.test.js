import { ReportsService } from '../src/modules/reports/reports.service';

test('get stats', () => {
    let reportService = new ReportsService();
    reportService.getStats();
});