export interface ScenarioObject {
    date: string,
    coveragePeriod: string,
    scenarioName: string,
    status: string,
    comments: string
}

export interface TableRows {
    fname: string,
    lname: string,
    uname: string,
}
export interface StatusObject {
    icon: string,
    label: string,
}
export interface StatusCollection {
    [status: string]: StatusObject
}

export const TopScenarios: ScenarioObject[] = [
    {
        date: '08/Dec/2020',
        coveragePeriod: '08/Dec/2020 - 31/Oct/2021',
        scenarioName: 'MRF 10 v37',
        status: 'optimized',
        comments: ''
    },
    {
        date: '08/Dec/2020',
        coveragePeriod: '08/Dec/2020 - 31/Oct/2021',
        scenarioName: 'MRF 10 v36',
        status: 'not_optimized',
        comments: ''
    },
    {
        date: '08/Dec/2020',
        coveragePeriod: '08/Dec/2020 - 31/Oct/2021',
        scenarioName: 'MRF 10 v36',
        status: 'optimized',
        comments: ''
    },
    {
        date: '08/Dec/2020',
        coveragePeriod: '08/Dec/2020 - 31/Oct/2021',
        scenarioName: 'MRF 10 v37',
        status: 'optimized',
        comments: ''
    },
    {
        date: '08/Dec/2020',
        coveragePeriod: '08/Dec/2020 - 31/Oct/2021',
        scenarioName: 'MRF 12 v4311',
        status: 'not_optimized',
        comments: ''
    },
    {
        date: '08/Dec/2020',
        coveragePeriod: '08/Dec/2020 - 31/Oct/2021',
        scenarioName: 'MRF 12 v439',
        status: 'optimized',
        comments: ''
    },
    {
        date: '08/Dec/2020',
        coveragePeriod: '08/Dec/2020 - 31/Oct/2021',
        scenarioName: 'MRF 12 v436',
        status: 'not_optimized',
        comments: ''
    },
    {
        date: '08/Dec/2020',
        coveragePeriod: '08/Dec/2020 - 31/Oct/2021',
        scenarioName: 'MRF 437',
        status: 'not_optimized',
        comments: ''
    },
]

export const StatusList : StatusCollection = {
    'not_optimized': {
        icon: 'danger',
        label: 'Not Optimized',
    },
    'optimized': {
        icon: 'success',
        label: 'Optimized',
    }
}

export const Employee : TableRows[] = [
    {
        fname: "Mark",
        lname: "Otto",
        uname: "@mdo",
    },
    {
        fname: "Jacob",
        lname: "Thornton",
        uname: "@fat",
    },
    {
        fname: "Larry",
        lname: "the Bird",
        uname: "@twitter",
    }
]