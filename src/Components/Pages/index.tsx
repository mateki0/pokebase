import React, { useState, useEffect, useCallback } from 'react';

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
  const allPages = Math.ceil(length / 12);
  const pages: Array<any> = [];
  const handleMulti = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setShowMultiple(true);
  };
  const renderPages = useCallback(
    (additionalPages: number) => {
      if (page > 1) {
        pages.push(
          <PageListItem key="prev" onClick={() => prevPage()}>
            <PrevPage />
          </PageListItem>
        );
      }
      if (page >= 3) {
        pages.push(
          <PageListItem
            key="1"
            onClick={(e) => choosePage(e)}
            style={
              page === 1 ? { color: '#e6001f', textDecoration: 'underline' } : { color: '#0424D9' }
            }
          >
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
            <PageListItem
              key={i}
              onClick={(e) => choosePage(e)}
              style={
                page === i
                  ? { color: '#e6001f', textDecoration: 'underline' }
                  : { color: '#0424D9' }
              }
            >
              {i}
            </PageListItem>
          );
        }
      } else {
        for (let i = 1; i <= page + additionalPages; i++) {
          pages.push(
            <PageListItem
              key={i}
              onClick={(e) => choosePage(e)}
              style={
                page === i
                  ? { color: '#e6001f', textDecoration: 'underline' }
                  : { color: '#0424D9' }
              }
            >
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
      }
    },
    [allPages, pages]
  );
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
      <PagesUl>{pages}</PagesUl>
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
