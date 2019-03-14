// Generated by dts-bundle v0.7.3

export class Grid<T> {
    constructor(options: IGridOptions<T>);
    bindData: (data: T[], paginationInput?: IPaginationInput) => void;
    reRender: () => void;
    setColConfig: (colConfig: IColumn[]) => void;
    updateRows: (rows: T[]) => void;
    setOrder: (orderByList: IGridOrder[]) => void;
    destroy: () => void;
}

interface IGridOrder {
    colId: string;
    orderBy: GridOrderDirection;
}
export { IGridOrder };

export interface IPaginationInput {
    totalCount: number;
    pageSize: number;
    pageIndex: number;
    pageSizes: number[];
}

export interface IColumn {
    id: string;
    orderByCol?: string;
    type?: string;
    name: string;
    width: number;
    renderHybrid: boolean;
    hidden: boolean;
    locked: boolean;
    sortable: boolean;
    filterable: boolean;
    order: number;
    orderBy?: GridOrderDirection;
    showOnExcel?: boolean;
    excelname?: string;
    isTitleHybrid?: boolean;
}

export interface IGridOptions<T> {
    columns: IColumn[];
    keyColumn: string;
    hybridFunction: IRenderHybridDelegate<T>;
    onClickHeader: IHeaderClickDelegate;
    onClickFilter: IFilterClickDelegate;
    containerElement: HTMLElement | null;
    onSelect: ISelectDelegate<T>;
    onPageSearch: IPageSearchClickDelegate;
    chunkSize: number;
    animationTime: number;
    caption?: string;
    emptyValue?: string;
    showCaption?: boolean;
    summary?: string;
}

export enum GridOrderDirection {
    None = "None",
    Asc = "Asc",
    Desc = "Desc",
}

export type ISelectDelegate<T> = (selectedRows: T[], checked: boolean, all?: boolean) => void;

export type IFilterClickDelegate = (column: string, value: any, actionType: FilterActionType, type?: string) => void;

export type IHeaderClickDelegate = (column: string, direction: GridOrderDirection, orderByProxy?: string) => void;

export type IPageSearchClickDelegate = (pageSize: number, pageIndex: number) => void;

export type IRenderHybridDelegate<T> = (column: IColumn, row: T) => string;

export enum FilterActionType {
    Add = "Add",
    Minus = "Minus",
}

