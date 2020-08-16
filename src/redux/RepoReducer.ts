import {GetReposType, ReposApi} from '../api/repos-api'
import {InferActionsType} from './store'
import {put, takeEvery, all} from 'redux-saga/effects'

const initialRepo = {
  id: 1296269,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
  name: 'Hello-World',
  full_name: 'octocat/Hello-World',
  owner: {
    login: 'octocat',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    gravatar_id: '',
    url: 'https://api.github.com/users/octocat',
    html_url: 'https://github.com/octocat',
    followers_url: 'https://api.github.com/users/octocat/followers',
    following_url: 'https://api.github.com/users/octocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false
  },
  private: false,
  html_url: 'https://github.com/octocat/Hello-World',
  description: 'This your first repo!',
  fork: false,
  url: 'https://api.github.com/repos/octocat/Hello-World',
  archive_url: 'http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}',
  assignees_url: 'http://api.github.com/repos/octocat/Hello-World/assignees{/user}',
  blobs_url: 'http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}',
  branches_url: 'http://api.github.com/repos/octocat/Hello-World/branches{/branch}',
  collaborators_url: 'http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}',
  comments_url: 'http://api.github.com/repos/octocat/Hello-World/comments{/number}',
  commits_url: 'http://api.github.com/repos/octocat/Hello-World/commits{/sha}',
  compare_url: 'http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}',
  contents_url: 'http://api.github.com/repos/octocat/Hello-World/contents/{+path}',
  contributors_url: 'http://api.github.com/repos/octocat/Hello-World/contributors',
  deployments_url: 'http://api.github.com/repos/octocat/Hello-World/deployments',
  downloads_url: 'http://api.github.com/repos/octocat/Hello-World/downloads',
  events_url: 'http://api.github.com/repos/octocat/Hello-World/events',
  forks_url: 'http://api.github.com/repos/octocat/Hello-World/forks',
  git_commits_url: 'http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}',
  git_refs_url: 'http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}',
  git_tags_url: 'http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}',
  git_url: 'git:github.com/octocat/Hello-World.git',
  issue_comment_url: 'http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}',
  issue_events_url: 'http://api.github.com/repos/octocat/Hello-World/issues/events{/number}',
  issues_url: 'http://api.github.com/repos/octocat/Hello-World/issues{/number}',
  keys_url: 'http://api.github.com/repos/octocat/Hello-World/keys{/key_id}',
  labels_url: 'http://api.github.com/repos/octocat/Hello-World/labels{/name}',
  languages_url: 'http://api.github.com/repos/octocat/Hello-World/languages',
  merges_url: 'http://api.github.com/repos/octocat/Hello-World/merges',
  milestones_url: 'http://api.github.com/repos/octocat/Hello-World/milestones{/number}',
  notifications_url: 'http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}',
  pulls_url: 'http://api.github.com/repos/octocat/Hello-World/pulls{/number}',
  releases_url: 'http://api.github.com/repos/octocat/Hello-World/releases{/id}',
  ssh_url: 'git@github.com:octocat/Hello-World.git',
  stargazers_url: 'http://api.github.com/repos/octocat/Hello-World/stargazers',
  statuses_url: 'http://api.github.com/repos/octocat/Hello-World/statuses/{sha}',
  subscribers_url: 'http://api.github.com/repos/octocat/Hello-World/subscribers',
  subscription_url: 'http://api.github.com/repos/octocat/Hello-World/subscription',
  tags_url: 'http://api.github.com/repos/octocat/Hello-World/tags',
  teams_url: 'http://api.github.com/repos/octocat/Hello-World/teams',
  trees_url: 'http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}',
  clone_url: 'https://github.com/octocat/Hello-World.git',
  mirror_url: 'git:git.example.com/octocat/Hello-World',
  hooks_url: 'http://api.github.com/repos/octocat/Hello-World/hooks',
  svn_url: 'https://svn.github.com/octocat/Hello-World',
  homepage: 'https://github.com',
  language: null,
  forks_count: 9,
  stargazers_count: 80,
  watchers_count: 80,
  size: 108,
  default_branch: 'master',
  open_issues_count: 0,
  is_template: true,
  topics: [
    'octocat',
    'atom',
    'electron',
    'api'
  ],
  has_issues: true,
  has_projects: true,
  has_wiki: true,
  has_pages: false,
  has_downloads: true,
  archived: false,
  disabled: false,
  visibility: 'public',
  pushed_at: '2011-01-26T19:06:43Z',
  created_at: '2011-01-26T19:01:12Z',
  updated_at: '2011-01-26T19:14:43Z',
  permissions: {
    admin: false,
    push: false,
    pull: true
  },
  template_repository: null,
  temp_clone_token: 'ABTLWHOULUVAXGTRYU7OC2876QJ2O',
  delete_branch_on_merge: true,
  subscribers_count: 42,
  network_count: 0,
  license: {
    key: 'mit',
    name: 'MIT License',
    spdx_id: 'MIT',
    url: 'https://api.github.com/licenses/mit',
    node_id: 'MDc6TGljZW5zZW1pdA=='
  }
}
export type InitialRepoType = typeof initialRepo

const initialState = {
  repositories: [] as Array<InitialRepoType>,
  org: '',
  loading: false,
  error: false,
  number_of_pages: 1,
  per_page: 10,
  current_page: 1,
  error_message: ''
}

type InitialStateType = typeof initialState

const repoReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'REPOS/SET_REPOS':
      return {...state, repositories: [], loading: true, error: false, number_of_pages: 0}
    case 'REPOS/SET_REPOS_SUCCESS':
      return {
        ...state, repositories: action.payload,
        loading: false, error: false,
        org: action.org,
        number_of_pages: action.number_of_pages,
        per_page: action.per_page,
        current_page: action.current_page
      }
    case 'REPOS/SET_REPOS_FAILED':
      return {...state, repositories: [], loading: false, error: true, number_of_pages: 0, error_message: action.error_message}
    default:
      return state
  }
}

export const actions = {
  setRepos: () => ({type: 'REPOS/SET_REPOS'} as const),
  setReposSuccess: (data: Array<InitialRepoType>, org: string,
                    number_of_pages: number, per_page: number, current_page: number) => ({
    type: 'REPOS/SET_REPOS_SUCCESS',
    payload: data, org: org, number_of_pages, per_page, current_page
  } as const),
  setReposFailed: (error_message: string) => ({type: 'REPOS/SET_REPOS_FAILED', error_message} as const),
  fetchRepos: (data: object, page: number) => ({type: 'FETCHED_REPOS', data, page} as const)
}

export function* watchGetReposSaga() {
  yield takeEvery<any>('FETCHED_REPOS', workerReposSaga)
}

type workerReposSagaType = {
  data: GetReposType
  type: string
  page: number
}

export function* workerReposSaga(payload: workerReposSagaType) {
  yield put(actions.setRepos())
  let {org, per_page, number_of_pages} = payload.data
  try {
    const repos = yield ReposApi.getRepos(org, per_page, payload.page)
    if (repos.headers.link) {
      if (repos.headers.link.includes('last')) {
        let link_array = repos.headers.link.match(new RegExp('next' + '(.*)' + 'last'))
        number_of_pages = link_array[1].match(/&page=(\d+).*$/)[1]
      }
    }
    yield put(actions.setReposSuccess(repos.data, org, number_of_pages, per_page, payload.page))


  } catch (error) {
    yield put(actions.setReposFailed(error.message))
  }
}



export function* rootReposSaga() {
  yield all([
    watchGetReposSaga()
  ])
}

type ActionsTypes = InferActionsType<typeof actions>

export default repoReducer



