interface ISearchForm {
  pageNum: number;
  pageSize: number;
  [propName: string]: any;
}
type Api = (form: ISearchForm) => Promise<any>;

const useSearchHook = () => {
  const searchForm = reactive<ISearchForm>({
    pageNum: 1,
    pageSize: 10,
  });
  const handleSearch = (callBack: Api) => {
    callBack(searchForm);
  };
  const clearSearch = () => {
    searchForm.pageNum = 1;
    searchForm.pageSize = 10;
  };
  return {
    searchForm,
    handleSearch,
    clearSearch,
  };
};

export {
  useSearchHook
}