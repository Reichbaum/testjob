import React, {FC} from 'react'
import {Pagination} from '@material-ui/lab'

type PaginatorType = {
  onPageChanged: (event: object, page: number) => void
  number_of_pages: number
  current_page: number
}

const Paginator: FC<PaginatorType> = ({onPageChanged, number_of_pages, current_page}) => {
  return <Pagination onChange={onPageChanged} count={number_of_pages} page={current_page}
                     color="primary" />
}

export default Paginator