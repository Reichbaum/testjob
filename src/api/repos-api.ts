import {instance} from './api'
import {AxiosResponse} from 'axios'

export type GetReposType = {
  org: string
  per_page: number
  page?: number
  current_page?: number
  number_of_pages: number
}

export const ReposApi = {
getRepos(org: string,
         per_page = 10,
         page = 1):Promise<AxiosResponse<any>> {
  return instance.get(`orgs/${org}/repos`, {
    params: {per_page, page}
  }).then(res => res)
}
}