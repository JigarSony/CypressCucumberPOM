// Prepare folder structure
const fs = require('fs-extra');
const dir = 'cucumber_report';

if (fs.existsSync(dir)){
    fs.removeSync(dir);
}
fs.mkdirSync(dir);

// Report configuration
const reporter = require('multiple-cucumber-html-reporter');
const options = {
    theme: 'bootstrap',
    jsonDir: 'cucumber_json/',
    //output: 'cucumber_json/html_report1.html',
    reportPath: 'cucumber_json/html_report1.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    openReportInBrowser: true,
    disableLog: true,
    pageTitle: 'DnT Infotech Report',
    reportName: 'DnT Custom Report',
    pageFooter: '<p>DnT Infotech Report</p></div>',
    displayDuration: true,
    durationInMS: false,
    hideMetadata: false,
    displayReportTime: true,
    metadata: {
        browser: {
            name: 'chrome',
            version: '87'
        },
        device: 'Local machine',
        platform: {
            name: 'MAC',
            version: '11.00'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'DnT Custom project'},
            {label: 'Release', value: '1.0'},
            {label: 'Cycle', value: '1'}
        ]
    }
};

// Generate report
reporter.generate(options);