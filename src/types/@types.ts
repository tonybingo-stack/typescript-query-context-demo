export interface Type_Car {
    name: string,
    model: string,
    price: number
}

export type Type_Cars = Type_Car[];

export interface Type_Header {
    field: string,
    filter?: boolean
}

export type Type_Headers = Type_Header[];

export interface Type_Fetch_Data {
    data?: Type_Cars,
    error: {
        message?: string,
    } | null,
    isError: boolean,
    isLoading: boolean
}

export interface Type_Chart_Options {
    chart: {
        type: string
    },
    title: {
        text: string
    },
    series: [
        {
            data: number[]
        }
    ]
}


