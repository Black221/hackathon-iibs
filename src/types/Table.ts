export interface Data {
    [key: string]: string | number
}

export interface Column {
    sort: (data: Data[], sens: boolean, column: string) => any
    label: string
}