import React, { useState, useEffect } from 'react';

import NextPage from './styled/NextPage';
import PageListItem from './styled/PageListItem';
import PageSelectInput from './styled/PageSelectInput';
import PagesUl from './styled/PagesUl';
import PagesWrapper from './styled/PagesWrapper';
import PrevPage from './styled/PrevPage';

interface IPages {
  choosePage: (e: { currentTarget: { innerText: string } }) => void;
  changePage: (e: { currentTarget: { value: string }; key: string }) => void;
  prevPage: () => void;
  nextPage: () => void;
  length: number;
  page: number;
}
const Pages = ({ choosePage, changePage, prevPage, nextPage, length, page }: IPages) => {
  const [showMultiple, setShowMultiple] = useState(false);
  const [pageList, setPageList] = useState<Array<any>>();
  const allPages = Math.ceil(length / 12);
  const pages: Array<any> = [];
  const handleMulti = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setShowMultiple(true);
  };
  const renderPages = (additionalPages: number) => {
    if (page > 1) {
      pages.push(
        <PageListItem key="prev" onClick={() => prevPage()}>
          <PrevPage />
        </PageListItem>
      );
    }
    if (page >= 3) {
      pages.push(
        <PageListItem key="1" onClick={(e) => choosePage(e)} isActive={page === 1}>
          1
        </PageListItem>
      );
      pages.push(
        <PageListItem key="multi" onClick={(e) => handleMulti(e)}>
          ...
        </PageListItem>
      );
      for (let i = page; i <= page + additionalPages; i++) {
        pages.push(
          <PageListItem key={i} onClick={(e) => choosePage(e)} isActive={page === i}>
            {i}
          </PageListItem>
        );
      }
    } else {
      for (let i = 1; i <= page + additionalPages; i++) {
        pages.push(
          <PageListItem key={i} onClick={(e) => choosePage(e)} isActive={page === i}>
            {i}
          </PageListItem>
        );
      }
    }
    if (page < allPages) {
      pages.push(
        <PageListItem key="next" onClick={() => nextPage()}>
          <NextPage />
        </PageListItem>
      );
      setPageList(pages);
    }
  };
  useEffect(() => {
    setShowMultiple(false);

    if (page + 5 <= allPages) {
      renderPages(5);
    } else {
      renderPages(allPages - page);
    }
  }, [page, allPages]);

  return (
    <PagesWrapper>
      <PagesUl>{pageList}</PagesUl>
      <PageSelectInput
        type="number"
        min="1"
        max={allPages}
        showMultiple={showMultiple}
        onKeyPress={(e) => changePage(e)}
      />
    </PagesWrapper>
  );
};
export default Pages;
