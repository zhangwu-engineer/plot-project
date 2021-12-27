export interface StatusObject {
    icon: string,
    label: string,
}
export interface StatusCollection {
    [status: string]: StatusObject
}

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
