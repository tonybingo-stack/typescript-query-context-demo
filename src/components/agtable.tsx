import { createContext, useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import axios from 'axios';
import Box from '@mui/material/Box';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import { Type_Headers, Type_Fetch_Data, Type_Cars } from '../types/@types';

async function fetchRowData() {
    const { data }: { data: Type_Cars } = await axios.get('https://www.ag-grid.com/example-assets/row-data.json');
    return data;
}

const initTableData: Type_Cars = [];
const DataContext = createContext(initTableData);

const TableComponent = () => {
    const { data, error, isError, isLoading }: Type_Fetch_Data = useQuery(['tableData'], fetchRowData);

    if (isLoading) return <Box>Loading...</Box>;

    if (isError) return <Box>An error has occurred...{ error?.message }</Box>;

    return (
        <DataContext.Provider value = { data ? data: [] }>
            <TableContent />
        </DataContext.Provider>
    );
};

const TableContent = () => {
    // // Each Column Definition results in one Column.
    const columnDefs: Type_Headers = [
        {field: 'make', filter: true},
        {field: 'model', filter: true},
        {field: 'price'}
    ];

    const rowData = useContext(DataContext);
    return (
        <Box className="ag-theme-alpine" style={{ height: 400}}>
            <AgGridReact
                rowData={rowData} // Row Data for Rows
                columnDefs={columnDefs} // Column Defs for Columns
                animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                rowSelection='multiple' // Options - allows click selection of rows
            />
        </Box>
    );
}

export default TableComponent;